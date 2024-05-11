import axios, { type AxiosResponse } from "axios";

/**
 * APIに関する処理を行う
 */
export class ApiService {
    /**
     * GET APIを実行
     */
    public static async callGetApi<T>(url: string): Promise<T> {
        return axios
            .get(url)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
}
