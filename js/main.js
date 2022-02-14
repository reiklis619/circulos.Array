window.addEventListener("load", main);

function main () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;

    let body = document.getElementById("body");

    let circulos = new Array();
    let color = "#3498db";

    canvas.addEventListener("mousedown", cambiarTamaño);
    canvas.addEventListener("mousemove", mostrarCoordenadas);
    body.addEventListener("keydown", moverCirculos);

    function mostrarCoordenadas (e) {
        ctx.fillStyle = "blue";
        ctx.lineWidth = 10;
        ctx.clearRect(10, h - 30, w - 10, h);
        ctx.fillText("El mouse esta en x:" + e.clientX + " y: " + e.clientY, 20, h-20);
    }

    function moverCirculos (e) {
        ctx.clearRect(0,0,w,h);
        switch (e.key) {
            case "ArrowUp" :
                for (let i = 0; i < circulos.length; i++) {
                    circulos[i].mArriba();
                } break;
            case "ArrowDown" :
                for (let i = 0; i < circulos.length; i++) {
                    circulos[i].mAbajo();
                } break;
            case "ArrowLeft" :
                for (let i = 0; i < circulos.length; i++) {
                    circulos[i].mIzquierda();
                } break;
            case "ArrowRight" :
                for (let i = 0; i < circulos.length; i++) {
                    circulos[i].mDerecha();
                } break;
        }
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].dibujar(ctx);
        }
    }

    function cambiarTamaño(e) {
        ctx.clearRect(0,0,w,h);
        switch(e.button) {
            case 0 :
                for (let i = 0; i < circulos.length; i++) {
                    circulos[i].agrandar();
                }
                ctx.fillText(" El mouse está en la x: " + e.clientX, 50, 200);
                break;

            case 1 : 
                for (let i = 0; i < circulos.length; i++) {
                    if (circulos[i].radio > 10) {
                        circulos[i].reducir();
                    }
                }break;

            case 2 :
                colorRelleno = "rgb(" + circulos.length*10%256 + ",100,100)";
                circulos.push (new circulo(50, e.clienteX, e.clientY, undefined, color));
                document.getElementById("tecla").value = circulos.length;
                break;
        }
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].dibujar(ctx);
        }
    }
}