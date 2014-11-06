$(document).ready(function(){   
    var $drinks = $('#drinks-menu').modal({
        show: false
    });
    var $lunch = $('#lunch-menu').modal({
        show: false
    });
    var $brunch = $('#brunch-menu').modal({
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
    $('#brunch').on('click', function() {
        $brunch.modal('show');
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
    $('#brunch-mobile').on('click', function() {
        $lunch.modal('show');
    });
    $('#dinner-mobile').on('click', function() {
        $dinner.modal('show');
    });
    $('#dessert-list').on('click', function() {
        $dessert.modal('show');
    });
    $('#drinks-li').on('click', function() {
        $drinks.modal('show');
    });
    $('#lunch-li').on('click', function() {
        $lunch.modal('show');
    });
    $('#brunch-li').on('click', function() {
        $lunch.modal('show');
    });
    $('#dinner-li').on('click', function() {
        $dinner.modal('show');
    });
    $('#dessert-li').on('click', function() {
        $dessert.modal('show');
    });
});