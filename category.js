function loadCategory(){

const cat = new URLSearchParams(window.location.search).get("c");
const container = document.getElementById("categoryList");

container.innerHTML = "";

WIKI_PAGES.forEach(page => {

if(page.category === cat){

container.innerHTML += `
<div class="entry">
    <h3>${page.title}</h3>
    <a class="button" href="${page.file}">Otwórz</a>
</div>
`;

}

});

}

if(document.getElementById("categoryList")){
loadCategory();
}
