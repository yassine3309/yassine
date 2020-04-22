// opérations sur les Tableaux

var ar=[2,5,200,300]


//map : à la placede foreach (parcour le tableau et fait les opérations de dmndées)
var ar2=ar.map((data)=>{
return data*5

})

var ar3 = ar.map(data=>data*3)

console.log(ar2)



//filter : retourne les données superieurs à la données (true)


var arfiltred = ar.filter(data=>data>50)
console.log(arfiltred)

var arfiltredtruefalse = ar.filter(data=>data>100)
console.log(arfiltredtruefalse)

//accumulator prend la valeur des la données precedente
var aracc=ar.reduce((accumulator, data)=>data+accumulator,4)
console.log(aracc)


