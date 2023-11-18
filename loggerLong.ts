enum UserType {
    Mobile,
    Console,
    Tablet
}

interface IUser {
    GamerTag: string,
    LiveID: number,
    UserType: UserType,
    Talk(): any
}

class User implements IUser {
    GamerTag: string;
    LiveID: number;
    UserType: UserType;
    IsGoldMemeber: boolean;
    Talk() {
        console.log(`Hello :${this.LiveID}`)
    }
}

class NPC implements IUser {
    Talk() {
        console.log(`Hello :${this.GamerTag}`)
    }
    GamerTag: string;
    LiveID: number;
    UserType: UserType;
    Level: number;
    VoiceType: string;
}

function CreateUser<u extends User>(user: { new(): u; }, GamerTag: string, LiveID: number, UserType: UserType, IsGoldMemeber: boolean) {
    var newUser: u;
    newUser = new user();
    newUser.GamerTag = GamerTag;
    newUser.LiveID = LiveID;
    newUser.IsGoldMemeber = IsGoldMemeber;
    newUser.UserType = UserType;
    return newUser;
}

function CreateNPC<n extends NPC>(npc: { new(): n; }, GamerTag: string, LiveID: number, UserType: UserType, Level: number, VoiceType: string) {
    var newUser: n;
    var newUser = new npc();
    newUser.GamerTag = GamerTag;
    newUser.LiveID = LiveID;
    newUser.Level = Level;
    newUser.VoiceType = VoiceType;
    return newUser;
}



var bora: User;
bora = CreateUser(User, "coderBora", 123, UserType.Console, true);
console.log(bora.GamerTag);
ChatBot(bora);

var pacman: NPC;
pacman = CreateNPC(NPC, "PackkMan", 123, UserType.Mobile, 1, 'M');
console.log(bora.GamerTag);
ChatBot(pacman);

function ChatBot(user: IUser) {
    user.Talk();
}

class Greet {
    private userType: UserType;
    private userName: string;
    private gameName: string;
    constructor(usrType: UserType, gmName: string, usrName: string) {
        this.userType = usrType;
        this.gameName = gmName;
        this.userName = usrName;
    }
    Greeting() {
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
    }
}

class Game {
    Name: string;
    LicenseID: number;
}

interface IGameLicencese {
    LicenseID: number;
    LiveID: number;
}

function GameUserLicenses(): IGameLicencese[] {
    var listOfGameUser = [{ LicenseID: 123457, LiveID: 32147423 }, 
        { LicenseID: 345632, LiveID: 67432466 }, 
        { LicenseID: 1111, LiveID: 8244444 }];// Get Bulk Data From AnyServices
    return listOfGameUser;
}

class CheckLicense {
    CheckGameLicence<L extends IGameLicencese>(Licenses: L[], UserLicenseID: number, LiveID: number): boolean {

        return (Licenses.filter(d => d.LicenseID == UserLicenseID && d.LiveID == LiveID).length > 0 ? true : false);
    }
}

class Verify {
    user: User;
    game: Game;
    greet: Greet
    checkLicense: CheckLicense;
    constructor(usr: User, gm: Game) {
        this.user = usr;
        this.game = gm;
        this.greet = new Greet(this.user.UserType, gm.Name, this.user.GamerTag);
        this.checkLicense = new CheckLicense();
    }
    CanJoin(): string {
        if (this.user.IsGoldMemeber &&
            this.checkLicense.CheckGameLicence(GameUserLicenses(), this.game.LicenseID, this.user.LiveID)) {
            return "Wellcome to " + this.greet.Greeting();
        }
        return "You are not Access " + this.game.Name;
    }
}

var usr: User;

usr = CreateUser(User, "CoderBora", 32147423, UserType.Console, true);
var game = new Game();
game.LicenseID = 123457;
game.Name = "Tomb Raider";
var verify = new Verify(usr, game);
console.log(verify.CanJoin());
