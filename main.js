let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let cor, mouseYfinal, mouseYinicial, mouseXfinal, mouseXinicial, touchXfinal, touchXinicial, touchYfinal, touchYinicial, largura;

canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    cor = document.getElementById("caixatextocor").value;
    largura = document.getElementById("caixatextolargura").value;
    mouseevento = "mousedown";
}
canvas.addEventListener("mousemove", mouseMove)
function mouseMove(e) {
    


    mouseXinicial = e.clientX - canvas.offsetLeft;
    mouseYinicial = e.clientY - canvas.offsetTop;

    if (mouseevento == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(mouseXfinal, mouseYfinal);
        ctx.lineTo(mouseXinicial, mouseYinicial);
        ctx.stroke();
    }
    mouseXfinal = mouseXinicial;
    mouseYfinal = mouseYinicial;
}
canvas.addEventListener("mouseup", mouseUp);
function mouseUp(e) {
    mouseevento = "mouseUp";
}
function limpar(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

novalarguradocanvas= screen.width*0.8;
novaalturadocanvas= screen.height*0.7;

if (screen.width<992){
    document.getElementById("mycanvas").width=novalarguradocanvas;
    document.getElementById("mycanvas").height=novaalturadocanvas;
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", touchstart);

function touchstart(e) {
    cor = document.getElementById("caixatextocor").value;
    largura = document.getElementById("caixatextolargura").value;
    mouseevento = "touchstart";
}
canvas.addEventListener("touchmove", touchmove)
function touchmove(e) {
    


    touchXinicial = e.touches[0].clientX - canvas.offsetLeft;
    touchYinicial = e.touches[0].clientY - canvas.offsetTop;

    if (mouseevento == "touchstart") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(touchXfinal, touchYfinal);
        ctx.lineTo(touchXinicial, touchYinicial);
        ctx.stroke();
    }
    touchXfinal = touchXinicial;
    touchYfinal = touchYinicial;
}
