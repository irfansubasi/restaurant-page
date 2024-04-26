function createContact(){
    const rightSide = document.createElement("div");
    rightSide.id = "right-side";
    rightSide.classList.add("d-flex", "flex-column", "justify-content-center","bg-black", "p-5", "w-50", "h-100");

    const hr = document.createElement("hr");
    hr.classList.add("w-100");

    const h1 = document.createElement("h1");
    h1.classList.add("fancy-font");
    h1.textContent = "Contact Us!";
    rightSide.appendChild(h1);

    const form = document.createElement("form");
    rightSide.appendChild(form);
    rightSide.appendChild(hr);

    const firstDiv = document.createElement("div");
    firstDiv.classList.add("mb-3");
    form.appendChild(firstDiv);

    const secondDiv = document.createElement("div");
    secondDiv.classList.add("mb-3");
    form.appendChild(secondDiv);

    const thirdDiv = document.createElement("div");
    thirdDiv.classList.add("mb-3");
    form.appendChild(thirdDiv);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "nameInput");
    nameLabel.classList.add("form-label");
    nameLabel.textContent = "Name";
    firstDiv.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "John Smith");
    nameInput.classList.add("form-control");
    nameInput.id = "nameInput";
    firstDiv.appendChild(nameInput);

    const mailLabel = document.createElement("label");
    mailLabel.setAttribute("for", "mailInput");
    mailLabel.classList.add("form-label");
    mailLabel.textContent = "E-mail";
    secondDiv.appendChild(mailLabel);

    const mailInput = document.createElement("input");
    mailInput.setAttribute("type", "email");
    mailInput.setAttribute("placeholder", "name@example.com");
    mailInput.classList.add("form-control");
    mailInput.id = "mailInput";
    secondDiv.appendChild(mailInput);

    const textLabel = document.createElement("label");
    textLabel.setAttribute("for", "textInput");
    textLabel.classList.add("form-label");
    textLabel.textContent = "Message";
    thirdDiv.appendChild(textLabel);

    const textInput = document.createElement("textarea");
    textInput.setAttribute("rows", "3");
    textInput.classList.add("form-control");
    textInput.id = "textInput";
    thirdDiv.appendChild(textInput);

    const sumbitDiv = document.createElement("div");
    sumbitDiv.classList.add("col-12");
    form.appendChild(sumbitDiv);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("btn", "btn-warning", "w-100", "mb-4");
    submitButton.textContent = "SEND";
    form.appendChild(submitButton);
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
    });

    const infos = document.createElement("div");
    rightSide.appendChild(infos);

    const placeInfo = document.createElement("div");
    placeInfo.classList.add("mb-3", "d-flex", "align-items-center");
    infos.appendChild(placeInfo);

    const placeIcon = document.createElement("i");
    placeIcon.classList.add("fa-solid", "fa-location-dot", "fs-4");
    placeInfo.appendChild(placeIcon);

    const placeSpan = document.createElement("span");
    placeSpan.classList.add("lead" ,"ms-3");
    placeSpan.textContent = "Somewhere in the East Blue";
    placeInfo.appendChild(placeSpan);


    const tellInfo = document.createElement("div");
    tellInfo.classList.add("mb-3", "d-flex", "align-items-center");
    infos.appendChild(tellInfo);

    const telIcon = document.createElement("i");
    telIcon.classList.add("fa-solid", "fa-phone", "fs-4");
    tellInfo.appendChild(telIcon);

    const tellSpan = document.createElement("span");
    tellSpan.classList.add("lead", "ms-3");
    tellSpan.textContent = "(000) 111-2222";
    tellInfo.appendChild(tellSpan);


    const mailInfo = document.createElement("div");
    mailInfo.classList.add("mb-3", "d-flex", "align-items-center");
    infos.appendChild(mailInfo);

    const mailIcon = document.createElement("i");
    mailIcon.classList.add("fa-solid", "fa-envelope", "fs-4");
    mailInfo.appendChild(mailIcon);

    const mailSpan = document.createElement("span");
    mailSpan.classList.add("lead", "ms-3");
    mailSpan.textContent = "info@baratie.com";
    mailInfo.appendChild(mailSpan);
    rightSide.appendChild(hr);

    const socials = document.createElement("div");
    socials.classList.add("d-flex", "justify-content-center", "fs-1", "mt-4", "socials")
    rightSide.appendChild(socials);

 
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-brands", "fa-square-x-twitter");
    socials.appendChild(xIcon);

    const insIcon = document.createElement("i");
    insIcon.classList.add("fa-brands", "fa-square-instagram");
    socials.appendChild(insIcon);

    const faceIcon = document.createElement("i");
    faceIcon.classList.add("fa-brands", "fa-square-facebook");
    socials.appendChild(faceIcon);

    const ytIcon = document.createElement("i");
    ytIcon.classList.add("fa-brands", "fa-square-youtube");
    socials.appendChild(ytIcon);

    


    return rightSide;
}

export default createContact;