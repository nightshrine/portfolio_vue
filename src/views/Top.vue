<template>
    <video autoplay muted loop id="myVideo">
        <!-- <source src="../video/whiteball_black.mov" type="video/mp4" /> -->
    </video>
    <div id="main">
        <div id="main-text">
            <h2>Web Application Developper</h2>
            <h1 id="first-name">Shunsuke</h1> 
            <h1 id="last-name">Yamamoto</h1>
        </div>
        <div id="main-image">
            <img src="../assets/image/myicon_circle.ico" alt="山本隼輔の写真" />
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped>
#myVideo {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 1;
    z-index: -100;
    background-size: cover;
    background-repeat: no-repeat;
}

#main {
    width: 70%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Caveat", cursive;
}

#main-text {
    width: 60%;
}

#main-text h2 {
    color: #8e84ff;
    font-size: 54px;
}

#main-text h1 {
    font-size: 90px;
    margin: 0;
}

#main-image {
    height: 200px;
}

#main #first-name {
}
#main #last-name {
    margin-left: 180px;
}
</style>
