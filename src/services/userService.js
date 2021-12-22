export default class UserService{
    // export ->dışarıdan import edilebilir.
    //fonksiyonlar buraya gruplama amaçlı eklenecek.
    
    constructor(loggerService){//bir logerservice verir.
        this.users = [] //boş array
        this.loggerService = loggerService //prototype
    }

    add(user){
        this.users.push(user) //push metodu
        this.loggerService.log(user) //loggerservice çağrılır.
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id === id) //find metodu
    }
    //find verilen şarta göre bir data döndürür.
}