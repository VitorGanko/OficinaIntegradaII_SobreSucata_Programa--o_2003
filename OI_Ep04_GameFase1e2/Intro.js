	var introduction = new Image ();
	introduction.src = "telas/Tela_Introducao.png";
	
	var goMenu = 0;
	
	function Intro ()
	{
		ctx.drawImage (introduction, 0, 0);
		
		if (goMenu == 100)
		{
			src = "menu";
		}
		
		goMenu++;
		
		/*function fadeIn(id, time) {
        target = $(id);
        alpha = 0;
        timer = (time*1000)/50;
        var i = setInterval(
                        function() {
                                if (alpha >= 100)
                                        clearInterval(i);
                                setAlpha(target, alpha);
                                alpha += 2;
                        }, timer);
}*/
		
	}
	
	