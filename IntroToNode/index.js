
//Native node module code which copies files
const fs = require('fs');

fs.copyFileSync("Files/file1.txt", "Files/file2.txt");
console.log("File copied");

//NPM module superhero and supervillain code

const superheroes = require("superheroes");
const supervillains = require('supervillains');


var superHeroName = superheroes.random();
var superVillainName = supervillains.random();

console.log(superHeroName);
console.log(superVillainName);