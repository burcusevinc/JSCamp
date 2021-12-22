//obje tanımı
let student = {id:1, name:Burcu}
//console.log(student)

function save(ogrenci){
    console.log(ogrenci)
}
save() //parametre yok, undefined.
save(student) //çıktı student objesi.
save(15) //15 yazar.

//default parametreler sona yazılır.
function save2(ogrenci,puan=10){
    console.log(ogrenci.name + " : " + puan)
}

save2(student,100)
save2(50) //undefined : 10

function save3(puan=10, ogrenci){
    console.log(ogrenci.name + " : " + puan)
}

save3(undefined, student) //doğru çalışır.

//Array
let students = [student, {id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
console.log(student)

//REST - SPREAD - DESTRUCTURE

//REST -> Boş bir array tanımlar, içi doldurulabilir.
let showProducts = function(id, ...products){
    console.log(id)
    console.log(products)
    console.log(products[0])
}

//id:10, products: elma,armut,karpuz.
showProducts(10,"Elma","Armut","Karpuz") //bu notasyonla gönderilir.
showProducts(10,["Elma","Armut","Karpuz"]) //array içinde array alınır.

//SPREAD -> Arrayi parçalar.
let points = [1,2,7,78,45,3]
console.log(Math.max(...points))

//DESTRUCTURING -> Arrayin değerlerini değişkenlere atamak için kullanılır.

let populations = [10000, 20000, 30000,[40000, 100000]] //array
let[small, medium, high, [veryHigh, maximum]] = populations //destructing
console.log(small)

//Fonksiyonun içinde parametre olarak array kullanılırsa, destructing algılar.
function someFunction([small1], number){
    console.log(small1)
}
someFunction(populations) //gelen arrayin ilk değeri, small1'e atanır.

//Objeyi destruct etmek
let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])
let{id, name} = category //destructing
console.log(id)

