<template>
    <div class="content" id="projects">
        <div class="content-title" id="projects-title">
            <h2>Projects</h2>
        </div>
        <div class="content-text" id="projects-text">
            ※詳しくは<a href="https://github.com/nightshrine"
                >Githubのマイページ</a
            >をご覧ください。
            <p class="pre-text">
                ※業務で作成した成果物については、実際の画面などを載せることができません。予めご了承ください。
            </p>
            <div class="project-frame" v-for="projectInfo in projectsInfoList">
                <div class="project-content">
                    <div id="project-content-title">~{{ projectInfo.title }}~</div>
                    <div class="project-image">
                        <img
                            v-if="projectInfo.imgPath"
                            :src="getImgPath(projectInfo.imgPath)"
                            height="300x"
                            alt="イメージ画像"
                        />
                    </div>
                    <div class="project-description">
                        <ul>
                            <li v-if="projectInfo.urlItems"
                                v-for="urlItem in projectInfo.urlItems">
                                【参考URL】：<a v-bind:href="urlItem.url">
                                    {{ urlItem.urlName }}
                                </a>
                            </li>
                            <li>【概要】：{{ projectInfo.detail }}</li>
                            <li>【利用技術】：{{ projectInfo.tech }}</li>
                            <li>【成果】：{{ projectInfo.result }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            詳しくは<a href="https://github.com/nightshrine"
                >Githubのマイページ</a
            >をご覧ください。
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { getProjectsInfoList } from "@/components/projectsInfo";
import type { IProjectsInfo } from "@/type/projects";
import { RouterView } from "vue-router";

const projectsInfoList: IProjectsInfo[] = getProjectsInfoList();

const getImgPath = (imgPath: string) => {
    return new URL(imgPath, import.meta.url).href;
};
</script>

<style scoped>

#project-content-title {
    font-size: 56px;
    margin: 10px auto;
    text-align: center;
}

.project-frame {
    margin-bottom: 50px;
    box-shadow: 2px 3px 5px #222222;
    border-radius: 20px;
    padding-top: 10px;
    overflow: hidden;
}

.project-content {
}

.project-image {
    max-width: 100%;
    height: auto;
    text-align: center;
    object-fit: cover;
}

.project-description {
    flex: 1;
    padding: 0 20px;
}
</style>
