# korea_public_data
공공데이터 호출 예제

### 세팅하는 법
<pre>
  node.js 설치한다.
  이걸 clone한다.
  npm install --save request를 한다.
  실행한다.
</pre>

### 구조
<pre>
1.버튼을 누르면 뭔가 실행 되어야 한다.
2.리스너 버튼 누른걸 알아차리는 기능
3.<button></button>
4.Id를 줘야함 <button id="bu_1"></button>
5.jquery가 필요함 그래서 import해야함
6.jquery를 electron에서 import하려면
</pre>

아래 코드를 이용해 import를 해야함.
<pre>
<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Insert this line after script imports -->
<script>if (window.module) module = window.module;</script>
</pre>

<pre>
7.ipc를 이용해서 파싱 엔진을 호출하고
8.호출한 결과를 화면으로 보내주어야 한다.
9.ipc를 쓸려면 ipc를 import해야함
10.ipc를 import하려면 build electron코드와 웹 브라우저 코드를 합쳐줌
11.이걸 하려면 webpack을 이용해 가방을 싸듯이 파일을 싸줘야한다.
12.webpack을 쓰려면 webpack.config.js를 만들어야한다.
</pre>

<pre>
main과 renderer가 있음
1.main은 일렉트론의 메인으로써 화면을 띄움
2.renderer는 화면을 구성한다.
3.renderer는 app.js로 만든다.
4.app.js에는  ipcRenderer를 import한다.
5.main/index.js에는 ipcMain을 import한다.

</pre>

<pre>
ipcRenderer
1.기능 : 화면에 붙어있어서 ipcMain에서 보낸 정보, 데이터를 받아서 처리함
2.사용법 : 화면을 처음 띄울때 
 ipcRenderer.on('PRINT_TEXT', (_e, text) => {});
 로 띄워준다. 이게 안떠있으면 데이터를 못받는다.
 
 click event일 때 .send를 이용해서 데이터를 보낸다.
 ipcRenderer.send('REQUEST_EVENT', data);
 
ipcMain
1.기능 : ipcRenderer로 데이터를 보내준다.
2.사용법 : main에서 화면을 띄울때 같이 띄워 놓는다.

</pre>





### project 빌드하기
<pre>
1.디렉토리를 만든다.
2.cmd로 접근한다.
3.npm init을 한다.
</pre>

### node library 설치하기
<pre>
npm install --save electron
npm insatll -g electorn
npm insatll --save electron-packager
npm install -g electron-packager
</pre>

### file만들기
<pre>
index.html 을 만든다.
</pre>

### electron script 받아오기
<pre>
google에 electron npm 검색
https://github.com/electron/electron-quick-start 로 들어간다.
main.js에 있는 내용을 복사해서 프로젝트 루트에 index.js를 만들고 붙혀넣기 한다.
</pre>

### electron 실행 스크립트 추가하기
<pre>
    script아래에 "electron": "electron ."을 넣는다.  
</pre>
