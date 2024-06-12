<template>
    <div class="content" id="projects">
        <div class="content-title">
            <h2>Projects</h2>
        </div>
        <div class="content-text" id="projects-text">
            <div id="projects-detail">
                ※詳しくは<a
                    href="https://github.com/nightshrine"
                    target="_blank"
                    >Githubのマイページ</a
                >をご覧ください。
                <p class="pre-text">
                    プロジェクトをクリックすることで、詳細をご覧いただけます。
                </p>
                <p class="pre-text">
                    ※業務で作成した成果物については、実際の画面などを載せることができません。予めご了承ください。
                </p>
            </div>
            <div class="project-list">
                <div
                    class="project-frame"
                    @click="onClickProject(project)"
                    v-for="project in projectList"
                >
                    <div class="project-content">
                        <div id="project-content-title">
                            {{ project.title }}
                        </div>
                        <div class="project-description">
                            {{ project.detail }}
                        </div>
                    </div>
                </div>
            </div>
            詳しくは<a href="https://github.com/nightshrine" target="_blank"
                >Githubのマイページ</a
            >をご覧ください。
        </div>
    </div>
    <ProjectDialog
        v-if="showPropjectDialog"
        :project="showProject!"
        :closeDialog="closeProjectDialog"
    />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Master from "@/master";
import type { IProject } from "@/type/master";
import ProjectDialog from "./ProjectDialog.vue";
import { ref } from "vue";

const projectList: IProject[] = Master.projectList;

// プロジェクト詳細ダイアログを表示するか
const showPropjectDialog = ref(false);
// 表示するプロジェクト
const showProject = ref<IProject | undefined>();

// プロジェクトをクリックしたときの処理
const onClickProject = (project: IProject) => {
    showProject.value = project;
    showPropjectDialog.value = true;
};

// プロジェクト詳細ダイアログを閉じる
const closeProjectDialog = () => {
    showPropjectDialog.value = false;
};

</script>

<style scoped>
#projects-detail {
    margin-bottom: 50px;
}

.project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.project-frame {
    max-width: 28%;
    min-height: 200px;
    margin-bottom: 50px;
    box-shadow: 2px 3px 5px #222222;
    border-radius: 20px;
    padding: 10px;
    overflow: hidden;
    transition: box-shadow 0.5s;
}
.project-frame:hover {
    cursor: pointer;
    box-shadow: 7px 7px 20px #222222;
    transition: box-shadow 0.5s;
}

#project-content-title {
    font-size: 26px;
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
    opacity: 0.5;
    font-size: 18px;
}
</style>
