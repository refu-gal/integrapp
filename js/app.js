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
        $('#result_error').show();
    };

    var getFieldValues = function () {
        return {
            alias: $('#alias-field').val(),
            contact: $('#contact-field').val(),
            needs: getNeeds(),
            publish_time: (new Date()).getTime()
        };
    };

    var cleanFields = function () {
        $('#alias-field').val('');
        $('#contact-field').val('');

        $('input:checkbox.need-field').each(function () {
            this.checked = false;
        });
    };

    var getUserData = function(){
        $('#result_error, #result_ok').hide();
        if(!isValid()) {
            showTip();
            return false;
        }

        $('#result_ok').show();

        var userRequestValues = getFieldValues();

        cleanFields();

        return userRequestValues;
    };

    $('#publish').click(function () {
        db.writeToList(config.collections.needs, getUserData());
    });

    $('#result_error, #result_ok').hide();


})(config, db);