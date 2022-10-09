import { ApiService } from '../services/api.service';
import { LoginBodyInterface } from '../interfaces/login.interface';
const apiService = new ApiService();

export class UserController {

    async login(body: LoginBodyInterface) {
        const loginResponse = await apiService.login(body);
        return loginResponse;
    }

}
