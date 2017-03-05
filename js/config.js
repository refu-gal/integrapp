var config = (function(){

    //Just for prototyping
    //Kid's don't repeat this at home
    var firebase = {
        apiKey: " AIzaSyACSSHqs91zLIIDKNVt14_aKU7JUKpxOFI",
        authDomain: "minit-4f072.firebaseapp.com",
        databaseURL: "https://minit-4f072.firebaseio.com/",
        storageBucket: "bucket.appspot.com"
    };

    var collections = {
        needs: 'needs'
    };

    return {
        firebase: firebase,
        collections: collections
    }
})();