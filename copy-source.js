document.addEventListener("copy", function(e){

    const selection = window.getSelection().toString();

    if(!selection) return;

    const sourceText = "\n\nŹródło: ohuelopedia.pl";

    const modifiedText = selection + sourceText;

    e.clipboardData.setData("text/plain", modifiedText);
    e.preventDefault();

    showCopyToast();

});

function showCopyToast(){

    let toast = document.createElement("div");

    toast.innerText = "📋 Skopiowano";

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "linear-gradient(to bottom, #fefefe, #d6d6d6)";
    toast.style.border = "2px outset #ccc";
    toast.style.padding = "10px 14px";
    toast.style.fontFamily = "Tahoma, sans-serif";
    toast.style.fontSize = "12px";
    toast.style.color = "#000";
    toast.style.boxShadow = "3px 3px 0 rgba(0,0,0,0.3)";
    toast.style.zIndex = "99999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);

}
