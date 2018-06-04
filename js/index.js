$(document).ready(function() {
    var $regexname = /^([a-zA-Z]{3,16})$/;

    var $regexTel = /^([+0-9]{13})$/;

    var $regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    $('.fname').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('.emsgf').removeClass('hidden');
            $('.emsgf').show();
        } else {
            // else, do not display message
            $('.emsg').addClass('hidden');
        }
    });

    $('.lname').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('.emsgl').removeClass('hidden');
            $('.emsgl').show();
        } else {
            // else, do not display message
            $('.emsg').addClass('hidden');
        }
    });
    $('.pass').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('.emsgp').removeClass('hidden');
            $('.emsgp').show();
        } else {
            // else, do not display message
            $('.emsgp').addClass('hidden');
        }
    });

    $('.username').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('.emsgun').removeClass('hidden');
            $('.emsgun').show();
        } else {
            // else, do not display message
            $('.emsgun').addClass('hidden');
        }
    });

    $('.tel').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexTel)) {
            // there is a mismatch, hence show the error message
            $('.emsgtel').removeClass('hidden');
            $('.emsgtel').show();
        } else {
            // else, do not display message
            $('.emsgtel').addClass('hidden');
        }
    });

    $('.email').on('keypress keydown keyup', function() {
        if (!$(this).val().match($regexEmail)) {
            // there is a mismatch, hence show the error message
            $('.emsgemail').removeClass('hidden');
            $('.emsgemail').show();
        } else {
            // else, do not display message
            $('.emsgemail').addClass('hidden');
        }
    });
});