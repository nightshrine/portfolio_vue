<template>
    <div class="content-title">
        <h2>History</h2>
    </div>
    <div id="dot-border-first"></div>
    <div id="history-load">
        <div id="history" v-for="history in historyList" :key="history.title">
            <div id="point-circle"></div>
            <div id="month-year">
                {{ history.monthYear }}
            </div>
            <div id="history-content-title">
                {{ history.title }}
            </div>
            <p>{{ history.text }}</p>
            <div v-if="history.url">
                参考リンク：<a :href="history.url" target="_blank">{{
                    history.urlName
                }}</a>
            </div>
        </div>
    </div>
    <div id="dot-border-last"></div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Master from "@/master";
import type { IHistory } from "@/type/master";

const historyList: IHistory[] = Master.historyList;
</script>

<style scoped>
#history-load {
    padding-left: 100px;
    border-left: solid 5px #222222;
}

#dot-border-first {
    height: 50px;
    border-left: dashed 5px #222222;
}
#dot-border-last {
    margin-top: -100px;
    height: 50px;
    border-left: dashed 5px #222222;
}

#history {
    margin-bottom: 100px;
    padding: 20px;
    box-shadow: 2px 3px 5px #222222;
    border-radius: 20px;
    position: relative;
}

#month-year {
    position: absolute;
    width: 150px;
    height: 50px;
    text-align: right;
    font-size: 18px;
    opacity: 0.8;
    left: -270px;
    top: 20px;
}

#point-circle {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #222222;
    border-radius: 50%;
    left: -127px;
    top: 40px;
}

#history-content-title {
    font-size: 36px;
    margin: 10px;
}
</style>
