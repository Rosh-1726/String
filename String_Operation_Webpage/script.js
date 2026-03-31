function getText(){
return document.getElementById("text").value;
}

function showOutput(value){
document.getElementById("output").innerText = value;
}

function checkVowels(){
let str=getText();
let count=0;

for(let ch of str){
if("aeiouAEIOU".includes(ch)){
count++;
}
}

showOutput("Vowels: "+count);
}

function checkConsonants(){
let str=getText();
let count=0;

for(let ch of str){
if(/[a-zA-Z]/.test(ch) && !"aeiouAEIOU".includes(ch)){
count++;
}
}

showOutput("Consonants: "+count);
}

function countSpaces(){
let str=getText();
let count=(str.match(/ /g)||[]).length;

showOutput("Spaces: "+count);
}

function countNewLines(){
let str=getText();
let count=(str.match(/\n/g)||[]).length;

showOutput("New Lines: "+count);
}

function toLower(){
showOutput(getText().toLowerCase());
}

function capitalise(){
let str=getText();
showOutput(str.charAt(0).toUpperCase()+str.slice(1));
}

function titleCase(){
let str=getText().split(" ");

for(let i=0;i<str.length;i++){
str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}

showOutput(str.join(" "));
}

function checkPalindrome(){
let str=getText();
let rev=str.split("").reverse().join("");

if(str===rev){
showOutput("Palindrome");
}else{
showOutput("Not Palindrome");
}
}

function extractFirst(){
let str=getText().split(" ");
showOutput(str[0]);
}

function replaceHyphen(){
let str=getText().replaceAll(" ","-");
showOutput(str);
}

function reverseString(){
let str=getText().split("").reverse().join("");
showOutput(str);
}

function sortWords(){
let str=getText().split(" ").sort().join(" ");
showOutput(str);
}
