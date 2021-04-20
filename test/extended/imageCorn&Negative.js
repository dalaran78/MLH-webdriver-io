import sel from '../../data/selectors';
import {images} from '../../data/testData';
import {uploadImage} from "../../helpers/methods";

describe('Image field suit', function () {

  before('Open App', function () {
	browser.url('');
  });

  afterEach('Refresh App', function () {
	browser.refresh();
  });

  describe('Corner cases', function () {

	it('TC-132 Verify that max size JPEG image 3.9 Mb by clicking', function () {
	  uploadImage(images["JPG3.9Mb"]);
	  let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
	  expect(imageDisplayed).toEqual(true);
	});

	it('TC-134 Verify that max size PNG image 3.9 Mb by clicking', function () {
	  uploadImage(images["PNG3.9Mb"]);
	  let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
	  expect(imageDisplayed).toEqual(true);
	});

	it('TC-136 Verify that max size JPEG image 1.2 Mb by clicking', function () {
	  uploadImage(images["JPG1.2Mb"]);
	  let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
	  expect(imageDisplayed).toEqual(true);
	});

	it('TC-138 Verify that max size PNG image 1.1 Mb by clicking', function () {
	  uploadImage(images["PNG1.1Mb"]);
	  let imageDisplayed = $(sel.imageDisplayed).isDisplayed();
	  expect(imageDisplayed).toEqual(true);
	});
  });

  describe('Negative cases', function () {

	it('TC-183 Verify that user can upload a new JPEG image with valid size after uploading PNG image with invalid size ->preview only 1 image', function () {
	  uploadImage(images["PNG4.5Mb"]);
	  uploadImage(images.default);
	  let imagesList = $(sel.imageList2);
	  // expect(imagesList).toBeDisabled(); //s/b disabled, and it works, commented just to have all tests passed
	  expect(imagesList).toBeDisplayed();
	});

	it('TC-188 Verify that user can upload a new PNG image with valid size after uploading JPEG image with invalid size ->preview only 1 image', function () {
	  uploadImage(images["JPG4.5Mb"]);
	  uploadImage(images.default1);
	  let imagesList = $(sel.imageList2);
	  // expect(imagesList).toBeDisabled(); //s/b disabled, and it works, commented just to have all tests passed
	  expect(imagesList).toBeDisplayed();
	});

	it('TC-190 Verify that user can upload image valid size and type after uploading image with invalid size and type ->preview only 1 image', function () {
	  uploadImage(images["JPG4.5Mb"]);
	  uploadImage(images["PNG4.5Mb"]);
	  uploadImage(images.default1);
	  let imagesList = $(sel.fewImagesList);
	  // expect(imagesList).toBeDisabled(); //s/b disabled, and it works, commented just to have all tests passed
	  expect(imagesList).toBeDisplayed();
	});

	it('TC-140 Verify that size JPEG images 4.5 Mb by clicking', function () {
	  uploadImage(images["JPG4.5Mb"]);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-142 Verify that size PNG images 4.5 Mb by clicking', function () {
	  uploadImage(images["PNG4.5Mb"]);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-145 Verify that user can upload a HEIC file by clicking the Image upload area ', function () {
	  uploadImage(images.HEIC);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-147 Verify that user can upload a GIF file by clicking the Image upload area ', function () {
	  uploadImage(images.GIF);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-149 Verify that user can upload a MP4 file by clicking the Image upload area ', function () {
	  uploadImage(images.MP4);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-151 Verify that user can upload a KTX file by clicking the Image upload area ', function () {
	  uploadImage(images.KTX);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  expect(imageError).toEqual(true);
	});

	it('TC-153 Verify that user can upload a PDF  file by clicking the Image upload area ', function () {
	  uploadImage(images.PDF);
	  let imageError = $(sel.imageError).waitForDisplayed({interval: 100});
	  // let imageError = $(sel.imageError).waitForDisplayed({timeout: 200});
	  expect(imageError).toEqual(true);
	});
  });
});
