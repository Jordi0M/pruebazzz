    // Audios
    var sonido_vuelta_carta = new Audio('vueltaCarta.mp3');

    //Local Storage (guardar en memoria del pc las cartas)
    var array_cartas_JSON = [];

    var imagenes = document.getElementsByClassName("cartita");

    function funcLocalStorage() {
        array_cartas_JSON = [];
        for (key = 0; imagenes.length>key; key++) {
            var clase_carta_rotada = "";
            if (imagenes[key].classList.contains("rotada")){
                clase_carta_rotada = "rotada";
            }
            var cartas_JSON = {
                posicion_carta : key,
                clase : clase_carta_rotada,
                imagen : imagenes[key].getAttribute("src"),
            };
            array_cartas_JSON.push(cartas_JSON);
        }
        localStorage.local_imagenes = JSON.stringify(array_cartas_JSON);
    }

    //espera a que el html esté cargado
    document.addEventListener("DOMContentLoaded", function(event) {
        //comprueba si el localstorage es compatible con el navegador:
        if (typeof(Storage) !== 'undefined') {
            //comprueba si habia una sesion:
            if (localStorage.local_imagenes) {
                var cartas_JSON = JSON.parse(localStorage.local_imagenes);
                for (key = 0; imagenes.length>key; key++) {
                    if (cartas_JSON[key]["clase"]){
                        imagenes[key].classList.add(cartas_JSON[key]["clase"]);
                    }
                    imagenes[key].setAttribute("src", cartas_JSON[key]["imagen"]);
                }
            }
            //en caso de que no exista, la crea..
            else{
                funcLocalStorage();
            }
        } else {
            // Código cuando Storage NO es compatible
        }
    });




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
        for (i = 0; imagenes.length > i; i++){
            if (imagenes[i].classList.contains("rotada")){
                darVuelta(imagenes[i]);
                imagenes[i].src = "images/black/black_back.png";
                }
        }

        for (var img in contador_img_salida_carta){
            contador_img_salida_carta[img] = 0;
        }
        for (var img in contador_img_cartas_negras){
            contador_img_cartas_negras[img] = 0;
        }
        localStorage.clear();
    }

    function girarCarta(carta_selec, num_random) {

        sonido_vuelta_carta.play();

        if (contador_img_salida_carta[img_carta_frontal[num_random]] < 2){
            //cambia la imagen de la carta:
            carta_selec.src = img_carta_frontal[num_random];
            //suma las veces que ha salido la carta:
            contador_img_salida_carta[img_carta_frontal[num_random]] = contador_img_salida_carta[img_carta_frontal[num_random]]+1;
            //indicamos que ya ha dado la vuelta:
            darVuelta(carta_selec);
        }
        else if (contador_img_cartas_negras[img_carta_frontal[num_random]] < 4){
            carta_selec.src = img_carta_frontal[num_random];
            contador_img_cartas_negras[img_carta_frontal[num_random]] = contador_img_cartas_negras[img_carta_frontal[num_random]]+1;
            darVuelta(carta_selec);
        }
        else{
            clickCarta(carta_selec);
        }
    }

    function darVuelta(carta) {
        carta.classList.toggle('rotada');
    }

    function clickCarta(carta_selec) {
        if (!carta_selec.classList.contains("rotada")){

            //crea un numero random del 0 al 35, que son las cartas que tenemos:
            var num_random = Math.floor(Math.random() * 35);

            girarCarta(carta_selec, num_random);
        }
        funcLocalStorage();
    }