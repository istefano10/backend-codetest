import * as fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
import { LoginBodyInterface } from '../interfaces/login.interface';

const config = {
    baseUrl: 'https://hummingbird-staging.podgroup.com',
}

export class ApiService {

    public async login(body: LoginBodyInterface) {
        return await fetch(`${config.baseUrl}/auth/token`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', }
        }).then((res: { json: () => any; }) => res.json()).then((json: any) => {
            const response: any = json;
            process.env.TOKEN = response.token.replace(/\/$/g, '/');
            return json
        });
    }
}
