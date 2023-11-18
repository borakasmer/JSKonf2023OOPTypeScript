class ManageAdvertisement {
    banner: Banner;
    video: Video;

    constructor() {
        this.banner = new Banner()
        this.video = new Video()
    }

    public Show() {
        this.banner.ShowBanner();
        this.video.ShowVideo();
    }
}

class Banner {
    public ShowBanner() {console.log("Show Banner"); }
}

class Video {
    public ShowVideo() {console.log("Show Video"); }
}

var mng=new ManageAdvertisement();
mng.Show();