function createMenu(){

    const rightSide = document.createElement("div");
    rightSide.id = "right-side";
    rightSide.classList.add("d-flex", "flex-column", "bg-black", "p-5", "w-50", "h-100");


    const navbar = document.createElement("nav");
    navbar.classList.add("navbar", "navbar-expand", "mx-auto", "menu-nav");

    const ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    const menuItems = [
        { text: "Starters", id: "starters" },
        { text: "Lunch", id: "lunch" },
        { text: "Dinner", id: "dinner" },
        { text: "Wine", id: "wine" },
        { text: "Drinks", id: "drinks" }
    ];

    for (let i = 0; i < menuItems.length; i++) {
        const li = document.createElement("li");
        li.classList.add("nav-item");

        const button = document.createElement("button");
        button.classList.add("nav-link", "menu-btn");

        button.textContent = menuItems[i].text;
        button.id = menuItems[i].id;



        li.appendChild(button);
        ul.appendChild(li);
    }
    navbar.appendChild(ul);

    rightSide.appendChild(navbar);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu", "my-auto");
    rightSide.appendChild(menuDiv);

    const h2 = document.createElement("h2");
    h2.classList.add("fancy-font", "mb-5");
    h2.textContent = "Starters";
    menuDiv.appendChild(h2);

    const foodItems = [
        { header: "Tomato Toast", price: "$10" , class: "food-1", text: "Enjoy the classic toast enhanced with the refreshing touch of tomatoes." },
        { header: "Noodle Soup", price: "$14.99" , class: "food-2", text: "Savor a warming bowl of herb-infused noodle soup." },
        { header: "Pumpkin Soup", price: "$14.99" , class: "food-3", text: "Indulge in a creamy bowl of pumpkin soup, perfect for a cozy meal." }
    ];

    for(let i = 0; i < foodItems.length; i++){
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");

        const row = document.createElement("div");
        row.classList.add("row", "g-0");

        const col4 = document.createElement("div");
        col4.classList.add("col-md-4");

        const img = document.createElement("div");
        img.classList.add("menu-pic", `${foodItems[i].class}`);

        const col8 = document.createElement("div");
        col8.classList.add("col-md-8", "my-auto");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");

        const header = document.createElement("h5");
        header.textContent = `${foodItems[i].header}`;

        const price = document.createElement("h5");
        price.textContent = `${foodItems[i].price}`;

        const text = document.createElement("p");
        text.classList.add("card-text", "w-75");
        text.textContent = `${foodItems[i].text}`;

        col4.appendChild(img);
        row.appendChild(col4);
        cardTitle.appendChild(header);
        cardTitle.appendChild(price);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(text);
        col8.appendChild(cardBody);
        row.appendChild(col8);
        card.appendChild(row);
        menuDiv.appendChild(card);
    }

    function changeMenu(){
        const menuNavbar = document.querySelector(".menu-nav");
        const buttons = menuNavbar.querySelectorAll("button");

        buttons.forEach((button) => {
            if(button.id == "starters"){
                
            }
        })
    }
    
    return rightSide;

}

export default createMenu;