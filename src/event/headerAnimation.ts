import { HEADER_FADE_HEIGHT } from "@/constants/dom";
import { addClassList } from "./addClassList";
import { removeClassList } from "./removeClassList";

export const headerAnimation = () => {
    // 100pxよりスクロール、もしくはポインタがヘッダーに触れていたら
    if (window.scrollY > HEADER_FADE_HEIGHT) {
        removeClassList('header', 'header-appear');
        addClassList('header', 'header-fade');
    } else {
        removeClassList('header', 'header-fade');
        addClassList('header', 'header-appear');
    }
}