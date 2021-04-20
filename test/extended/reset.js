import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, inputValues4Reset} from '../../helpers/methods';
import exp from '../../data/expected.json';

describe('RESET TESTS SUITE', () => {

    before('Open app', () => {
        browser.url('');
    });

        it('TC-179 The button is enabled once story is created', () => {
            inputValues4(name.default, gender.it, age.default, story.comedy);
            $(sel.submit).click();
            let tryAgainBtn = $(sel.tryAgain).isEnabled();
            expect(tryAgainBtn).toEqual(true);
        });

        it('TC-180 Reset button label is correct', () => {
            inputValues4(name.default, gender.it, age.default, story.comedy);
            $(sel.submit).click();
            let reset = $(sel.tryAgain).getText();
            expect(reset).toEqual(exp.resetText);
        });

        it('TC-181 "Try again" button induces main page with empty "Hero\'s name" field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            let placeholderHeroName = $(sel.name).getAttribute(sel.namePlaceholderAttr);
            expect(placeholderHeroName).toEqual(exp.namePlaceholder);
        });

        it('TC-181a "Try again" button induces main page with empty "Hero\'s age" field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual('Hero\'s age');
        });

        it('TC-181b "Try again" button induces main page with empty "Type of the story" field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            let storyPlaceholder = $(sel.storyType).getText();
            expect(storyPlaceholder).toEqual(exp.storyPlaceHolder);
        });

        it('TC-182 \'reload this page\' erases data from Hero\'s name field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            browser.refresh();
            let placeholderHeroName = $(sel.name).getAttribute(sel.namePlaceholderAttr);
            expect(placeholderHeroName).toEqual(exp.namePlaceholder);
        });

        it('TC-182a \'reload this page\' erases data from Hero\'s age field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            browser.refresh();
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual('Hero\'s age');
        });

        it('TC-182b \'reload this page\' erases data from Type of the story field', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            browser.refresh();
            let storyPlaceholder = $(sel.storyType).getText();
            expect(storyPlaceholder).toEqual(exp.storyPlaceHolder);
        });

        it('TC-183 The "Create!" button is disabled after user presses "Try again!"', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-184 The "Create!" button is displayed after a user presses "Try again!"', () => {
            inputValues4Reset(name.default, gender.it, age.default, story.comedy);
            let submitBtn = $(sel.submit).isDisplayed();
            expect(submitBtn).toEqual(true);
        });
    });

    afterEach('Refresh page', () => {
        browser.refresh();
});
