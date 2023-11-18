var ManageAdvertisement = /** @class */ (function () {
    function ManageAdvertisement() {
        this.banner = new Banner();
        this.video = new Video();
    }
    ManageAdvertisement.prototype.Show = function () {
        this.banner.ShowBanner();
        this.video.ShowVideo();
    };
    return ManageAdvertisement;
}());
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.ShowBanner = function () { console.log("Show Banner"); };
    return Banner;
}());
var Video = /** @class */ (function () {
    function Video() {
    }
    Video.prototype.ShowVideo = function () { console.log("Show Video"); };
    return Video;
}());
var mng = new ManageAdvertisement();
mng.Show();
