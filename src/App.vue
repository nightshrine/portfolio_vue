<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <RouterLink :to="{ name: 'top' }" id="top-button">
            <img src="./assets/image/myicon_circle.ico" alt="山本隼輔の写真" />
            TOP
        </RouterLink>
        <nav>
            <ul>
                <li>
                    <RouterLink :to="{ name: 'about' }" id="about"
                        >About</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'works' }" id="works"
                        >Works</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'projects' }" id="projects"
                        >Projects</RouterLink
                    >
                </li>
                <li>
                    <RouterLink :to="{ name: 'contact' }" id="contact"
                        >Contact</RouterLink
                    >
                </li>
            </ul>
        </nav>
    </header>
    <RouterView />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");

a {
    text-decoration: none;
    color: #dddddd;
}
.content a {
    text-decoration: underline;
    color: #dddddd;
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
    border-left: solid 2px #dddddd;
    font-size: 36px;
}

nav li {
    padding: 0 50px;
    height: 30px;
    display: flex;
    align-items: center;
    border-right: solid 2px #dddddd;
}
</style>
