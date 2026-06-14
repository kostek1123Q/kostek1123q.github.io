const SFX = {
    click: new Audio("sounds/click.mp3"),
    open: new Audio("sounds/open.mp3"),
    folder: new Audio("sounds/folder.mp3"),
    page: new Audio("sounds/page.mp3"),
    error: new Audio("sounds/error.mp3")
};

function playSfx(name){
    if(SFX[name]){
        SFX[name].currentTime = 0;
        SFX[name].play();
    }
}
