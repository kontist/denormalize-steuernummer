export type TaxNumberSeparators = [string, string];
export interface TaxState {
  value: string;
  label: string;
  normalizedTaxNumberPrefix: string;
  taxOfficeNumberPrefix?: string;
  customSeparators?: TaxNumberSeparators;
  districtNumberLength?: number;
}

export const NORMALIZED_TAX_NUMBER_LENGTH = 13;
export const TAX_OFFICE_NUMBER_LENGTH = 4;
export const DISTRICT_NUMBER_START_INDEX = TAX_OFFICE_NUMBER_LENGTH + 1;
export const DISTRICT_NUMBER_DEFAULT_LENGTH = 3;
export const DEFAULT_TAX_NUMBER_SEPARATORS: TaxNumberSeparators = ["/", "/"];
export const TAX_STATES: TaxState[] = [
  {
    value: "DE-BW",
    label: "Baden-Württemberg",
    normalizedTaxNumberPrefix: "28",
    customSeparators: ["", "/"],
  },
  {
    value: "DE-BY",
    label: "Bayern",
    normalizedTaxNumberPrefix: "9",
  },
  {
    value: "DE-BE",
    label: "Berlin",
    normalizedTaxNumberPrefix: "11",
  },
  {
    value: "DE-BB",
    label: "Brandenburg",
    normalizedTaxNumberPrefix: "30",
    taxOfficeNumberPrefix: "0",
  },
  {
    value: "DE-HB",
    label: "Bremen",
    normalizedTaxNumberPrefix: "24",
    customSeparators: [" ", " "],
  },
  {
    value: "DE-HH",
    label: "Hamburg",
    normalizedTaxNumberPrefix: "22",
  },
  {
    value: "DE-HE",
    label: "Hessen",
    normalizedTaxNumberPrefix: "26",
    taxOfficeNumberPrefix: "0",
    customSeparators: [" ", " "],
  },
  {
    value: "DE-MV",
    label: "Mecklenburg-Vorpommern",
    normalizedTaxNumberPrefix: "40",
    taxOfficeNumberPrefix: "0",
  },
  {
    value: "DE-NI",
    label: "Niedersachsen",
    normalizedTaxNumberPrefix: "23",
  },
  {
    value: "DE-NW",
    label: "Nordrhein-Westfalen",
    normalizedTaxNumberPrefix: "5",
    districtNumberLength: 4,
  },
  {
    value: "DE-RP",
    label: "Rheinland-Pfalz",
    normalizedTaxNumberPrefix: "27",
  },
  {
    value: "DE-SL",
    label: "Saarland",
    normalizedTaxNumberPrefix: "10",
    taxOfficeNumberPrefix: "0",
  },
  {
    value: "DE-SN",
    label: "Sachsen",
    normalizedTaxNumberPrefix: "32",
    taxOfficeNumberPrefix: "2",
  },
  {
    value: "DE-ST",
    label: "Sachsen-Anhalt",
    normalizedTaxNumberPrefix: "31",
    taxOfficeNumberPrefix: "1",
  },
  {
    value: "DE-SH",
    label: "Schleswig-Holstein",
    normalizedTaxNumberPrefix: "21",
  },
  {
    value: "DE-TH",
    label: "Thüringen",
    normalizedTaxNumberPrefix: "41",
    taxOfficeNumberPrefix: "1",
  },
];
