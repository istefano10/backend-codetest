import { AssetController } from '../../../src/controllers/asset.controller';
import { ApiService } from '../../../src/services/api.service';

const apiService = new ApiService();
const assetController = new AssetController();

describe('User Controller', () => {
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
    ]

    it('should return all assets by accountId', async () => {
        process.env.TOKEN = tokenMock;
        const serviceSpy = jest.spyOn(apiService, 'login');
        serviceSpy.mockReturnValue(Promise.resolve(responseMock));

        const response = await assetController.getAssetsByaccountId(accountIdMock);

        expect(response[0].iccid).toStrictEqual(responseMock[0].iccid);
    });

});