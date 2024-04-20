function createHome(){
    const content = document.createElement("div");
    content.id = "content";
    content.classList.add("text-center");

    const container = document.createElement("div");
    container.classList.add("container");
    content.appendChild(container);
    
    const h2 = document.createElement("h2");
    h2.classList.add("fancy-font")
    h2.textContent = "The pure taste of";
    container.appendChild(h2);
    
    const h1 = document.createElement("h1");
    h1.classList.add("h-1")
    h1.textContent = "Italy";
    container.appendChild(h1);
    
    const p = document.createElement("p");
    p.classList.add("lead");
    p.textContent = "We bring together the finest flavors from around the globe. Experience tastes from Italy to Japan, Mexico to Thailand, and beyond. With our unique recipes crafted from high-quality ingredients, we'll take you on a delicious journey around the world.";
    container.appendChild(p);
    
    content.appendChild(container);
    

    return content;
}

function loadHome(){
    const main = document.querySelector("main");
    main.appendChild(createHome());
}

export default loadHome;