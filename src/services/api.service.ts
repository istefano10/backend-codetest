import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
import { LoginBodyInterface } from '../interfaces/login.interface';
import { CreateUserInterface } from '../interfaces/user.interface';

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

    public async createUser(body: CreateUserInterface) {
        return await fetch(`${config.baseUrl}/users`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Access-Token': `${process.env.TOKEN}`
            }
        }).then(res => res.json())
            .then(json => { return json });
    }

    public async getAssets(accountId: string) {
        return await fetch(`${config.baseUrl}/assets?accountId=${accountId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Access-Token': `${process.env.TOKEN}`
            }
        }).then(res => res.json())
            .then(json => { return json });
    }
}
