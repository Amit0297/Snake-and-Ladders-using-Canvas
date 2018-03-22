var number_of_players = 1;

$("input[type='radio']").click(function(){
    var i, x;
    for(i=0; i<4; i++)
        {
            if(document.getElementsByName("num_of_ply")[i].checked)
                {
                    break;
                }
        }
    number_of_players = i+1;
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
    
    
})
$("#play").click(function(){
    var counter=0;
    for(i=1; i<=number_of_players; i++)
        {
            var ply= "input[name=ply"+i+"]";
            if($(ply).val() == "")
            {
                counter++;
                alert("Enter proper values");
            }
            else
                {
                    var index= "#player"+i;
                    var player="player"+i;
                    $(index).html($(ply).val());
                    $(index).css("color", eval(player).color);
                    
                    
                }
                
        }
    if(counter == 0)
        {
            $(".front").hide();
            $(".back").show();
            $("#game").css("display", "inline-block");
            $("#info").css("display", "inline-block");
        }
    
})
