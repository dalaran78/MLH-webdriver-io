import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, inputNameNoErr, inputNameErr, inputNameDelNoErr, inputNameDelErr} from '../../helpers/methods';
import exp from '../../data/expected.json';

describe('NAME FIELD SUITE', () => {

  before('Open app', () => {
    browser.url('');
  });

  afterEach('Refresh page', () => {
    browser.refresh();
  });

  describe('Placeholder:', () => {

    it('TC-028 Name field placeholder = "Hero\'s name"', () => {
      const placeholder = $(sel.name).getAttribute(sel.namePlaceholderAttr);
      expect(placeholder).toEqual(exp.namePlaceholder);
    });

  });

  describe('Positive tests:', () => {

    it('TC-029 Name field accepts one letter', () => {
      const result = inputNameNoErr(name.oneLetter);
      expect(result).toEqual(true);
    });

    it('TC-030 Name field accepts one digit', () => {
      const result = inputNameNoErr(name.oneDigit);
      expect(result).toEqual(true);
    });

    it('TC-031 Name field accepts one special symbol', () => {
      const result = inputNameNoErr(name.oneSpecialSymbol);
      expect(result).toEqual(true);
    });

    it('TC-032 Name field accepts one space', () => {
      const result = inputNameNoErr(name.oneSpace);
      expect(result).toEqual(true);
    });

    it('TC-033 Name field accepts letters', () => {
      const result = inputNameNoErr(name.letters);
      expect(result).toEqual(true);
    });

    it('TC-034 Name field accepts digits', () => {
      const result = inputNameNoErr(name.digits);
      expect(result).toEqual(true);
    });

    it('TC-035 Name field accepts special symbols', () => {
      const result = inputNameNoErr(name.specialSymbols);
      expect(result).toEqual(true);
    });

    it('TC-036 Name field accepts spaces', () => {
      const result = inputNameNoErr(name.spaces);
      expect(result).toEqual(true);
    });

    it('TC-037 Name field accepts uppercase and lowercase letters', () => {
      const result = inputNameNoErr(name.lettersUpperLower);
      expect(result).toEqual(true);
    });

    it('TC-038 Name field accepts letters with spaces', () => {
      const result = inputNameNoErr(name.lettersWithSpaces);
      expect(result).toEqual(true);
    });

    it('TC-039 Name field accepts non-English (Russian) letters', () => {
      const result = inputNameNoErr(name.lettersNonEnglish);
      expect(result).toEqual(true);
    });

    it('TC-040 Name field input can be partially deleted', () => {
      const result = inputNameDelNoErr(name.default, name.symbolsToDelete);
      expect(result).toEqual(true);
    });

    it('TC-041 Name field accepts xml code', () => {
      const result = inputNameNoErr(name.xmlCode);
      expect(result).toEqual(true);
    });

  });

  describe('Corner tests:', () => {

    it('TC-042 Name field accepts 70 letters', () => {
      const result = inputNameNoErr(name.letters70);
      expect(result).toEqual(true);
    });

    it('TC-043 Name field accepts 70 digits', () => {
      const result = inputNameNoErr(name.digits70);
      expect(result).toEqual(true);
    });

    it('TC-044 Name field accepts 70 special symbols', () => {
      const result = inputNameNoErr(name.specialSymbols70);
      expect(result).toEqual(true);
    });

    it('TC-045 Name field accepts 70 spaces', () => {
      const result = inputNameNoErr(name.spaces70);
      expect(result).toEqual(true);
    });

    it('TC-046 Name field accepts 70 letters, digits, special symbols, and spaces', () => {
      const result = inputNameNoErr(name.mixed70);
      expect(result).toEqual(true);
    });

  });

  describe('Negative tests:', () => {

    it('TC-047 Name field is empty', () => {
      inputValues4(name.empty, gender.it, age.default, story.comedy);
      const submitBtn = $(sel.submit).isEnabled();
      expect(submitBtn).toEqual(false);
    });

    it('TC-048 Name field input can be fully deleted', () => {
      const result = inputNameDelErr(name.default, name.default.length);
      expect(result).toEqual(exp.errorRequired);
    });

    it('TC-049 Name field doesn\'t accept 71 special symbol', () => {
      const result = inputNameErr(name.specialSymbols71);
      expect(result).toEqual(exp.error70max);
    });

    it('TC-050 Name field doesn\'t accept 71 letter', () => {
      const result = inputNameErr(name.letters71);
      expect(result).toEqual(exp.error70max);
    });

    it('TC-051 Name field doesn\'t accept 71 digit', () => {
      const result = inputNameErr(name.digits71);
      expect(result).toEqual(exp.error70max);
    });

    it('TC-052 Name field doesn\'t accept 71 space', () => {
      const result = inputNameErr(name.spaces71);
      expect(result).toEqual(exp.error70max);
    });

  });

});
