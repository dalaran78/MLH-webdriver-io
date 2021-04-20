import sel from '../../data/selectors';
import {images} from '../../data/testData';
import ext from '../../data/expected.json';
import {uploadImage, creatStory} from "../../helpers/methods";

describe('Image field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-103 Verify that a placeholder is `Click or drag and drop`', function () {
            let imageLabelSquare = $(sel.imageSquare).getText();
            expect(imageLabelSquare).toEqual(ext.imageLabelSquare);
        });
    });

    describe('Positive cases', function () {

        it('TC-104 Verify that user can upload a JPEG file by clicking the Image upload area"', function () {
            uploadImage(images.default);
            let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
            expect(imageDisplayed).toEqual(true);
        });

        it('TC-106 Verify that user can upload a PNG file by clicking the Image upload area', function () {
            uploadImage(images.default1);
            let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
            expect(imageDisplayed).toEqual(true);
        });

        it('TC-108 Verify that a bin icon is present on image preview field after JPEG file was uploaded by clicking', function () {
            uploadImage(images.default);
            let binIcon = $(sel.binIcon).isEnabled();
            expect(binIcon).toEqual(true);
        });

        it('TC-110 Verify that a bin icon is present on image preview field after PNG file was uploaded by clicking', function () {
            uploadImage(images.default1);
            let binIcon = $(sel.binIcon).isEnabled();
            expect(binIcon).toEqual(true);
        });

        // it('TC-114 Verify that bin icon works for JPEG file which was uploaded by clicking', function () {
        //     uploadImage(images.default);
        //     let binIcon = $(sel.binIcon);
        //     expect(binIcon).toBeClickable();
        // });
// waiting debugging

        // it('TC-115 Verify that bin icon works for PNG file which was uploaded by clicking', function () {
        //     uploadImage(images.PNG);
        //     let binIcon = $(sel.binIcon);
        //     expect(binIcon).toBeClickable();
        // });
// waiting debugging

        it('TC-120 Verify that after create story the uploaded JPEG image is present in the story', function () {
            creatStory(images.default);
            let storyAvatar = $(sel.storyAvatar).isDisplayed();
            expect(storyAvatar).toEqual(true);
        });

        it('TC-121 Verify that after create story the uploaded PNG image is present in the story', function () {
            creatStory(images.default1);
            let storyAvatar = $(sel.storyAvatar).isDisplayed();
            expect(storyAvatar).toEqual(true);
        });

        it('TC-126 Maximum size of the square JPEG image upload by click is 200x200px in the final story', function () {
            creatStory(images.squareJPG);
            let avatarSize = $(sel.storyAvatar).getSize();
            expect(avatarSize).toEqual({width: 200, height: 200});
        });

        it('TC-127 Maximum size of the square PNG image upload by click is 200x200px in the final story', function () {
            creatStory(images.squarePNG);
            let avatarSize = $(sel.storyAvatar).getSize();
            expect(avatarSize).toEqual({width: 200, height: 200});
        });

        // it('TC-130 Check if the image is vertical, the height is 200 px in the final story (for JPEG)', function () {
        //     creatStory(images.verticalJPG);
        //     let avatarHeight = $(sel.storyAvatar).getSize("height");
        //     expect(avatarHeight).toEqual(200);
        // });
//waiting for debugging

//         it('TC-131 Check If the image is vertical, the height is 200 px in the final story (for PNG)', function () {
//             creatStory(images.verticalPNG);
//             let avatarHeight = $(sel.storyAvatar).getSize("height");
//             expect(avatarHeight).toEqual(200);
//         });
//waiting for debugging

        it('TC-184 Check If the image is horizontal, the width is 200 px in the final story (for JPEG)', function () {
            creatStory(images.horizontalJPG);
            let avatarWidth = $(sel.storyAvatar).getSize("width");
            expect(avatarWidth).toEqual(200);
        });

        it.only('TC-185 Check If the image is horizontal, the width is 200 px in the final story (for PNG)', function () {
            creatStory(images.horizontalPNG);
            let avatarWidth = $(sel.storyAvatar).getSize("width");
            expect(avatarWidth).toEqual(200);
        });
    });
});
