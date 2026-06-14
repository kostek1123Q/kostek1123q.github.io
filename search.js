function searchWiki(){

const pages = [
    {title:"Shibl", url:"shibl.html"},
    {title:"Uniwersum Ohueli", url:"uniwersum-ohueli.html"}
];

let q = document.getElementById("searchInput").value.toLowerCase();
let out = document.getElementById("results");

out.innerHTML = "";

pages.forEach(p=>{
    if(p.title.toLowerCase().includes(q)){
        out.innerHTML += `<a href="${p.url}">${p.title}</a>`;
    }
});

}
