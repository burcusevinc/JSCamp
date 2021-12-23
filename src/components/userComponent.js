//Component, ekran olarak düşünülebilir.

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js";
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from "../models/customer.js"

console.log("User component yüklendi.")


let logger1 = new MongoLogger();


//UserService classını kullanmak için: (fonksiyonlar burada)
let userService = new UserService(logger1);


let user1 = new User(1,"Burcu","Sevinç","Bursa"); //obje tanımı
let user2 = new User(2,"Engin","Demiroğ","Ankara"); //obje tanımı

userService.add(user1) //sistemdeki kullanıcıları kaydedildiği yer
userService.add(user2)

//console.log(userService.list()) //sistemdeki kullanıcıların listelendiği yer
//console.log(userService.getById(2)) //kullanıcı bilgilerinin detayına gidişlir.

userService.list()

console.log("------------------")

userService.load()


let customerToAdd = new Customer(1,"Betül","Yılmaz","Balıkesir",23)
customerToAdd.type = "customer" //prototyping

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())



