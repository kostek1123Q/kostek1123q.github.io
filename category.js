function loadCategory(){

const articles = document.querySelectorAll("[data-category]");
const container = document.getElementById("categoryList");

container.innerHTML = "";

articles.forEach(a => {

const title = a.querySelector("h1")?.innerText || "Bez tytułu";
const category = a.dataset.category;

if(category === "postacie"){
    container.innerHTML += `
        <div class="entry">
            <h2>${title}</h2>
            <a class="button" href="${title.toLowerCase()}.html">
                Otwórz
            </a>
        </div>
    `;
}

});

}

loadCategory();
