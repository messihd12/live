const video = document.getElementById("video");

const url = "https://ts.opt-line.win:2086/QH0GZBQ00ED1/BBDVTJGV0WG0/60042";

if(Hls.isSupported()){
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
    });
}
