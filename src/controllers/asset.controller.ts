import { ActivateAssetInterface } from '../interfaces/activateAsset.interface';
import { ApiService } from '../services/api.service';
const apiService = new ApiService();

export class AssetController {

    async getAssetsByaccountId(accountId: string) {
        const assets = await apiService.getAssets(accountId);
        return assets;
    }

    async activateAsset(assetId: string, body: ActivateAssetInterface) {
        const test = await apiService.activateAsset(assetId, body);
        return test;
    }

}
