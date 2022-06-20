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
		onFileSelect(input[0]);
	});
});

function onFileSelect( inputElement ) {
  console.log("OnFileSelect()を開始します");
  //ファイルリストを取得
  let fileList = inputElement.files;
  console.dir(fileList);

  //選択されたファイルの数だけ処理する。
  for ( let i=0; i<fileList.length; i++ ) {
	//FileReaderクラスのインスタンス生成
	//const fileReader = await new FileReaderEx();

	//ファイルを取得
	const file = fileList[i];
	console.log("順番");
	console.log(file);

	//サムネを全て削除
	document.getElementById('thumbnails').innerHTML = "";

	//ファイルの読み込み(Data URI Schemeの取得)
	//let fileReader;
	let thumbnails = document.getElementById('thumbnails');
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', 'img_style');
	let titleNode = document.createElement('div');
	titleNode.setAttribute('class', 'img_title');
	let newImg = document.createElement('img');
	(async() => {
		const fileReader = await new FileReaderEx().readAsDataURL( file );
		newImg.setAttribute('src', fileReader);
		titleNode.appendChild(document.createTextNode(file.name));
		newDiv.appendChild(titleNode);
		console.log(file.name);
		newDiv.appendChild(newImg);
		//thumbnails.insertBefore(newDiv,thumbnails.firstChild);
		thumbnails.appendChild(newDiv);
	})();
	}
}
