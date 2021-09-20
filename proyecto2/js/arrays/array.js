const autos=['bmw','volvo','mercedez']
console.log(autos[1]);

for(let i=0;i<autos.length;i++){
    console.log(autos[i])
    console.log(i + ':'+ autos[i])

}
autos.push('audi');
console.log(autos);

console.log(autos.length)
autos[autos.length]='mazda';
console.log(autos);// agregar a un array

