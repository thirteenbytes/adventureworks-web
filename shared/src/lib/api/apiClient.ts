import axios, {AxiosInstance } from "axios";

export default class ApiClient {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL, 
            headers: {
                'Content-Type': 'application/json',   
            }
        });
    }

    get instance() {
        return this.client;
    }
}