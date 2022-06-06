const mainMenu = document.querySelector(".nav-items");
const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".open-btn");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.left = "0";
}

function close() {
  mainMenu.style.left = "100%";
}

// popup

fetch("./pets.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const btns = document.querySelectorAll(".card-btn");

    [...btns].forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const myData = data.find(
          (elem) => elem.id === e.currentTarget.dataset.btnId
        );
        const {
          name,
          img,
          type,
          breed,
          description,
          age,
          inoculations,
          diseases,
          parasites,
        } = myData;

        let container = document.querySelector(".pets-container");

        const section = document.createElement("div");
        section.className = "modal";
        container.append(section);
        section.innerHTML = `
    <div class="popup">
      <div class="show-container">
        <div class="show-img">
          <img src="${img}" alt="">
        </div>
        <div class="show-content">
          <h2 class="pet-name">${name}</h2>
          <h3 class="pet-type">${type} - ${breed}</h3>
          <p class="pet-description">${description}</p>
        <ul>
          <li class="age"><b>Age:</b> ${age}</li>
          <li class="inoculations"><b>Inoculations:</b> ${inoculations}</li>
          <li class="diseases"><b>Diseases:</b> ${diseases}</li>
          <li class="parasites"><b>Parasites:</b> ${parasites}</li>
        </ul>
        </div>
      </div>
      <span onclick="removeModal(this)" class="close">
        <i class="fa-solid fa-xmark"></i>
      </span>
      </div>
    <div class="overlay"></div>
    `;

        let modal = document.querySelector(".popup");
        let overlay = document.querySelector(".overlay");
        modal.style.display = "block";
        overlay.style.display = "block";
      });
    });
  });

function removeModal() {
  let modal = document.querySelector(".modal");
  let overlay = document.querySelector(".overlay");
  modal.remove();
  overlay.style.display = "none";
}
