import loadHome from "./home";
import createForm from "./reservation";
import {createMenu, changeMenu} from "./menu";
import createInfo from "./info";
import createContact from "./contact";

function createHeader(){
    // <footer class="footer">
    //     <p>
    //         <!-- Copyright notice -->
    //         Copyright ©
    //         <script>
    //           document.write(new Date().getFullYear())
    //         </script>
    //         |
    //       </p>
    //       <!-- GitHub link -->
    //       <a href="https://github.com/irfansubasi" target="_blank">
    //         irfansubasi
    //         <!-- GitHub icon -->
    //         <i class="fa-brands fa-github"></i></a>
    // </footer>
    const header = document.createElement("header");
    const logo = document.createElement("p");
    const github = document.createElement("div");

    github.id = "github";
    github.classList.add("text-center");
    github.innerHTML = `
        <p class="text-white" style="--bs-text-opacity: .5;"> 
            Copyright ©
            <script>
            document.write(new Date().getFullYear())
            </script>
            |
            <a class="text-white" style="--bs-text-opacity: .5;" href="https://github.com/irfansubasi" target="_blank">
                irfansubasi
                <i class="fa-brands fa-github"></i>
            </a>
        </p>
    `;

    logo.id = "logo";
    logo.classList.add("h2", "text-center", "p-4");
    logo.textContent = "baratie.";

    header.appendChild(github);
    header.appendChild(logo);

    return header;
}

function createMain(){
    const main = document.createElement("main");
    main.classList.add("my-auto");
    return main;
}

function createNavbar(){
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar", "navbar-expand-md", "bg-light", "mb-4", "mx-auto");

    const navbarCollapse = document.createElement("div");
    navbarCollapse.id = "navbar-inside"
    navbarCollapse.classList.add("navbar-nav","p-2", "justify-content-center");

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-item", "btn");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", function() {
        handleButtons(this, createMenu(), "Check Out", "Our Menus", "bg-menu.png");
        menuButtons();
    });
    navbarCollapse.appendChild(menuButton);

    const RestButton = document.createElement("button");
    RestButton.classList.add("nav-item", "btn");
    RestButton.textContent = "Restaurant";
    RestButton.addEventListener("click", function() {
        handleButtons(this, createInfo(), "Discover", "Baratie", "rest2.png");
    });
    navbarCollapse.appendChild(RestButton);

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-item", "btn");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", function() {
        handleButtons(this, createContact(), "Contact", "Get in Touch", "bg-contact.png");
    });
    navbarCollapse.appendChild(contactButton);

    const ReservButton = document.createElement("button");
    ReservButton.classList.add("nav-item", "btn");
    ReservButton.textContent = "Book a Table";
    ReservButton.addEventListener("click", function(){
        handleButtons(this, createForm(), "Book a Table", "Reservation", "bg-reserv.png");
    });
    navbarCollapse.appendChild(ReservButton);

    navbar.appendChild(navbarCollapse);

    

    return navbar;
}

function handleButtons(button, createThing, top, bottom,bg){
    const mainContent = document.querySelector(".main-content");
    const leftSide = document.querySelector("#left-side");
    if (button.classList.contains("active")) return;
        setActiveButton(button);
        mainContent.classList.remove("flex-column");
        const rightSide = document.querySelector("#right-side");
    if(rightSide){
        rightSide.remove();
    }
    mainContent.appendChild(createThing);
    leftSide.classList.remove("w-100");
    leftSide.classList.add("w-50");
    leftSide.style.background = `url(./images/${bg}) center/cover no-repeat`;
    const topHeader = document.querySelector("#top-header");
    const bottomHeader = document.querySelector("#bottom-header");
    topHeader.textContent = top;
    bottomHeader.textContent = bottom;
    bottomHeader.style.fontSize = "5rem";
    const descText = document.querySelector("#desc-text");
    if(descText){
        descText.parentNode.removeChild(descText);
    }
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
