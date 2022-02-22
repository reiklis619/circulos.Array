window.addEventListener("load", main);

function main () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let r = 50

    let body = document.getElementById("body");

    let circulos = new Array();
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);


    canvas.addEventListener("mousedown", cambiarTamaño);
    canvas.addEventListener("mousemove", mostrarCoordenadas);
    body.addEventListener("keydown", moverCirculos);

    function mostrarCoordenadas (e) {
        ctx.fillStyle = "green";
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
                break;

            case 2 : 
                for (let i = 0; i < circulos.length; i++) {
                    if (circulos[i].radio > 10) {
                        circulos[i].reducir();
                    }
                }break;

            case 1 :
                color = '#'+Math.floor(Math.random()*16777215).toString(16);
                circulos.push (new circulo(e.clientX, e.clientY, r, color));
                document.getElementById("tecla").value = circulos.length;
                break;
        }
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].dibujar(ctx);
        }
    }
    
    function agrandar() {
        r = r+5;
    }
    function reducir() {
        if (r > 10) {
            r = r-5; 
        }
    }

    document.getElementById("boton5").onclick = agrandar;
    document.getElementById("boton6").onclick = reducir;
}