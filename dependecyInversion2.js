var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.Show = function () { return "Banner Showed!"; };
    return Banner;
}());
var Video = /** @class */ (function () {
    function Video() {
    }
    Video.prototype.Show = function () { return "Video Showed!"; };
    return Video;
}());
var Advertisment = /** @class */ (function () {
    function Advertisment(advertisment) {
        this._advertisment = advertisment;
    }
    Advertisment.prototype.Show = function () {
        console.log(this._advertisment.Show());
    };
    return Advertisment;
}());
var AdvertismentBanner;
var AdvertismentVideo;
AdvertismentBanner = new Advertisment(new Banner());
AdvertismentBanner.Show();
AdvertismentVideo = new Advertisment(new Video());
AdvertismentVideo.Show();
