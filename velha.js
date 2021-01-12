
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
	if (vencedor !== null) { return; }
	
	var quadrado = document.getElementById(id);
	
	if (quadrado.innerHTML !== '.') { return; }
	
	quadrado.innerHTML = jogador;
	quadrado.style.color = '#000';
	
	if (jogador === 'X') { jogador = 'O'; }
	else { jogador = 'X'; }
	
	mudarJogador(jogador);
	checaVencedor();
}

function mudarJogador(valor){	
	jogador = valor;
	jogadorSelecionado.innerHTML = valor;
}

function checaVencedor(){
	var quadrado1 = document.getElementById(1);
	var quadrado2 = document.getElementById(2);
	var quadrado3 = document.getElementById(3);
	var quadrado4 = document.getElementById(4);
	var quadrado5 = document.getElementById(5);
	var quadrado6 = document.getElementById(6);
	var quadrado7 = document.getElementById(7);
	var quadrado8 = document.getElementById(8);
	var quadrado9 = document.getElementById(9);	
	
	if (checkSequencia(quadrado1, quadrado2, quadrado3)){
		mudarCorQuadro(quadrado1, quadrado2, quadrado3);
		mudarVencedor(quadrado1);
		return;
	}
	if (checkSequencia(quadrado4, quadrado5, quadrado6)){
		mudarCorQuadro(quadrado4, quadrado5, quadrado6);
		mudarVencedor(quadrado4);
		return;
	}
	if (checkSequencia(quadrado7, quadrado8, quadrado9)){
		mudarCorQuadro(quadrado7, quadrado8, quadrado9);
		mudarVencedor(quadrado7);
		return;
	}
	if (checkSequencia(quadrado1, quadrado4, quadrado7)){
		mudarCorQuadro(quadrado1, quadrado4, quadrado7);
		mudarVencedor(quadrado1);
		return;
	}
	if (checkSequencia(quadrado2, quadrado5, quadrado8)){
		mudarCorQuadro(quadrado2, quadrado5, quadrado8);
		mudarVencedor(quadrado2);
		return;
	}
	if (checkSequencia(quadrado3, quadrado6, quadrado9)){
		mudarCorQuadro(quadrado3, quadrado6, quadrado9);
		mudarVencedor(quadrado3);
		return;
	}
	if (checkSequencia(quadrado1, quadrado5, quadrado9)){
		mudarCorQuadro(quadrado1, quadrado5, quadrado9);
		mudarVencedor(quadrado1);
		return;
	}
	if (checkSequencia(quadrado3, quadrado5, quadrado7)){
		mudarCorQuadro(quadrado3, quadrado5, quadrado7);
		mudarVencedor(quadrado3);
		return;
	}
}

function checkSequencia(q1, q2, q3){
	return (q1.innerHTML !== '.' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML);	
}

function mudarCorQuadro(q1, q2, q3){
	q1.style.background = '#0f0';
	q2.style.background = '#0f0';
	q3.style.background = '#0f0';
}

function mudarVencedor(q){
	vencedor = q.innerHTML;
	vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
	vencedor = null;
	vencedorSelecionado.innerHTML = '';
	
	for (var i=1; i<=9; i++){
		var quadr = document.getElementById(i);
		quadr.style.background = '#ddd';
		quadr.style.color = '#ddd';
		quadr.innerHTML = '.';
	}
	
	mudarJogador('X');
}


