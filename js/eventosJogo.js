$(document).ready(function(){
	var score = 0; var contador = 0; var scoredois = 0; var contadordois = 0;;
	

	$(".abacateNovo").hide();
	$(".melanciaNova").hide();
	$(".macaNova").hide();
	$(".brocolisNovo").hide();


	$(".parabens").hide(); 
	$(".score").text(score);


	$(".melancia").click(function(){ //objeto que voce clica
		$(".melancia").hide(); //objeto que voce clicou some
		//$(".melanciaNova").show(); //objeto do prato aparece
		$(".melanciaNova").show();
		score += 10;
		contador++;
		$(".score").text(score);
		Score(contador, score);
	});

	$(".abacate").click(function(){ //objeto que voce clica
		$(".abacate").hide(); //objeto que voce clicou some
		$(".abacateNovo").show(); //objeto do prato aparece
		score += 10;
		contador++;
		$(".score").text(score);
		Score(contador, score);
	});


	$(".maca").click(function(){ //objeto que voce clica
		$(".maca").hide(); //objeto que voce clicou some
		$(".macaNova").show(); //objeto do prato aparece
		score += 10;
		contador++;
		$(".score").text(score);
		Score(contador, score);
	});

	$(".brocolis").click(function(){ //objeto que voce clica
		$(".brocolis").hide(); //objeto que voce clicou some
		$(".brocolisNovo").show(); //objeto do prato aparece
		score += 10;		
		contador++;
		$(".score").text(score);
		Score(contador, score);
	});

	$(".donuts").click(function(){ //objeto que voce clica
		alert("O consumo exagerado de açúcar pode causar diabetes!!!\nMENOS 5 PONTOS!"); //objeto que voce clicou some
		//$(".melanciaNova").show(); //objeto do prato aparece
		score -= 5;
		$(".score").text(score);
	});

	$(".batataFrita").click(function(){ //objeto que voce clica
		alert("Excesso de fritura na alimentação aumenta a chance do surgimento de doenças cardiovasculares, pois quando o óleo é submetido a altas temperaturas, transforma-se em uma gordura maléfica para a saúde, entupindo as artérias e causando sérios danos!!!\nMENOS 5 PONTOS!"); //objeto que voce clicou some
		//$(".melanciaNova").show(); //objeto do prato aparece
		score -= 5;
		$(".score").text(score);
	});


	$(".hamburguer").click(function(){ //objeto que voce clica
		alert("Hambúrguer é processado e super calórico, faz mal a saúde!!!\nMENOS 5 PONTOS!"); //objeto que voce clicou some
		//$(".melanciaNova").show(); //objeto do prato aparece
		score -= 5;
		$(".score").text(score);
	});


	$(".CachorroQuente").click(function(){ //objeto que voce clica
		alert("Cachorro quente pode aumentar o risco de câncer no pâncreas em 67%. Um ingrediente encontrado, tanto no cachorro quente quanto no bacon, é o nitrito de sódio. A substância é cancerígena e está relacionada a doenças como leucemia, em crianças, e tumores cerebrais em bebês!!!\nMENOS 5 PONTOS!"); //objeto que voce clicou some
		//$(".melanciaNova").show(); //objeto do prato aparece
		score -= 5;
		$(".score").text(score);
	});




  // segunda fase

	$(".scoredois").text(scoredois);


	$(".bicicleta").click(function(){ //objeto que voce clica
		scoredois += 40;
		contadordois++;

		$(".scoredois").text(scoredois);
		Score(contador, score, contadordois, scoredois);
	});

	

	$(".tv").click(function(){ //objeto que voce clica
		alert("O excesso de televisão irá prejudicar sua saúde, selecione um objeto que ajude a melhorar a saúde!\nMENOS 5 PONTOS!"); //objeto que voce clicou some

		scoredois -= 5;
		$(".scoredois").text(scoredois);
	});

	$(".controle").click(function(){ //objeto que voce clica
		alert("O excesso de video game te prejudicará nos estudos, selecione um objeto que ajude a melhorar a saúde!\nMENOS 5 PONTOS!"); //objeto que voce clicou some

		scoredois -= 5;
		$(".scoredois").text(scoredois);
	});


	$(".notebook").click(function(){ //objeto que voce clica
		alert("Tudo em excesso faz mal inclusive a utilização de dispositivos eletrônicos!\nMENOS 5 PONTOS!"); //objeto que voce clicou some
		scoredois -= 5;
		$(".scoredois").text(scoredois);
	});






	
});


function Score(contador, score, contadordois, scoredois){
	
	if(contador == 4)
	{

		if(score < 30)
		{
			alert("Infelizmente não foi dessa vez..\nVocê fez " + score + " pontos!");

			if (confirm('Gostaria de tentar novamente?'))
				window.location.href ="jogo1.html"; else alert('Voltando para a página inicial..');
		}

		else
		{

			alert("PARABÉNS, você selecionou os 4 alimentos corretamente!\nVocê fez " + score + " pontos! \nVOCÊ GANHOU!");
			//window.location.href = "file:///C:/Users/Usuario/Downloads/X-SAUDE/jogo2.html";	
		        if (confirm('Deseja continuar para a segunda fase do jogo?'))
				window.location.href ="jogo2.html"; else alert('Voltando para a página inicial..');
		}

		if(score == -10)
		{
		
			alert("Infelizmente não foi dessa vez..\nVocê fez " + score + " pontos!");

			if (confirm('Gostaria de tentar novamente?'))
				window.location.href ="jogo1.html"; else alert('Voltando para a página inicial..');
	
		}
		

	}


	if(contadordois == 1)
	{

		if(scoredois < 30)
		{
			alert("Infelizmente não foi dessa vez..\nVocê fez " + scoredois + " pontos!");

			if (confirm('Gostaria de tentar novamente?'))
				window.location.href ="jogo2.html"; else alert('Voltando para a página inicial..'); window.location.href ="jogo2.html";
		}

		else
		{

			alert("PARABÉNS, andar de bicicleta trará muitos benefícios a sua saúde!\nVocê fez " + scoredois + " pontos! \nVOCÊ GANHOU!");
			//window.location.href = "file:///C:/Users/Usuario/Downloads/X-SAUDE/jogo2.html";	
		    
		    if (confirm('Deseja voltar para o menu?'))
	    
	      	window.location.href ="menu.html"; else alert('Voltando para a página inicial..'); window.location.href ="menu.html";
		}

		if(scoredois == -10)
		{
		
			alert("Infelizmente não foi dessa vez..\nVocê fez " + scoredois + " pontos!");

			if (confirm('Gostaria de tentar novamente?'))
				window.location.href ="jogo2.html"; else alert('Voltando para a página inicial..'); window.location.href ="jogo2.html";
	
		}
		

	}

}





