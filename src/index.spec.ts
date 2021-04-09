import expect from "expect";

import denormalizeTaxNumber from ".";

describe("denormalizeTaxNumber", () => {
  [
    { normalizedTaxNumber: null, result: null },
    { normalizedTaxNumber: "", result: null },
    { normalizedTaxNumber: "12345", result: null }, // incomplete tax number
    { normalizedTaxNumber: "7151081508156", result: null }, // not existing state
    {
      normalizedTaxNumber: "2893081508152",
      result: { taxState: "DE-BW", taxNumber: "93815/08152" },
    },
    {
      normalizedTaxNumber: "9181081508155",
      result: { taxState: "DE-BY", taxNumber: "181/815/08155" },
    },
    {
      normalizedTaxNumber: "1121081508150",
      result: { taxState: "DE-BE", taxNumber: "21/815/08150" },
    },
    {
      normalizedTaxNumber: "3048081508155",
      result: { taxState: "DE-BB", taxNumber: "048/815/08155" },
    },
    {
      normalizedTaxNumber: "2475081508152",
      result: { taxState: "DE-HB", taxNumber: "75 815 08152" },
    },
    {
      normalizedTaxNumber: "2202081508156",
      result: { taxState: "DE-HH", taxNumber: "02/815/08156" },
    },
    {
      normalizedTaxNumber: "2613081508153",
      result: { taxState: "DE-HE", taxNumber: "013 815 08153" },
    },
    {
      normalizedTaxNumber: "4079081508151",
      result: { taxState: "DE-MV", taxNumber: "079/815/08151" },
    },
    {
      normalizedTaxNumber: "2324081508151",
      result: { taxState: "DE-NI", taxNumber: "24/815/08151" },
    },
    {
      normalizedTaxNumber: "5133081508159",
      result: { taxState: "DE-NW", taxNumber: "133/8150/8159" },
    },
    {
      normalizedTaxNumber: "2722081508154",
      result: { taxState: "DE-RP", taxNumber: "22/815/08154" },
    },
    {
      normalizedTaxNumber: "1010081508182",
      result: { taxState: "DE-SL", taxNumber: "010/815/08182" },
    },
    {
      normalizedTaxNumber: "3201012312340",
      result: { taxState: "DE-SN", taxNumber: "201/123/12340" },
    },
    {
      normalizedTaxNumber: "3101081508154",
      result: { taxState: "DE-ST", taxNumber: "101/815/08154" },
    },
    {
      normalizedTaxNumber: "2129081508158",
      result: { taxState: "DE-SH", taxNumber: "29/815/08158" },
    },
    {
      normalizedTaxNumber: "4151081508156",
      result: { taxState: "DE-TH", taxNumber: "151/815/08156" },
    },
  ].forEach(({ normalizedTaxNumber, result }) => {
    it(`should return ${JSON.stringify(
      result
    )} for ${normalizedTaxNumber}`, () => {
      expect(denormalizeTaxNumber(normalizedTaxNumber)).toEqual(result);
    });
  });
});
