var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Login = /** @class */ (function () {
    function Login(LoginName, LoginPassword) {
        this.userName = LoginName;
        this.password = LoginPassword;
    }
    return Login;
}());
var PortalLogin = /** @class */ (function (_super) {
    __extends(PortalLogin, _super);
    function PortalLogin(LoginName, LoginPassword) {
        return _super.call(this, LoginName, LoginPassword) || this;
    }
    PortalLogin.prototype.DomainLogin = function () {
        if (this.userName == 'Bora' && this.password == "12345") {
            return "Wellcome Bora KAŞMER";
        }
        else {
            return "Your Domain Username or Password Wrong!";
        }
    };
    return PortalLogin;
}(Login));
var SocialLogin = /** @class */ (function (_super) {
    __extends(SocialLogin, _super);
    function SocialLogin(LoginName, LoginPassword) {
        var _this = _super.call(this, LoginName, LoginPassword) || this;
        _this.LoginName = LoginName;
        _this.LoginPassword = LoginPassword;
        return _this;
    }
    SocialLogin.prototype.DomainLogin = function () {
        if (this.userName == 'Bora' && this.password == "12345") {
            return "Wellcome Bora KAŞMER";
        }
        else {
            return "Your Domain Username or Password Wrong!";
        }
    };
    SocialLogin.prototype.FaceLogin = function (fbUserName, password) {
        if (fbUserName == 'FaceBora' && password == "654321") {
            return "Wellcome Facebook Borsoft";
        }
        else {
            return "Your Facebook Credentials Wrong!";
        }
    };
    return SocialLogin;
}(Login));
var faceLogin = new SocialLogin("Bora", "1234");
console.log(faceLogin.DomainLogin());
console.log(faceLogin.FaceLogin("FaceBora", "654321"));
