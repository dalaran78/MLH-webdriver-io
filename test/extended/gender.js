import elements from "../../data/selectors";
import {gender} from "../../data/testData";
import {checkSwitchGender} from "../../helpers/methods";

describe('Gender field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Positive cases', function (){

        it('TC-053 Button "he" is enabled', function () {
            let elem = $$(elements.requiredLabel)[gender.he].isEnabled();
            expect(elem).toEqual(true);
        });

        it('TC-054 Button "she" is enabled', function () {
            let elem = $$(elements.requiredLabel)[gender.she].isEnabled();
            expect(elem).toEqual(true);
        });

        it('TC-055 Button "it" is enabled', function () {
            let elem = $$(elements.requiredLabel)[gender.it].isEnabled();
            expect(elem).toEqual(true);
        });

        it('TC-056_1 User selected button "he"', function () {
            $$(elements.radioButtons)[gender.he].click();
            const elem = $(elements.genderChecked).isDisplayed();
            expect(elem).toEqual(true);
        });

        it('TC-056_2 If selected "he", button "she" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.she];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-056_3 If selected "he", button "it" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.it];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-057_1 User selected button "she"', function () {
            $$(elements.radioButtons)[gender.she].click();
            const elem = $(elements.genderChecked).isDisplayed();
            expect(elem).toEqual(true);
        });

        it('TC-057_2 If selected "she", button "he" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.he];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-057_3 If selected "she", button "it" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.it];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-058_1 User selected button "it"', function () {
            $$(elements.radioButtons)[gender.it].click();
            const elem = $(elements.genderChecked).isDisplayed();
            expect(elem).toEqual(true);
        });

        it('TC-058_2 If selected "it", button "he" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.he];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-058_3 If selected "it", button "she" is not selected', function () {
            const elem =$$(elements.genderElem)[gender.she];
            expect(elem).not.toHaveElementClass(elements.genderSelected);
        });

        it('TC-059 User can switch the option: he -> she', function () {
            const elem = checkSwitchGender(gender.he, gender.she);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });

        it('TC-060 User can switch the option: he -> it', function () {
            const elem = checkSwitchGender(gender.he, gender.it);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });

        it('TC-061 User can switch the option: she -> it', function () {
            const elem = checkSwitchGender(gender.she, gender.it);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });

        it('TC-062 User can switch the option: she -> he', function () {
            const elem = checkSwitchGender(gender.she, gender.he);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });

        it('TC-063 User can switch the option: it -> he', function () {
            const elem = checkSwitchGender(gender.it, gender.he);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });

        it('TC-064 User can switch the option: it -> she', function () {
            const elem = checkSwitchGender(gender.it, gender.she);
            expect(elem).toHaveElementClass(elements.genderSelected);
        });
    });
});
