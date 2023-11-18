var XmlLog = /** @class */ (function () {
    function XmlLog() {
    }
    XmlLog.prototype.WriteLog = function () {
        return "Xml Log Writer" + new Date().toLocaleDateString();
    };
    return XmlLog;
}());
var MsSqlLOG = /** @class */ (function () {
    function MsSqlLOG() {
    }
    MsSqlLOG.prototype.WriteLog = function () {
        return "MsSql Log Writer" + new Date().toLocaleDateString();
    };
    return MsSqlLOG;
}());
var MongoLOG = /** @class */ (function () {
    function MongoLOG() {
    }
    MongoLOG.prototype.WriteLog = function () {
        return "Mongo Log Writer" + new Date().toLocaleDateString();
    };
    return MongoLOG;
}());
var LogProcess = /** @class */ (function () {
    function LogProcess(logPrc) {
        this.logProcess = logPrc;
    }
    LogProcess.prototype.LogUser = function () {
        return this.logProcess.WriteLog();
    };
    return LogProcess;
}());
var log1 = new LogProcess(new XmlLog());
console.log(log1.LogUser());
var log2 = new LogProcess(new MsSqlLOG());
console.log(log2.LogUser());
var log3 = new LogProcess(new MongoLOG());
console.log(log3.LogUser());
