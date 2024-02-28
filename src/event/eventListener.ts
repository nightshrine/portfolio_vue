import { nextTick } from "vue";
import { headerAnimation } from "./headerAnimation";
import { pointerEvent } from "./pointerEvent";

export const startListener = () => {
    window.addEventListener('scroll', () => {
        headerAnimation();
    });
    nextTick(() => {
        pointerEvent("header");
    });
};