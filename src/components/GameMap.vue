<template>
<div ref="div">
    <canvas ref="canvas" tabindex="0"></canvas>
    <button @click="restart" v-if="$store.state.restart">开始游戏</button>
     
</div>
<div class="showphone" >
    <div class ="sp">
        show on phone
    </div>
    <div class ="sp">
        当前在手机端展示
    </div>
    <div class ="sp">
        后续此区域将加入方向键<br>
        适配手机
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
        return {
            div,
            canvas,
            restart,
        }

    }

}
</script>

<style scoped>
div {
    margin: 0%;
    height: calc(100% - 8vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas{
    background-color: #aad751;
    height: auto;
    width: auto;
}
 .showphone{display:inline; height: 10vh;width: 100vw;margin-top: 2vh;}
 @media (min-width:960px){
 .showphone{display:none;}
 }
 .sp{
     height: auto;
 }
 button{
     position: absolute;
     background:#0d6efd;
     border:solid 0 ;
     font-size: 3vh;
     color: #fff;
     border-radius: 5px;
     padding: 3vh;
     cursor: pointer;
 }
</style>