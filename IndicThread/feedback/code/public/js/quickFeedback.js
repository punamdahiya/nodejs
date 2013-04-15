function validateQuickSubmitForm() {
  var feedback = ututils.stringTrim($('#feedbackText').val());
  var email = ututils.stringTrim($('#feedbackEmail').val());

  if(!feedback) {
    $('#feedBack-div').addClass('error');
    $('#feedbackText-error').html('Please fill some feedback. It is a required field.');
    return false;
  } else {
    $('#feedBack-div').removeClass('error');
  }
  if(!email) {
    $('#feedbackEmail-div').addClass('error');
    $('#feedbackEmail-error').html('Pleae provide your email. It is a required field.');
    return false;
  } else if(!ututils.validateEmail(email)) {
    $('#feedbackEmail-div').addClass('error');
    $('#feedbackEmail-error').html('Pleae provide a valid email.');
    return false;
  } else {
    $('#feedbackEmail-div').removeClass('error');
  }

  return true;
}

$(document).ready(function(){

  $('#feedbackMsg-button').live('click', function(e){
    if(validateQuickSubmitForm()) {
      $.ajax({
        type: 'POST',
        url: '/quickfeedback',
        cache: false,
        data: {feedback: ututils.stringTrim($('#feedbackText').val()),
               email: ututils.stringTrim($('#feedbackEmail').val())
               },
        success: function(res) {
          if(res.status === 'success'){
            $('#quickFeedback-header').html('Thank you !');
            $('#feedbackForm').addClass('hide');
            $('#thankYouMsg').removeClass('hide');
            setTimeout("$('#modal-quickFeedback').modal('hide')",5000);
          } else if(res.status === 'fail') {
            $('#quickfeedback-server-error').html(res.message);
          }
        }
      });
    }
  });

  $('#modal-quickFeedback').on('hide',function(){
    $('#feedbackText').val('');
    $('#feedbackEmail').val('');
    $('#feedBack-div').removeClass('error');
    $('#feedbackEmail-div').removeClass('error');
    $('#feedbackEmail-error').html('');
    $('#feedbackText-error').html('');
    $('#thankYouMsg').addClass('hide');
    $('#feedbackForm').removeClass('hide');
    $('#quickFeedback-header').html('Write to us');
  });

  $('#thankyouMsg-button').live('click', function() {
    $('#modal-quickFeedback').hide();
  });

  $('#feedbackEmail').keypress(function(e){
    if(e.which == 13) {
      e.preventDefault();
      $('#feedbackMsg-button').trigger('click');
    }
  });
});