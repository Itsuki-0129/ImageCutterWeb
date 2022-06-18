document.addEventListener('DOMContentLoaded',() => {
	//対象エリア
	var uploadArea = document.getElementById('uploadArea');

	//dragoverイベントでクラスを付与
	uploadArea.addEventListener("dragover",(event) => {
		event.preventDefault();//こいつが注意点
		event.target.classList.add('drag');
	});

	//dragleaveイベントでクラスを削除
	uploadArea.addEventListener("dragleave",(event) => {
		event.target.classList.remove('drag');
	});
});

//ドロップしたい
document.addEventListener('DOMContentLoaded',() => {
	var uploadArea = document.getElementById('uploadArea');

	uploadArea.addEventListener("dragover",(event) => {
		event.preventDefault();
		event.target.classList.add('drag');
	});

	uploadArea.addEventListener("dragleave",(event) => {
		event.target.classList.remove('drag');
	});

	//追加のdropイベント
	uploadArea.addEventListener("drop",(event) => {
		event.preventDefault();
		var input = document.querySelectorAll('input[name="fileupload"]');
		//取得したinput[type=file]にDropしたファイルを格納する。
		input[0].files = event.dataTransfer.files;
		OnFileSelect(input[0]);
	});
});

function OnFileSelect( inputElement ) {
  console.log("OnFileSelect()を開始します");
  //ファイルリストを取得
  let fileList = inputElement.files;
  console.dir(fileList);

  //ファイルの数を取得
  let fileCount = fileList.length;

  let loadCompleteCount = 0;
  let imageList = "";

  //選択されたファイルの数だけ処理する。
  for ( let i = 0; i < fileCount; i++ ) {
	//FileReaderクラスのインスタンス生成
	const fileReader = new FileReader();

	//ファイルを取得
	const file = fileList[i];

	//読み込み完了時の処理を追加
	fileReader.onload = function() {
	  //<li>,<img>タグの生成
	  imageList += "<li><p>" + file.name + "</p></li>\r\n";
	  imageList += "<li><img src=\"" + this.result + "\" /></li>\r\n";
	  //選択されたファイル全ての処理が完了したら,<ul>タグに流し込む
	  if ( ++loadCompleteCount == fileCount ) {
		//<ul>タグに<li>,<img>を流し込む
		document.getElementById( "ID001" ).innerHTML = imageList;
	  }
	};

	//ファイルの読み込み(Data URI Schemeの取得)
	fileReader.readAsDataURL( file );
  }
}
