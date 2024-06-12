// 個人情報、自己紹介
export interface IAbout {
    title: string;
    text: string;
}

// 経歴
export interface IHistory {
    title: string;
    monthYear: string;
    text: string;
    urlName?: string;
    url?: string;
}

// 取り組んだプロジェクト
export interface IProject {
    title: string;
    imgPath?: string;
    urlItems?: IUrlItems[];
    detail: string;
    tech: string;
    result: string;
}

// プロジェクトのURL
interface IUrlItem {
    urlName: string;
    url: string;
}

// 今まで働いた企業
export interface IWork {
    name: string;
    urlName: string;
    url: string;
    period: string;
    detail: string;
    project: string;
    tech: string;
}