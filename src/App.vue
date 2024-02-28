<template>
    <header>
        <RouterLink :to="{ name: 'top' }" id="top-button">
            <img src="./assets/image/myicon_circle.ico" alt="山本隼輔の写真" />
            <p class="header-text">Top</p>
        </RouterLink>
        <nav>
            <ul>
                <li>
                    <RouterLink :to="{ name: 'about' }" id="about">
                        <p class="header-text">About</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'works' }" id="works">
                        <p class="header-text">Works</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'projects' }" id="projects">
                        <p class="header-text">Projects</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'contact' }" id="contact">
                        <p class="header-text">Contact</p>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { startListener } from "@/event/eventListener";

startListener();
</script>

<style scoped>
a {
    text-decoration: none;
    color: #222222;
}
.content a {
    text-decoration: underline;
}

button:hover {
    cursor: pointer;
}

header {
    position: fixed;
    z-index: 10;
    height: 70px;
    width: 70%;
    top: 50px;
    left: calc(50% - 35%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Caveat", cursive;
    background-color: #ffffff;
}

header #top-button {
    display: flex;
    align-items: center;
    font-size: 36px;
    cursor: pointer;
}

header #top-button img {
    height: 70px;
    border-radius: 50%;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 30px;
    align-items: center;
    border-left: solid 1px #222222;
    font-size: 36px;
}

nav li {
    padding: 0 50px;
    height: 30px;
    display: flex;
    align-items: center;
    border-right: solid 1px #222222;
}

.header-text {
    position: relative;
    margin: 0;
}
.header-text::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: black;
    transition: all 0.5s;
    transform: scale(0, 0);
}
.header-text:hover::after {
    transform: scale(1, 1);
}
</style>
