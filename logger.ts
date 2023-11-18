interface ILogger {
    WriteLog(): string;
}

class XmlLog implements ILogger {
    public WriteLog(): string {
        return "Xml Log Writer" + new Date().toLocaleDateString();
    }
}

class MsSqlLOG implements ILogger {
    public WriteLog(): string {
        return "MsSql Log Writer" + new Date().toLocaleDateString();
    }
}

class MongoLOG implements ILogger {
    public WriteLog(): string {
        return "Mongo Log Writer" + new Date().toLocaleDateString();
    }
}

class LogProcess {
    logProcess: ILogger;
    constructor(logPrc: ILogger) {
        this.logProcess = logPrc;
    }
    public LogUser(): string {
        return this.logProcess.WriteLog();
    }
}

var log1 = new LogProcess(new XmlLog());
console.log(log1.LogUser());

var log2 = new LogProcess(new MsSqlLOG());
console.log(log2.LogUser());

var log3 = new LogProcess(new MongoLOG());
console.log(log3.LogUser());