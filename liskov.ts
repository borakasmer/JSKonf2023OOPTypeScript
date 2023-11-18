interface ILogin {
    DomainLogin() : string;
    SocialLogin() : string;
}

class PortalLogin implements ILogin{
    userName: string;
    password: string;
    constructor(LoginName: string, LoginPassword: string) {
        this.userName = LoginName;
        this.password = LoginPassword;
    }
    DomainLogin() : string{return "Portal Domain Log"};
    SocialLogin() : string{return "Portal Social Log"};
}

class FacebookLogin implements ILogin{
    userName: string;
    password: string;
    constructor(LoginName: string, LoginPassword: string) {
        this.userName = LoginName;
        this.password = LoginPassword;
    }
    DomainLogin() : string{return "Facebook Domain Log"};
    SocialLogin() : string{return "Facebook Social Log"};
}
var faceLogin = new FacebookLogin("Bora", "1234");
console.log(faceLogin.DomainLogin());
console.log(faceLogin.SocialLogin());


