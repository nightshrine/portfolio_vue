import type {
    IAbout,
    IHistory,
    IProject,
    IWork,
} from "../type/master";

/**
 * APIから取得するデータの型
 */
export interface IMasterResponseValue {
    aboutList: IAbout[];
    historyList: IHistory[];
    projectList: IProject[];
    workList: IWork[];
}
