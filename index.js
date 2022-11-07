/*Funcionando*/

const cores = new Array("AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure",
"Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
"CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan",
"DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
"FireBrick","FloralWhite","ForestGreen","Fuchsia",
"Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
"HoneyDew","HotPink",
"IndianRed ","Indigo","Ivory",
"Khaki",
"Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
"Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin",
"NavajoWhite","Navy",
"OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid",
"PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple",
"RebeccaPurple","Red","RosyBrown","RoyalBlue",
"SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue",
"Tan","Teal","Thistle","Tomato","Turquoise",
"Violet",
"Wheat","White","WhiteSmoke",
"Yellow","YellowGreen");

/*Fazer variavel para cores sorteadas*/

var coresSorteadas = new Array();

function sorteioCores() {
    for (var i = 0; i < 10; i++) {
        var verificar = false;
        var corSorteada;
        do {
            corSorteada = cores[Math.floor(Math.random() * 140)];

            for (var x = 1; x <= coresSorteadas.length; x++) {
                if (corSorteada == coresSorteadas[x]) {
                    verificar = false;
                } else if (x == coresSorteadas.length) {
                    verificar = true;
                }
            }

            if (coresSorteadas.length == 0) {
                verificar = true;
            }
        } while (verificar == false);
        
        coresSorteadas[i] = corSorteada;
    }
}

/*Inicio do jogo*/

function continuacao() {
    var corEscolhida = coresSorteadas[Math.floor(Math.random() * 10)];
    console.log(typeof corEscolhida);
    var acertou = false;

    do {
        var mensagem = "Eu estou pensando em uma dessas cores: \n";

        for (var i = 0; i < 10; i++) {
            mensagem += coresSorteadas[i] + ", ";
        }

        mensagem += "\n\nVamos jogar um jogo? Tente adivinhar qual cor eu escolhi:";
        var inputUsuario = prompt(mensagem);
        console.log(inputUsuario);        

        /*Fazer as mensagens. Pensar em dicas.*/
        
        if (inputUsuario.toLowerCase() == corEscolhida.toLowerCase()) {
            document.body.style.backgroundColor = corEscolhida;
            alert("Assim que se faz!!! Parebens, você acertou")
            acertou = true;
        } else {
            let letraInput = inputUsuario.charAt(0).toLowerCase();
            let letraCorSorteada = corEscolhida.charAt(0).toLowerCase();
            if (letraInput < letraCorSorteada) {
                alert("Por pouco!!!Você tá no caminho certo. A cor escolhida começa com " + letraInput + ".\n\nE a minha cor é alfabeticamente maior que a sua. Vamo lá, tente novamente.");
            } else if (letraInput > letraCorSorteada) {
                alert("Na trave!! Tá chegando perto hein. A cor escolhida começa com " + letraInput + ".\n\nQue tal uma dica: A sua cor é alfabeticamente maior que à minha. Sem medo errar, tente novamente.");
            } else if (letraInput == letraCorSorteada) {
                alert("Tirou tinta do travessão! Você tá quase lá, a cor escolhida começa com " + letraInput + ".\n\nE spoilers: A sua cor começa com a mesma letra que a minha. Falo mais nada, então tente novamente.");
            } else {
                alert("Vish, acho que ocorreu algum erro.");
            }
        }
    } while (acertou == false);
}
