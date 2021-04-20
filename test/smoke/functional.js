import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('SMOKE TESTS SUITE', function () {

  before('Open app', function () {
    browser.url('');
  });

  describe('Required fields and Story created:', function () {

    it('TC-026 Submit button is enabled after fields 1...4 filled with valid values', function () {
      inputValues4(name.default, gender.it, age.default, story.comedy);
      let submitBtn = $(sel.submit).isEnabled();
      expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
      browser.refresh();
      inputValues4(name.default, gender.it, age.default, story.comedy);
      $(sel.submit).click();
      let tryAgainBtn = $(sel.tryAgain).isDisplayed();
      expect(tryAgainBtn).toEqual(true);
    });
  });
});
