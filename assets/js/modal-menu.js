$(document).ready(function(){   
    var $drinks = $('#drinks-menu').modal({
        show: false
    });
    var $lunch = $('#lunch-menu').modal({
        show: false
    });
    var $dinner = $('#dinner-menu').modal({
        show: false
    });
    var $dessert = $('#dessert-menu').modal({
        show: false
    });
    var $ingredients = $('#ingredients-menu').modal({
        show: false
    });
    $('#ingredients').on('click', function() {
        $ingredients.modal('show');
    });
    $('#drinks').on('click', function() {
        $drinks.modal('show');
    });
    $('#lunch').on('click', function() {
        $lunch.modal('show');
    });
    $('#dinner').on('click', function() {
        $dinner.modal('show');
    });
    $('#dessert').on('click', function() {
        $dessert.modal('show');
    });
    $('#drinks-mobile').on('click', function() {
        $drinks.modal('show');
    });
    $('#lunch-mobile').on('click', function() {
        $lunch.modal('show');
    });
    $('#dinner-mobile').on('click', function() {
        $dinner.modal('show');
    });
    $('#dessert-mobile').on('click', function() {
        $dessert.modal('show');
    });
});