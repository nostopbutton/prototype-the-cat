$(document).ready(function(){

    $("input").button ();
    $("fieldset[name=body_choice]").buttonset();
    $("fieldset[name=skirt_choice]").buttonset();
    $("fieldset[name=sleeves_choice]").buttonset();
    $("fieldset[name=trim_choice]").buttonset();
    $("fieldset[name=effect_choice]").buttonset();

    $("input[name=body]").click(function(){
        var body = $("input[name=body]:checked").val(),
            body_img = '';

        switch(body) {
            case("bateau"):
                body_img = 'BODYbateau.png';
                break;
            case("v-neck"):
                body_img = 'BODYVneck.png';
                break;
            case("colour"):
                body_img = 'BODYcolour.png';
                break;
            case("doloman"):
                body_img = 'BODYdoloman.png';
                break;
            default:
                alert("ERROR: no body selected");
        }
//        $('.list').append('<div class="item">'+ body_img + '</div>');
        $('.body').html('<img class="pic body" src="img/' + body_img + '" />');
//        $('img.pic.body').effect("pulsate", {times : 3 }, 2000);
    });

    $("input[name=skirt]").click(function(){
        var skirt = $("input[name=skirt]:checked").val(),
            skirt_img = '';

        switch(skirt) {
            case("pencil"):
                skirt_img += 'SKIRTPencil.png';
                break;
            case("floaty"):
                skirt_img += 'SKIRTfloaty.png';
                break;
            default:
                alert("ERROR: no skirt selected");
        }

//        $('.list').append('<div class="item">'+ skirt_img + '</div>');
        $('.skirt').html('<img class="pic skirt" src="img/' + skirt_img + '" />');
//        $('img.pic.skirt').effect("pulsate", {times : 3 }, 2000);
    });

    $("input[name=sleeves]").click(function(){
        var sleeves = $("input[name=sleeves]:checked").val(),
            sleeves_img = '';

        switch(sleeves) {
            case("no_sleeves"):
                sleeves_img = '';
                break;
            case("cap"):
                sleeves_img = 'sleevesCAP.png';
                break;
            case("long"):
                sleeves_img = 'sleevesLONG.png';
                break;
            default:
                alert("ERROR: no sleeves selected");
        }

//        $('.list').append('<div class="item">'+ sleeves_img + '</div>');
        if(sleeves_img) {
            $('.sleeves').html('<img class="pic sleeves" src="img/' + sleeves_img + '" />');
        } else {
            $('.sleeves').html('');
        }
    });

    // TODO - need to make this cope with multiple accessories gracefully (array anyone?)
    $("input[name=accessory]").click(function(){
        var accessory = $("input[name=accessory]:checked").val(),
            belt_img = '';

        if(accessory === "black_belt") {
            belt_img = 'BELT.png';
        } else {
            belt_img = '';
        }

//        $('.list').append('<div class="item">'+ belt_img + '</div>');
        if(belt_img) {
            $('.accessory').html('<img class="pic accessory" src="img/' + belt_img + '" />');
        } else {
            $('.accessory').html('');
        }
    });

    $("input[name=effect]").click(function(){

    });

});
