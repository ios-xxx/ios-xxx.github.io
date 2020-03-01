const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
       
        {
            name: '黄昏',
            artist: '周传雄',
            url: 'http://music.163.com/song/media/outer/url?id=190072.mp3', lrc: '[00:00.000] 作曲 : 周传雄[00:01.000] 作词 : 陈信荣[00:27.147]过完整个夏天[00:34.400]忧伤并没有好一些[00:40.189]开车行驶在公路无际无边[00:46.990]有离开自己的感觉[00:50.890][00:54.290]唱不完一首歌[00:58.318]疲倦还剩下黑眼圈[01:04.308]感情的世界伤害在所难免[01:10.388]黄昏再美终要黑夜[01:15.598]依然记得从你口中说出再见坚决如铁[01:22.400]昏暗中有种烈日灼身的错觉[01:29.790]黄昏的地平线[01:31.778]划出一句离别[01:35.397]爱情进入永夜[01:39.778][01:43.080]依然记得从你眼中滑落的泪伤心欲绝[01:48.088]混乱中有种热泪烧伤的错觉[01:53.588]黄昏的地平线[01:56.358]割断幸福喜悦[01:59.368]相爱已经幻灭[02:11.088][02:19.377]唱不完一首歌[02:24.577]疲倦还剩下黑眼圈[02:30.890]感情的世界伤害在所难免[02:36.735]黄昏再美终要黑夜[02:41.556][02:43.956]依然记得从你口中说出再见坚决如铁[02:50.145]昏暗中有种烈日灼身的错觉[02:54.887]黄昏的地平线[02:58.026]划出一句离别[03:01.289]爱情进入永夜[03:07.970][03:08.065]依然记得从你眼中滑落的泪伤心欲绝[03:13.669]混乱中有种热泪烧伤的错觉[03:19.535]黄昏的地平线[03:22.595]割断幸福喜悦[03:25.765]相爱已经幻灭[03:46.076][03:57.076]依然记得从你口中说出再见坚决如铁[04:03.095]昏暗中有种烈日灼身的错觉[04:09.377]黄昏的地平线[04:12.487]划出一句离别[04:14.756]爱情进入永夜[04:20.588][04:21.318]依然记得从你眼中滑落的泪伤心欲绝[04:28.317]混乱中有种热泪烧伤的错觉[04:34.890]黄昏的地平线[04:36.597]割断幸福喜悦[04:40.789]相爱已经幻灭[04:54.789]',
            cover: 'http://p2.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg?param=300x300',
        } 
        ,{
            name: '冲动的惩罚',
            artist: '刀郎',
            url: 'http://webfs.yun.kugou.com/202003011059/7e2bddeb11bc78ce9dc3939c0dfbb6db/part/0/960050/G077/M06/0E/19/jQ0DAFhZQeGAW5UPAHJZ9zKL_9Y454.mp3',
            lrc: '../lrc/cddcf.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20150720/20150720190402134246.jpg',
        }
        ,{
            name: '下雨声',
            artist: '安静',
            url: 'http://webfs.yun.kugou.com/202003011116/8d49dd0e7f56c88d2bdb0fc1e946d7ed/G046/M07/14/03/zoYBAFYffMWAWUKcADCrUySBpwE586.mp3',
            cover: '../img/head.png',
        }
    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});