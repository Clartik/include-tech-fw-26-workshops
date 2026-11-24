/* INTEREST DATA */
let interests = [
    {
        title: "Traveling",
        images: [
            {
                src: "../assets/members/david/riocard.jpg",
                name: "Rio de Janeiro, Brazil",
                description: "FUN FACT: Rio is home to one of the world's largest urban forests, Tijuca National Park."
            },
            {
                src: "../assets/members/david/egyptcard.jpg",
                name: "Cairo, Egypt",
                description: "FUN FACT: The Great Pyramid of Giza was the tallest human-made structure for nearly 3,800 years."
            },
            {
                src: "../assets/members/david/amsterdamcard.jpg",
                name: "Amsterdam, Netherlands",
                description: "FUN FACT: Amsterdam has more bicycles than residents."
            }
        ]
    },

    {
        title: "Video Games",
        images: [
            {
                src: "../assets/members/david/destinycard.jpg",
                name: "Destiny 2",
                description: "One of my favorite games, especially for its raids and multiplayer activities."
            },
            {
                src: "../assets/members/david/gtavcard.jpg",
                name: "GTA V",
                description: "I enjoy the open world, missions, and playing online with friends."
            },
            {
                src: "../assets/members/david/codcard.jpg",
                name: "Call of Duty MW3",
                description: "I enjoy the multiplayer and competitive side of the game."
            }
        ]
    },

    {
        title: "Sports",
        images: [
            {
                src: "../assets/members/david/ramscard.jpg",
                name: "Los Angeles Rams",
                description: "FUN FACT: The Rams were the first NFL team to play in Los Angeles."
            },
            {
                src: "../assets/members/david/metscard.jpg",
                name: "New York Mets",
                description: "FUN FACT: Their team colors combine the blue of the Dodgers and orange of the Giants."
            },
            {
                src: "../assets/members/david/bullscard.jpg",
                name: "Chicago Bulls",
                description: "FUN FACT: The Chicago Bulls have kept the same iconic primary logo since 1966."
            }
        ]
    }
];


/* CREATE INTEREST CARDS */
let container = document.getElementById("card-container");

for (let i = 0; i < interests.length; i++) {

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
        '<h3 class="card-title">' + interests[i].title + '</h3>' +

        '<div class="card-image">' +
            '<img id="image-' + i + '" src="' + interests[i].images[0].src + '">' +

            '<div class="image-overlay">' +
                '<h4 id="name-' + i + '">' + interests[i].images[0].name + '</h4>' +
                '<p id="description-' + i + '">' + interests[i].images[0].description + '</p>' +
            '</div>' +
        '</div>' +

        '<div class="card-navigation">' +
            '<div class="dots">' +
                '<button class="dot active" onclick="changeImage(' + i + ', 0)"></button>' +
                '<button class="dot" onclick="changeImage(' + i + ', 1)"></button>' +
                '<button class="dot" onclick="changeImage(' + i + ', 2)"></button>' +
            '</div>' +
        '</div>';

    container.appendChild(card);
}


/* SWITCH IMAGES */
function changeImage(cardNumber, imageNumber) {

    let image = document.getElementById("image-" + cardNumber);
    let name = document.getElementById("name-" + cardNumber);
    let description = document.getElementById("description-" + cardNumber);

    image.src = interests[cardNumber].images[imageNumber].src;
    image.alt = interests[cardNumber].images[imageNumber].name;

    name.textContent = interests[cardNumber].images[imageNumber].name;
    description.textContent = interests[cardNumber].images[imageNumber].description;

    let card = container.children[cardNumber];
    let dots = card.getElementsByClassName("dot");

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[imageNumber].classList.add("active");
}


/* THEME SWITCHER */
let themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    }
    else {
        themeButton.textContent = "Dark Mode";
    }
});
