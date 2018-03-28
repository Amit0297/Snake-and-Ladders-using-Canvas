//color names of players
var ply_color = ["#E34124", "#3DC606", "#063DC6", "#B506C6", "#06C6A0" , "#BFA305"];
var player1 = {posx:30, posy:565 ,plyid:0, color: color_picker(), row: 1};
var player2 = {posx:30, posy:565 ,plyid:1, color: color_picker(), row: 1};
var player3 = {posx:30, posy:565 ,plyid:2, color: color_picker(), row: 1};
var player4 = {posx:30, posy:565 ,plyid:3, color: color_picker(),  row: 1};
var snake =  {p1:[270, 385], e1:[90, 565], p2:[330, 325], e2:[510, 445], p3:[90, 145], e3:[90, 325], p4:[450, 25], e4:[450, 265]};
var ladder = {p1:[450, 565], e1:[510, 325], p2:[90, 445], e2:[210, 265], p3:[390, 265], e3:[270, 85], p4:[30, 205], e4:[150, 25]};
var loc = "Images/dice_show/face";
var counter=1;
var ctx;
var placeval =true;
var board_color="#F8CE8C";

// Begining
$(document).ready(function(){
    var canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
    var img = document.getElementById("board");
    ctx.drawImage(img, 0, 0, 600, 600);
    var x_iterator = 60;
    var y_iterator = 60;
    //Draw the canvas
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

   // Dice move             
     $("#dice").click(function(){
         $(this).attr("src", "Images/dice_show/face0.gif");
        var dice =roll();
        setTimeout(function(){
            var res=loc+dice+".png";
            $("#dice").attr("src", res);
            }, 2000);
        setTimeout(function(){move(dice,counter)}, 2200);
            
});
});
function switch_player(dice){
               if(dice!=6)
             {
                 if(computer)
                     {
                      
                         setTimeout(function(){move(dice,counter+1)}, 3200);
                         
                     }
                 else{
                     if(counter<=number_of_players)
                     {
                         counter++;
                     }
                     if(counter>number_of_players)
                     {
                         counter = 1;
                         placeval=false;
                     }
                     if(placeval)
                             player_visiblity(counter);
                     
                 }
                 
                }
        }

function color_picker(){
    var col = ply_color[Math.floor(Math.random()*6)];
    
    var pos = ply_color.indexOf(col);
    var rem = ply_color.slice(pos, 1);
    return col;

}






    function player_visiblity(id)
    {
        ctx.beginPath();
        var player=getplayer(id);
        ctx.arc(player.posx, player.posy, 10, 0, 2*Math.PI);
        ctx.fillStyle = player.color;
        ctx.fill();
    }

function clear(id){
    ctx.beginPath();
    var player=getplayer(id);
    ctx.arc(player.posx, player.posy, 11, 0, 2*Math.PI);
    ctx.fillStyle = '#F8CE8C';
    ctx.fill();
}
    


    function getplayer(id)
    {
        var pno="player"+id;
        var player=eval(pno);
        return player;
    }


    // To roll the dice
    function roll()
    {
        var dice = Math.floor(Math.random()*6+1);
        return dice;
    }
    
     function move(dice, id)
    {
        var player=getplayer(id);
        clear(id);
        var i;
        alert('player' + id);
        for(i=1; i<=dice; i++)
        {
            //To check if player is in the upper row
            if(player.row == 10)
            {
                if((player.posx - (dice*60) )<30)
                    break;
            }
            
            var con=player.row % 2 ;
            if(con == 0)
            {
                if(player.posx>0)
                {
                    player.posx-= 60;
                    if(player.posx<0)
                    {
                        player.posx+=60;
                        player.posy-=60;
                        player.row++;
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
                    }
                }
            }
            
        }
        snake_pos(id);
        ladder_pos(id);
        ctx.beginPath();
        ctx.arc(player.posx, player.posy, 10, 0, 2*Math.PI);
        ctx.fillStyle = player.color;
        ctx.fill();
        switch_player(dice);
    }
     
    
