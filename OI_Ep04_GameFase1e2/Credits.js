	var Cred = new Image ();
	Cred.src = "telas/Tela_Creditos.png";
	
	var back = [];
	
	for (var i = 0; i < 2; i++)
		{
			 back[i] = new Image ();
			 back[i].src = "telas/Assets/BotaoVoltar_" + i + ".png";	
		}
	
	function Credits ()
	{
		ctx.drawImage (Cred, 0, 0);
		ctx.drawImage (back[0], -650, 0);
		
		if(mouse_x > 48 && mouse_x < 114 && mouse_y > 540 && mouse_y < 568 && src == "credits")
		{			
			ctx.drawImage (back[1], -650, 0);
			
			if(mouse_pressed && src == "credits")
			{
				src = "menu";
				soundClick.play();
			}
		}	
	}
	
	