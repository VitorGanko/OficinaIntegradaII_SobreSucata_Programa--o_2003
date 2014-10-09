	var bgGame = new Image();
	bgGame.src = "telas/Tela_Jogo.png";
	
	var soundGame = new Audio
	soundGame.src = "Sounds/Tela_Jogo.mp3";
	
	var timeGame = 2;
	var time = 15;
	var timer = 0;
	
	function Game ()
	{
		ctx.drawImage (bgGame, 0, 0);
		soundGame.play();
		
		levelManager();
		check();
		
		if (timer ++ > 60)
		{
			time--;
			timer = 0;
		}
		
		if (time <= 0)
		{
			src = "gameOver";
			soundGame.pause();
		}
		console.log(time);
	}