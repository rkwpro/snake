<template>
<div style="margin-top:0%">

<score-board  >
   
</score-board>
 <game-map>

 </game-map>


</div>
</template>

<script>
import ScoreBoard from './ScoreBoard';
import GameMap from './GameMap';
// import EndClick from './EndClick';


export default{
    name:"PlayGround",
    components:{
    ScoreBoard,
    GameMap,
    // EndClick,
    // EndClick
}

}
</script>

<style scoped>
div{
        height: 100%;
        width: 100%;
    background-color: #578A34;
    /* border-color:#578A34 ; */
    padding: 0px;

}



</style>