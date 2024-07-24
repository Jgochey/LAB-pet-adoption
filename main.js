const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomicartcommunity.com%2Fgallery%2Fdata%2Fthumbnails%2F884%2Ftrex2_600.jpg&f=1&nofb=1&ipt=744e6c4e39ab64f902fad177d3df4bd109548ac4c80abf2c12c6dbb610e81d85&ipo=images",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.UkKySAhatFZsMBKdxhPn5QAAAA%26pid%3DApi&f=1&ipt=8194c639f57d12fbe641787bf5f95598f298cd4c713f5fef4d2fc48295944f93&ipo=images"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthumb10.shutterstock.com%2Fthumb_large%2F3831761%2F385026343%2Fstock-vector-tyrannosaurus-rex-t-rex-primitive-carnivore-dinosaur-with-separate-color-and-outline-layers-385026343.jpg&f=1&nofb=1&ipt=f47b2f154901c3a89ca27c97e0b7d07bee69a92879b539e2cfece264c6ac6a59&ipo=images"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frotoscopers.com%2Fwp-content%2Fuploads%2F2013%2F01%2FClifford-the-Big-Red-Dog-Illumination.png&f=1&nofb=1&ipt=fbaaf70a96c53d780f3357c97fa66d960e8c320fd790b797a6031a526354896e&ipo=images"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.for-sale.co.uk%2Fsh-img%2F122445227_10159389066742176_1242455430110995913_o_t%252Brex%252Bdinosaur_thumbnail.jpg&f=1&nofb=1&ipt=0be66852ad81e8a1d216c1d4c5260e23b6ab4652e9d92dc07e71b29edf7599f4&ipo=images"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frender.fineartamerica.com%2Fimages%2Frendered%2Fsmall%2Fprint%2Fimages%2Fartworkimages%2Fsquare%2F1%2Fthe-yellow-cat-laurie-with.jpg&f=1&nofb=1&ipt=af3ff19c891fc89114d0ec629c2e961a841a7529a6477f37785efc3b1503e057&ipo=images"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2012%2F04%2F30%2F11%2F08%2Fbrown-44833_960_720.png&f=1&nofb=1&ipt=f12dd57bf228f04edbf648b8fea55731cd29b0aa1c06563acc0e98b99bb3ac35&ipo=images"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.miraheze.org%2Fgreatcharacterswiki%2F5%2F56%2FVlcsnap-2020-12-31-23h58m52s398.png&f=1&nofb=1&ipt=4a6c6570fba4bff2ce987a2384d15b37bb73f87c399836e4d27129ff0756dd60&ipo=images"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.petplan.co.uk%2Fimages%2Fthumbs%2Fmixed-sizes%2F2023%2F7-famous-fictional-cats%2Fsalem.jpg&f=1&nofb=1&ipt=9f927f9afd2c72f8bca13631e3d245a1b4e83f79feb8640f03d73817b8c0507d&ipo=images"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.vectorstock.com%2Fi%2Fthumbs%2F78%2F43%2Fdinosaur-with-sharp-teeth-vector-6007843.jpg&f=1&nofb=1&ipt=76a69d5c6b6682a45f78aa92adbaa2344adaf0106590b5fbd81c88189a3b6a51&ipo=images"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lostfoundmcleancounty.org%2Fwp-content%2Fuploads%2F2015%2F09%2F2015-09-02_55e65f14da9b5_91cat-150x150.jpg&f=1&nofb=1&ipt=6be5bbe06da9270edc7c0be9c02421af6976f1c35f971d2c52d7fed9fa581ad1&ipo=images"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064047935040&f=1&nofb=1&ipt=34092b03fe07dd9aa45213955e647ae9a58e8dc2acddbddf9ed9f53f154ab3e1&ipo=images"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7b%2F06%2F71%2F7b06717da660431b65302c4ae3e9ad73.jpg&f=1&nofb=1&ipt=18875a1836a202cab76a78620487e5f7b8e1a53b12f2bb72782dd3792d2636bb&ipo=images"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.listchallenges.com%2Ff%2Fitems2020%2Ff8134c67-9c2d-4313-b6af-e1cb7bbc93ec.jpg&f=1&nofb=1&ipt=8a3bdaca0f2faedde98156e55cfb7f0c6bb775a9826f1baa6884b168d6824044&ipo=images"
    }
  ];


// Render function: Creates a new variable (selectedDiv) to store the HTML div.
// Whatever you pass into the second argument will then be rendered to the HTML itself.
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// Cards to Dom function: Looks at the pets object and then runs a function.
// The domString is set to empty, then the object is looped through to get the element attributes.
// These are then assigned to the domString, which is rendered in the specified HTML by the renderToDom function.
  const cardsOnDom = (pets) => {
    let domString = "";
    for (const pet of pets) {
      domString += `<div class="card" style="width: 18rem;">
        <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <p class="card-text">${pet.color}</p>
          <p class="card-text">${pet.specialSkill}</p>
          <div class="card-footer text-body-secondary">${pet.type}</div>
          <button type="button" class="btn btn-outline-danger" id="delete--${pet.id}">Delete</button>
        </div>
      </div>`;
    }
  
    renderToDom("#cards", domString);
  };

// Filter function: Creates an empty array and assigns elements to it by looking for them inside an array.
// See the pet buttons below.
const filter = (array, typeString) => {
  const someArray = [];

  array.forEach((item) => {
    if (item.type === typeString) {
      someArray.push(item);
    }
  });
  return someArray;
};


  const catsButton = document.querySelector("#cat-btn");
  const dogsButton = document.querySelector("#dog-btn");
  const dinoButton = document.querySelector("#dino-btn");
  const allButton = document.querySelector("#all-btn");

  // The filter function looks for each animal contained in pets and assigns them to their own array.
  // This new array is then rendered on the dom.
  catsButton.addEventListener("click", () => {
    const catArmy = filter(pets, "cat");
    cardsOnDom(catArmy);
    });
  
  dogsButton.addEventListener("click", () => {
    const dogArmy = filter(pets, "dog");
    cardsOnDom(dogArmy);
    });

  dinoButton.addEventListener("click", () => {
    const dinoArmy = filter(pets, "dino");
    cardsOnDom(dinoArmy);
    });

  allButton.addEventListener("click", () => {
      cardsOnDom(pets);
      });

// Targeting the form on the HTML.
const form = document.querySelector("form");

// The (e) is an event the function is waiting for to start running. In this case, clicking submit.
const createPet = (e) => {
  e.preventDefault();

  // Collects information from the form and then pushes it into its own new object on the array.
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#skill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#picture").value,
  }

  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener("submit", createPet);



const app = document.querySelector("#cards"); //Looking at the already established #cards
app.addEventListener("click", (e) => { // When there is a click, run the function.
  if (e.target.id.includes("delete")) { // Look for the delete button on the HTML.
    const [, id] = e.target.id.split("--"); // Seperator so that "delete" is not returned along with the ID which is what we actually want.
    const index = pets.findIndex((e) => e.id === Number(id)); //Turn the ID string into an actual number.
    pets.splice(index, 1); // Add the new pet to the pets object.
    cardsOnDom(pets); // Render everything again, this time with the new pet.
  }
});


// Renders the pet cards as soon as the page is open, without this you would have to press one of the buttons to see anything.
const startApp = () => {
  cardsOnDom(pets);
}
startApp();
