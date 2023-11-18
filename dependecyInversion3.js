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
var AbstractVideo = /** @class */ (function () {
    function AbstractVideo(duration) {
        this._duration = String(duration);
    }
    Object.defineProperty(AbstractVideo.prototype, "Duration", {
        get: function () {
            return this._duration;
        },
        set: function (v) {
            this._duration = v;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractVideo;
}());
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.Show = function () { return "Banner Showed!"; };
    return Banner;
}());
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(duration) {
        return _super.call(this, duration) || this;
    }
    Video.prototype.Show = function () { return "Video Showed! Duration:" + this.Duration; };
    return Video;
}(AbstractVideo));
var Advertisment = /** @class */ (function () {
    function Advertisment(advertisment) {
        this._advertisment = advertisment;
    }
    Advertisment.prototype.Show = function () {
        console.log(this._advertisment.Show());
    };
    return Advertisment;
}());
var AdvertismentVideo = /** @class */ (function () {
    function AdvertismentVideo(advertisment) {
        this._advertisment = advertisment;
    }
    AdvertismentVideo.prototype.Show = function () {
        console.log(this._advertisment.Show());
    };
    return AdvertismentVideo;
}());
var AdvertismentBanner;
var AdvVideo;
AdvertismentBanner = new Advertisment(new Banner());
AdvertismentBanner.Show();
AdvVideo = new AdvertismentVideo(new Video(15));
AdvVideo.Show();
