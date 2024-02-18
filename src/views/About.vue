<template>
    <div class="content" id="about">
        <div class="content-title" id="about-title">
            <h2>About</h2>
        </div>
        <div class="content-text" id="about-text">
            <ul>
                <li
                    id="about-info"
                    v-for="aboutInfo in aboutInfoList"
                    :key="aboutInfo.title"
                >
                    <p id="about-title">{{ aboutInfo.title }}：</p>
                    <p id="about-text">{{ aboutInfo.text }}</p>
                </li>
            </ul>
            <div
                id="history-info"
                v-for="historyInfo in historyInfoList"
                :key="historyInfo.title"
            >
                <h3>{{ historyInfo.title }}：</h3>
                <p>{{ historyInfo.text }}</p>
                <div v-if="historyInfo.url">
                    参考リンク：<a :href="historyInfo.url">{{ historyInfo.urlName }}</a>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { getAboutInfoList, getHistoryInfoList } from "@/components/aboutInfo";
import type { IAboutInfo, IHistoryInfo } from "@/type/about";

const historyInfoList: IHistoryInfo[] = getHistoryInfoList();
const aboutInfoList: IAboutInfo[] = getAboutInfoList();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");

.content {
    padding: 50px 15%;
}

.content-title {
    margin: 0 auto;
}
.content-title h2 {
    font-size: 81px;
    font-family: "Caveat", cursive;
    text-align: center;
}

#about-info {
    margin: 0px 10px;
    display: flex;
    align-items: center;
}
#about-info #about-title {
    width: 100px;
    margin: 0px 10px;
    margin-right: 30px;
}
#about-info #about-text {
    margin: 0px 10px;
    margin-right: 20px;
}

#history-info {
    margin-bottom: 30px;
    padding: 20px;
    border: solid 2px #dddddd;
    border-radius: 20px;
}

#history-info h3 {
    font-size: 36px;
    margin: 10px;
}
</style>
