// (function() {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 } else {
//                     var form = $(this);
//                     var header = form.siblings('.header');
//                     var successMessage = form.siblings('.success_message');
//                     var loadingIndicator = form.siblings('.loading_indicator');

//                     form.attr('hidden', true); // hide form after submit
//                     loadingIndicator.removeAttr('hidden'); // show loading indicator
//                     setTimeout(function() {
//                         header.attr('hidden', true); // hide form header
//                         loadingIndicator.attr('hidden', true); // hide loading indicator after processing request
//                         successMessage.removeAttr('hidden'); // show success message
//                     }, 2000);
//                 }

//                 form.classList.add('was-validated');
//                 var validElems = $('.was-validated .form-control:valid');
//                 var invalidElems = $('.was-validated .form-control:invalid');

//                 if (invalidElems.length !== 0) {
//                     invalidElems.each(function() {
//                         validElems.siblings('.valid-feedback').css('display', 'block');
//                         validElems.siblings('.invalid-feedback').css('display', 'none');
//                         invalidElems.siblings('.invalid-feedback').css('display', 'block');
//                         invalidElems.siblings('.valid-feedback').css('display', 'none');
//                     });
//                 }
//             }, false)
//         })
// })()
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    var formId = form.id;
                    var formElem = $('#' + formId);
                    var header = formElem.siblings('.header');
                    var successMessage = formElem.siblings('.success_message');
                    var loadingIndicator = formElem.siblings('.loading_indicator');

                    formElem.attr('hidden', true); // hide form after submit
                    loadingIndicator.removeAttr('hidden'); // show loading indicator
                    setTimeout(function() {
                        header.attr('hidden', true); // hide form header
                        loadingIndicator.attr('hidden', true); // hide loading indicator after processing request
                        successMessage.removeAttr('hidden'); // show success message
                    }, 2000);
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
                var validElems = $('.was-validated .form-control:valid');
                var invalidElems = $('.was-validated .form-control:invalid');

                if (invalidElems.length !== 0) {
                    invalidElems.each(function() {
                        validElems.siblings('.valid-feedback').css('display', 'block');
                        validElems.siblings('.invalid-feedback').css('display', 'none');
                        invalidElems.siblings('.invalid-feedback').css('display', 'block');
                        invalidElems.siblings('.valid-feedback').css('display', 'none');
                    });
                }
            }, false);
        });
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms2 = document.getElementsByClassName('needs-validation-subscribe');

        // Loop over them and prevent submission
        var validation2 = Array.prototype.filter.call(forms2, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    var formId = form.id;
                    var formElem = $('#' + formId);
                    var header = formElem.siblings('.header');
                    var successMessage = formElem.siblings('.success_message_subscribe');
                    var loadingIndicator = formElem.siblings('.loading_indicator_subscribe');

                    formElem.attr('hidden', true); // hide form after submit
                    loadingIndicator.removeAttr('hidden'); // show loading indicator
                    setTimeout(function() {
                        header.attr('hidden', true); // hide form header
                        loadingIndicator.attr('hidden', true); // hide loading indicator after processing request
                        successMessage.removeAttr('hidden'); // show success message
                    }, 2000);
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
                var validElems = $('.was-validated .form-control:valid');
                var invalidElems = $('.was-validated .form-control:invalid');

                if (invalidElems.length !== 0) {
                    invalidElems.each(function() {
                        validElems.siblings('.valid-feedback').css('display', 'block');
                        validElems.siblings('.invalid-feedback').css('display', 'none');
                        invalidElems.siblings('.invalid-feedback').css('display', 'block');
                        invalidElems.siblings('.valid-feedback').css('display', 'none');
                    });
                }
            }, false);
        });
    }, false);
})();

$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.add').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});