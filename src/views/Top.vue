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
        <div id="main-image"></div>
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
    color: #888888;
    font-size: 54px;
}

#main-text h1 {
    font-size: 90px;
    margin: 0;
}

#main-image {
    height: 256px;
    width: 256px;
    background-image: url("../assets/image/myicon_circle.ico");
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 30px #222222;
}

#main #first-name {
}
#main #last-name {
    margin-left: 180px;
}
</style>
