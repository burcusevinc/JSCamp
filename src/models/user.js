export default class User {
    constructor(id, firstName, lastName, city,age) {
        this.id = id //prototyping
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}

//constructor: class çağrılınca ilk çalışacak yer.
//this -> bulunduğu class
//this.id = id //prototyping yapılır.