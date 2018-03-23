var number_of_players = 1;
var computer = false;
var player_selected = false;

function hide_front()
            {
                $("#top-img").hide();
                $(".front").hide();
                $(".back").show();
                $("#game").css("display", "inline-block");
                $("#info").css("display", "inline-block");
            }
function Value_Checker(no)
{
    var count = 0;
    var ply= "input[name=ply"+no+"]";
    if($(ply).val() == "")
    {
        count++;
        alert("Enter proper values");
    }
    else
    {
        var index= "#player"+no;
        var player="player"+no;
        $(index).html($(ply).val());
        $(index).css("color", eval(player).color);
    }
    return count;
}

$("input[type='radio']").click(function(){
    var i, x;
    for(i=0; i<4; i++)
        {
            if(document.getElementsByName("num_of_ply")[i].checked)
                {
                    player_selected = true;
                    break;
                }
        }
    number_of_players = i+1;
    if(i == 0)
    {
        computer = true;
        number_of_players = 2;
    }
    else{
        computer = false;
    }
    switch(i)
        {
            case 0:
                {
                    $(".play1").hide();
                    $(".play2").hide();
                    $(".play3").hide();
                    $("#player2").html("My Computer");
                    $("#player3").hide();
                    $("#player4").hide();
                    break;
                }
                
            case 1:
                {
                    $(".play1").show();
                    $(".play2").hide();
                    $(".play3").hide();
                    $("#player2").show();
                    $('#player3').hide();
                    $('#player4').hide();
                    break;
                }
                
            case 2:
                {
                    $(".play1").show();
                    $(".play2").show();
                    $(".play3").hide();
                    $("#player2").show();
                    $("#player3").show();
                    $('#player4').hide();
                    break;
                    
                }
            case 3:
                {
                    $(".play1").show();
                    $(".play2").show();
                    $(".play3").show();
                    $("#player2").show();
                    $("#player3").show();
                    $("#player4").show();
                }
        }
    
    
});
$("#play").click(function(){
    
    if(player_selected )
        {
            if(!computer)
            {
                
                for(i=1; i<=number_of_players; i++)
                    {
                        var count = 0;
                        count+= Value_Checker(i);
                        
                    }
                if(!count)
                    hide_front();
                            
        
                
                
            }
            else{
                if(!Value_Checker(1))
                    hide_front();
                
            }
                    
                
        }
    else
        alert("click on a radio button and select players");

});
