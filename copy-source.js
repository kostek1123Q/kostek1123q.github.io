document.addEventListener("copy", function(e){

    const selection = window.getSelection().toString();

    if(!selection) return;

    const sourceText = "\n\nŹródło: ohuelopedia.pl";

    const modifiedText = selection + sourceText;

    e.clipboardData.setData("text/plain", modifiedText);
    e.preventDefault();

});
