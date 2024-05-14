<template>
    <div id="black-back">
        <div class="project-frame">
            <div class="close-dialog" @click="closeDialog"></div>
            <div class="project-content">
                <div id="project-content-title">
                    {{ project.title }}
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

.close-dialog {
    display: block;
    position: relative;
    width: 50px;
    height: 50px;
    margin: 10px 10px 0 auto;
}
.close-dialog:hover {
    cursor: pointer;
}
.close-dialog::before, .close-dialog::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
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
    height: 90%;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 10px;
    overflow: hidden;
    z-index: 110;
    box-shadow: 7px 7px 20px #222222;
    overflow-y: scroll;
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

#project-content-title {
    font-size: 54px;
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
