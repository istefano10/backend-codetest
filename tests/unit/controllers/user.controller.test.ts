import { UserController } from '../../../src/controllers/user.controller';
import { LoginBodyInterface } from '../../../src/interfaces/login.interface';
import { ApiService } from '../../../src/services/api.service';

const apiService = new ApiService();
const userController = new UserController();

describe('User Controller', () => {

    const loginMock: LoginBodyInterface = {
        username: 'test',
        password: 'test'
    };

    const loggedUser = {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2MzNlZTg1ZjQzM2QwYzg3ZjRhN2JiYWEifQ.qtxGTKaaKtCDNbsNkxWGAUTkRJNH-AQacHLael2-SUU',
        user: {
            _id: '60d5396f7be2cd002ce6826f',
            username: 'ivan.stefanov',
            email: 'ivan.stefanov@testemail.com',
            permissions: [
                {
                    accountId: 'c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7',
                    roles: [
                        'admin'
                    ]
                }
            ],
            status: 'active'
        }
    }

    it('login function', async () => {
        const serviceSpy = jest.spyOn(apiService, 'login');
        serviceSpy.mockReturnValue(Promise.resolve(loggedUser));
        const response = await userController.login(loginMock);
        expect(response.user._id).toStrictEqual(loggedUser.user._id);
    });

});