function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

//enum function:
let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2();

//Parametreleri alttaki gibi ayrı ayrı yazmak yerine objeler kullanılır.
function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

//Obje Tanımı:
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}
addToCart3(product1)

//DEĞER VE REFERANS TİPİ

//objeler referans tiplidir.
//product2'nin referans numarası product3'ün referans nosuna eşitlenir.
//Bellek adresi atanır, aynı yeri işaret ederler.
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName) // karpuz yazar.

//int değerler değer tiplidir.
//sadece değer atanır, verinin kendisini atamazsın.
//bellekteki adresi değişmez.
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2 //sayı1'in değeri sayı2'nin değerine eşitlenir.
sayi2 = 100//sayi2 değişir, sayı1 20 kalır.
console.log(sayi1)//20 yazar.

function addToCart4(products) {
    console.log(products)
}
//Birden fazla obje, aynı anda birden fazla ürünü sepete ekleme işlemi gibi:
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//REST OPERATÖRÜ, boş array oluşturur içine değerler atanır, istenildiği kadar.
function add(bisey,...numbers) { 
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

//SPREAD OPERATÖRÜ 
let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

//DESTRUCTING
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

//Obje Destruct:
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

/*Süslü parantezler kod blogu olarak algılanmasın diye, 
kod parantez içerisine alındı. Yoksa JS süslü parantezleri
kod blogu olarak algılardı ve kod hata verirdi.Buradaki süslü
parantezler obje notasyonunundur.*/