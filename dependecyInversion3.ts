interface IAdvertisment {
    Show();
}

abstract class AbstractVideo {
    constructor(duration: number){this._duration=String(duration);}
    private _duration: string;
    public get Duration(): string {
        return this._duration;
    }
    public set Duration(v: string) {
        this._duration = v;
    }
}

class Banner implements IAdvertisment {
    public Show(): string { return "Banner Showed!"; }
}

class Video extends AbstractVideo implements IAdvertisment {
    constructor(duration: number){
        super(duration)
    }
    public Show(): string { return "Video Showed! Duration:" + this.Duration; }
}

class Advertisment {
    _advertisment: IAdvertisment;
    constructor(advertisment: IAdvertisment) { this._advertisment = advertisment; }
    public Show(): void {
        console.log(this._advertisment.Show());
    }
}

class AdvertismentVideo implements Advertisment {
    _advertisment: Video;
    constructor(advertisment: Video) { this._advertisment = advertisment; }
    public Show(): void {
        console.log(this._advertisment.Show());
    }
}

var AdvertismentBanner: Advertisment;
var AdvVideo: AdvertismentVideo;
AdvertismentBanner = new Advertisment(new Banner());
AdvertismentBanner.Show();
AdvVideo = new AdvertismentVideo(new Video(15));
AdvVideo.Show();