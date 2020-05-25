/*
* @Author: Administrator
* @Date:   2020-05-25 19:45:13
* @Last Modified by:   Administrator
* @Last Modified time: 2020-05-25 21:20:45
*/
// 定义变量
var playernext = $("#play-next"),//下一首
	 playlast = $("#play-last"),//上一首
	 playpause = $("#play-pause"),//暂停键
	 musicnumber = 10,//当前的music数量，以后上传新歌时要修改这里
	 musiclist = new Array(musicnumber + 1);//歌曲列表
var i = playpause.find('i');

function Random(l,r) {
	var t = Math.floor(Math.random() * 10000);
	return t % (r - l + 1) + l;
}

function randomarray(arr) {//对数组重排
	for(var i = 1;i <= musicnumber;++i) {
		var t = Random(1,i);
		var k = arr[i];
		arr[i] = arr[t];
		arr[t] = k;
	}
	return arr;
}

var audio = document.getElementById('audio');

audio.volume = 0.4;	
var now = 1,flag = 0;

$(function() {
	for(var i = 1;i <= musicnumber;++i)
		musiclist[i] = i;
	musiclist = randomarray(musiclist);
	audio.src = "http://121.36.61.64/musicdata/" + musiclist[now];
});

$('#play-pause').click(function() {
	
	if(flag == 0) {
		i.attr('class','fa fa-pause');
		audio.play();
		flag = 1;
	}
	else {
		i.attr('class','fa fa-play');
		audio.pause();
		flag = 0;
	}	
});

$('#play-next').click(function() {
	++now;
	if(now == musicnumber + 1) now = 1;
	audio.src = "http://121.36.61.64/musicdata/" + musiclist[now];
	if(flag == 0) {
		i.attr('class','fa fa-pause');
		audio.play();
		flag = 1;
	}
	audio.play();
});


$('#play-last').click(function() {

	--now;
	if(now == 0) now = musicnumber;
	audio.src = "http://121.36.61.64/musicdata/" + musiclist[now];
	if(flag == 0) {
		i.attr('class','fa fa-pause');
		audio.play();
		flag = 1;
	}
	audio.play();
});