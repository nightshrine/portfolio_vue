<template>
    <div class="content" id="works">
        <div class="content-title" id="works-title">
            <h2>Works</h2>
        </div>
        <div class="content-text" id="works-text">
            <div class="work-company" v-for="workInfo in workInfoList">
                <div id="work-content-title">{{ workInfo.name }}</div>
                <div class="work-content">
                    <div class="work-description">
                        <ul>
                            <li>【企業URL】：<a v-bind:href="workInfo.url">
                                {{ workInfo.urlName }}
                            </a></li>
                            <li>【期間】：{{ workInfo.period }}</li>
                            <li>【概要】：{{ workInfo.detail }}</li>
                            <li>【開発物】：{{ workInfo.project }}</li>
                            <li>【利用技術】：{{ workInfo.tech }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { getWorksInfoList } from "@/data/worksInfo";
import type { IWorksInfo } from "@/type/works";
import { RouterView } from "vue-router";

const workInfoList: IWorksInfo[]  = getWorksInfoList();
</script>

<style scoped>

#work-content-title {
    font-size: 54px;
    text-align: center;
    margin: 0 auto;
}

.work-company {
    margin: 100px 0px;
    padding: 20px;
    box-shadow: 2px 3px 5px #222222;
    border-radius: 20px;
}

.work-image {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}

</style>
