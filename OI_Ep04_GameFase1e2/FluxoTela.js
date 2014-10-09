	/*var transition = false;
	
	function fadeIn(scene)
	{
		if(transition)
		{
			ctx.globalAlpha -= 0.2;
			
			if(ctx.globalAlpha < 0.2)
			{
				ctx.globalAlpha = 0;
				screem = scene;
				transition = false;
				Show();
			}
			
			console.log(this.ctx.globalAlpha);
		}
	}
	
	this.fadeOut = function()
	{
		ctx.globalAlpha += 0.2;
		
		if(ctx.globalAlpha > 1)
		{
			ctx.globalAlpha = 1;
		}
	}*/
	
	function Show ()
	{
		//console.log(tela);
		switch (src)
		{	
			case "intro":
				new Intro ();
				break;
				
			case "menu":
				new Menu ();	
				break;	
			
			case "animation":
				new Animation ();
					break;
			
			case "instructions":
				new	Instructions ();
				break;				
				
			case "credits":
				new	Credits ();
				break;	
			
			case "game":
				new	Game();
					
				break;				
			case "win":
				new	Win();
				break;
				
			case "gameOver":
				new	gameOver ();
				break;
		}
	}
	
	