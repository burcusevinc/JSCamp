import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    // export ->dışarıdan import edilebilir.
    //fonksiyonlar buraya gruplama amaçlı eklenecek.
    
    constructor(loggerService){//bir logerservice verir.
        //this.users = [] //boş array
        this.employees = []
        this.customers = []
        this.errors = [] //hatalar için
        this.loggerService = loggerService //prototype
    }


    //gelen datayı employeelere ve customerlara ayıracak.
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) { //false ise yani hata yoksa
                        this.customers.push(user) //hata yoksa ekler.
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) { //false ise yani hata yoksa
                        this.employees.push(user) //hata yoksa ekler.
                    }
                    break;
                default:
                    this.errors.push(new DataError("wrong user type",user))
                    break;
            }
        }
    }
    //formik-yup
    checkCustomerValidityForErrors(user){
        //zorunlu olacak bilgiler
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) { //requiredFieldları tektek dolaş
            if (!user[field]) { //userda fieldlardan bi yoksa ( id,fn,ln,age,city)
                hasErrors = true //hata olursa true olacak.
                // ${field} alanında doğrulama problemi vardır.
                //user  -> hangi datada bu hata olduğunu belirtir.
                this.errors.push(new DataError(`Validation problem, ${field} is required`, user)) 
            }
        }
        //isNan: is not a number, sayı değilse 
        //(user'ın age'ini sayıya çevirmek istediğimde bu bir sayı değilse hata verir.)
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem, ${user.age} is not a number`, user))
        }

        return hasErrors //hata var mı yok mu görülecek
    }

    //Employee için error.
    checkEmployeeValidityForErrors(user){
        //zorunlu olacak bilgiler
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) { //requiredFieldları tektek dolaş
            if (!user[field]) { //userda fieldlardan bi yoksa ( id,fn,ln,age,city)
                hasErrors = true //hata olursa true olacak.
                // ${field} alanında doğrulama problemi vardır.
                //user  -> hangi datada bu hata olduğunu belirtir.
                this.errors.push(new DataError(`Validation problem, ${field} is required`, user)) 
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem, ${user.age} is not a number`, user))
        }
        return hasErrors //hata var mı yok mu görülecek
    }

    add(user){
        //this.users.push(user) //push metodu
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) { //false ise yani hata yoksa
                    this.customers.push(user) //hata yoksa ekler.
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) { //false ise yani hata yoksa
                    this.employees.push(user) //hata yoksa ekler.
                }
                break;  
            default:
                this.errors.push(new DataError("this user can not be added.",user))
                break;
        }
        this.loggerService.log(user) //loggerservice çağrılır.
    }

    list(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id === id) //find metodu
    }
    //find verilen şarta göre bir data döndürür.

    //sorting,elimizdeki datayı sıralar:
    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{ //enum function
            if(customer1.firstName < customer2.firstName){
                return -1;
            }else if(customer1.firstName === customer2.firstName){
                return 0;
            }else{
                return 1;
            }
        })
    }


}