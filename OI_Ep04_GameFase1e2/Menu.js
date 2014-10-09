		var menu = new Image ();
		menu.src = "telas/Tela_Menu.png";
		
		var bird = [];
		var birdFrame = 5;
		var cFrame = 0;
		
		var boy = [];
		var boyFrame = 2;
		var bFrame = 0;
		var counter = 0;
		
		var soundMenu = new Audio ();
		soundMenu.src = "Sounds/Tela_Menu.mp3";
		
		var play = [];	
		var cred = [];
		var exit = [];
		var music = [];
		var sound = [];
		
		for (var i = 0; i < 2; i++)
		{
			 play[i] = new Image ();
			 play[i].src = "telas/Assets/BotaoJogar_" + i + ".png";
			
			cred[i] = new Image ();
			cred[i].src = "telas/Assets/BotaoCred_" + i + ".png";
			
			exit[i] = new Image ();
			exit[i].src = "telas/Assets/BotaoSair_" + i + ".png";
			
			music[i] = new Image ();
			music[i].src = "telas/Assets/BotaoMusica_" + i + ".png";
			
			sound[i] = new Image ();
			sound[i].src = "telas/Assets/BotaoSom_" + i + ".png";
			
			boy[i] = new Image ();
			boy[i].src = "telas/PersonagemMenu_" + i + ".png";
		}
		
		for (i = 0; i < 6; i ++)
		{	
			bird[i] = new Image ();
			bird[i].src = "telas/Assets/Animacao/Frame_" + i + ".png";
		}
		
		function Menu ()
	{
		soundMenu.play();
		ctx.drawImage (menu, 0, 0);
		ctx.drawImage (play[0], 0, 0);
		ctx.drawImage (cred[0], 0, 0);
		ctx.drawImage (exit[0], 0, 0);
		ctx.drawImage (music[0], 0, 0);
		ctx.drawImage (sound[0], 0, 0);
		ctx.drawImage(bird[cFrame%birdFrame], 0, 0);
		ctx.drawImage(boy[cFrame%boyFrame], 0, 0);
		
		if(counter++ == 10)
		{
			cFrame++;
			bFrame++;
			counter = 0;
		}
		soundGameO.pause();
		
		if (mouse_x > 331 && mouse_x < 474 && mouse_y > 234 && mouse_y < 274)
		{
			ctx.drawImage(play[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				src = "animation";
				counter = 0;
				soundClick.play();
			}
		}
		
		if (mouse_x > 334 && mouse_x < 469 && mouse_y > 327 && mouse_y < 365)
		{
			ctx.drawImage(cred[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				src = "credits";
				soundClick.play();
			}
		}
	
		if (mouse_x > 716 && mouse_x < 764 && mouse_y > 544 && mouse_y < 564)
		{
			ctx.drawImage(exit[1], 0, 0);
			
			if(mouse_pressed && src == "menu")
			{
				onclick = window.close();
			}
		}
	}
	
	
	
	
	