interface IAdvertisment {
    Show();
}
class Banner implements IAdvertisment {
    public Show(): string { return "Banner Showed!"; }
}
class Video implements IAdvertisment {
    public Show(): string { return "Video Showed!"; }
}

class Advertisment {
    _advertisment: IAdvertisment;
    constructor(advertisment: IAdvertisment) { this._advertisment = advertisment; }
    public Show(): void {
        console.log(this._advertisment.Show());
    }
}
 
var AdvertismentBanner: Advertisment;
var AdvertismentVideo: Advertisment;
AdvertismentBanner = new Advertisment(new Banner());
AdvertismentBanner.Show();
AdvertismentVideo = new Advertisment(new Video());
AdvertismentVideo.Show();