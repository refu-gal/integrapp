(function(config, db){

    var getNeeds = function(){
        var needs = [];
        $('input:checkbox.need-field').each(function () {
            needs.push(this.checked);
        });

        return needs;
    };

    var isValid = function(){

        var valid = true;
        $('#alias-field, #contact-field').each(function(){
            valid = valid && $(this).val().length > 0;
        });

        var needs = getNeeds();
        valid = valid && needs.reduce(function(a, b){ return a + b; }, 0) > 0;

        return valid;
    };

    var showTip = function () {
        $('#error').show();
    };

    var getUserData = function(){
        if(!isValid()) {
            showTip();
            return false;
        }

        return {
            alias: $('#alias-field').val(),
            contact: $('#contact-field').val(),
            needs: getNeeds(),
            publish_time: (new Date()).getTime()
        }
    };

    $('#publish').click(function () {
        db.writeToList(config.collections.needs, getUserData());
    });

    $('#error').hide();

})(config, db);