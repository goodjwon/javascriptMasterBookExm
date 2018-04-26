
var p = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi; // url regexp
var strs ='서포트 사이트는 http://www.wrigs.msn.to/입니다.'
strs += '예제소스 사이트는 HTTP://www.web-deli.com/도 잘 부탁해요!';
strs += '예제소스 사이트는 HTTPs://www.github.com/도 잘 부탁해요!';
strs += '예제소스 사이트는 https://goodjwon.github.com/도 잘 부탁해요!';

var result = strs.match(p);

for (var i =0, len = result.length; i < len; i++){
	console.log(result[i]);
	document.write(result[i]);
	document.write('<br/>');
}

var re = /s$/;          // 공백체크
var re = /^ss*$/;   // 공백문자 개행문자만 입력 거절
var re = /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/; //이메일 체크
var re = /^[A-Za-z0-9]{4,10}$/ // 비밀번호,아이디체크 영문,숫자만허용, 4~10자리
var re = new RegExp("(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)","gi") // 홈페이지 체크

var re = "<[^<|>]*>";  // 태그제거 
var RegExpTag = /[<][^>]*[>]/gi;// 태그제거 
//str = str.replace(RegExpTag,"");  

var RegExpJS = "<script[^>]*>(.*?)</script>";  // 스크립트 제거  
//str = str.replace(RegExpJS,"");  

var RegExpCSS = "<style[^>]*>(.*?)";  // 스타일 제거  
//str = str.replace(RegExpCSS,"");  

var RegExpHG = "(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)";  // 한글 제거  
//str = str.replace(RegExpHG,"");  
 
var RegExpDS = /<!--[^>](.*?)-->/g;  //주석 제거  
//str6 = str.replace(RegExpDS,"");  

var regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i; //이메일 체크
