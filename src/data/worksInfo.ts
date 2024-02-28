import type { IWorksInfo } from "@/type/works";

export const getWorksInfoList = (): IWorksInfo[] => {
    const worksInfoList = [
        {
            name: "株式会社スプーキーズ",
            urlName: "株式会社スプーキーズ",
            url: "https://spookies.co.jp/",
            period: "2023年9月 - 現在",
            detail: "Vue3 + SpringBoot + Oracle + AWSでBtoBの業務アプリを開発しており、新規機能開発や拡張機能、バグ修正などを行っております。使用しているコミュニケーションツールや業務ツールとしては、Gather、Slack、Redmine、ClickUp、Gitlabなどです。最近ではJSとLaravelを使った簡単なゲームアプリを開発しています。",
            project: "見積管理・支援システム、LINEブラウザでできるゲームアプリ",
            tech: "Vue3、Java、TS、PHP、Laravel、MySQL、Oracle、AWS etc...",
        },
        {
            name: "株式会社プログメイト",
            urlName: "株式会社プログメイト",
            url: "https://www.promate.co.jp/",
            period: "2021年11月 - 現在",
            detail: "React + JSのTODOリスト制作や、JS + Laravelのイベント予約アプリの制作に携わりました。案件を行う際は個人開発という形でしたが、常にSlack上で社員の方と相談させていただけたことで、困ったことがあってもすぐに相談できたり、効率的な開発手法について随時学ぶことができ、とても貴重な経験となりました。",
            project: "TODOリスト、イベント予約アプリ",
            tech: "React、JS、PHP, Laravel MySQL etc...",
        }
    ];

    return worksInfoList;
};
