function createForm(){

    
    const rightSide = document.createElement("div");
    rightSide.id = "right-side";
    rightSide.classList.add("d-flex", "flex-column", "justify-content-center", "bg-black", "p-5", "w-50", "h-100");
    
    const h2 = document.createElement("h2");
    h2.textContent = "Book a table";
    rightSide.appendChild(h2);
    
    const p = document.createElement("p");
    p.classList.add("lead");
    p.textContent = "Our dining atmosphere is casual and comfortable. To reflect this environment, we maintain a formal dress.";
    rightSide.appendChild(p);
    
    const form = document.createElement("form");
    form.classList.add("row", "g-5");
    rightSide.appendChild(form);
    
    //name
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("col-12");
    form.appendChild(nameDiv);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "guestName");
    nameLabel.classList.add("form-label");
    nameLabel.textContent = "Name";
    nameDiv.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.id = "guestName";
    nameInput.classList.add("form-control");
    nameDiv.appendChild(nameInput);

    //number
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("col-12");
    form.appendChild(numberDiv);

    const numberLabel = document.createElement("label");
    numberLabel.setAttribute("for", "guestNumber");
    numberLabel.classList.add("form-label");
    numberLabel.textContent = "Number of Guests";
    numberDiv.appendChild(numberLabel);

    const numberInput = document.createElement("input");
    numberInput.setAttribute("type", "number");
    nameInput.id = "guestNumber";
    numberInput.classList.add("form-control");
    numberDiv.appendChild(numberInput);

    //date
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("col-md-6");
    form.appendChild(dateDiv);

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.classList.add("form-label");
    dateLabel.textContent = "Date";
    dateDiv.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.id = "date";
    dateInput.classList.add("form-control");
    dateDiv.appendChild(dateInput);

    //time
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("col-md-6");
    form.appendChild(timeDiv);

    const timeLabel = document.createElement("label");
    timeLabel.setAttribute("for", "time");
    timeLabel.classList.add("form-label");
    timeLabel.textContent = "Time";
    timeDiv.appendChild(timeLabel);

    const timeInput = document.createElement("input");
    timeInput.setAttribute("type", "time");
    timeInput.id = "time";
    timeInput.classList.add("form-control");
    timeDiv.appendChild(timeInput);

    //submit
    const sumbitDiv = document.createElement("div");
    sumbitDiv.classList.add("col-12");
    form.appendChild(sumbitDiv);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("btn", "btn-warning", "w-100");
    submitButton.textContent = "BOOK A TABLE";
    sumbitDiv.appendChild(submitButton);

    return rightSide;
}

export default createForm;





