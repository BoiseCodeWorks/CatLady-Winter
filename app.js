//NOTE variables declared at top of document
let cats = {
  snibbley: {
    name: "Mr. Snibbley",
    moods: ["Formal", "Perturbed"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img: "https://s3.amazonaws.com/bit-photos/large/6343577.jpeg",
    pets: 0
  },
  wiskers: {
    name: "Wiskers",
    moods: ["Happy", "Extra-Bitey"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://i.pinimg.com/736x/e4/4f/a4/e44fa48d7c5449e431c475596b7a4146.jpg",
    pets: 0
  },
  batcat: {
    name: "BatCat",
    moods: ["Stoic", "Very Stoic"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://pbs.twimg.com/profile_images/3318891830/06715c901d11d2c8bb522ac87d3c39a7_400x400.png",
    pets: 0
  }
};
let activeCat = cats.snibbley;
let catToReset;
let nameElem = document.querySelector("#cat-name");
let petsElem = document.querySelector("#cat-pets");
let statusElem = document.querySelector("#cat-status");
let imgElem = document.querySelector("#cat-pic");
let petBtn = document.querySelector("#pet-button");

/**
 * This method will increase the pet count of the active cat
 */
function pet() {
  activeCat.pets++;
  //check if the pets has exceeded the cats tollerance
  if (activeCat.pets > activeCat.tolerance) {
    //Change the index of the mood to its secondary option
    activeCat.moodIndex = 1;
  }
  drawCat();
}

/**
 * This function redraws the information of the active cat to the page
 */
function drawCat() {
  nameElem.innerText = activeCat.name;
  petsElem.innerText = activeCat.pets;
  //based on the mood index, render the appropriate mood from the array
  statusElem.innerText = activeCat.moods[activeCat.moodIndex];
  imgElem.setAttribute("src", activeCat.img);
  //if the mood index is greater than 0 disable the button
  if (activeCat.moodIndex > 0) {
    petBtn.setAttribute("disabled", "true");
    //save the cat to reset
    catToReset = activeCat;
    //after three seconds use catnip to reset the cat values
    setTimeout(() => {
      catnip();
    }, 3000);
  } else {
    //make sure if the mood index is not greater than 0 the button is not disabled
    petBtn.removeAttribute("disabled");
  }
}

/**
 * Changes the active cat by the key name of the cats object
 * @param {string} catName
 */
function setActiveCat(catName) {
  activeCat = cats[catName];
  drawCat();
}

// Reset the cat to reset to start over with 0 pets and the first mood index
function catnip() {
  catToReset.pets = 0;
  catToReset.moodIndex = 0;
  drawCat();
}

drawCat();
