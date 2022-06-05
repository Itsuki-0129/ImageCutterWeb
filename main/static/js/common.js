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

	uploadArea.addEventlistener("dragleave",(event) => {
		event.target.classList.remove('drag');
	});

	//追加のdropイベント
	uploadArea.addEventListener("drop",(event) => {
		event.preventDefault();
		var input = document.querySelectorAll('input[name="fileupload"]');
		input[0].files = event.dataTransfer.files;
	});
});
