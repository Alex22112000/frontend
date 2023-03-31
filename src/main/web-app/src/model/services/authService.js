import config from '../../view/configs/config.json'

class AuthService {
    static async signIn(login, password) {
        const response = await fetch(config.apiUrl + "/api/auth", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify([login, password]),
        });

        if(response.ok){
            response.json().then((token) => {
                AuthService.save(login, token);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static async signUp(login, password) {
        const response = await fetch(config.apiUrl + "/api/reg", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify([login, password]),
        });

        if(response.ok){
            response.json().then((token) => {
                AuthService.save(login, token);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    static getLogin(){
        return localStorage.getItem('login');
    }

    static getToken(){
        return localStorage.getItem('token');
    }
}

export default AuthService