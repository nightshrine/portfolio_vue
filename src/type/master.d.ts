export interface IAbout {
    title: string;
    text: string;
}

export interface IHistory {
    title: string;
    text: string;
    urlName?: string;
    url?: string;
}

export interface IProject {
    title: string;
    imgPath?: string;
    urlItems?: IUrlItems[];
    detail: string;
    tech: string;
    result: string;
}

interface IUrlItem {
    urlName: string;
    url: string;
}

export interface IWork {
    name: string;
    urlName: string;
    url: string;
    period: string;
    detail: string;
    project: string;
    tech: string;
}