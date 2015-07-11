var condition;
tile = [[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]];

function areEqual()
{
   var len = arguments.length;
   for (var i = 1; i< len; i++)
   {
      if (arguments[i] == null || arguments[i] != arguments[i-1])
        return false;
   }
   return true;
}

function getPositions(condition)
{
	if(condition == 'L2R' || condition == 'U2D')
	{		
		var b1 = 0;
		var b2 = 1;
		var b3 = 2;
		var b4 = 3; 
		var box = [0,1,2,3];
	}

	if(condition == 'R2L' || condition == 'D2U' )
	{		
		var b1 = 3;
		var b2 = 2;
		var b3 = 1;
		var b4 = 0;
		var box = [3,2,1,0];
	}
	
	if(condition == 'L2R' || condition == 'R2L')
	{
		box.forEach(function(i) {
		
		if(condition == 'L2R')
		{
			for(var l=b1;l<=b4;l++){
				for(var j=b4;j>=b2;j--)
				{
					if(tile[i][j] == 0)
					{
						var b = tile[i][j-1];
						tile[i][j] = tile[i][j-1];
						tile[i][j-1] = 0;
					}
				}
			}
		}
		
		if(condition == 'R2L')
		{
			for(var l=b1;l>=b4;l--)
			{
				for(var j=b4;j<=b2;j++)
				{
					if(tile[i][j] == 0)
					{
						var b = tile[i][j+1];
						tile[i][j] = tile[i][j+1];
						tile[i][j+1] = 0;
					}
				}
			}
		}
		

		if(areEqual(tile[i][b1],tile[i][b2],tile[i][b3],tile[i][b4]) ) 
		{tile[i][b4] = tile[i][b3]+tile[i][b4];tile[i][b3] = tile[i][b1]+tile[i][b2];tile[i][b1] = 0; tile[i][b2] = 0 ;}
		else if(areEqual(tile[i][b2],tile[i][b3],tile[i][b4]) && tile[i][b1] != tile[i][b4]  )
		{tile[i][b4] = tile[i][b3]+tile[i][b4];tile[i][b1] = 0; tile[i][b2] = 0 ;}
		else if(areEqual(tile[i][b1],tile[i][b2],tile[i][b3])  && tile[i][b3] != tile[i][b4] )
		{ tile[i][b3] = tile[i][b2]+tile[i][b3];tile[i][b1] = 0;}
		else if(areEqual(tile[i][b1],tile[i][b2]) && areEqual(tile[i][b3],tile[i][b4]) && !areEqual(tile[i][b1],tile[i][b2],tile[i][b3],tile[i][b4]) )
		{tile[i][b4] = tile[i][b3]+tile[i][b4];tile[i][b3] = tile[i][b1]+tile[i][b2];tile[i][b1] = tile[i][b2] = 0; }	
		else if(tile[i][b1] != tile[i][b2] && areEqual(tile[i][b3],tile[i][b4])  )
		{tile[i][b4] = tile[i][b3]+tile[i][b4];tile[i][b3] = tile[i][b2]; tile[i][b2] = tile[i][b1]; tile[i][b1] = 0;}	
		else if(areEqual(tile[i][b1],tile[i][b2]) && tile[i][b3] != tile[i][b4]  )
		{tile[i][b2] =  tile[i][b1]+tile[i][b2];tile[i][b1] = 0;  }
		else if(areEqual(tile[i][b3],tile[i][b2]) && tile[i][b3] != tile[i][b4]  )
		{tile[i][b3] =  tile[i][b3]+tile[i][b2]; tile[i][b2] =  tile[i][b1]; tile[i][b1] = 0;  }
		});
	}

	if(condition == 'U2D' || condition == 'D2U')
	{	
		box.forEach(function(i)
		{
			if(condition == 'U2D')
			for(var l=b1;l<=b4;l++)for(var j=b4;j>=b2;j--){ if(tile[j][i] == 0){var b = tile[j-1][i];tile[j][i] = tile[j-1][i];tile[j-1][i] = 0;}}
			if(condition == 'D2U')
			for(var l=b1;l>=b4;l--)for(var j=b4;j<=b2;j++){ if(tile[j][i] == 0){var b = tile[j+1][i];tile[j][i] = tile[j+1][i];tile[j+1][i] = 0;}}

			if(areEqual(tile[b1][i],tile[b2][i],tile[b3][i],tile[b4][i]) ) 
			{tile[b4][i] = tile[b3][i]+tile[b4][i];tile[b3][i] = tile[b1][i]+tile[b2][i];tile[b1][i] = 0; tile[b2][i] = 0 ;}
			else if(areEqual(tile[b2][i],tile[b3][i],tile[b4][i]) && tile[b1][i] != tile[b4][i]  )
			{tile[b4][i] = tile[b3][i]+tile[b4][i];tile[b1][i] = 0; tile[b2][i] = 0 ;}
			else if(areEqual(tile[b1][i],tile[b2][i],tile[b3][i])  && tile[b3][i] != tile[b4][i] )
			{ tile[b3][i] = tile[b2][i]+tile[b3][i];tile[b1][i] = 0;}
			else if(areEqual(tile[b1][i],tile[b2][i]) && areEqual(tile[b3][i],tile[b4][i]) && !areEqual(tile[b1][i],tile[b2][i],tile[b3][i],tile[b4][i]) )
			{tile[b4][i] = tile[b3][i]+tile[b4][i];tile[b3][i] = tile[b1][i]+tile[b2][i];tile[b1][i] = tile[b2][i] = 0; }	
			else if(tile[b1][i] != tile[b2][i] && areEqual(tile[b3][i],tile[b4][i])  )
			{tile[b4][i] = tile[b3][i]+tile[b4][i];tile[b3][i] = tile[b2][i]; tile[b2][i] = tile[b1][i]; tile[b1][i] = 0;}	
			else if(areEqual(tile[b1][i],tile[b2][i]) && tile[b3][i] != tile[b4][i]  )
			{tile[b2][i] =  tile[b1][i]+tile[b2][i];tile[b1][i] = 0;  }
			else if(areEqual(tile[b3][i],tile[b2][i]) && tile[b3][i] != tile[b4][i]  )
			{tile[b3][i] =  tile[b3][i]+tile[b2][i]; tile[b2][i] =  tile[b1][i]; tile[b1][i] = 0;  }
		});
	}
	checkZero(tile);
}

//conditions are  'L2R'  'R2L' 'U2D' 'D2U'

function update_grid(condition)
{
	getPositions(condition);
	var htm ='';
	for(var l=0;l<=3;l++)
	{
		htm += '<div class="grid-row">';	
		for(var j=0;j<=3;j++)
		{
			if(tile[l][j] == 0) 
			{
				htm +='<div class="grid-cell"></div>';
			}
			else
			{
				htm +='<div class="grid-cell">'+tile[l][j]+'</div>';
			}
		}
		htm += '</div>';
	}
	document.getElementById('grid-container').innerHTML = htm;
}

function checkZero(tiles)
{	var zeros = new Array();
	var num =0;
	for(var l=0;l<=3;l++)
	{
		for(var j=0;j<=3;j++){
			if(tiles[l][j] == 0) {
				zeros.push(l+':'+j);
			}
		}
	}
	
	var zero = zeros[Math.floor(Math.random() * zeros.length)];
	//console.log(zero);
	if(zero != undefined)
	{
		zero = zero.split(":");
		tile[parseInt(zero[0])][parseInt(zero[1])] = (Math.floor(Math.random() * 9) === 8 ? 4 : 2);
	}
	else
	{
		if(!check_moves_available()) 
		{
			console.log("game over");
			document.getElementById("game_over").style.display = "block";
		}
	}
	
}

function check_moves_available() {
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			if( (tile[i][j + 1] !== undefined && tile[i][j + 1] === tile[i][j]) || (tile[i + 1] !== undefined && tile[i + 1][j] === tile[i][j]) )
				return true;
		}
	}

	return false;
}

document.onkeydown = function(e) 
{
    var condition="";
    if (e.keyCode == '38') 
    {
    	condition = 'D2U';
    	update_grid(condition); // up 
    }
    else if (e.keyCode == '40') 
    {
    	condition = 'U2D';
    	update_grid(condition); // down arrow
    }
    else if (e.keyCode == '37') 
    {
    	condition = 'R2L';
    	update_grid(condition); // left arrow
    }
    else if (e.keyCode == '39') 
    {
    	condition = 'L2R'; 
    	update_grid(condition); // right arrow
    }

}
//
update_grid('L2R');
update_grid('L2R');