import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputStoryType7, inputValuesExcStory} from '../../helpers/methods';
import exp from "../../data/expected.json";

describe('Story field suit', () => {

  before('Open app', () => {
    browser.url('');
  });

  afterEach('Refresh page', () => {
    browser.refresh();
  });

  describe('Placeholder:', () => {

    it('TC-090 Placeholder is correct', () => {
      let storyPlaceholder = $(sel.storyType).getText();
      expect(storyPlaceholder).toEqual(exp.storyPlaceHolder);
    });
  });

  describe('Positive tests:', () => {

    it('TC-091 The field is a dropdown', () => {
      $(sel.storyType).click();
      let storyDropdown = $(sel.storyDropdown).waitForDisplayed();
      expect(storyDropdown).toEqual(true);
    });

    it('TC-092 User can choose one of the types "Comedy" ', () => {
      inputStoryType7(story.comedy);
      let storyComedyIsField = $(sel.storyType).getText();
      expect(storyComedyIsField).toEqual(exp.storyComedy);
    });

    it('TC-093 User can choose one of the types "Overcoming the Monster" ', () => {
      inputStoryType7(story.overcomingTheMonster);
      let storyOvercomingTheMonsterIsField = $(sel.storyType).getText();
      expect(storyOvercomingTheMonsterIsField).toEqual(exp.storyOvercomingTheMonster);
    });

    it('TC-094 User can choose one of the types "Rebirth" ', () => {
      inputStoryType7(story.rebirth);
      let storyRebirthIsField = $(sel.storyType).getText();
      expect(storyRebirthIsField).toEqual(exp.storyRebirth);
    });

    it('TC-095 User can choose one of the types "Quest" ', () => {
      inputStoryType7(story.quest);
      let storyQuestIsField = $(sel.storyType).getText();
      expect(storyQuestIsField).toEqual(exp.storyQuest);
    });

    it('TC-096 User can choose one of the types "Journey and Return" ', () => {
      inputStoryType7(story.journeyAndReturn);
      let storyJourneyAndReturnIsField = $(sel.storyType).getText();
      expect(storyJourneyAndReturnIsField).toEqual(exp.storyJourneyAndReturn);
    });

    it('TC-097 User can choose one of the types "Rags and Riches" ', () => {
      inputStoryType7(story.ragsAndRiches);
      let storyRagsAndRichesIsField = $(sel.storyType).getText();
      expect(storyRagsAndRichesIsField).toEqual(exp.storyRagsAndRiches);
    });

    it('TC-098 User can choose one of the types "Tragedy" ', () => {
      inputStoryType7(story.tragedy);
      let storyTragedyIsField = $(sel.storyType).getText();
      expect(storyTragedyIsField).toEqual(exp.storyTragedy);
    });

    it('TC-099 User can choose one of the types "Quest change to Tragedy" ', () => {
      inputStoryType7(story.quest);
      inputStoryType7(story.tragedy);
      let storyComedyIsField = $(sel.storyType).getText();
      expect(storyComedyIsField).toEqual(exp.storyTragedy);
    });

    it('TC-100 After the value is chosen the dropdown is collapsed', () => {
      inputStoryType7(story.comedy);
      let storyDropdown = $(sel.storyDropdown).isFocused();
      expect(storyDropdown).toEqual(false);
    });
  });

  describe('Negative tests:', () => {

    it('TC-102 Type is not selected', () => {
      inputValuesExcStory(name.default, gender.it, age.default)
      let submitButton = $(sel.submit).isClickable();
      expect(submitButton).toEqual(false);
    });
  });
});
