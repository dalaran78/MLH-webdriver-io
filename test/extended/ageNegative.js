import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {age, gender, name, story} from '../../data/testData';
import {inputValues4, isTrimmed} from '../../helpers/methods';

describe('AGE FIELD SUITE', () => {

    before('Open app', () => {
        browser.url('');
    });

    describe('Negative cases:', () => {

        it('TC-076 Error message should appears when input value is more than 12 digits', () => {
            $(sel.age).setValue(age.max);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-077 Age field should not accept letter characters', () => {
            $(sel.age).setValue(age.valueEwq);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-078 Age field should not accept special character symbols', () => {
            $(sel.age).setValue(age.valueAt);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-079 Age field should not accept punctuation marks', () => {
            $(sel.age).setValue(age.valueDot);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-080 Age field should not accept space symbol only', () => {
            $(sel.age).setValue(age.valueSpace);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-081 Age field should not accept the characters used as the thousands separator', ()=> {
            $(sel.age).setValue(age.valueSep);
            let isTrimmed = $(sel.age).getValue();
            expect(isTrimmed).toEqual(exp.ageIsTrimmed);
        });

        it('TC-082 Paste function should to trim Zero numbers before first positive digit', ()=> {
            isTrimmed(age.valueNine, age.selectAndCopy, age.paste);
            let isNineTrimmed = $(sel.age).getValue();
            expect(isNineTrimmed).toEqual(exp.ageZeroTrimmed);
        });

        it('TC-083 Age input field should not accept decimal digits', () => {
            $(sel.age).setValue(age.valueDecimal);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-084 "Required" Error message should appears on screen while Age input field is empty', ()=> {
            inputValues4(name.default, gender.it, age.ageEmpty, story.comedy);
            const submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-085  Age input field should not accept negative numbers', () => {
            $(sel.age).setValue(age.negative);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC-086  Age input field should not accept Zero digit', () => {
            $(sel.age).setValue(age.ageZero);
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });  //fail

        it('TC-087 Vertical input stepper should not decrease age value to the negative state', ()=> {
            $(sel.spanDown).click();
            let error = $(sel.error).waitForDisplayed({interval: 500});
            expect(error).toEqual(true);
        });

        it('TC- 088 Paste function should to trim space symbols before first digit', ()=> {
            isTrimmed(age.spaceOne, age.selectAndCopy, age.paste);
            let isSpaceTrimmed = $(sel.age).getValue();
            expect(isSpaceTrimmed).toEqual(exp.ageSpaceTrimmed);
        });

        it('TC- 089 Paste function should to trim space symbols after last digit', ()=> {
            isTrimmed(age.oneSpace, age.selectAndCopy, age.paste);
            let isSpaceTrimmed = $(sel.age).getValue();
            expect(isSpaceTrimmed).toEqual(exp.ageSpaceTrimmed);
        });

    });

    afterEach('Refresh page', () => {
        browser.refresh();
    });

});
