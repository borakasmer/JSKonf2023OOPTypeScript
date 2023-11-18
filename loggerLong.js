var UserType;
(function (UserType) {
    UserType[UserType["Mobile"] = 0] = "Mobile";
    UserType[UserType["Console"] = 1] = "Console";
    UserType[UserType["Tablet"] = 2] = "Tablet";
})(UserType || (UserType = {}));
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.Talk = function () {
        console.log("Hello :".concat(this.LiveID));
    };
    return User;
}());
var NPC = /** @class */ (function () {
    function NPC() {
    }
    NPC.prototype.Talk = function () {
        console.log("Hello :".concat(this.GamerTag));
    };
    return NPC;
}());
function CreateUser(user, GamerTag, LiveID, UserType, IsGoldMemeber) {
    var newUser;
    newUser = new user();
    newUser.GamerTag = GamerTag;
    newUser.LiveID = LiveID;
    newUser.IsGoldMemeber = IsGoldMemeber;
    newUser.UserType = UserType;
    return newUser;
}
function CreateNPC(npc, GamerTag, LiveID, UserType, Level, VoiceType) {
    var newUser;
    var newUser = new npc();
    newUser.GamerTag = GamerTag;
    newUser.LiveID = LiveID;
    newUser.Level = Level;
    newUser.VoiceType = VoiceType;
    return newUser;
}
var bora;
bora = CreateUser(User, "coderBora", 123, UserType.Console, true);
console.log(bora.GamerTag);
ChatBot(bora);
var pacman;
pacman = CreateNPC(NPC, "PackkMan", 123, UserType.Mobile, 1, 'M');
console.log(bora.GamerTag);
ChatBot(pacman);
function ChatBot(user) {
    user.Talk();
}
var Greet = /** @class */ (function () {
    function Greet(usrType, gmName, usrName) {
        this.userType = usrType;
        this.gameName = gmName;
        this.userName = usrName;
    }
    Greet.prototype.Greeting = function () {
        switch (this.userType) {
            case UserType.Mobile:
                {
                    return this.gameName + ": Mobile User " + this.userName;
                    break;
                }
            case UserType.Tablet:
                {
                    return this.gameName + ": Tablet User " + this.userName;
                    break;
                }
            case UserType.Console:
                {
                    return this.gameName + ": Console User " + this.userName;
                    break;
                }
        }
    };
    return Greet;
}());
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
function GameUserLicenses() {
    var listOfGameUser = [{ LicenseID: 123457, LiveID: 32147423 },
        { LicenseID: 345632, LiveID: 67432466 },
        { LicenseID: 1111, LiveID: 8244444 }]; // Get Bulk Data From AnyServices
    return listOfGameUser;
}
var CheckLicense = /** @class */ (function () {
    function CheckLicense() {
    }
    CheckLicense.prototype.CheckGameLicence = function (Licenses, UserLicenseID, LiveID) {
        return (Licenses.filter(function (d) { return d.LicenseID == UserLicenseID && d.LiveID == LiveID; }).length > 0 ? true : false);
    };
    return CheckLicense;
}());
var Verify = /** @class */ (function () {
    function Verify(usr, gm) {
        this.user = usr;
        this.game = gm;
        this.greet = new Greet(this.user.UserType, gm.Name, this.user.GamerTag);
        this.checkLicense = new CheckLicense();
    }
    Verify.prototype.CanJoin = function () {
        if (this.user.IsGoldMemeber &&
            this.checkLicense.CheckGameLicence(GameUserLicenses(), this.game.LicenseID, this.user.LiveID)) {
            return "Wellcome to " + this.greet.Greeting();
        }
        return "You are not Access " + this.game.Name;
    };
    return Verify;
}());
var usr;
usr = CreateUser(User, "CoderBora", 32147423, UserType.Console, true);
var game = new Game();
game.LicenseID = 123457;
game.Name = "Tomb Raider";
var verify = new Verify(usr, game);
console.log(verify.CanJoin());
