import ApiClient from 'shared/src/lib/api/apiClient'

export default class AdventureWorksApiClient extends ApiClient {
    constructor() {
        super("https://localhost:7088/");
    }
}