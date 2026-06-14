function loadCategoryPage(){

const category = new URLSearchParams(window.location.search).get("c");
const articles = document.querySelectorAll("[data-category]");
const container = document.getElementById("categoryList");

container.innerHTML = "";

articles.forEach(el => {

const cat = el.dataset.category;
const title = el.dataset.title || el.querySelector("h1")?.innerText;
const file = el.getAttribute("data-file");

if(cat === category){

container.innerHTML += `
<div class="entry">
<h3>${title}</h3>
<a class="button" href="${file}">Otwórz</a>
</div>
`;

}

});

}

if(document.getElementById("categoryList")){
loadCategoryPage();
}
