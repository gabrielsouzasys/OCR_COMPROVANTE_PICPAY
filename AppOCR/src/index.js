// const tesseract = require("node-tesseract-ocr")
const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");

// instanciando módulos
// var gulp = require('gulp');
// var gutil = require('gulp-util');
// var watch = require('gulp-watch');


// fs.readdir (path, function(err, items) {
//   console.log(items);

//   for (var i=0; i<items.length; i++) {
//       console.log(items[i]);
//   }
// });



var dir_img = __dirname + '\\assets\\PicPay\\';

// Function to get current filenames 
// in directory 
filenames = fs.readdirSync(dir_img); 
  
// console.log("\nCurrent directory filenames:"); 

// filenames.forEach(file => { 
//   console.log("arquivos: " +  file); 
// }); 
  

var img = __dirname + '\\assets\\' ;//Adicionar o arquivo .jpg no fim da string 
var img2;
// var img_path = ReplacePath(img);
// console.log("\x1b[32m", "By Function " + img);

filenames.forEach(file => { 
  // console.log("arquivos: " +  file); 
  img2 = img + file;
  console.log("teste arquivo do Picpay: " + img2);
}); 
  

// console.log("\x1b[31m", "Original " + img);
console.log("\x1b[0m", "Starterd Getting TEXT from Image!!! ");

var objtext = getText(img2, Tesseract);






//Tesseract OCR
function getText(imagem, Tesseract) {

  const config = {
    lang: "eng",
    oem: 0,//3, //OCR Engine modes
    psm: 2//3, //Page segmentation modes (type tesseract on cmd to help)
  }

  const config_log = { /* logger: m => console.log(m) */ };


  //EXECUTE OCR (Atenção a linguagem ENG ou POR pois gera erros...)
  Tesseract.recognize(imagem, 'por', config_log)
    .then(text => {

      var resultado = text.data.text;
      // console.log("\x1b[37m", "FINISH");
      // console.log("\u001b[0m", "Texto da imagem: ");
      // console.log("\u001b[31m", resultado);//RED
      // console.log("\u001b[32m", JSON.stringify(resultado));//GREEN
      console.log("\u001b[33m", JSON.stringify(resultado.replace('/\n', '\/')));//YELLOW
      console.log("\x1b[0m", "");//RESET 

      return  {text: resultado.replace('/\n', '\/')}

    })
    .catch(error => {
      console.log("\x1b[32m", "ERRO: " + error.message);
    })


}


/* 
function ReplacePath(path) {

  var teste = path.split("\\");
  var path2;

  for (var i = 0; i < teste.length; i++) {
    // console.log("tamanho: " +  teste.length);
    if (i === 0) {
      path2 = teste[i] + '\\\\';

    } else if (i === 8) {
      path2 = path2 + teste[i]
    } else {
      path2 = path2 + teste[i] + '\\\\';
    }

    // console.log("Status do PATH: " + path2);
  }

  return path2;
} */