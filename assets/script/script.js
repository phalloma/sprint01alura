const inputTexto = document.querySelector(".areaEncriptar__input");
const mensagem = document.querySelector(".areaDescriptar__input");
const buttonCript = document.querySelector(".btn__encriptar");
const tela = document.querySelector(".mensagem");
const buttonCopy = document.querySelector(".btnCopy--aparece");

function btnEncriptar(){
	const textEncript = criptar(inputTexto.value);
	mensagem.value = textEncript;
}


function criptar(stringEncript){
	let matrizCod = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"] ];
	stringEncript = stringEncript.toLowerCase();

	for(let i= 0; i < matrizCod.length; i++){
		if (stringEncript.includes(matrizCod[i][0])){
			stringEncript = stringEncript.replaceAll(matrizCod[i][0],matrizCod[i][1]);
		}
	}
	return stringEncript;
}


function btnDescript(){
	const textDescript = desencriptar(inputTexto.value);
	mensagem.value = textDescript;
}


function desencriptar(stringDesencript){
	let matrizCod = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"] ];
	stringDesencript = stringDesencript.toLowerCase();

	for(let i= 0; i < matrizCod.length; i++){
		if (stringDesencript.includes(matrizCod[i][1])){
			stringDesencript = stringDesencript.replaceAll(matrizCod[i][1],matrizCod[i][0]);
		}
	}
	return stringDesencript;
}

buttonCript.addEventListener("click",function(){
	if(tela.style.display ==="none"){
		tela.style.display = "block";
	} else{
		tela.style.display = "none";
	}
});

buttonCript.addEventListener("click",function(){
	if(buttonCopy.style.display === "block"){
		buttonCopy.style.display = "none";
	} else{
		buttonCopy.style.display = "block";
	}
});


function execCopy(){
	document.querySelector('.areaDescriptar__input').select();
	document.execCommand('copy');
}