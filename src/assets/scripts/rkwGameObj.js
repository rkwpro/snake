const RKW_GAME_OBJS = [];

export class rkwGameObj{
    constructor()
    {
        
        RKW_GAME_OBJS.push(this);
        this.timedelta = 0;//ms
        this.has_called_start = false;

    }
    start(){

    }
    update(){

    }
    on_destroy(){

    }
    destroy(){
       
        this.on_destroy();
        // RKW_GAME_OBJS =[];
        for(let i in RKW_GAME_OBJS)
        {
            const obj = RKW_GAME_OBJS[i];
            console.log(obj);
            if(obj === this){
                console.log("执行删除");
                RKW_GAME_OBJS.splice(i,1);//从i开始删除一个
                break;
            }
            
            
        }
        

    }
}

let last_timestamp;
const step = timestamp => {
    for(let obj of RKW_GAME_OBJS){
        if(!obj.has_called_start){
            obj.start();
            obj.has_called_start = true;
        }
        else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
};
requestAnimationFrame(step);