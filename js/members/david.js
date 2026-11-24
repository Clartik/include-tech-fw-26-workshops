// Does nothing LOL
// INTEREST DATA
const interests = [
    {
        title: "Traveling",
        images: [
            {
                src: "./images/riocard.jpg",
                name: "Rio de Janeiro, Brazil",
                description: "FUN FACT: Rio is home to one of the world's largest urban forests, Tijuca National Park."
            },
            {
                src: "./images/egyptcard.jpg",
                name: "Cairo, Egypt",
                description: "FUN FACT: The Great Pyramid of Giza was the tallest human-made structure for nearly 3,800 years."
            },
            {
                src: "./images/amsterdamcard.jpg",
                name: "Amsterdam, Netherlands",
                description: "FUN FACT: Amsterdam has more bicycles than residents."
            }
        ]
    },

    {
        title: "Video Games",
        images: [
            {
                src: "./images/destinycard.jpg",
                name: "Destiny 2",
                description: "One of my favorite games, especially for its raids and multiplayer activities."
            },
            {
                src: "./images/gtavcard.jpg",
                name: "GTA V",
                description: "I enjoy the open world, missions, and playing online with friends."
            },
            {
                src: "./images/codcard.jpg",
                name: "Call of Duty MW3",
                description: "I enjoy the multiplayer and competitive side of the game."
            }
        ]
    },

    {
        title: "Sports",
        images: [
            {
                src: "./images/ramscard.jpg",
                name: "Los Angeles Rams",
                description: "FUN FACT: The Rams were the first NFL team to play in Los Angeles."
            },
            {
                src: "./images/metscard.jpg",
                name: "New York Mets",
                description: "FUN FACT: Their team colors combine the blue of the Dodgers and orange of the Giants."
            },
            {
                src: "./images/bullscard.jpg",
                name: "Chicago Bulls",
                description: "FUN FACT: The Chicago Bulls have kept the same iconic primary logo since 1966."
            }
        ]
    }
];


// CREATE CARDS
const container = document.getElementById("card-container");

interests.forEach((interest) => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3 class="card-title">${interest.title}</h3>

        <div class="card-image">
            <img src="${interest.images[0].src}" alt="${interest.images[0].name}">

            <div class="image-overlay">
                <h4>${interest.images[0].name}</h4>
                <p>${interest.images[0].description}</p>
            </div>
        </div>

        <div class="card-navigation">
            <div class="dots">
                ${interest.images.map((image, index) => `
                    <button type="button"
                    class="dot ${index === 0 ? "active" : ""}"
                    aria-label="Show ${image.name}"></button>
                `).join("")}
            </div>
        </div>
    `;

    container.appendChild(card);


    // SWITCH IMAGES
    const dots = card.querySelectorAll(".dot");
    const image = card.querySelector(".card-image img");
    const heading = card.querySelector(".image-overlay h4");
    const description = card.querySelector(".image-overlay p");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {

            image.src = interest.images[index].src;
            image.alt = interest.images[index].name;

            heading.textContent = interest.images[index].name;
            description.textContent = interest.images[index].description;

            dots.forEach((dot) => {
                dot.classList.remove("active");
            });

            dot.classList.add("active");

        });

    });

});


// THEME SWITCHER
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    }
    else {
        themeButton.textContent = "Dark Mode";
    }
});
