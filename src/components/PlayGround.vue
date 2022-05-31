<template>
<div>
<score-board>
   
</score-board>
 <game-map></game-map>
</div>
</template>

<script>
import ScoreBoard from './ScoreBoard';
import GameMap from './GameMap';


export default{
    name:"PlayGround",
    components:{
        ScoreBoard,
        GameMap
        
    }

}
</script>

<style scoped>
div{
        height: 100%;
        width: 100%;
    background-color: #578A34;
}

</style>