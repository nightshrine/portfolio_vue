import { startListener } from "@/event/eventListener";
import { ApiService } from "@/service/ApiService";
import type { IMasterResponseValue } from "./type/IMasterResponse";
import Master from "./master";

/**
 * 初期に行う動作をまとめたクラス
 */
export class Init {
    /**
     * 初期に行う動作
     */
    public static exec(): void {
        // アニメーションのイベントリスナーを設定
        startListener();
        // マスターデータを取得
        Promise.all([this.getMasterData()]).then(() => {
            console.log("マスターデータ取得完了");
        });
    }

    /**
     * マスターデータを取得
     */
    private static async getMasterData(): Promise<void> {
        const master = await ApiService.callGetApi<IMasterResponseValue>(
            "./master.json"
        );
        Master.init(
            master.aboutList,
            master.historyList,
            master.projectList,
            master.workList
        )
    }
}
