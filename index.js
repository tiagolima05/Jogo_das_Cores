/*Funcionando*/

let cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure",
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
"Yellow","YellowGreen"];

function escolherCor() {
  return cores[Math.floor(Math.random() * cores.length)]; 
}

let opcoesDeCores = [];

let opcaoCerta = escolherCor();
opcoesDeCores.push(opcaoCerta);

while (opcoesDeCores.length < 10) {
    
  let novaCor = escolherCor();

  if (opcoesDeCores.indexOf(novaCor) == -1) {
    opcoesDeCores.push(novaCor);    
  }   
}

opcoesDeCores.sort();

function check(chute) {
  if (opcoesDeCores.includes(chute)){
      return true;
  }
  return false;
}

function comecar(){
  while (true){
    let chute = prompt(`Estou pensando em uma dessas cores:\n\n${opcoesDeCores[0]}, ${opcoesDeCores[1]}, ${opcoesDeCores[2]}, ${opcoesDeCores[3]}, ${opcoesDeCores[4]}, ${opcoesDeCores[5]}, ${opcoesDeCores[6]}, ${opcoesDeCores[7]}, ${opcoesDeCores[8]}, ${opcoesDeCores[9]}\n\nQual dessas cores eu estou pensando hein?`);
    
    if (opcaoCerta == chute) {
        document.body.style.backgroundColor = opcaoCerta;
        alert(`Opção correta!! Parabéns!!`);
        return true;
    }
    
    if (!check(chute)){
        alert(`Ai não! Têm que digitar uma dessas cores.`);
    } else if (chute > opcaoCerta) {
        alert(`Errou!!! Foi na trave, então toma essa dica: Sua cor é menor na ordem alfabética do que a que eu pensei. Tente denovo.`);
    } else if (chute < opcaoCerta){
        alert(`Vish! Foi no travessão, então toma essa dica: Sua cor é maior em ordem alfabética do que a que eu pensei. Tente denovo.`)
    }   
  }
}
