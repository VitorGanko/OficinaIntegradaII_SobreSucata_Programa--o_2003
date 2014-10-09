	var level = 1;
	var random = Math.floor(Math.random() * 3);
	
	var toys = new Image ();
	toys.toysName = ["brinquedo1", "brinquedo2", "brinquedo3"];
	toys.name;
	toys.newName = function()
	{
		toys.name = toys.toysName[random];
		toys.src = "Brinquedos e pecas/lvl" + level + "/" + toys.name + ".png";
	}
	
	toys.newName();
	
	var pieces = [];
	
	var counter = 0;
	
	var length = 2;
	
	
	var combinationToy = [];
	var combinationPiece = [];
	
	var newX;
	var newY;	
	var start = true;
	
	function createPiece()
	{
		for (var i = 0; i < length * toys.toysName.length; i++)
		{
			pieces[i] = new Image ();
			pieces[i].src = "Brinquedos e pecas/lvl" + level + "/" + "peca" + (i + 1) + ".png";
			pieces[i].posx = 100 * i;
			pieces[i].posy = 400;		
		}
	}
	
	createPiece();
	
	function toyCombination()
	{		
		if(level == 1)
		{
			length = 2;
			if(toys.name == "brinquedo1")combinationToy = [1,2];
			
			else if(toys.name == "brinquedo2")combinationToy = [3,4];
			
			else if(toys.name == "brinquedo3")combinationToy = [5,6];
		}
		
		if(level == 2)
		{
			length = 2;
			if(toys.name == "brinquedo1")combinationToy = [1,2];
			
			else if(toys.name == "brinquedo2")combinationToy = [3,4];
			
			else if(toys.name == "brinquedo3")combinationToy = [5,6];
		}
		
		if(level == 3)
		{
			length = 3;
			if(toys.name == "brinquedo1")combinationToy = [1,2,3];
			
			else if(toys.name == "brinquedo2")combinationToy = [4,5,6];
			
			else if(toys.name == "brinquedo3")combinationToy = [7,8,9];
		}
		
		if(level == 4)
		{	
			length = 4;
			if(toys.name == "brinquedo1")combinationToy = [1,2,3,4];
			
			else if(toys.name == "brinquedo2")combinationToy = [5,6,7,8];
			
			else if(toys.name == "brinquedo3")combinationToy = [9,10,11,12];
		}
		
		if(level == 5)
		{
			length = 5;
			if(toys.name == "brinquedo1")combinationToy = [1,2,3,4,5];
			
			else if(toys.name == "brinquedo2")combinationToy = [6,7,8,9,10];
			
			else if(toys.name == "brinquedo3")combinationToy = [11,12,13,14,15];
		}
	}
	
	toyCombination();
	
	function check()
	{
		if(combinationPiece.length == length && combinationToy.sort().toString()==combinationPiece.sort().toString())
		{
			time = 15;
			level++;
			start = true;
			
			if(level==3)
			{
				level = 6;
			}
		}
		
		else if(combinationPiece.length == length && combinationToy.sort().toString()!=combinationPiece.sort().toString())
		{
			time = 15;
			level=1;
			start = true;
			
			src = "gameOver";
		}
	}
	
	function Lvl1 ()
	{		
		if(start)
		{
			combinationPiece.splice(0, combinationPiece.length);
			combinationToy.splice(0, combinationToy.length);
			new toys.newName();
			new toyCombination();
			new createPiece();
			start = false;
		}
		
		newX = [500, 500, 500, 509, 520, 536];
		newY = [200, 150, 175, 169, 120, 201];
		
		for(var i = 0; i < pieces.length; i++)
		{
			ctx.drawImage(pieces[i], pieces[i].posx, pieces[i].posy, pieces[i].width, pieces[i].height);
			
			if (mouse_pressed && mouse_x > pieces[i].posx && mouse_x < pieces[i].posx + pieces[i].width && 
			mouse_y > pieces[i].posy && mouse_y < pieces[i].posy + pieces[i].height && 
			combinationPiece.length < combinationToy.length)
			{
				pieces[i].posx = newX[i];
				pieces[i].posy = newY[i];
				combinationPiece.push(i+1);
				console.log(combinationPiece);
				mouse_pressed = false;
			}
		}
		
		ctx.drawImage(toys, 182, 152);
	}
	
	function Lvl2 ()
	{	
		if(start)
		{
			combinationPiece.splice(0, combinationPiece.length);
			combinationToy.splice(0, combinationToy.length);
			new toys.newName();
			new toyCombination();
			new createPiece();
			start = false;
		}
		
		newX = [500, 500, 500, 509, 520, 536];
		newY = [200, 150, 175, 169, 120, 201];
		
		for(var i = 0; i < pieces.length; i++)
		{
			ctx.drawImage(pieces[i], pieces[i].posx, pieces[i].posy, pieces[i].width, pieces[i].height);
			
			if (mouse_pressed && mouse_x > pieces[i].posx && mouse_x < pieces[i].posx + pieces[i].width && 
			mouse_y > pieces[i].posy && mouse_y < pieces[i].posy + pieces[i].height && 
			combinationPiece.length < combinationToy.length)
			{
				pieces[i].posx = newX[i];
				pieces[i].posy = newY[i];
				combinationPiece.push(i+1);
				console.log(combinationPiece);
				mouse_pressed = false; 
			}	
		}
		
		ctx.drawImage(toys, 182, 152);
	}