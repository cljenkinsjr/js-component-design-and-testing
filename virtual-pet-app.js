import VirtualPet from "./virtual-pet.js";

const createBtn = document.querySelector(".createBtn"),
  myPetsDiv = document.getElementById("myPets");

createBtn.addEventListener("click", () => {
  let name = prompt("Enter a pet name"),
    description = prompt("Enter a pet's description ");

  const createdPet = new VirtualPet(name, description, 67, 45);

  const petPara = document.createElement("p");
  petPara.innerText =
    createdPet.name +
    " " +
    createdPet.description +
    " " +
    `Hunger: ${createdPet.hunger} Thirst: ${createdPet.thirst}`;

  myPetsDiv.appendChild(petPara);

  const feedBtn = document.createElement("button");
  feedBtn.innerText = "Feed";
  myPetsDiv.appendChild(feedBtn);

  feedBtn.addEventListener("click", () => {
    createdPet.feed();

    petPara.innerText =
      createdPet.name +
      " " +
      createdPet.description +
      " " +
      `Hunger: ${createdPet.hunger} Thirst: ${createdPet.thirst}`;
  });
});
