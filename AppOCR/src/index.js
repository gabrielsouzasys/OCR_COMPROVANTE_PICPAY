// const tesseract = require("node-tesseract-ocr")
const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");



// instanciando módulos
// var gulp = require('gulp');
// var gutil = require('gulp-util');
// var watch = require('gulp-watch');

const config = {
  lang: "eng",
  oem: 0,//3, //OCR Engine modes
  psm: 2//3, //Page segmentation modes (type tesseract on cmd to help)
}

const config_log = { /* logger: m => console.log(m) */ };

var img = __dirname + '\\assets\\' + "Testes.jpeg";

// var img_path = ReplacePath(img);
// console.log("\x1b[32m", "By Function " + img);

console.log("\x1b[31m", "Original " + img);
console.log("\x1b[0m", "Starterd Getting TEXT from Image!!! ");

var objtext = getText();


//EXECUTE OCR (Atenção a linguagem ENG ou POR pois gera erros...)
Tesseract.recognize(img, 'por', config_log)
  .then(text => {

    var resultado = text.data.text;
    // console.log("\x1b[37m", "FINISH");
    // console.log("\u001b[0m", "Texto da imagem: ");
    // console.log("\u001b[31m", resultado);//RED
    // console.log("\u001b[32m", JSON.stringify(resultado));//GREEN
    console.log("\u001b[33m", JSON.stringify(resultado.replace('/\n', '\/')));//YELLOW
    console.log("\x1b[0m", "");//RESET 
  })
  .catch(error => {
    console.log("\x1b[32m", "ERRO: " + error.message);
  })

// function ReplacePath(path) {

//   var teste = path.split("\\");
//   var path2;

//   for (var i = 0; i < teste.length; i++) {
//     // console.log("tamanho: " +  teste.length);
//     if (i === 0) {
//       path2 = teste[i] + '\\\\';

//     } else if (i === 8) {
//       path2 = path2 + teste[i]
//     } else {
//       path2 = path2 + teste[i] + '\\\\';
//     }

//     // console.log("Status do PATH: " + path2);
//   }

//   return path2;
// }


function getText(){




  
}