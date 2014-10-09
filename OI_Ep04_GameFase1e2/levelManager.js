function levelManager()
{
	switch(level)
	{
		case 1:
		Lvl1();
		break;
		
		case 2:
		Lvl2();
		break;
		
		case 3:
		Lvl3();
		break;
		
		case 4:
		Lvl4();
		break;
		
		case 5:
		Lvl5();
		break;
		
		case 6:
		src = "win";
		break;
		
		case 7:
		src = "gameOver";
		
	}
}