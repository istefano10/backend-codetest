import { ApiService } from '../services/api.service';
const apiService = new ApiService();

export class AssetController {

    async getAssetsByaccountId(accountId: string) {
        const assets = await apiService.getAssets(accountId);
        return assets;
    }

}
