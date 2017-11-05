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
