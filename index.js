/*Funcionando*/

const cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
"Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
"DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
"DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
"FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
"HoneyDew","HotPink","IndianRed ","Indigo  ","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon",
"LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
"LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
"Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple",
"MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream",
"MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod",
"PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple",
"RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
"Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato",
"Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]

function pegarCor() {
    return cores[Math.floor(Math.random()*cores.length)];
}

var opcaoCor = [];

var acerto = pegarCor();
opcaoCor.push(acerto);

while (opcaoCor.length < 10) {
    let novaCor = pegarCor();

    if (opcaoCor.indexOf(novaCor) == -1) {
        opcaoCor.push(novaCor);    
    }   
}
opcaoCor.sort();

function checar(advinhar) {
    if (opcaoCor.includes(advinhar)){
        return true;
    }
    return false;
}

function comecar(){

    while (true){

        let advinhar = prompt("Estou pensando em uma dessas cores, você consegue advinhar qual é?\n\n" 
        + opcaoCor[0] + ', ' + opcaoCor[1] + ', ' + opcaoCor[2] + ', ' + opcaoCor[3] + ', ' + opcaoCor[4] 
        + ', ' + opcaoCor[5] + ', ' + opcaoCor[6] + ', ' + opcaoCor[7] + ', ' + opcaoCor[8] + ', ' + opcaoCor[9]);

        if (advinhar == 'Pare'){
            return false;
        } 
        
        if (acerto == advinhar) {
            document.body.style.backgroundColor = acerto;
            alert("Parabéns você acertou!!!");
            return true;
        }
        
        if (!checar(advinhar)){
            alert("Ops, essa não é uma escolha válida, tente de novo.");

        } else if (advinhar > acerto) {
            alert('Na trave!!! Uma dica: A cor que eu escolhi começa com uma letra menor');

        } else if (advinhar < acerto){
            alert('No travessão!!! Dica rapida: A cor que eu escolhi começa com uma letra maior')
        }
        
    }
    

}


console.log(opcaoCor);
console.log(acerto);