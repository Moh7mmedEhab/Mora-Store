let nav = document.querySelector("nav");

let menu = document.querySelector(".menu");

let list = document.querySelector(".list");

let links = document.querySelectorAll(".link");

let listOpened = false;

let gloves = document.querySelector("#gloves");

let shoes = document.querySelector("#shoes");

async function getProducts() {

    await fetch("JS/JSON/main.json")

        .then(response => response.json())

        .then(data => {

        for (let key in data) {

            if (data[key].category == "gloves") {

                let product = document.createElement("div");

                product.className = "product";

                let image = document.createElement("img");

                image.setAttribute("src", data[key].image);

                image.setAttribute("alt", data[key].name);

                let overlay = document.createElement("div");

                overlay.className = "overlay";

                let prName = document.createElement("h1");

                prName.innerText = data[key].name;

                let prDes = document.createElement("h2");

                prDes.innerText = data[key].description;

                let buy = document.createElement("a");

                buy.innerText = "Buy";

                buy.className = "buy";

                buy.setAttribute("href", `https://wa.me/+201062089220?text=${(data[key].name).replace(/\s+/g, "+")}`);

                buy.setAttribute("target", "_blank");

                overlay.appendChild(prName);

                overlay.appendChild(prDes);

                overlay.appendChild(buy);

                product.appendChild(image);

                product.appendChild(overlay);

                gloves.appendChild(product);

            } else if (data[key].category == "shoes") {

                let product = document.createElement("div");

                product.className = "product";

                let image = document.createElement("img");

                image.setAttribute("src", data[key].image);

                image.setAttribute("alt", data[key].name);

                let overlay = document.createElement("div");

                overlay.className = "overlay";

                let prName = document.createElement("h1");

                prName.innerText = data[key].name;

                let prDes = document.createElement("h2");

                prDes.innerText = data[key].description;

                let buy = document.createElement("a");

                buy.innerText = "Buy";

                buy.className = "buy";

                buy.setAttribute("href", `https://wa.me/+201062089220?text=${(data[key].name).replace(/\s+/g, "+")}`);

                buy.setAttribute("target", "_blank");

                overlay.appendChild(prName);

                overlay.appendChild(prDes);

                overlay.appendChild(buy);

                product.appendChild(image);

                product.appendChild(overlay);

                shoes.appendChild(product);

            }

        }

    });

}

getProducts();

window.addEventListener("resize", () => {

    if (window.innerWidth >= 800) {

        listOpened = false;

        list.removeAttribute("style");

    }

});

menu.addEventListener("click", () => {

    if (!listOpened) {

        list.style.display = "flex";

        list.style.left = "0px";

        list.style.top = `${nav.getBoundingClientRect().bottom + list.style.padding}px`;

        list.style.height = "auto";

        listOpened = true;

    } else {

        list.removeAttribute("style");

        listOpened = false;

    }

});

links.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 800) {

            listOpened = false;

            list.removeAttribute("style");

    }

});

});