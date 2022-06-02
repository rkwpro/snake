<template>
<div class="score-board">
<div class="apple">
    <img src="https://app2468.acapp.acwing.com.cn/static/images/apple.png" alt="">
    <div>{{ $store.state.score }}</div>
</div>
<div class="cup">
    <img src="https://app2468.acapp.acwing.com.cn/static/images/cup.png" alt="" >
   <div>{{ $store.state.record }}</div>
</div>
</div>

</template>

<script>
export default{
    name:"ScoreBoard",

}
</script>

<style scoped>
.score-board{
height: 8vh;
background-color: #4a752c;
display: flex;
justify-content: space-around;
user-select: none;
}
.apple{
    display: flex;
    align-items: center;
}

 .apple > div{
     color: #fff;
     font-weight: bold;
     font-size: 2.5vh;
     margin-left: 1.5vh;
 }
.apple > img{
width: 6vh;
height: 6vh;
}
.cup{
      display: flex;
      align-items: center;
 }
.cup > img{
    width: 5vh;
    height: 5vh;
}
 .cup > div{
     color: #fff;
     font-weight: bold;
     font-size: 2.5vh;
     margin-left: 1.5vh;
 }

</style>