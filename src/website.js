import loadHome from "./home";
import createForm from "./reservation";
import {createMenu, changeMenu} from "./menu";
import createInfo from "./info";
import createContact from "./contact";

function createHeader(){
    const header = document.createElement("header");
    const logo = document.createElement("p");

    logo.id = "logo";
    logo.classList.add("h2", "text-center", "p-4");
    logo.textContent = "baratie.";

    header.appendChild(logo);

    return header;
}

function createMain(){
    const main = document.createElement("main");
    main.classList.add("my-auto");
    return main;
}

function createNavbar(){
    const mainContent = document.querySelector(".main-content");
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar", "navbar-expand", "bg-light", "mb-4", "mx-auto");

    const navbarCollapse = document.createElement("div");
    navbarCollapse.id = "navbar-inside"
    navbarCollapse.classList.add("p-2", "collapse", "navbar-collapse", "justify-content-center");

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-item", "btn");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        mainContent.classList.remove("flex-column");
        const rightSide = document.querySelector("#right-side");
        if(rightSide){
            rightSide.remove();
        }
        mainContent.appendChild(createMenu());
        menuButtons();
        const leftSide = document.querySelector("#left-side");
        leftSide.classList.remove("w-100");
        leftSide.classList.add("w-50");

    });
    navbarCollapse.appendChild(menuButton);

    const RestButton = document.createElement("button");
    RestButton.classList.add("nav-item", "btn");
    RestButton.textContent = "Restaurant";
    RestButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(RestButton);
        mainContent.classList.remove("flex-column");
        const rightSide = document.querySelector("#right-side");
        if(rightSide){
            rightSide.remove();
        }
        mainContent.appendChild(createInfo());
        const leftSide = document.querySelector("#left-side");
        leftSide.classList.remove("w-100");
        leftSide.classList.add("w-50");

    });
    navbarCollapse.appendChild(RestButton);

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-item", "btn");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        mainContent.classList.remove("flex-column");
        const rightSide = document.querySelector("#right-side");
        if(rightSide){
            rightSide.remove();
        }
        mainContent.appendChild(createContact());
        const leftSide = document.querySelector("#left-side");
        leftSide.classList.remove("w-100");
        leftSide.classList.add("w-50");
        
    });
    navbarCollapse.appendChild(contactButton);

    const ReservButton = document.createElement("button");
    ReservButton.classList.add("nav-item", "btn");
    ReservButton.textContent = "Book a Table";
    ReservButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(ReservButton);
        mainContent.classList.remove("flex-column");
        const rightSide = document.querySelector("#right-side");
        if(rightSide){
            rightSide.remove();
        }
        mainContent.appendChild(createForm());
        const leftSide = document.querySelector("#left-side");
        leftSide.classList.remove("w-100");
        leftSide.classList.add("w-50");
    });
    navbarCollapse.appendChild(ReservButton);

    navbar.appendChild(navbarCollapse);

    

    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function setActiveButtonMenu(button) {
    const buttons = document.querySelectorAll(".menu-btn");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("menu-active");
      }
    });
  
    button.classList.add("menu-active");
}

function menuButtons(){
    const starters = document.getElementById("starters");
    starters.addEventListener("click", function(event) {
        setActiveButtonMenu(starters)
        changeMenu(event);
    });

    const lunch = document.getElementById("lunch");
    lunch.addEventListener("click", function(event) {
        setActiveButtonMenu(lunch)
        changeMenu(event);
    });

    const dinner = document.getElementById("dinner");
    dinner.addEventListener("click", function(event) {
        setActiveButtonMenu(dinner)
        changeMenu(event);
    });

    const special = document.getElementById("special");
    special.addEventListener("click", function(event) {
        setActiveButtonMenu(special)
        changeMenu(event);
    });

    const desserts = document.getElementById("desserts");
    desserts.addEventListener("click", function(event) {
        setActiveButtonMenu(desserts)
        changeMenu(event);
    });

}


function renderPage(){

    const mainContent = document.querySelector(".main-content");

    const lefSide = document.createElement("div");
    lefSide.id = "left-side";
    lefSide.classList.add("d-flex", "flex-column", "justify-content-center", "p-5", "h-100", "w-100");

    mainContent.appendChild(lefSide);

    lefSide.appendChild(createHeader());
    lefSide.appendChild(createMain());
    loadHome();
    lefSide.appendChild(createNavbar());
}



export default renderPage;
