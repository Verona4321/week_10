const text = `Я учу JavaScript!`
function textShow(text) {
    console.log(text);
};

textShow(text);

function showPicture() {
    let elem = document.getElementById('elem');
    let image = document.getElementById('elem-img-1'); 

    if(image.src.match('assets/1.png')) {
        image.src = 'assets/2.png'
    } else {
        image.src = 'assets/1.png'
    }
}





