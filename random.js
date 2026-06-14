const pages = [
    "shibl.html",
    "gerhard-linkemeyer.html",
    "rozpustna-randy.html",
    "josh-osbourne.html",
    "bbw-jackie.html",
    "uniwersum-ohueli.html",
    "sklep.html"
];

function randomPage(){
    const pick = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = pick;
}
