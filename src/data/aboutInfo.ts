import type { IAboutInfo, IHistoryInfo } from "@/type/about";

export const getAboutInfoList = (): IAboutInfo[] => {
    const aboutInfoList = [
        {
            title: "氏名",
            text: "山本隼輔",
        },
        {
            title: "大学",
            text: "静岡大学・情報学部・情報科学科4年",
        },
        {
            title: "Github",
            text: "@nightshrine",
        },
        {
            title: "趣味",
            text: "プログラミング、ピアノ、アニメ鑑賞",
        },
    ];

    return aboutInfoList;
};

export const getHistoryInfoList = (): IHistoryInfo[] => {
    const historyInfoList = [
        {
            title: "2020年8月",
            text: "競技プログラミングがきっかけで、プログラミングを始めました。（Atcoderレート: 1101)",
            urlName: "Atcoderマイページ",
            url: "https://atcoder.jp/users/nightshrine",
        },
        {
            title: "2021年11月",
            text: "株式会社プログメイト入社。Web開発を主に取り組んでいます。React + JSのTODOリスト制作や、JS + Laravelのイベント予約アプリの制作に携わりました。案件を行う際は個人開発という形でしたが、常にSlack上で社員の方と相談させていただけたことで、困ったことがあってもすぐに相談できたり、効率的な開発手法について随時学ぶことができ、とても貴重な経験となりました。",
        },
        {
            title: "2023年3月",
            text: "研究室に配属され、汎用言語モデルを用いた効率的な類似特許検索を行っております。本研究は企業連携で行っており、類似特許検索を行ったり特許データを収集したりするためのプログラムをpythonで書きました。その後FastAPIとしてAPI化を行い、別の企業が作成したバックエンドとつなぎ込みを行って、最終的にWeb上で特許検索を行えるWebアプリを開発できました。また、本研究は2024年3月に言語処理学会で発表を行います。",
            urlName: "言語処理学会第30回年次大会プログラム",
            url: "https://www.anlp.jp/proceedings/annual_meeting/2024/#%E6%B1%8E%E7%94%A8%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E5%8A%B9%E7%8E%87%E7%9A%84%E3%81%AA%E9%A1%9E%E4%BC%BC%E7%89%B9%E8%A8%B1%E6%A4%9C%E7%B4%A2:~:text=%E7%9A%84%E3%81%AA%E9%A1%9E%E4%BC%BC-,%E7%89%B9%E8%A8%B1,-%E6%A4%9C%E7%B4%A2",
        },
        {
            title: "2023年9月",
            text: "株式会社Spookies入社。Vue3 + SpringBoot + Oracle + AWSでBtoBの業務アプリを開発しており、新規機能開発や拡張機能、バグ修正などを行っております。使用しているコミュニケーションツールや業務ツールとしては、Gather、Slack、Redmine、ClickUp、Gitlabなどです。勤務時間としては、大学の授業があるシーズンは週に平均24時間、長期休みの際には平均28時間ほど勤務しております。",
        },
        {
            title: "2024年4月",
            text: "4月から同大学の大学院に進学します。",
        },
    ];

    return historyInfoList;
};
