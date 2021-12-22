/*Loglama File base'de yazılabilir. 
    - Bazı uygulamaları Elastic'de yazmak isteyebiliriz.
    - Bazı uygulamaları MongoDB'ye yazmak isteyebiliriz.
    - Logları farklı yerlere yazabiliriz.
    Bunun için;
    - Bir Base Logger classı oluşturulur. 
    - İçinde default kodlar bulunur. 
    - Farklı log işlemleri içinde farklı classlar
    oluşturulur ve BaseLogger inheritance edilir.
    */

export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){ //override
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

