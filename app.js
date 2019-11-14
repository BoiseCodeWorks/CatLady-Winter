let cats = {
  snibbley: {
    name: "Mr. Snibbley",
    mood: "Happy",
    tolerance: Math.floor(Math.random() * 9) + 1,
    img: "https://s3.amazonaws.com/bit-photos/large/6343577.jpeg",
    pets: 0
  },
  wiskers: {
    name: "Wiskers",
    mood: "Happy",
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://i.pinimg.com/736x/e4/4f/a4/e44fa48d7c5449e431c475596b7a4146.jpg",
    pets: 0
  },
  batcat: {
    name: "BatCat",
    mood: "Happy",
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://pbs.twimg.com/profile_images/3318891830/06715c901d11d2c8bb522ac87d3c39a7_400x400.png",
    pets: 0
  }
};
let activeCat = cats.snibbley;
let nameElem = document.querySelector("#cat-name");
let petsElem = document.querySelector("#cat-pets");
let statusElem = document.querySelector("#cat-status");
let imgElem = document.querySelector("#cat-pic");

function pet() {
  activeCat.pets++;

  if (activeCat.pets > activeCat.tolerance) {
    activeCat.mood = "bitey";
  }
  drawCat();
}
function drawCat() {
  // @ts-ignore
  nameElem.innerText = activeCat.name;
  // @ts-ignore
  petsElem.innerText = activeCat.pets;
  statusElem.innerText = activeCat.mood;
  imgElem.setAttribute("src", activeCat.img);
}

drawCat();

function setActiveCat(catName) {
  activeCat = cats[catName];
  drawCat();
}

function catnip() {
  activeCat.pets = 0;
  activeCat.mood = "Happy";
  drawCat();
}
