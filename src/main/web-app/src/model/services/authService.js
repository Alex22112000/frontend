import config from '../../view/configs/config.json'

class AuthService {
    static async signIn(login, password) {
        const response = await fetch(config.apiUrl + "/api/user/auth", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login, password}),
        });

        if(response.ok){
            await response.json().then((token) => {
                AuthService.save(login, token);
                AuthService.setPassword(password);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static async signUp(login, password) {
        const response = await fetch(config.apiUrl + "/api/user/reg", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login, password}),
        });

        console.log(response);

        if(response.ok){
            // console.log(response.json())
            response.json().then((token) => {
                AuthService.save(login, token);
                AuthService.setPassword(password);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static async changePassword(login, newPassword){
        const response = await fetch(config.apiUrl + "/api/user/changePassword", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login, password: newPassword}),
        });
        if(response.ok){
            response.json().then((token) => {
                AuthService.save(login, token);
                AuthService.setPassword(newPassword);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static async deleteAccount(){
        const response = await fetch(config.apiUrl + "/api/user/delete", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login: AuthService.getLogin()}),
        });
        if(response.ok){
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }

    static save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    static setPassword(password){
        localStorage.setItem('password', password);
    }

    static getPassword(){
        return localStorage.getItem('password');
    }

    static getLogin(){
        return localStorage.getItem('login');
    }

    static getToken(){
        return localStorage.getItem('token');
    }
}

export default AuthService