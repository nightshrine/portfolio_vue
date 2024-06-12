<template>
    <div class="content">
        <div class="content-title">
            <h2>About</h2>
        </div>
        <div class="content-text" id="about-text">
            <div id="about">
                <ul>
                    <li
                        id="about-list"
                        v-for="about in aboutList"
                        :key="about.title"
                    >
                        <p id="about-title">{{ about.title }}：</p>
                        <p id="about-text">{{ about.text }}</p>
                    </li>
                </ul>
            </div>
            <History></History>
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Master from "@/master";
import type { IAbout, IHistory } from "@/type/master";
import History from "./History.vue";

const aboutList: IAbout[] = Master.aboutList;
</script>

<style scoped>
#about {
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 3px 5px #222222;
}

#about-list {
    margin: 0px 10px;
    display: flex;
    align-items: center;
}
#about-list #about-title {
    width: 100px;
    margin: 0px 10px;
    margin-right: 30px;
}
#about-list #about-text {
    margin: 0px 10px;
    margin-right: 20px;
}
</style>
