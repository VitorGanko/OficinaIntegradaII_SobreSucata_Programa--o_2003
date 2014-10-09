	var anim = [];
	var frame = 0;
	var numFrames = 7;
	
	var inst = 0;
	
	var skip = [];
	
	for (i = 0; i < 2; i++)
		{
			skip[i] = new Image();
			skip[i].src = "telas/Assets/BotaoPular_" + i + ".png";
		}
	
	for (i = 0; i < numFrames; i++)
		{
			anim[i] = new Image();
			anim[i].src = "Animation/Frame_" + i + ".png";
		}
		
	function Animation ()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);		
		ctx.drawImage(anim[frame%numFrames], 0, 0);
		ctx.drawImage(bird[cFrame%birdFrame], 0, 0);
		
		if(counter++ == 20)
		{
			frame++;
			cFrame++;
			counter = 0;
			inst++
		}
		if (inst == numFrames)
		{
			src = "instructions";
			inst = 0;
		}
		
		ctx.drawImage(skip[0], 0, 0);
		
		if (mouse_x > 716 && mouse_x < 764 && mouse_y > 544 && mouse_y < 564)
		{
			ctx.drawImage(skip[1], 0, 0);
			
			if(mouse_pressed && src == "animation")
			{
				src = "instructions";
				soundClick.play();
			}
		}
		console.log(inst);
		
	}