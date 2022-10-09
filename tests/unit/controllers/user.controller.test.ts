import { UserController } from '../../../src/controllers/user.controller';
import { LoginBodyInterface } from '../../../src/interfaces/login.interface';
import { CreateUserInterface } from '../../../src/interfaces/user.interface';
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

    const createUserBody: CreateUserInterface = {
        accountId: 'c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7',
        permissions: [
            {
                accountId: "c0d45e32-1c7f-58cb-aca9-b9b57b4ba9b7",
                roles: ["admin"]
            }
        ],
        username: 'ivan.test',
        password: 'ivan.test2',
        email: 'ivan.stefanov2@testemail.com',
        status: 'active'
    }

    it('1. login function should return logged user', async () => {

        const serviceSpy = jest.spyOn(apiService, 'login');
        serviceSpy.mockReturnValue(Promise.resolve(loggedUser));

        const response = await userController.login(loginMock);

        expect(response.user._id).toStrictEqual(loggedUser.user._id);
    });

    it('2. create user should return "Duplicate entry"', async () => {
        const createdUser = loggedUser.user;
        process.env.TOKEN = loggedUser.token;
        const serviceSpy = jest.spyOn(apiService, 'createUser');
        serviceSpy.mockReturnValue(Promise.resolve(createdUser));

        const response = await userController.createUser(createUserBody);

        expect(response.message).toStrictEqual('Duplicate entry');
    });

});