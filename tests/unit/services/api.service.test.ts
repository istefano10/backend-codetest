import fetch from 'node-fetch'
jest.mock('node-fetch', () => jest.fn())
import { LoginBodyInterface } from '../../../src/interfaces/login.interface';
import { ApiService } from '../../../src/services/api.service';
const apiService = new ApiService();

describe('Radar Service', () => {

    const loginMock: LoginBodyInterface = {
        username: 'test',
        password: 'test'
    };
    
    const loggedUser = {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2MzNlZTg1ZjQzM2QwYzg3ZjRhN2JiYWEifQ.qtxGTKaaKtCDNbsNkxWGAUTkRJNH-AQacHLael2-SUU',
        user: {
            _id: '633ee85f433d0c87f4a7bbaa',
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

    const loggedUserResponse = {
        json: function () {
            return loggedUser;
        }
    }

    describe('login function', () => {

        const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
        mockFetch.mockReturnValue(Promise.resolve(Promise.resolve(loggedUserResponse as any)) as any);

        it('should return the logged user', async () => {
            const response = await apiService.login(loginMock);
            expect(response).toBe(loggedUser);
        });

    });

});