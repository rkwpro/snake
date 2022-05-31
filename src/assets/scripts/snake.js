import { rkwGameObj } from "./rkwGameObj";
import { Cell } from "./cell";
export class Snake extends rkwGameObj{
    constructor(ctx,gamemap){
        super();
        this.ctx = ctx;
        this.gamemap = gamemap;

        this.cells = [];

        this.color = "#4876EC";
        this.dirs = [{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];//上右下左
        this.direction = 1;
    }
    start(){
        this.cells.push(new Cell(4,7));
        for(let i = 4 ; i >= 1 ; i --)
        {
            this.cells.push(new Cell(i,7));
        }
    }
    update(){
        this.render();
        this.update_body();

    }
    update_body(){

    }
    render(){
        const L = this.gamemap.L;
        this.ctx.fillStyle = this.color;
        for(let cell of this.cells)
        {
            this.ctx.beginPath();
            this.ctx.arc(cell.x * L,cell.y*L,L/2,0,Math.PI*2);
            this.ctx.fill();
        }
        
    }
}