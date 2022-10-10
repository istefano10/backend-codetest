import { AssetController } from '../../../src/controllers/asset.controller';
import { ApiService } from '../../../src/services/api.service';
import { ActivateAssetInterface } from '../../../src/interfaces/asset.interface';

const apiService = new ApiService();
const assetController = new AssetController();

describe('Asset Controller', () => {
    const tokenMock = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2MzNlZTg1ZjQzM2QwYzg3ZjRhN2JiYWEifQ.qtxGTKaaKtCDNbsNkxWGAUTkRJNH-AQacHLael2-SUU';
    const accountIdMock = 'c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7';
    const responseMock = [
        {
            "iccid": "ivan.stefanov0",
            "msisdn": [
                "ivan.stefanov0"
            ],
            "carriers": {
                "TEST": true
            },
            "imsisType": "singleimsis",
            "status": "active",
            "type": "SIM",
            "profileState": "",
            "profileType": "",
            "limit": 2097152,
            "smsLimit": 100
        }
    ];
    const activateAssetBody: ActivateAssetInterface = {
        "accountId": "c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7",
        "subscription": {
            "productId": "633ee85f656161fa565a44f7",
            "subscriberAccountId": "c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7"
        }
    }


    it('should return all assets by accountId', async () => {
        process.env.TOKEN = tokenMock;
        const serviceSpy = jest.spyOn(apiService, 'getAssets');
        serviceSpy.mockReturnValue(Promise.resolve(responseMock));

        const response = await assetController.getAssetsByaccountId(accountIdMock);

        expect(response[0].iccid).toStrictEqual(responseMock[0].iccid);
    });

    it('should return Asset already subscribed Error', async () => {
        process.env.TOKEN = tokenMock;
        const serviceSpy = jest.spyOn(apiService, 'activateAsset');
        serviceSpy.mockReturnValue(Promise.resolve(responseMock[0]));

        const response = await assetController.activateAsset(responseMock[0].iccid, activateAssetBody);

        expect(response.message).toStrictEqual('Asset already subscribed: ivan.stefanov0');
    });

});