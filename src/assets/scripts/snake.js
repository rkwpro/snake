import { rkwGameObj } from "./rkwGameObj";
import { Cell } from "./cell";

export class Snake extends rkwGameObj{
    constructor(ctx,gamemap){
        super();
        this.ctx = ctx;
        this.gamemap = gamemap;

        this.cells = [];
        // this.status = gamemap.status;
        this.color = "#4876EC";
        this.dirs = [{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];//上右下左
        this.direction = 1;
        this.eps = 1e-1;//精度问题
        // ******************************调整区代码****************************
        this.speed = 5; //每秒钟走 speed 格

         // ******************************************************************
    }
    start(){
        this.cells.push(new Cell(4,7));
        for(let i = 4 ; i >= 1 ; i --)
        {
            this.cells.push(new Cell(i,7));
            
        }
        this.render();console.log("fdaaaaaaaaaaaaaaaaaaaaaa");
        
    }
    update(){
        if(this.gamemap.status === "playing"){
            this.render();
            this.update_body();
        }
        
      
    }
    get_direction(a,b){
        if(Math.abs(a.x - b.x) < this.eps && Math.abs(a.y - b.y) < this.eps)
        return -1;
        
        if(Math.abs(a.x - b.x) < this.eps)
        {
            if(b.y < a.y) return 0 ; 
            else 
            return 2;
        }
        if(Math.abs(a.y - b.y) < this.eps)
        {
            if(b.x > a.x) return 1 ; 
            else 
            return 3;
        }
    }
    update_body(){
        const k = this.cells.length - 1;
        const d = this.get_direction(this.cells[k],this.cells[k-1]);
        if(d >=0){
            const distance = this.speed * this.timedelta / 1000;
            this.cells[k].x += this.dirs[d].x * distance;
            this.cells[k].y += this.dirs[d].y * distance;
            this.cells[0].x += this.dirs[this.direction].x*distance;
            this.cells[0].y += this.dirs[this.direction].y*distance;
            
        }else{
           // console.log("snake_body执行move");
            const new_cells = [];
            const headi = this.cells[1].i + this.dirs[this.direction].x;
            const headj = this.cells[1].j + this.dirs[this.direction].y;//防止出现累计误差
            // this,

            new_cells.push(new Cell(headi,headj));//虚拟的
             new_cells.push(new Cell(headi,headj));//现实的
             for(let i = 1 ; i < k ;i ++ ){
                 new_cells.push(this.cells[i]);
             }
             this.cells = new_cells;

            // 缓冲读取方向

            const ds = this.gamemap.directions;
            console.log(ds);
            while (ds.length > 0 && (ds[0] === this.direction || ds[0] === (this.direction^2)))
            ds.splice(0,1);
            console.log(ds+"mei");
            if(ds.length > 0){
                this.direction = ds[0];
               // console.log("已经执行了");
                ds.splice(0,1);
            }


        }


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