$(document).ready(function(){   
    var $breakfast = $('#breakfast-menu').modal({
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
    $('#breakfast').on('click', function() {
        $breakfast.modal('show');
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
    $('#breakfast-mobile').on('click', function() {
        $breakfast.modal('show');
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