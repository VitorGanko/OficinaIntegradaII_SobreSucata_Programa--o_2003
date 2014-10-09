	var bgWin = new Image();
	bgWin.src = "telas/Tela_Vitoria.png";
	
	var characterV = [];
	var vFrame = 0;
	var charaterF = 2;
	var counterV = 0;
	
	var bMenu = new Image();
	bMenu.src = "telas/Assets/BotaoMenu_0.png";
	
	var playAgain = new Image ();
	playAgain.src = "telas/Assets/BotaoJogarN_0.png";
	
	var soundWin = new Audio();
		soundWin.src = "Sounds/vitoria_3.mp3";
		
	for (i = 0; i < 2; i++ )
	{
		characterV [i] = new Image();
		characterV [i].src = "telas/PersonagemVitoria_" + i + ".png";
	}

	function Win()
	{
	
			ctx.drawImage (bgWin, 0, 0);
			ctx.drawImage(characterV[vFrame%charaterF], 0, 0);
			
			if(counterV++ == 10)
			{
				vFrame++;
				counterV = 0;
			}
			soundGame.pause();
			soundWin.play();
			
			if (mouse_x > 272 && mouse_x < 348 && mouse_y > 442 && mouse_y < 472)
			{
				ctx.drawImage(bMenu, 0, 0);
				
				if(mouse_pressed && src == "win")
				{
					src = "menu";
					time = 10;
					counter = 0;
					soundClick.play();
				}
			}
			
			if (mouse_x > 372 && mouse_x < 536 && mouse_y > 442 && mouse_y < 472)
			{
				ctx.drawImage(playAgain, 0, 0);
				
				if(mouse_pressed)
				{
					time = 10;
					
					if (src == "win")
					{
						src = "game";
						soundClick.play();
					}			
				}
			}
	}