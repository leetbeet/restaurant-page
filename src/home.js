import tuscanImg from "./tuscan-dish.jpg";

export const loadHome = () => {
    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About";
    const aboutDesc = document.createElement("p");
    aboutDesc.textContent = "Tramonto ('Sunset') is a charming, family-owned Italian restaurant in Florence, known for its warm ambiance and stunning evening views. Inspired by the golden Tuscan sunsets, Tramonto blends traditional recipes with fresh, seasonal ingredients.";

    const img = document.createElement("img");
    img.src = tuscanImg;
    img.alt = "Tuscan dish"

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";

    const hoursList = document.createElement("ul");
    const hoursListOne = document.createElement("li");
    hoursListOne.textContent = "Mon–Sat: 12:00–10:30";
    const hoursListTwo = document.createElement("li");
    hoursListTwo.textContent = "Sun: Closed";
    hoursList.append(hoursListOne, hoursListTwo);

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    const locationDesc = document.createElement("p");
    locationDesc.textContent = "Via delle Rose 18, Florence, Italy";

    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.append(aboutHeader, aboutDesc, img, hoursHeader, hoursList, locationHeader, locationDesc);
}