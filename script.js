var card = document.querySelector("#card");
var dil = document.querySelector("i");

card.addEventListener("dblclick", function(){
    dil.style.transform = 'translate(-50%, -50%) scale(1)';

    

    setTimeout(function () {
        dil.style.transform = 'translate(-50%, -50%) scale(0)';
    },2000);

    setTimeout(function () {
        dil.style.opacity = 0;
    },2000);
});
