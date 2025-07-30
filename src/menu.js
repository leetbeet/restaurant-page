export const loadMenu = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    function createMenuSection(titleText, items) {
        const section = document.createElement("div");

        const heading = document.createElement("h2");
        heading.textContent = titleText;
        section.appendChild(heading);

        const list = document.createElement("ul");

        items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

        section.appendChild(list);
        return section;
    }


    content.appendChild(createMenuSection("Antipasti (Starters)", [
    "Bruschetta al Pomodoro",
    "Carpaccio di Manzo",
    "Crostini Toscani",
    "Caprese"
    ]));

    content.appendChild(createMenuSection("Primi Piatti (First Courses)", [
    "Pici al Cinghiale",
    "Ribollita",
    "Gnocchi al Pesto",
    "Tagliatelle ai Funghi Porcini"
    ]));

    content.appendChild(createMenuSection("Secondi Piatti (Main Courses)", [
    "Bistecca alla Fiorentina",
    "Pollo al Mattone",
    "Branzino al Forno",
    "Melanzane alla Parmigiana"
    ]));

    content.appendChild(createMenuSection("Contorni (Sides)", [
    "Patate Arrosto",
    "Verdure Grigliate",
    "Insalata Mista"
    ]));

    content.appendChild(createMenuSection("Dolci (Desserts)", [
    "Tiramisù della Casa",
    "Crostata di Limone",
    "Panna Cotta",
    "Gelato Artigianale"
    ]));

    content.appendChild(createMenuSection("Bevande (Drinks)", [
    "Vini Toscani",
    "Caffè Espresso / Cappuccino",
    "Aqua Naturale / Frizzante",
    "Limonata / Aranciata"
    ]));
}