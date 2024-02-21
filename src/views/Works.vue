<template>
    <div class="content" id="works">
        <div class="content-title" id="works-title">
            <h2>Works</h2>
        </div>
        <div class="content-text" id="works-text">
            <div class="work-company" v-for="workInfo in workInfoList">
                <h3>{{ workInfo.name }}</h3>
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
import { getWorksInfoList } from "@/components/worksInfo";
import type { IWorksInfo } from "@/type/works";
import { RouterView } from "vue-router";

const workInfoList: IWorksInfo[]  = getWorksInfoList();
</script>

<style scoped>

#works h3 {
    font-size: 54px;
    text-align: center;
    margin: 0 auto;
}

.work-company {
    margin: 100px 0px;
    padding: 20px;
    border: solid 2px #dddddd;
    border-radius: 20px;
}

.work-content {
}
.work-image {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
.work-description {
}
</style>
