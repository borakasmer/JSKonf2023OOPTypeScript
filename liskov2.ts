abstract class Login {
    userName: string;
    password: string;
    constructor(LoginName: string, LoginPassword: string) {
        this.userName = LoginName;
        this.password = LoginPassword;
    }
    abstract DomainLogin(): string;
}

interface IFacebookLogin {
    FaceLogin(user: string, password: string): string;
}

class PortalLogin extends Login{
    constructor(LoginName: string, LoginPassword) { super(LoginName, LoginPassword); }

    DomainLogin(): string {
        if (this.userName == 'Bora' && this.password == "12345") {
            return "Wellcome Bora KAŞMER";
        }
        else {
            return "Your Domain Username or Password Wrong!"
        }
    }
}

class SocialLogin extends Login implements IFacebookLogin {
    constructor(protected LoginName: string, protected LoginPassword) { super(LoginName, LoginPassword); }

    DomainLogin(): string {
        if (this.userName == 'Bora' && this.password == "12345") {
            return "Wellcome Bora KAŞMER";
        }
        else {
            return "Your Domain Username or Password Wrong!"
        }
    }

    FaceLogin(fbUserName: string, password: string): string {
        if (fbUserName == 'FaceBora' && password == "654321") {
            return "Wellcome Facebook Borsoft";
        }
        else {
            return "Your Facebook Credentials Wrong!"
        }
    }
}

var faceLogin = new SocialLogin("Bora", "1234");
console.log(faceLogin.DomainLogin());
console.log(faceLogin.FaceLogin("FaceBora", "654321"));