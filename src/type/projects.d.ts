export interface IProjectsInfo {
    title: string;
    imgPath?: string;
    urlItems?: IUrlItems[];
    detail: string;
    tech: string;
    result: string;
}

interface IUrlItems {
    urlName: string;
    url: string;
}
