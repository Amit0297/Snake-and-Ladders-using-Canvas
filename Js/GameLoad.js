//color names of players
var ply_color = ["#E34124", "#3DC606", "#063DC6", "#B506C6", "#06C6A0" , "#BFA305"];
var player1 = {posx:30, posy:565 ,plyid:0, color: ply_color[Math.floor(Math.random()*6)], row: 1};
var player2 = {posx:30, posy:565 ,plyid:1, color: ply_color[Math.floor(Math.random()*6)], row: 1};
var player3 = {posx:30, posy:565 ,plyid:2, color: ply_color[Math.floor(Math.random()*6)], row: 1};
var player4 = {posx:30, posy:565 ,plyid:3, color: ply_color[Math.floor(Math.random()*6)],  row: 1};
var snake =  {p1:[270, 385], e1:[90, 565], p2:[330, 325], e2:[510, 445], p3:[90, 145], e3:[90, 325], p4:[450, 25], e4:[450, 265]};
var ladder = {p1:[450, 565], e1:[510, 325], p2:[90, 445], e2:[210, 265], p3:[390, 265], e3:[270, 85], p4:[30, 205], e1:[150, 25]};
var loc = "Images/dice_show/face";
var counter=1;
var ctx;
var placeval =true;
var board_color="#F8CE8C";

$(document).ready(function(){
    var canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
    var img = document.getElementById("board");
    ctx.drawImage(img, 0, 0, 600, 600);
    var x_iterator = 60;
    var y_iterator = 60;
    for(i=0; i<=10; i++)
        {
            for(j=0; j<=10; j++)
                {
                    var num =0;
                    ctx.strokeRect(x_iterator*i, y_iterator*j, x_iterator, y_iterator);
                    ctx.font = "19px Arial";
                    if(j%2 == 0)
                        {
                             num =100-(j*10+i);
                        }
                    else
                        {
                            num = 100-((j+1)*10-1-i);
                        }
                    ctx.fillText(num, x_iterator*(i), y_iterator*(j+1));
                    
                }
            
            
        }
    player_visiblity(counter);
     $("#dice").click(function(){
         alert(number_of_players);
        $(this).attr("src", "Images/dice_show/face0.gif");
        var dice =roll();
        setTimeout(function(){
            var res=loc+dice+".png";
            $("#dice").attr("src",res);
            }, 2000);
        move(dice,counter);
        if(counter<=number_of_players)
            {
                if(placeval)
                    player_visiblity(counter);
                
                counter++;
            }
         if(counter>number_of_players)
             {
                 counter = 1;
                 placeval=false;
             }
        });
})

    function player_visiblity(id)
    {
         ctx.beginPath();
                var pno="player"+id;
                var player=eval(pno);
                ctx.arc(player.posx, player.posy, 10, 0, 2*Math.PI);
                ctx.fillStyle = player.color;
                ctx.fill();

    }
function clear(id){
    ctx.beginPath();
    var pno="player"+id;
    var player=eval(pno);
    ctx.arc(player.posx, player.posy, 11, 0, 2*Math.PI);
    ctx.fillStyle = '#F8CE8C';
    ctx.fill();
}
    
function snake_pos(id)
{
    var pno="player"+id;
    var player=eval(pno);
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
function ladder_pos(id)
{
    var pno="player"+id;
    var player=eval(pno);
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

    function roll()
    {
        var dice = Math.floor(Math.random()*6+1);
        return dice;
    }
     function move(dice, id)
    {
        var pno="player"+id;
        var player=eval(pno);
        alert(player);
        clear(counter);
        var i;
        alert(dice);
        for(i=1; i<=dice; i++)
        {
            var con=player.row % 2 ;
        alert('pos'+con);
            if(con == 0)
            {
                alert('inside');
                if(player.posx>0)
                    {
                        player.posx-= 60;
                        
                        alert('po'+player.posx);
                        if(player.posx<0)
                            {
                                 player.posx+=60;
                                player.posy-=60;
                                player.row++;
                                alert(player.posx);
                                alert(player.posy);
                                alert(player.row);
                                
                            }
            
                    
                    }
            }
        else{
            if(player.posx<600)
                {
                    player.posx+=60;
                    alert(player.posx);
                    if(player.posx>600)
                    {
                        player.posx-=60;
                        player.posy-=60;
                        player.row++;
                        alert(player.posx);
                        alert(player.posy);
                        alert(player.row);
                    
                    }
                }
            
            
        }
            
        }
        snake_pos(1);
        ladder_pos(1);
        ctx.beginPath();
        ctx.arc(player.posx, player.posy, 10, 0, 2*Math.PI);
        ctx.fillStyle = player.color;
        ctx.fill();
        
        
     
    }
        
