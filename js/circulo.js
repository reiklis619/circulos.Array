class circulo {
    #x1;
    #y1;
    #r;
    #colorRelleno;

    constructor(x1,y1,r,color){
        this.#x1 = x1 || 100;
        this.#y1 = y1 || 50;
        this.#r = r || 30;
        this.#colorRelleno = color;
    }
    
    dibujar(contexto) {
        contexto.beginPath();
        contexto.arc(this.#x1,this.#y1,this.#r,0,2*Math.PI);
        contexto.fillStyle = this.#colorRelleno;
        contexto.closePath();
        contexto.fill(); 
    }

    agrandar () {
        this.#r += 10;
    }
    reducir () {
        this.#r -= 10;
    }
    get radio () {
        return this.#r;
    }
    mDerecha () {
        this.#x1 += 10;
    }
    mIzquierda () {
        this.#x1 -= 10;
    }
    mArriba () {
        this.#y1 -= 10;
    }
    mAbajo () {
        this.#y1 += 10;
    }
}