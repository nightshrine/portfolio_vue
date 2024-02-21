<template>
    <div class="content" id="about">
        <div class="content-title" id="about-title">
            <h2>About</h2>
        </div>
        <div class="content-text" id="about-text">
            <div id="about-info">
                <ul>
                    <li
                        id="about-info-list"
                        v-for="aboutInfo in aboutInfoList"
                        :key="aboutInfo.title"
                    >
                        <p id="about-title">{{ aboutInfo.title }}：</p>
                        <p id="about-text">{{ aboutInfo.text }}</p>
                    </li>
                </ul>
            </div>
            <h3>History</h3>
            <div id="dot-border"></div>
            <div id="history-info-load">
                <div
                    id="history-info"
                    v-for="historyInfo in historyInfoList"
                    :key="historyInfo.title"
                >
                    <div id="point-circle"></div>
                    <div id="history-content-title">
                        {{ historyInfo.title }}
                    </div>
                    <p>{{ historyInfo.text }}</p>
                    <div v-if="historyInfo.url">
                        参考リンク：<a :href="historyInfo.url">{{
                            historyInfo.urlName
                        }}</a>
                    </div>
                </div>
            </div>
            <div id="dot-border-last"></div>
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
.content-title {
    margin: 0 auto;
}

#about-info {
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 3px 5px #222222;
}

#about-info-list {
    margin: 0px 10px;
    display: flex;
    align-items: center;
}
#about-info-list #about-title {
    width: 100px;
    margin: 0px 10px;
    margin-right: 30px;
}
#about-info-list #about-text {
    margin: 0px 10px;
    margin-right: 20px;
}

#history-info-load {
    padding-left: 100px;
    border-left: solid 5px #222222;
}

#dot-border {
    height: 50px;
    border-left: dashed 5px #222222;
}
#dot-border-last {
    margin-top: -30px;
    height: 50px;
    border-left: dashed 5px #222222;
}

#history-info {
    margin-bottom: 30px;
    padding: 20px;
    box-shadow: 2px 3px 5px #222222;
    border-radius: 20px;
    position: relative;
}

#point-circle {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #222222;
    border-radius: 50%;
    left: -129px;
    top: 40px;
}

#history-content-title {
    font-size: 36px;
    margin: 10px;
}
</style>
