<template>
    <div id="black-back">
        <div class="project-area">
            <div class="close-dialog-circle" @click="closeDialog">
                <div class="close-dialog"></div>
            </div>
            <div class="project-frame">
                <div class="project-content">
                    <div id="project-content-title-area">
                        <div id="project-content-title">
                            {{ project.title }}
                        </div>
                    </div>
                    <div class="project-image">
                        <img
                            v-if="project.imgPath"
                            :src="getImgPath(project.imgPath)"
                            height="300x"
                            alt="イメージ画像"
                        />
                    </div>
                    <div class="project-description">
                        <ul>
                            <li
                                v-if="project.urlItems"
                                v-for="urlItem in project.urlItems"
                            >
                                【参考URL】：<a
                                    v-bind:href="urlItem.url"
                                    target="_blank"
                                >
                                    {{ urlItem.urlName }}
                                </a>
                            </li>
                            <li>【概要】：{{ project.detail }}</li>
                            <li>【利用技術】：{{ project.tech }}</li>
                            <li>【成果】：{{ project.result }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProject } from "@/type/master";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
    project: IProject;
    closeDialog: () => void;
}>();

const getImgPath = (imgPath: string) => {
    return new URL(imgPath, import.meta.url).href;
};
</script>

<style scoped>
#black-back {
    background-color: rgba(34, 34, 34, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-area {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close-dialog-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    right: 10%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 7px 7px 20px #222222;
    z-index: 120;
}
.close-dialog-circle {
    cursor: pointer;
}
.close-dialog {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
}
.close-dialog::before,
.close-dialog::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 2px;
    background-color: #000;
    transform: translate(-50%, -50%);
}
.close-dialog::before {
    transform: translate(-50%, -50%) rotate(45deg);
}
.close-dialog::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.project-frame {
    width: 60%;
    height: 85%;
    position: relative;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 10px;
    z-index: 110;
    box-shadow: 7px 7px 20px #222222;
}

.project-content {
    height: 100%;
    overflow-y: scroll;
}
.project-content::-webkit-scrollbar {
    background-color: transparent;
}
.project-content::-webkit-scrollbar-thumb {
    background-color: skyblue;
    border-radius: 10px;
}

#project-content-title-area {
    display: flex;
    justify-content: center;
    align-items: center;
}
#project-content-title {
    display: inline-block;
    font-size: 54px;
    text-align: left;
    margin: 10px auto;
}

.project-image {
    max-width: 100%;
    height: auto;
    text-align: center;
    object-fit: contain;
}

.project-description {
    flex: 1;
}
</style>
