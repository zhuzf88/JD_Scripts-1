/*
省钱大赢家之翻翻乐

需京东账号绑定到微信

脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#省钱大赢家之翻翻乐
40 * * * * jd_big_winner.js, tag=省钱大赢家之翻翻乐, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=================================Loon===================================
[Script]
cron "40 * * * *" script-path=jd_big_winner.js,tag=省钱大赢家之翻翻乐

===================================Surge================================
省钱大赢家之翻翻乐 = type=cron,cronexp="40 * * * *",wake-system=1,timeout=3600,script-path=jd_big_winner.js

====================================小火箭=============================
省钱大赢家之翻翻乐 = type=cron,script-path=jd_big_winner.js, cronexpr="40 * * * *", timeout=3600, enable=true
 */
const $ = new Env('省钱大赢家之翻翻乐');
var _0xodP='jsjiami.com.v6',_0xodP_=['_0xodP'],_0x5780=[_0xodP,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x75\x5f\x32\x45\x59\x66\x73\x78\x75\x30\x73\x6b\x64\x74\x5a\x36\x67\x62\x52\x6a\x42\x51','\x57\x4d\x44\x66\x31\x50\x54\x48\x6d\x68\x38\x4d\x59\x42\x70\x44\x39\x37\x73\x69\x65\x51','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x74\x6f\x4f\x62\x6a','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x6c\x65\x6e\x67\x74\x68','\x0a\u3010\u9ed8\u8ba4\u81ea\u52a8\u63d0\u73b0\uff0c\u5982\u5931\u8d25\u8bf7\u81ea\u884c\u5230\u6d3b\u52a8\u9875\u9762\u63d0\u73b0\u3011\x0a\x0a\u3010\u6d3b\u52a8\u5165\u53e3\uff1a\u6781\u901f\u7248\x2d\u767e\u5143\u751f\u6d3b\u8d39\x2d\u8d5a\u91d1\u5e01\u4e0b\u62c9\x2d\u53d1\u8d22\u5927\u8d62\u5bb6\u3011\x0a','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x63\x61\x6e\x41\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77','\x63\x68\x61\x6e\x67\x65\x52\x65\x77\x61\x72\x64','\x63\x61\x6e\x4f\x70\x65\x6e\x52\x65\x64','\x74\x69\x6d\x65','\u5f00\u59cb\u8fdb\u884c\u7ffb\u7ffb\u4e50\u62ff\u7ea2\u5305\x0a','\x72\x65\x77\x61\x72\x64\x44\x61\x74\x61','\x70\x6f\x6f\x6c\x42\x61\x73\x65\x49\x64','\x70\x72\x69\x7a\x65\x47\x72\x6f\x75\x70\x49\x64','\x70\x72\x69\x7a\x65\x42\x61\x73\x65\x49\x64','\x70\x72\x69\x7a\x65\x54\x79\x70\x65','\x77\x61\x69\x74','\x6c\x6f\x67\x45\x72\x72','\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x4a\x44\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54','\x2e\x2f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53','\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54','\x4a\x44\x55\x41','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x34\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x36\x31\x38\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x26\x63\x68\x61\x6e\x6e\x65\x6c\x3d\x6a\x73\x62\x72\x65\x6e\x77\x75\x26\x6c\x6e\x67\x3d\x31\x30\x36\x2e\x34\x37\x36\x33\x33\x32\x26\x6c\x61\x74\x3d\x32\x39\x2e\x35\x30\x32\x36\x31\x39\x26\x73\x69\x64\x3d\x63\x30\x62\x64\x36\x32\x61\x37\x61\x36\x37\x62\x33\x30\x62\x36\x36\x65\x61\x38\x37\x39\x32\x62\x61\x30\x64\x36\x37\x30\x39\x77\x26\x75\x6e\x5f\x61\x72\x65\x61\x3d\x34\x5f\x35\x30\x39\x35\x32\x5f\x31\x30\x36\x5f\x30','\x7a\x68\x2d\x63\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x61\x6d\x62\x6c\x65\x48\x6f\x6d\x65\x50\x61\x67\x65\x26\x62\x6f\x64\x79\x3d','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x33\x2e\x38\x2e\x31\x30','\x67\x65\x74','\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x6c\x65\x66\x74\x54\x69\x6d\x65','\x74\x6f\x46\x69\x78\x65\x64','\x0a\u67e5\u8be2\u4e0b\u6b21\u7ffb\u7ffb\u4e50\u5269\u4f59\u65f6\u95f4\u6210\u529f\uff1a\x0a\u4eac\u4e1c\u8d26\u53f7\u3010','\u3011\u8ddd\u5f00\u59cb\u5269\x20','\x20\u5206\u949f','\u67e5\u8be2\u4e0b\u6b21\u7ffb\u7ffb\u4e50\u5269\u4f59\u65f6\u95f4\u5931\u8d25\uff1a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x70\x65\x6e\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2d\x6a\x64\x6c\x69\x74\x65\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x33\x2e\x32\x3b\x31\x34\x2e\x34\x2e\x31\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x34\x5f\x31\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x36\x31\x38\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x26\x63\x68\x61\x6e\x6e\x65\x6c\x3d\x77\x6a\x69\x63\x6f\x6e\x26\x6c\x6e\x67\x3d\x26\x6c\x61\x74\x3d\x26\x73\x69\x64\x3d\x26\x75\x6e\x5f\x61\x72\x65\x61\x3d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x61\x6d\x62\x6c\x65\x4f\x70\x65\x6e\x52\x65\x77\x61\x72\x64\x26\x62\x6f\x64\x79\x3d','\x26\x74\x3d','\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x33\x2e\x35\x2e\x30','\x70\x6f\x73\x74','\u7ffb\u7ffb\u4e50\u6253\u5f00\u7ea2\u5305\x20\u6210\u529f\uff0c\u83b7\u5f97\uff1a','\x72\x65\x77\x61\x72\x64\x56\x61\x6c\x75\x65','\u5143\u7ea2\u5305\x0a','\u7ffb\u7ffb\u4e50\u6253\u5f00\u7ea2\u5305\x20\u5931\u8d25\uff1a','\u7ffb\u7ffb\u4e50\u6253\u5f00\u7ea2\u5305\x20\u5931\u8d25\uff0c\u4eca\u65e5\u6d3b\u52a8\u53c2\u4e0e\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x61\x6d\x62\x6c\x65\x4f\x62\x74\x61\x69\x6e\x52\x65\x77\x61\x72\x64\x26\x62\x6f\x64\x79\x3d','\x0a\u8bf7\u624b\u52a8\u8fdb\u5165\u6d3b\u52a8\u9875\u9762\u67e5\u8be2\u54e6\uff01\x0a','\x47\x41\x4d\x42\x4c\x45','\x72\x65\x64\x45\x6e\x76\x65\x6c\x6f\x70\x65\x44\x6f\x75\x62\x6c\x65','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x61\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77\x26\x62\x6f\x64\x79\x3d','\x73\x74\x61\x74\x75\x73','\x33\x31\x30','\u7ffb\u7ffb\u4e50\u63d0\u73b0\x20\u6210\u529f\ud83c\udf89\x0a','\u63d0\u73b0\u81f3\u5fae\u4fe1\u94b1\u5305\u6210\u529f\ud83c\udf89\x0a\x0a','\u7ffb\u7ffb\u4e50\u63d0\u73b0\x20\u5931\u8d25\uff0c\u8be6\u60c5\uff1a','\u63d0\u73b0\u81f3\u5fae\u4fe1\u94b1\u5305\u5931\u8d25\x0a\u8be6\u60c5\uff1a','\u7ffb\u7ffb\u4e50\u63d0\u73b0\x20\u5931\u8d25\uff1a','\x43\x71\x4e\x6a\x73\x46\x6a\x69\x42\x6b\x78\x51\x6b\x57\x61\x6d\x69\x2e\x78\x77\x63\x50\x6f\x70\x68\x77\x6d\x2e\x47\x76\x36\x3d\x3d'];function _0x56ec(_0x1711ca,_0x1b491c){_0x1711ca=~~'0x'['concat'](_0x1711ca['slice'](0x0));var _0x48f10d=_0x5780[_0x1711ca];return _0x48f10d;};(function(_0x51fd99,_0x4ca186){var _0x32e9e8=0x0;for(_0x4ca186=_0x51fd99['shift'](_0x32e9e8>>0x2);_0x4ca186&&_0x4ca186!==(_0x51fd99['pop'](_0x32e9e8>>0x3)+'')['replace'](/[CqNFBkxQkWxwPphwG=]/g,'');_0x32e9e8++){_0x32e9e8=_0x32e9e8^0xdf0f4;}}(_0x5780,_0x56ec));const notify=$[_0x56ec('0')]()?require(_0x56ec('1')):'';const jdCookieNode=$[_0x56ec('0')]()?require(_0x56ec('2')):'';let cookiesArr=[],cookie='',message='',linkId=_0x56ec('3'),fflLinkId=_0x56ec('4');const JD_API_HOST=_0x56ec('5');if($[_0x56ec('0')]()){Object[_0x56ec('6')](jdCookieNode)[_0x56ec('7')](_0x20c937=>{cookiesArr[_0x56ec('8')](jdCookieNode[_0x20c937]);});if(process[_0x56ec('9')][_0x56ec('a')]&&process[_0x56ec('9')][_0x56ec('a')]===_0x56ec('b'))console[_0x56ec('c')]=()=>{};}else{cookiesArr=[$[_0x56ec('d')](_0x56ec('e')),$[_0x56ec('d')](_0x56ec('f')),...$[_0x56ec('10')]($[_0x56ec('d')](_0x56ec('11'))||'\x5b\x5d')[_0x56ec('12')](_0x236e94=>_0x236e94[_0x56ec('13')])][_0x56ec('14')](_0x7e5396=>!!_0x7e5396);}const len=cookiesArr[_0x56ec('15')];!(async()=>{console[_0x56ec('c')](_0x56ec('16'));if(!cookiesArr[0x0]){$[_0x56ec('17')]($[_0x56ec('18')],_0x56ec('19'),_0x56ec('1a'),{'open-url':_0x56ec('1a')});return;}for(let _0x109cbb=0x0;_0x109cbb<len;_0x109cbb++){if(cookiesArr[_0x109cbb]){cookie=cookiesArr[_0x109cbb];$[_0x56ec('1b')]=decodeURIComponent(cookie[_0x56ec('1c')](/pt_pin=(.+?);/)&&cookie[_0x56ec('1c')](/pt_pin=(.+?);/)[0x1]);$[_0x56ec('1d')]=_0x109cbb+0x1;$[_0x56ec('1e')]=!![];$[_0x56ec('1f')]='';console[_0x56ec('c')](_0x56ec('20')+$[_0x56ec('1d')]+'\u3011'+($[_0x56ec('1f')]||$[_0x56ec('1b')])+_0x56ec('21'));await main();}}if(message){$[_0x56ec('17')]($[_0x56ec('18')],'',message);}})()[_0x56ec('22')](_0x113731=>{$[_0x56ec('c')]('','\u274c\x20'+$[_0x56ec('18')]+_0x56ec('23')+_0x113731+'\x21','');})[_0x56ec('24')](()=>{$[_0x56ec('25')]();});async function main(){try{$[_0x56ec('26')]=![];$[_0x56ec('27')]=!![];$[_0x56ec('28')]=!![];await gambleHomePage();if(!$[_0x56ec('29')]){console[_0x56ec('c')](_0x56ec('2a'));await gambleOpenReward();}await openRedReward();if($[_0x56ec('26')]){await apCashWithDraw($[_0x56ec('2b')]['\x69\x64'],$[_0x56ec('2b')][_0x56ec('2c')],$[_0x56ec('2b')][_0x56ec('2d')],$[_0x56ec('2b')][_0x56ec('2e')],$[_0x56ec('2b')][_0x56ec('2f')]);await $[_0x56ec('30')](0xbb8);}}catch(_0x543ca2){$[_0x56ec('31')](_0x543ca2);}}function gambleHomePage(){const _0x2f8d56={'Host':_0x56ec('32'),'Accept':_0x56ec('33'),'User-Agent':$[_0x56ec('0')]()?process[_0x56ec('9')][_0x56ec('34')]?process[_0x56ec('9')][_0x56ec('34')]:require(_0x56ec('35'))[_0x56ec('36')]:$[_0x56ec('d')](_0x56ec('37'))?$[_0x56ec('d')](_0x56ec('37')):_0x56ec('38'),'Referer':_0x56ec('39')+linkId+_0x56ec('3a'),'Accept-Language':_0x56ec('3b'),'Cookie':cookie};const _0x1e5cbb={'linkId':fflLinkId};const _0x35c9b4={'\x75\x72\x6c':_0x56ec('3c')+encodeURIComponent(JSON[_0x56ec('3d')](_0x1e5cbb))+_0x56ec('3e'),'\x68\x65\x61\x64\x65\x72\x73':_0x2f8d56};return new Promise(_0x55fa36=>{$[_0x56ec('3f')](_0x35c9b4,(_0x27476e,_0x15ff1c,_0x15285e)=>{try{if(_0x27476e){console[_0x56ec('c')](''+JSON[_0x56ec('3d')](_0x27476e));console[_0x56ec('c')]($[_0x56ec('18')]+_0x56ec('40'));}else{if(_0x15285e){_0x15285e=JSON[_0x56ec('41')](_0x15285e);if(_0x15285e[_0x56ec('42')]===0x0){if(_0x15285e[_0x56ec('43')][_0x56ec('44')]===0x0){$[_0x56ec('29')]=_0x15285e[_0x56ec('43')][_0x56ec('44')];}else{$[_0x56ec('29')]=(_0x15285e[_0x56ec('43')][_0x56ec('44')]/(0x3c*0x3e8))[_0x56ec('45')](0x2);}console[_0x56ec('c')](_0x56ec('46')+$[_0x56ec('1b')]+_0x56ec('47')+$[_0x56ec('29')]+_0x56ec('48'));}else{console[_0x56ec('c')](_0x56ec('49')+JSON[_0x56ec('3d')](_0x15285e)+'\x0a');}}}}catch(_0xae8166){$[_0x56ec('31')](_0xae8166,_0x15ff1c);}finally{_0x55fa36();}});});}function gambleOpenReward(){const _0x12cc19={'Host':_0x56ec('32'),'Origin':_0x56ec('4a'),'Accept':_0x56ec('33'),'User-Agent':_0x56ec('4b'),'Referer':_0x56ec('4c')+linkId+_0x56ec('4d'),'Accept-Language':_0x56ec('3b'),'Content-Type':_0x56ec('4e'),'Cookie':cookie};const _0x3b0a5d={'linkId':fflLinkId};const _0x31a0e5={'\x75\x72\x6c':_0x56ec('4f'),'\x68\x65\x61\x64\x65\x72\x73':_0x12cc19,'\x62\x6f\x64\x79':_0x56ec('50')+encodeURIComponent(JSON[_0x56ec('3d')](_0x3b0a5d))+_0x56ec('51')+ +new Date()+_0x56ec('52')};return new Promise(_0x5547c9=>{$[_0x56ec('53')](_0x31a0e5,(_0x4d8a48,_0x561695,_0x552664)=>{try{if(_0x4d8a48){console[_0x56ec('c')](''+JSON[_0x56ec('3d')](_0x4d8a48));console[_0x56ec('c')]($[_0x56ec('18')]+_0x56ec('40'));}else{if(_0x552664){_0x552664=JSON[_0x56ec('41')](_0x552664);if(_0x552664[_0x56ec('42')]===0x0){console[_0x56ec('c')](_0x56ec('54')+_0x552664[_0x56ec('43')][_0x56ec('55')]+_0x56ec('56'));}else{console[_0x56ec('c')](_0x56ec('57')+JSON[_0x56ec('3d')](_0x552664)+'\x0a');if(_0x552664[_0x56ec('42')]===0x4e27){$[_0x56ec('28')]=![];console[_0x56ec('c')](_0x56ec('58'));}}}}}catch(_0x2e3e31){$[_0x56ec('31')](_0x2e3e31,_0x561695);}finally{_0x5547c9();}});});}function openRedReward(){const _0x51a0b6={'Host':_0x56ec('32'),'Origin':_0x56ec('4a'),'Accept':_0x56ec('33'),'User-Agent':$[_0x56ec('0')]()?process[_0x56ec('9')][_0x56ec('34')]?process[_0x56ec('9')][_0x56ec('34')]:require(_0x56ec('35'))[_0x56ec('36')]:$[_0x56ec('d')](_0x56ec('37'))?$[_0x56ec('d')](_0x56ec('37')):_0x56ec('38'),'Referer':_0x56ec('4c')+linkId+_0x56ec('4d'),'Accept-Language':_0x56ec('3b'),'Content-Type':_0x56ec('4e'),'Cookie':cookie};const _0x47b4b8={'linkId':fflLinkId};const _0x333386={'\x75\x72\x6c':_0x56ec('4f'),'\x68\x65\x61\x64\x65\x72\x73':_0x51a0b6,'\x62\x6f\x64\x79':_0x56ec('59')+encodeURIComponent(JSON[_0x56ec('3d')](_0x47b4b8))+_0x56ec('51')+ +new Date()+_0x56ec('52')};return new Promise(_0x161249=>{$[_0x56ec('53')](_0x333386,(_0x54de65,_0x5a14f2,_0x24ec61)=>{try{if(_0x54de65){console[_0x56ec('c')](''+JSON[_0x56ec('3d')](_0x54de65));console[_0x56ec('c')]($[_0x56ec('18')]+_0x56ec('40'));}else{if(_0x24ec61){_0x24ec61=JSON[_0x56ec('41')](_0x24ec61);if(_0x24ec61[_0x56ec('42')]===0x0){$[_0x56ec('2b')]=_0x24ec61[_0x56ec('43')];$[_0x56ec('26')]=!![];}else{console[_0x56ec('c')](_0x56ec('5a'));}}}}catch(_0x19869c){$[_0x56ec('31')](_0x19869c,_0x5a14f2);}finally{_0x161249();}});});}function apCashWithDraw(_0x293fea,_0x5e06de,_0x2cfcc4,_0xc09927,_0x1e3e97){const _0x38b1b={'Host':_0x56ec('32'),'Origin':_0x56ec('4a'),'Accept':_0x56ec('33'),'User-Agent':$[_0x56ec('0')]()?process[_0x56ec('9')][_0x56ec('34')]?process[_0x56ec('9')][_0x56ec('34')]:require(_0x56ec('35'))[_0x56ec('36')]:$[_0x56ec('d')](_0x56ec('37'))?$[_0x56ec('d')](_0x56ec('37')):_0x56ec('38'),'Referer':_0x56ec('4c')+linkId+_0x56ec('4d'),'Accept-Language':_0x56ec('3b'),'Content-Type':_0x56ec('4e'),'Cookie':cookie};const _0x2035d0={'businessSource':_0x56ec('5b'),'base':{'\x69\x64':_0x293fea,'business':_0x56ec('5c'),'\x70\x6f\x6f\x6c\x42\x61\x73\x65\x49\x64':_0x5e06de,'\x70\x72\x69\x7a\x65\x47\x72\x6f\x75\x70\x49\x64':_0x2cfcc4,'\x70\x72\x69\x7a\x65\x42\x61\x73\x65\x49\x64':_0xc09927,'\x70\x72\x69\x7a\x65\x54\x79\x70\x65':_0x1e3e97},'linkId':fflLinkId};const _0x1f9d49={'\x75\x72\x6c':_0x56ec('4f'),'\x68\x65\x61\x64\x65\x72\x73':_0x38b1b,'\x62\x6f\x64\x79':_0x56ec('5d')+encodeURIComponent(JSON[_0x56ec('3d')](_0x2035d0))+_0x56ec('51')+ +new Date()+_0x56ec('52')};return new Promise(_0x41f71b=>{$[_0x56ec('53')](_0x1f9d49,(_0xc6d806,_0x234af6,_0x2c35c3)=>{try{if(_0xc6d806){console[_0x56ec('c')](''+JSON[_0x56ec('3d')](_0xc6d806));console[_0x56ec('c')]($[_0x56ec('18')]+_0x56ec('40'));}else{if(_0x2c35c3){_0x2c35c3=JSON[_0x56ec('41')](_0x2c35c3);if(_0x2c35c3[_0x56ec('42')]===0x0){if(_0x2c35c3[_0x56ec('43')][_0x56ec('5e')]===_0x56ec('5f')){console[_0x56ec('c')](_0x56ec('60'));message+=_0x56ec('61');}else{console[_0x56ec('c')](_0x56ec('62')+JSON[_0x56ec('3d')](_0x2c35c3)+'\x0a');message+=_0x56ec('63')+JSON[_0x56ec('3d')](_0x2c35c3)+'\x0a\x0a';}}else{console[_0x56ec('c')](_0x56ec('64')+JSON[_0x56ec('3d')](_0x2c35c3)+'\x0a');message+=_0x56ec('63')+JSON[_0x56ec('3d')](_0x2c35c3)+'\x0a\x0a';}}}}catch(_0x2e18b5){$[_0x56ec('31')](_0x2e18b5,_0x234af6);}finally{_0x41f71b();}});});};_0xodP='jsjiami.com.v6';

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}