export const loadContact = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +39 055 123 4567";

    const email = document.createElement("p");
    email.textContent = "Email: info@tramontofirenze.it";

    const socialHeading = document.createElement("h3");
    socialHeading.textContent = "Follow Us:";

    const instagram = document.createElement("p");
    instagram.innerHTML = `<a href="https://instagram.com/tramontofirenze" target="_blank">@tramontofirenze</a>`;

    const facebook = document.createElement("p");
    facebook.innerHTML = `<a href="https://facebook.com/tramontofirenze" target="_blank">facebook.com/tramontofirenze</a>`;

    content.append(
        phone,
        email,
        socialHeading,
        instagram,
        facebook
    );
};
