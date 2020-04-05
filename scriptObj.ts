class Board{
    cells: Cell[];
    currentSymbol: string ='X';
    resetBtN: HTMLElement = document.getElementById("Reset") as HTMLElement
    draw = new Array();
    constructor(){
        this.resetBtN.addEventListener("click", () => this.Reset())
        this.currentSymbol = "X";
        this.cells = new Array(9);
        this.cells[0] = new Cell(<HTMLElement>document.getElementById("0"));
        this.cells[1] = new Cell(<HTMLElement>document.getElementById("1"));
        this.cells[2] = new Cell(<HTMLElement>document.getElementById("2"));
        this.cells[3] = new Cell(<HTMLElement>document.getElementById("3"));
        this.cells[4] = new Cell(<HTMLElement>document.getElementById("4"));
        this.cells[5] = new Cell(<HTMLElement>document.getElementById("5"));
        this.cells[6] = new Cell(<HTMLElement>document.getElementById("6"));
        this.cells[7] = new Cell(<HTMLElement>document.getElementById("7"));
        this.cells[8] = new Cell(<HTMLElement>document.getElementById("8"));
        for(let i = 0; i<this.cells.length;i++){
            this.cells[i].htmlElement.addEventListener('click',(event)=>{this.NieWiemPoCo(event)})
        }
    }
    NieWiemPoCo(event){
        if(event.target.textContent==''){
            this.cells[event.target.id].makeMove(this.currentSymbol)
            this.currentSymbol = this.currentSymbol === 'O'?'X':'O';
            this.check();
            this.draw.push('val');
            console.log(this.draw);
        }
        else{
            console.log('Błąd');
        }
    }
    check(){
        let skos=0;
        
        do{
            if(this.cells[0+skos].htmlElement.innerText==this.cells[4].htmlElement.innerText&&this.cells[4].htmlElement.innerText==this.cells[8-skos].htmlElement.innerText&&this.cells[4].htmlElement.innerText!=null&&this.cells[4].htmlElement.innerText!=''){
                this.endalert(4);
            }
            skos=skos+2;
        }while(skos<3)
        
        for(let i=0;i<3;i++){
            if(this.cells[i].htmlElement.innerText==this.cells[i+3].htmlElement.innerText&&this.cells[i+3].htmlElement.innerText==this.cells[i+6].htmlElement.innerText&&this.cells[i+3].htmlElement.innerText!=null&&this.cells[i+3].htmlElement.innerText!=''){
                this.endalert(i);
            }
        }
        
        for(let j=0;j<3;j++){

            if(this.cells[j*3].htmlElement.innerText==this.cells[j*3+1].htmlElement.innerText&&this.cells[j*3+1].htmlElement.innerText==this.cells[j*3+2].htmlElement.innerText&&this.cells[j*3+1].htmlElement.innerText!=null&&this.cells[j*3+1].htmlElement.innerText!=''){
                this.endalert(j*3+1);
            }
        }

        if(this.draw.length==8){
            this.Reset();
        }

    }
    endalert(win){
        alert("wygrał "+ this.cells[win].htmlElement.innerText);
        this.Reset();
    }
    Reset(){
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].htmlElement.textContent=''
            console.log(this.cells[i].htmlElement.textContent)
        }
    }
}
class Cell{
    cellValue: string;
    htmlElement: HTMLElement;
    constructor(cell: HTMLElement){
        this.htmlElement = cell;
    }
    makeMove(symbol){
        this.htmlElement.textContent=symbol;
    }
}
window.addEventListener('load',()=>{new Board();})