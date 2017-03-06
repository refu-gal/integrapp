var config = (function(){

    //Just for prototyping
    //Kid's don't repeat this at home
    var firebase ={
        apiKey: "AIzaSyCz8TiQSqfZwEMWed4ZRlJFIp1NcwDcnfM",
        authDomain: "meanit-68d65.firebaseapp.com",
        databaseURL: "https://meanit-68d65.firebaseio.com",
        storageBucket: "meanit-68d65.appspot.com",
    };


    var collections = {
        needs: 'needs',
	contacts: 'contacts'
    };

    var setup = {
        needs_preview: 4
    };

    var needList = ['Amigos', 'Traducción', 'Sanidad', 'Educación', 'Trabajo', 'Vivienda', 'Comida', 'Ropa', 'Cuidado de niños'];

    return {
        firebase: firebase,
        collections: collections,
        setup: setup,
        needList: needList
    }
})();
