/* ============================================================
   Browser Security Plus — script.js
   jQuery interactions for the landing page
   ============================================================ */

$(document).ready(function () {

    // ---- Select field label visibility ----
    // Hide the floating label when a value is selected in the dropdown
    $('.form-field__select').on('change', function () {
        var $label = $(this).siblings('.form-field__label--select');
        if ($(this).val()) {
            $label.addClass('is-hidden');
        } else {
            $label.removeClass('is-hidden');
        }
    });

    // ---- Smooth scroll for anchor links ----
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

    // ---- Form submission handler (placeholder) ----
    $('.signup-form__body').on('submit', function (e) {
        e.preventDefault();
        // TODO: Connect to actual form endpoint
        var email = $('#business-email').val();
        var endpoints = $('#endpoint-count').val();

        if (email && endpoints) {
            // Placeholder success feedback
            $(this).find('.btn--primary').text('SUBMITTING...').prop('disabled', true);
            setTimeout(function () {
                $('.signup-form__body').find('.btn--primary').text('GET STARTED').prop('disabled', false);
            }, 2000);
        }
    });

});
