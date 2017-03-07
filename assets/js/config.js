var config = (function(){

    //Just for prototyping
    //Kid's don't repeat this at home
    var firebase ={
        apiKey: "AIzaSyBCfZFARr9-Oxe1d49fqXatfLg6X3BVwfk",
        authDomain: "meanit-e00cb.firebaseapp.com",
        databaseURL: "https://meanit-e00cb.firebaseio.com",
        storageBucket: "meanit-e00cb.appspot.com",
        messagingSenderId: "1042871055455"

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
