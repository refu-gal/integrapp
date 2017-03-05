var db = (function(config){
    firebase.initializeApp(config.firebase);
    var database = firebase.database();


    var write = function (database) {
        return function(collection, data){
            if(data) {
                database.ref(collection).set(data);
            }
        }
    }

    var writeToList = function (database) {
        return function(collection, data){
            if(data) {
                database.ref(collection).push().set(data);
            }
        }
    }

    var read = function(database){
        return function(collection) {
            return firebase.database().ref(collection);
        };

    }

    return {
        write: write(database),
        writeToList: writeToList(database),
        read: read(database)
    }
})(config);