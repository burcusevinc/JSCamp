console.log("Merhaba Kodlama.io")
/*
var -> function scope
let -> block scope
JS type safe değildir.Değişkenin tipi sonradan değiştirilebilir.*/

//undefined : tanımlanmamış

let dolarBugun = 9.30

let dolarDun = 9.20
//dolarDun = "Ankara"
dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//değişkenler sabittir, güncellenemez. Read only.
const euroDun = 11.2
//euroDun = 11 -> değişiklik yapılamaz.

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)