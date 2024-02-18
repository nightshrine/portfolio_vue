<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <div class="content" id="contact">
        <div class="content-title" id="contact-title">
            <h2>Contact</h2>
        </div>
        <div class="content-text" id="contact-text">
            <p>
                お問い合わせは<a
                    href="mailto:yamamoto.shunsuke.20@gmail.com?subject=お問い合わせ"
                    >こちら</a
                >
                から。(yamamoto.shunsuke.20@gmail.com宛てのメールソフトが立ち上がります。)<br />
                Web系であれば、フロントエンド、バックエンド問わず尽力いたします。お仕事の依頼などあれば、是非ご連絡ください。お待ちしております。
            </p>
        </div>
    </div>

    <RouterView />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
</style>
