import { rkwGameObj } from "./rkwGameObj";
import { Snake } from "./snake";
export class GameMap extends rkwGameObj{
    constructor(ctx,parent){
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.snake =new Snake(this.ctx,this);
        this.directions = []; //指令缓存队列 
        this.status = "waiting";

    }
    start(){
        this.ctx.canvas.focus();
        this.ctx.canvas.addEventListener('keydown',e => {
            
            if(e.key === "w" || e.key === "ArrowUp" || e.key === "W"){
                this.directions.push(0);
                e.preventDefault();
            }
                
            else if(e.key === "d" || e.key === "ArrowRight" || e.key === "D"){
                this.directions.push(1);
                e.preventDefault();
            }
               
            else if(e.key === "s" || e.key === "ArrowDown" || e.key === "S"){
                this.directions.push(2);
                e.preventDefault();
            }
                
            else if(e.key === "a" || e.key === "ArrowLeft" || e.key === "A"){
                this.directions.push(3);
                e.preventDefault();
            }
                
            // 防止用户重复按键，去除多余的按键次数
            let k = this.directions.length;
            if(k > 1 && this.directions[k - 1] === this.directions[k-2]){
                this.directions.pop();
            }
            // 缓冲区只保留最新的两次不重复按键，提高用户体验
            while(this.directions.length > 2){
                this.directions.splice(0,1);//从队列头开始去除
            }
            if(this.status === "waiting" && k && this.directions[0] !== 3){
                this.status = "playing";
                this.snake.direction = this.directions[0];
            }

        });
    }

    update(){
        // if(this.status === "playing")
        // {
            this.update_size();
            this.render();
        // }
        
     
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
         //console.log(this.L);
        this.ctx.canvas.width = this.L * 17 ; 
        this.ctx.canvas.height = this.L * 15 ; 
       
    }

}