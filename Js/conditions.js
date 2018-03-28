//To check snake condition
function snake_pos(id)
{
    var player= getplayer(id);
    if((player.posx == snake.p1[0])&&(player.posy == snake.p1[1]))
        {
            player.posx = snake.e1[0];
            player.posy = snake.e1[1];
        }
    if((player.posx == snake.p2[0]) && (player.posy == snake.p2[1]))
        {
            player.posx = snake.e2[0];
            player.posy = snake.e2[1];
            
        }
    if((player.posx == snake.p3[0]) && (player.posy == snake.p3[1]))
        {
            player.posx = snake.e3[0];
            player.posy = snake.e3[1];
            
        }
    if((player.posx == snake.p4[0]) && (player.posy == snake.p4[1]))
        {
            player.posx = snake.e4[0];
            player.posy = snake.e4[1];
            
        }
    
}
//To check Ladder Condition
function ladder_pos(id)
{
    var player = getplayer(id);
    if((player.posx == ladder.p1[0])&&(player.posy == ladder.p1[1]))
        {
            player.posx = ladder.e1[0];
            player.posy = ladder.e1[1];
        }
    if((player.posx == ladder.p2[0]) && (player.posy == ladder.p2[1]))
        {
            player.posx = ladder.e2[0];
            player.posy = ladder.e2[1];
            
        }
    if((player.posx == ladder.p3[0]) && (player.posy == ladder.p3[1]))
        {
            player.posx = ladder.e3[0];
            player.posy = ladder.e3[1];
            
        }
    if((player.posx == ladder.p4[0]) && (player.posy == ladder.p4[1]))
        {
            player.posx = ladder.e4[0];
            player.posy = ladder.e4[1];
            
        }
    
}
//To check if player won 
function win(id){
    
    var player=getplayer(id);
    if((player.posx == 30)&&(player.posy == 25))
        alert(player+ "won");
    }