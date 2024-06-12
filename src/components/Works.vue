<template>
    <div class="content" id="works">
        <div class="content-title">
            <h2>Works</h2>
        </div>
        <div class="content-text" id="works-text">
            <div class="work-company" v-for="work in workList">
                <div id="work-content-title">{{ work.name }}</div>
                <div class="work-content">
                    <div class="work-description">
                        <ul>
                            <li>
                                【企業URL】：<a
                                    v-bind:href="work.url"
                                    target="_blank"
                                >
                                    {{ work.urlName }}
                                </a>
                            </li>
                            <li>【期間】：{{ work.period }}</li>
                            <li>【概要】：{{ work.detail }}</li>
                            <li>【開発物】：{{ work.project }}</li>
                            <li>【利用技術】：{{ work.tech }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import Master from "@/master";
import type { IWork } from "@/type/master";
import { RouterView } from "vue-router";

const workList: IWork[] = Master.workList;
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
