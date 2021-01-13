"use strict";

// asyncBreeds.js
const fs = require("fs");
//("Bombay", printOutCatBreed)
const breedDetailsFromFile = function (breed, runWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      runWhenThingsAreDone(data);
    } else {
      callback();
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 1: Move the console.log into a new function:
const printOutCatBreed = (breed) => {
  console.log("Return Value", breed);
};

// CHANGE 2: we are now passing two arguments into BreedDatilsFromFile: breed string and a callback function (printOutCatBreed)
const bombay = breedDetailsFromFile("Bombay", printOutCatBreed);

module.exports = breedDetailsFromFile;
