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

  //選択されたファイルの数だけ処理する。
  for ( let i=0; i<fileList.length; i++ ) {
	//FileReaderクラスのインスタンス生成
	const fileReader = new FileReader();

	//ファイルを取得
	const file = fileList[i];

	//サムネを全て削除
	document.getElementById('thumbnails').innerHTML = "";

	//読み込み完了時の処理を追加
	fileReader.addEventListener("load", (event) => {
		let thumbnails = document.getElementById('thumbnails');
		let newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'img_style');
		let newImg = document.createElement('img');
		newImg.setAttribute('src', fileReader.result);
		newDiv.appendChild(document.createElement('div').appendChild(document.createTextNode(file.name)));
		console.log(file.name);
		newDiv.appendChild(newImg);
		//thumbnails.insertBefore(newDiv,thumbnails.firstChild);
		thumbnails.appendChild(newDiv);
	});
	

	//ファイルの読み込み(Data URI Schemeの取得)
	fileReader.readAsDataURL( file );
  }
}
