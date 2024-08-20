import { ApiClientLocal } from "./ApiClientLocal";

export default class AdventureWorksApiClient extends ApiClientLocal {
    constructor() {
        super("https://localhost:7088/");
    }
}