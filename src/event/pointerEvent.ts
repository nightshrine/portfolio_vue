import { HEADER_FADE_HEIGHT } from "@/constants/dom";
import { addClassList } from "./addClassList";
import { removeClassList } from "./removeClassList";

export const pointerEvent = (domName: string) => {
    const dom = document.querySelector(domName);
    if (dom === null) {
        console.error(`Element with id ${domName} not found`);
        return;
    }
    dom.addEventListener("pointerenter", () => {
        if (window.scrollY > HEADER_FADE_HEIGHT) {
            removeClassList("header", "header-fade");
            addClassList("header", "header-appear");
        }
    });
    dom.addEventListener("pointerleave", () => {
        if (window.scrollY > HEADER_FADE_HEIGHT) {
            addClassList("header", "header-fade");
            removeClassList("header", "header-appear");
        }
    });
};
