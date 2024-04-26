function createMenu(){

    const rightSide = document.createElement("div");
    rightSide.id = "right-side";
    rightSide.classList.add("d-flex", "flex-column", "bg-black", "p-5", "w-50", "h-100");


    const navbar = document.createElement("nav");
    navbar.classList.add("navbar", "navbar-expand-lg", "mx-auto", "menu-nav");

    const ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    const menuItems = [
        { text: "Starters", id: "starters" },
        { text: "Lunch", id: "lunch" },
        { text: "Dinner", id: "dinner" },
        { text: "Special", id: "special" },
        { text: "Desserts", id: "desserts" }
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
    h2.classList.add("fancy-font", "mb-5", "menu-header");
    h2.textContent = "Starters";
    menuDiv.appendChild(h2);

    const foodItems = [
        { header: "Tomato Toast", price: "$10" , class: "food-0", text: "Enjoy the classic toast enhanced with the refreshing touch of tomatoes." },
        { header: "Noodle Soup", price: "$14.99" , class: "food-1", text: "Savor a warming bowl of herb-infused noodle soup." },
        { header: "Pumpkin Soup", price: "$14.99" , class: "food-2", text: "Indulge in a creamy bowl of pumpkin soup, perfect for a cozy meal." }
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
        header.id = `food-header-${i}`;
        header.textContent = `${foodItems[i].header}`;

        const price = document.createElement("h5");
        price.id = `food-price-${i}`;
        price.textContent = `${foodItems[i].price}`;

        const text = document.createElement("p");
        text.id = `food-text-${i}`;
        text.classList.add("card-text");
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

    return rightSide;
}

function changeMenu(event){
    const header = document.querySelector(".menu-header");
    let foodItems;

    if(event && event.target && event.target.id == "starters"){

        header.textContent = "Starters";


        foodItems = [
            { header: "Tomato Toast", price: "$10" , text: "Enjoy the classic toast enhanced with the refreshing touch of tomatoes.", pic: "images/toast.png"},
            { header: "Noodle Soup", price: "$14.99" , text: "Savor a warming bowl of herb-infused noodle soup.", pic: "images/soup.png"},
            { header: "Pumpkin Soup", price: "$14.99" , text: "Indulge in a creamy bowl of pumpkin soup, perfect for a cozy meal.", pic: "images/pumpkin.png"}
        ]
    } else if(event && event.target && event.target.id == "lunch"){

        header.textContent = "Lunch";

        foodItems = [
            { header: "Italian Pizza", price: "$12" , text: "Customized Italian pizzas, topped your way. Enjoy!", pic: 'images/pizza.png'},
            { header: "Steak Burger", price: "$15" , text: "Crafted steak burgers, tailored to your taste. Choose toppings, enjoy every bite!", pic: 'images/burger.png'},
            { header: "Thai Beef Salad", price: "$9.99" , text: "Tender beef, crisp veggies, zesty dressing - Thai beef salad, tailored for you.", pic: 'images/salad.png'}
        ]
    } else if(event && event.target && event.target.id == "dinner"){

        header.textContent = "Dinner";

        foodItems = [
            { header: "Truffle Mushroom Ravioli", price: "$25" , text: "A sublime fusion of mushrooms and truffle.", pic: 'images/ravioli.png'},
            { header: "Wagyu Sushi & Sashimi", price: "$27" , text: "Unparalleled quality, exquisite taste.", pic: 'images/sushi.png'},
            { header: "Seafood Risotto", price: "$23" , text: "A symphony of flavors from the sea.", pic: 'images/risotto.png'}
        ]
    } else if(event && event.target && event.target.id == "special"){

        header.textContent = "Special";

        foodItems = [
            { header: "Kobe Beef Steak", price: "$500" , text: "A renowned type of beef originating from specially bred Japanese Wagyu cattle, known for its unique flavor and tender texture.", pic: 'images/kobe.png'},
            { header: "Lobster Thermidor", price: "$170" , text: "A luxurious and flavorful French classic featuring fresh grilled lobster, filled with creamy béchamel sauce and spicy cheese.", pic: 'images/lobster.png'},
            { header: "Beluga Caviar Blini", price: "$250" , text: "A harmonious blend of luxury and flavor. Delicate blinis paired with rich Beluga caviar, creating a perfect symphony of taste. An absolute culinary delight.", pic: 'images/caviar.png'}
        ]
    } else if(event && event.target && event.target.id == "desserts"){

        header.textContent = "Desserts";

        foodItems = [
            { header: "Crème Brûlée", price: "$11" , text: "French classic Crème Brûlée. Creamy and caramelized. A delicate flavor touch.", pic: 'images/creme.png'},
            { header: "Tiramisu", price: "$13" , text: "Italian delight. Light and flavorful. Topped with cocoa. A sophisticated dessert choice.", pic: 'images/tiramisu.png'},
            { header: "Panna Cotta", price: "$12" , text: "Italian elegance on a plate. Smooth, creamy indulgence. Served with fresh fruit sauce or caramel. A sophisticated dessert choice.", pic: 'images/panna.png'}
        ]
    }
    updateMenu(foodItems);
}

function updateMenu(foodItems){
    
    for( let i = 0; i < 3; i++){
        document.getElementById(`food-header-${i}`).textContent = foodItems[i].header;

        document.getElementById(`food-price-${i}`).textContent = foodItems[i].price;

        document.getElementById(`food-text-${i}`).textContent = foodItems[i].text;

        document.querySelector(`.food-${i}`).style.backgroundImage = `url(${foodItems[i].pic})`;
    }

}

export {createMenu, changeMenu} ;