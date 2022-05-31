<template>
<div ref="div">
    <canvas ref="canvas"></canvas>
</div>

</template>

<script>
import {ref,onMounted} from 'vue';
import { GameMap } from '@/assets/scripts/gameMap';
export default{
    name:"GameMap",
    setup:() => {
        let div = ref(null);
        let canvas = ref(null);
        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'),div.value);
        });
        return {
            div,
            canvas
        }

    }

}
</script>

<style scoped>
div {
    height: calc(100% - 8vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas{
    background-color: #aad751;
    /* height: 80%;
    width: 80%; */
}
</style>