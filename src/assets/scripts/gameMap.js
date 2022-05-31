import { rkwGameObj } from "./rkwGameObj";
import { Snake } from "./snake";
export class GameMap extends rkwGameObj{
    constructor(ctx,parent){
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.snake =new Snake(this.ctx,this);
    }
    start(){

    }

    update(){
        this.update_size();
        this.render();
     
    }
    render() {
        let color_even = "#AAD751",color_odd = "#A2D149";

        for(let i = 0 ; i < 17; i ++){
            for(let j = 0 ; j < 15; j ++){
                if((i + j)% 2 == 0){
                    this.ctx.fillStyle = color_even;

                }
                else
                {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(i*this.L,j*this.L,this.L,this.L);
            }
        }
        
    }
    update_size(){
        this.L = Math.min(this.parent.clientWidth / 17 , this.parent.clientHeight / 15);
         console.log(this.L);
        this.ctx.canvas.width = this.L * 17 ; 
        this.ctx.canvas.height = this.L * 15 ; 
       
    }

}