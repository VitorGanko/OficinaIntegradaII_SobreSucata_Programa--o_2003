	var mouse_x = 0;
	var mouse_y = 0;
	var mouse_pressed = false;
	
	
			function mouseMove(e)
		{
			mouse_x = e.x;
			mouse_y = e.y;
		}
		
		function mouseUp (e)
		{
			mouse_pressed = false;	
		}
		
		function mouseDown (e)
		{
			mouse_pressed = true;
		}
	
	