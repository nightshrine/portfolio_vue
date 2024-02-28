export const addClassList = (domName: string, className: string) => {
    const dom = document.querySelector(domName);
    if (dom === null) {
        console.error(`Element with id ${domName} not found`);
        return;
    }
    dom.classList.add(className);
}