import sel from '../data/selectors';
import {age, gender, name, story} from "../data/testData";

function inputValues4(name, gender, age, story) {
  $(sel.name).setValue(name);
  $$(sel.radioButtons)[gender].click();
  $(sel.age).setValue(age);
  $(sel.storyType).click();
  $$(sel.storyList)[story].click();
}

function inputStoryType7(story) {
  $(sel.storyType).click();
  $$(sel.storyList)[story].click();
}

function inputValuesExcStory(name, gender, age) {
  $(sel.name).waitForDisplayed();
  $(sel.name).setValue(name);
  $$(sel.radioButtons)[gender].click();
  $(sel.age).setValue(age);
}

function isPasteCorrect (age) {
  $(sel.name).setValue();
  browser.keys(age);
  $(sel.age).setValue();
  browser.keys(age);
}

function isTrimmed (age) {
  $(sel.name).setValue();
  browser.keys(age);
  $(sel.age).setValue();
  browser.keys(age);
  $(sel.header).click();
}

function inputNameNoErr(name) {
  $(sel.name).setValue(name);
  const value = $(sel.name).getValue();
  const error = $(sel.error).isDisplayed();
  return value === name && error === false;
}

function inputNameErr(name) {
  $(sel.name).setValue(name);
  const value = $(sel.name).getValue();
  const error = $(sel.error).waitForDisplayed();
  if (value === name && error === true) {
    return $(sel.error).getText();
  }
}

function inputNameDelNoErr(name, symbolsToDelete) {
  $(sel.name).setValue(name);
  for (let i = 0; i < symbolsToDelete; i++) {
    browser.keys('Backspace');
  }
  const value = $(sel.name).getValue();
  const error = $(sel.error).isDisplayed();
  return value === name.slice(0,-symbolsToDelete) && error === false;
}

function inputNameDelErr(name, symbolsToDelete) {
  $(sel.name).setValue(name);
  for (let i = 0; i < symbolsToDelete; i++) {
    browser.keys('Backspace');
  }
  const value = $(sel.name).getValue();
  const error = $(sel.error).waitForDisplayed();
  if (value === name.slice(0,-symbolsToDelete) && error === true) {
    return $(sel.error).getText();
  }
}

function uploadImage (image) {
  let path = require('path');
  let filePath = path.join(__filename, image);
  let remoteFilePath = browser.uploadFile(filePath);
  $(sel.imageUpload).addValue(remoteFilePath);
}

function checkSwitchGender(gender1, gender2){
  $$(sel.radioButtons)[gender1].click();
  $$(sel.radioButtons)[gender2].click();
  const elem =$$(sel.genderElem)[gender2];
  return elem;
}

function creatStory (image) {
  inputValues4(name.default, gender.it, age.default, story.comedy);
  uploadImage(image);
  $(sel.submit).click();
}

function createStoryNoImage( name, gender, age, story) {
  $(sel.name).setValue(name);
  $$(sel.radioButtons)[gender].click();
  $(sel.age).setValue(age);
  $(sel.storyType).click();
  $$(sel.storyList)[story].click();
  $(sel.submit).click();
}

function checkNameInStory(name, index, card) {
  const text = $$(sel.storyCardText)[card].getText();
  return text.slice(index, index + name.length);
}

function checkValueInStory(value, card) {
  const text = $$(sel.storyCardText)[card].getText();
  return text.split(' ').filter(el => el === value).join('');
}

function checkAgeInStory(value, card) {
  const text = $$(sel.storyCardText)[card].getText();
  const valueTrim = value.replace(/^0+/, '');
  const index = text.indexOf(valueTrim);
  return text.slice(index, index + valueTrim.length);
}

function inputValues4Reset (name, gender, age, story) {
  $(sel.name).setValue(name);
  $$(sel.radioButtons)[gender].click();
  $(sel.age).setValue(age);
  $(sel.storyType).click();
  $$(sel.storyList)[story].click();
  $(sel.submit).click();
  $(sel.tryAgain).click();
}

module.exports = {
  inputValues4,
  inputStoryType7,
  inputValuesExcStory,
  isPasteCorrect,
  isTrimmed,
  inputNameNoErr,
  inputNameErr,
  inputNameDelNoErr,
  inputNameDelErr,
  uploadImage,
  inputValues4Reset,
  checkSwitchGender,
  creatStory,
  createStoryNoImage,
  checkNameInStory,
  checkValueInStory,
  checkAgeInStory
}
