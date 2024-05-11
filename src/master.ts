import type { IHistory, IAbout, IProject, IWork } from "./type/master";

class Master {
    /** 個人情報 */
    public aboutList: IAbout[] = [];
    /** 経緯、歴史 */
    public historyList: IHistory[] = [];
    /** プロジェクト */
    public projectList: IProject[] = [];
    /** 就業経験、インターンなど */
    public workList: IWork[] = [];

    /**
     * マスターデータを取得
     */
    public init(
        aboutList: IAbout[],
        historyList: IHistory[],
        projectList: IProject[],
        workList: IWork[]
    ): void {
        this.aboutList = aboutList;
        this.historyList = historyList;
        this.projectList = projectList;
        this.workList = workList;
    }
}

export default new Master();