import { ApiService } from '../services/api.service';
import { LoginBodyInterface } from '../interfaces/login.interface';
import { CreateUserInterface } from '../interfaces/user.interface';
const apiService = new ApiService();

export class UserController {

    async login(body: LoginBodyInterface) {
        const loginResponse = await apiService.login(body);
        return loginResponse;
    }

    async createUser(body: CreateUserInterface) {
        const createdUser = await apiService.createUser(body);
        return createdUser;
    }

}
