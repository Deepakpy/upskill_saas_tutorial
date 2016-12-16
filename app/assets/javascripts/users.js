/* global $,Stripe */
//Document ready.
$(document).on('turbolinks:load',function(){
  var theForm=$('#pro_form');
  var submitBtn=$('#form-submit-btn')
  //Set Stripe public key.
  Stripe.setPublishableKey($('meta[name=stripe-key"]').attr('content'));
  //When user clicks form submit btn,
  //prevent default submission behaviour.
  
  //Collect the credit card fields.
  //Send the card info ti stripe.
  //Stripe will return a card token.
  //Inject card toke as hidden field into form.
  //Submit form to our Rails app.
});