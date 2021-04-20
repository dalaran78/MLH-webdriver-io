import sel from '../../data/selectors';
import {name, gender, age, story, card} from '../../data/testData';
import {inputValues4, createStoryNoImage, checkNameInStory, checkValueInStory, checkAgeInStory} from '../../helpers/methods';
import exp from '../../data/expected.json';

describe('SUBMIT BUTTON SUITE', () => {

  before('Open app', () => {
    browser.url('');
  });

  afterEach('Refresh page', () => {
    browser.refresh();
  });

  describe('Positive tests:', () => {

    it('TC-162 Submit button is disabled by default', () => {
      const submitBtn = $(sel.submit).isEnabled();
      expect(submitBtn).toEqual(false);
    });

    it('TC-162a Story header exists', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const header = $(sel.header).isDisplayed();
      expect(header).toEqual(true);
    });

    it('TC-163 Story header is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const header = $(sel.header).getText();
      expect(header).toEqual(exp.header);
    });

    it('TC-163a Story title exists', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const title = $(sel.storyCardTitle).isDisplayed();
      expect(title).toEqual(true);
    });

    it('TC-164 Story title is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const title = $(sel.storyCardTitle).getText();
      expect(title).toEqual(exp.cardTitle + name.default);
    });

    it('TC-165 Story body exists', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const body = $$(sel.storyCardText)[card.body].isDisplayed();
      expect(body).toEqual(true);
    });

    it('TC-165a Story moral exists', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const moral = $$(sel.storyCardText)[card.moral].isDisplayed();
      expect(moral).toEqual(true);
    });

    it('TC-186 Story moral is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const moral = $$(sel.storyCardText)[card.moral].getText();
      expect(moral).toEqual(exp.cardMoral);
    });

    it('TC-166 Hero\'s name in the story is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const result = checkNameInStory(name.default, card.nameIndex, card.body);
      expect(result).toEqual(name.default);
    });

    it('TC-167 Hero\'s gender (he) in the story is correct', () => {
      createStoryNoImage(name.default, gender.he, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounHe, card.body);
      expect(result).toEqual(exp.cardGenderHe);
    });

    it('TC-192 Hero\'s gender pronoun (his) in the story is correct', () => {
      createStoryNoImage(name.default, gender.he, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounHis, card.body);
      expect(result).toEqual(exp.cardGenderHis);
    });

    it('TC-168 Hero\'s gender (it) in the story is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounIt, card.body);
      expect(result).toEqual(exp.cardGenderIt);
    });

    it('TC-193 Hero\'s gender pronoun (its) in the story is correct', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounIts, card.body);
      expect(result).toEqual(exp.cardGenderIts);
    });

    it('TC-169 Hero\'s gender (she) in the story is correct', () => {
      createStoryNoImage(name.default, gender.she, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounShe, card.body);
      expect(result).toEqual(exp.cardGenderShe);
    });

    it('TC-194 Hero\'s gender pronoun (her) in the story is correct', () => {
      createStoryNoImage(name.default, gender.she, age.default, story.comedy);
      const result = checkValueInStory(gender.pronounHer, card.body);
      expect(result).toEqual(exp.cardGenderHer);
    });

    it('TC-170 Hero\'s age in the story is correct', () => {
      createStoryNoImage(name.default, gender.it, age.valueNine, story.comedy);
      const result = checkAgeInStory(age.valueNine, card.body);
      expect(result).toEqual(exp.ageZeroTrimmed);
    });

    it('TC-195 Word "years" in the story is correct if age > 1', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const result = checkValueInStory(card.years, card.body);
      expect(result).toEqual(exp.cardYears);
    });

    /* commented until bugfix

    it('TC-196 Word "year(s)" in the story is correct if age = 1', () => {
      createStoryNoImage(name.default, gender.it, age.min, story.comedy);
      const result = checkValueInStory(card.year, card.body);
      expect(result).toEqual(exp.cardYear);
    });

     */

    // TC-171 ... TC-176 are not applicable since only Comedy story generated

    it('TC-177 Story type is comedy', () => {
      createStoryNoImage(name.default, gender.it, age.default, story.comedy);
      const title = $(sel.storyCardTitle);
      expect(title).toHaveTextContaining(exp.cardTitle);
    });

  });

  describe('Negative tests:', () => {

    it('TC-197 Creating story with invalid name', () => {
      inputValues4(name.letters71, gender.it, age.default, story.comedy);
      const submitBtn = $(sel.submit).isEnabled();
      expect(submitBtn).toEqual(false);
    });

    it('TC-198 Creating story with invalid age', () => {
      inputValues4(name.default, gender.it, age.ageZero, story.comedy);
      const submitBtn = $(sel.submit).isEnabled();
      expect(submitBtn).toEqual(false);
    });

  });

});
