function createInfo(){

    const rightSide = document.createElement("div");
    rightSide.id = "right-side";
    rightSide.classList.add("d-flex", "flex-column", "bg-black", "p-5", "w-50", "h-100");

    const info = document.createElement("div");
    info.classList.add("info", "overflow-y-auto");
    rightSide.appendChild(info);

    const welcome = document.createElement("h1");
    welcome.classList.add("fancy-font");
    welcome.textContent = "Welcome to Baratie!";
    info.appendChild(welcome);

    const welcomeP = document.createElement("p");
    welcomeP.textContent = "Baratie is the epitome of elegance and luxury, offering a selection of the finest flavors from around the world. Situated in the heart of the city, this unique establishment promises guests a culinary adventure like no other.";
    info.appendChild(welcomeP);

    const carousel = document.createElement("div");
    carousel.id = "carouselFade";
    carousel.classList.add("carousel", "slide", "carousel-fade", "mb-4");
    carousel.setAttribute("data-bs-ride","carousel");
    info.appendChild(carousel);

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");
    carousel.appendChild(carouselInner);

    for(let i = 0; i < 5; i++){

        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const carouselImg = document.createElement("img");
        carouselImg.classList.add("d-block", "w-100");
        carouselImg.src = `images/rest${[i]}.png`;

        carouselItem.appendChild(carouselImg);
        carouselInner.appendChild(carouselItem);

        if(i === 0){
            carouselItem.classList.add("active")
        }
    }

    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-control-prev");
    prevButton.setAttribute("type","button");
    prevButton.setAttribute("data-bs-target","#carouselFade");
    prevButton.setAttribute("data-bs-slide","prev");
    carousel.appendChild(prevButton);

    const prevIcon = document.createElement("span");
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden","true");
    prevButton.appendChild(prevIcon);

    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-control-next");
    nextButton.setAttribute("type","button");
    nextButton.setAttribute("data-bs-target","#carouselFade");
    nextButton.setAttribute("data-bs-slide","next");
    carousel.appendChild(nextButton);

    const nextIcon = document.createElement("span");
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden","true");
    nextButton.appendChild(nextIcon);

    const infoText = [
        {header: "Global Flavors on Your Plate", p:"Our menu boasts a variety of exquisite dishes representing the diverse cuisines of the world. From the exotic flavors of Asia to the fresh ingredients of the Mediterranean and the succulent meats of the Americas, our expert chef meticulously prepares each dish using carefully selected ingredients to tantalize your taste buds."},
        {header: "Elegant Dining Experience", p:"The sophisticated and modern ambiance of our restaurant provides guests with a comfortable environment to indulge in fine dining. Whether you're looking for a romantic evening or a venue for business meetings, Baratie caters to every need with its versatile setting."},
        {header: "Unmatched Service", p:"Our dedicated team is always on hand to provide the highest quality of service. Our experienced staff works tirelessly to ensure that every guest has an unforgettable experience."},
        {header: "A Promise of Excellence", p:"At Baratie, the fusion of world cuisine, elegance, and impeccable service creates a dining experience like no other. Join us and embark on a culinary journey that will delight your senses."},
        {header: "We Value Your Feedback", p:"We look forward to hearing about your experience with us!"}
    ];

    for(let i = 0; i < 5; i++){

        const h1 = document.createElement("h1");
        h1.classList.add("fancy-font");

        const p = document.createElement("p");

        h1.textContent = `${infoText[i].header}`;
        p.textContent = `${infoText[i].p}`;

        info.appendChild(h1);
        info.appendChild(p);
    }

    const chef = document.createElement("p");
    chef.classList.add("lead");
    chef.innerHTML = `Best Regards,<br>
                    Vinsmoke Sanji <br>
                    Founder and Head Chef, Baratie`;

    info.appendChild(chef);

    return rightSide;
}

export default createInfo;