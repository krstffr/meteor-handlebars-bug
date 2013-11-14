if (Meteor.isClient) {

    Template.aRandomTemplate.helpers({
        someLoop: function () {
            return ['this', 'is', 'an', 'array', 'that', 'we\'re', 'looping', 'through'];
        },
        somethingIsTrue: function() {
            return true;
        }
    });

    Handlebars.registerHelper('aRandomHelper', function(aString) {
        console.log(aString);
        console.log('typeof should ALWAYS return string right? Here it return: ' + typeof aString);
        console.log('- - - - - - - - - - - - - -');
    });
    
}