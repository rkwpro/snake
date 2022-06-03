<template>
<div ref="div">
    <div class="divv">
         <canvas ref="canvas" tabindex="0"></canvas>
         <button class="ss" @click="restart" v-if="$store.state.restart">开始游戏</button>
    </div>
   <div class="divv">
         <div class="end-click">
            <div class="sd">    
                <button @click="up" class="up"></button>
            </div>
            <div class="sd">
                <button @click="left" class="left"></button>
                <button @click="down" class="down"></button>
                <button @click="right" class="right"></button>
            </div>
        </div>
   </div>
      
     
</div>


</template>

<script>
import {ref,onMounted} from 'vue';
import { GameMap } from '@/assets/scripts/gameMap';
import { useStore } from 'vuex';
export default{
    name:"GameMap",
    setup:() => {
        let div = ref(null);
        let canvas = ref(null);
        const store = useStore();
        let gamemap = null;
        onMounted(() => {
           gamemap = new GameMap(canvas.value.getContext('2d'),div.value,store);
            // console.log(store.state.score);
        });
        const restart = () => {
            gamemap.restart();
        }
        const up = () => {
            gamemap.up();
        }
         const down = () => {
            gamemap.down();
        }
         const left = () => {
            gamemap.left();
        }
         const right = () => {
            gamemap.right();
        }
        // const restart = () => {
        //     gamemap.restart();
        // }
        // const restart = () => {
        //     gamemap.restart();
        // }
        return {
            div,
            canvas,
            restart,
            up,
            right,
            down,
            left
        }

    }

}
</script>

<style scoped>
div {
    margin: 0%;
    height: calc(100% - 8vh );
    width: 100%;
    display: flex;
    flex-direction:column;
    /* justify-content:co */
    /* justify-content: row; */
    align-items: center;
}
.divv{
    display: flex;
     flex-direction:column;
    justify-content:center;
}
canvas{
    background-color: #aad751;
    height: auto;
    width: auto;
}
button{
    

cursor: pointer;
}
 .ss{
     position: absolute;
     background:#0d6efd;
     border:solid 0 ;
     font-size: 3vh;
     color: #fff;
     border-radius: 5px;
     padding: 3vh;
     cursor: pointer;
 }
 .sd{
    display: flex;
    flex-direction: row;
    /* justify-items: center; */
    justify-content: center;
    
}
 .end-click{
     margin: 0%;
     display: flex;
    flex-direction: column; height: 30vh; width: 100vw;margin-top: 0vh;}
 @media (min-width:960px){
 .end-click{display:none;}
 }
 button{
     display: flex;
     
     border: 0%;
     margin: 0;
 }
 .up{
/* left: 886px; */
/* top: 413px; */
display: flex;
flex-direction: row;
width: 12vh;
height: 12vh;
background: rgba(255, 141, 26,1);
border-radius: 15px;
margin: 0vh;

 }
 .left{
     /* left: 763px; */
    /* top: 535px; */
    
    display: flex;flex-direction: row;
width: 12vh;
height: 12vh;
background: rgba(255, 195, 0, 1);
border-radius: 15px;
margin-right: 2vh;

 }
 .down{
     display: flex;
     flex-direction: row;
     /* left: 886px; */
/* top: 535px; */
margin: 3 3vh;
width: 12vh;
height: 12vh;
background: rgba(42, 130, 228, 1);
border-radius: 15px;

 }
 .right{
      display: flex;
     flex-direction: column;
     /* left: 1009px; */
/* top: 534px; */
width: 12vh;
height: 12vh;
background: rgba(255, 87, 51, 1);
border-radius: 15px;
margin-left: 2vh;
 }
</style>