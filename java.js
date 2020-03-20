    // Audios
    var sonidoVueltaCarta = new Audio('vueltaCarta.mp3');

    var contador_img_salida_carta =
        {
            "images/blue/blue1.png":0,
            "images/blue/blue2.png":0,
            "images/blue/blue3.png":0,
            "images/blue/blue4.png":0,
            "images/blue/blue5.png":0,
            "images/green/green1.png":0,
            "images/green/green2.png":0,
            "images/green/green3.png":0,
            "images/green/green4.png":0,
            "images/green/green5.png":0,
            "images/orange/orange1.png":0,
            "images/orange/orange2.png":0,
            "images/orange/orange3.png":0,
            "images/orange/orange4.png":0,
            "images/orange/orange5.png":0,
            "images/purple/purple1.png":0,
            "images/purple/purple2.png":0,
            "images/purple/purple3.png":0,
            "images/purple/purple4.png":0,
            "images/purple/purple5.png":0,
            "images/red/red1.png":0,
            "images/red/red2.png":0,
            "images/red/red3.png":0,
            "images/red/red4.png":0,
            "images/red/red5.png":0,
            "images/yellow/yellow1.png":0,
            "images/yellow/yellow2.png":0,
            "images/yellow/yellow3.png":0,
            "images/yellow/yellow4.png":0,
            "images/yellow/yellow5.png":0,
        };

    var contador_img_cartas_negras = {
        "images/black/black_prohibition.png":0,
        "images/black/black_rotation.png":0,
        "images/black/black_tree.png":0,
        "images/black/black_two.png":0,
        "images/black/black_uno.png":0,
    };

    var img_carta_frontal = [
        "images/black/black_prohibition.png",
        "images/black/black_rotation.png",
        "images/black/black_tree.png",
        "images/black/black_two.png",
        "images/black/black_uno.png",
        "images/blue/blue1.png",
        "images/blue/blue2.png",
        "images/blue/blue3.png",
        "images/blue/blue4.png",
        "images/blue/blue5.png",
        "images/green/green1.png",
        "images/green/green2.png",
        "images/green/green3.png",
        "images/green/green4.png",
        "images/green/green5.png",
        "images/orange/orange1.png",
        "images/orange/orange2.png",
        "images/orange/orange3.png",
        "images/orange/orange4.png",
        "images/orange/orange5.png",
        "images/purple/purple1.png",
        "images/purple/purple2.png",
        "images/purple/purple3.png",
        "images/purple/purple4.png",
        "images/purple/purple5.png",
        "images/red/red1.png",
        "images/red/red2.png",
        "images/red/red3.png",
        "images/red/red4.png",
        "images/red/red5.png",
        "images/yellow/yellow1.png",
        "images/yellow/yellow2.png",
        "images/yellow/yellow3.png",
        "images/yellow/yellow4.png",
        "images/yellow/yellow5.png",
    ];

    var imagenes = document.getElementsByClassName("cartita");

    function barajarTodas() {
        for ($i = 0; imagenes.length > $i; $i++){
            imagenes[$i].src = "images/black/black_back.png";
            imagenes[$i].setAttribute("vuelta","no");
        }

        for (var img in contador_img_salida_carta){
            contador_img_salida_carta[img] = 0;
        }
        for (var img in contador_img_cartas_negras){
            contador_img_cartas_negras[img] = 0;
        }
    }

    function girarCarta(carta_selec, num_random) {

        sonidoVueltaCarta.play();

        if (contador_img_salida_carta[img_carta_frontal[num_random]] < 2){
            //cambia la imagen de la carta:
            carta_selec.src = img_carta_frontal[num_random];
            //suma las veces que ha salido la carta:
            contador_img_salida_carta[img_carta_frontal[num_random]] = contador_img_salida_carta[img_carta_frontal[num_random]]+1;
            //indicamos que ya ha dado la vuelta:
            carta_selec.setAttribute("vuelta","si");
        }
        else if (contador_img_cartas_negras[img_carta_frontal[num_random]] < 4){
            carta_selec.src = img_carta_frontal[num_random];
            contador_img_cartas_negras[img_carta_frontal[num_random]] = contador_img_cartas_negras[img_carta_frontal[num_random]]+1;
            carta_selec.setAttribute("vuelta","si");
        }
        else{
            clickCarta(carta_selec);
        }
    }

    function clickCarta(carta_selec) {

        if (carta_selec.getAttribute("vuelta") == "no"){

            //crea un numero random del 0 al 35, que son las cartas que tenemos:
            var num_random = Math.floor(Math.random() * 35);

            girarCarta(carta_selec, num_random);
        }
    }