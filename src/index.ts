import {
  DEFAULT_TAX_NUMBER_SEPARATORS,
  DISTRICT_NUMBER_DEFAULT_LENGTH,
  DISTRICT_NUMBER_START_INDEX,
  NORMALIZED_TAX_NUMBER_LENGTH,
  TAX_OFFICE_NUMBER_LENGTH,
  TAX_STATES,
} from "./constants";

interface DenormalizedTaxNumber {
  taxState: string;
  taxNumber: string;
}

// Return tax state and regional tax number from normalized tax number format.
// It does opposite to "normalize-steuernummer" library.
// Example: "1121081508150" => { taxState: "DE-BE", taxNumber: "21/815/08150" }
// eslint-disable-next-line max-lines-per-function
const denormalizeTaxNumber = (
  normalizedTaxNumber: string | null
): DenormalizedTaxNumber | null => {
  if (
    !normalizedTaxNumber ||
    normalizedTaxNumber.length !== NORMALIZED_TAX_NUMBER_LENGTH
  ) {
    return null;
  }

  const taxState = TAX_STATES.find(({ normalizedTaxNumberPrefix: taxNumberPrefix }) =>
    normalizedTaxNumber.startsWith(taxNumberPrefix)
  );

  if (!taxState) {
    return null;
  }

  // Example 1:
  // normalizedTaxNumber: "1121081508150"
  // taxState:
  //   - value: "DE-BE",
  //   - label: "Berlin",
  //   - normalizedTaxNumberPrefix: "11",
  // taxOfficeNumberSuffix: "21"
  // districtNumber: "815"
  // personalNumberAndCheckDigit: "08150"
  // result:
  //   - taxState: "DE-BE"
  //   - taxNumber: "21/815/08150"

  // Example 2:
  // normalizedTaxNumber: "2613081508153"
  // taxState:
  //   - value: "DE-HE"
  //   - label: "Hessen"
  //   - normalizedTaxNumberPrefix: "26"
  //   - taxOfficeNumberPrefix: "0"
  //   - customSeparators: [" ", " "]
  // taxOfficeNumberSuffix: "13"
  // districtNumber: "815"
  // personalNumberAndCheckDigit: "08153"
  // result:
  //   - taxState: "DE-HE"
  //   - taxNumber: "013 815 08153"

  // Example 3:
  // normalizedTaxNumber: "5133081508159"
  // taxState:
  //   - value: "DE-NW"
  //   - label: "Nordrhein-Westfalen"
  //   - normalizedTaxNumberPrefix: "5"
  //   - districtNumberLength: 4
  // taxOfficeNumberSuffix: "133"
  // districtNumber: "8150"
  // personalNumberAndCheckDigit: "8159"
  // result:
  //   - taxState: "DE-NW"
  //   - taxNumber: "133/8150/8159"

  const {
    taxOfficeNumberPrefix = "",
    normalizedTaxNumberPrefix,
    districtNumberLength = DISTRICT_NUMBER_DEFAULT_LENGTH,
  } = taxState;

  const taxOfficeNumberStartIndex = normalizedTaxNumberPrefix.length;
  const taxOfficeNumberSuffix = normalizedTaxNumber.slice(
    taxOfficeNumberStartIndex,
    TAX_OFFICE_NUMBER_LENGTH
  );

  const districtNumberEndIndex =
    DISTRICT_NUMBER_START_INDEX + districtNumberLength;
  const districtNumber = normalizedTaxNumber.slice(
    DISTRICT_NUMBER_START_INDEX,
    districtNumberEndIndex
  );

  const personalNumberAndCheckDigit = normalizedTaxNumber.slice(
    districtNumberEndIndex
  );

  const [separator1, separator2] =
    taxState.customSeparators || DEFAULT_TAX_NUMBER_SEPARATORS;

  const taxNumber = [
    taxOfficeNumberPrefix,
    taxOfficeNumberSuffix,
    separator1,
    districtNumber,
    separator2,
    personalNumberAndCheckDigit,
  ].join("");

  return {
    taxState: taxState.value,
    taxNumber,
  };
};

export default denormalizeTaxNumber;
