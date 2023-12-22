<?php
 
 // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'abhiyendru@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  

  $contact->smtp = array(
    'host' => 'smtp.elasticemail.com',
    'username' => 'abhiyendru@gmail.com',
    'password' => '5A00582361CB5FE3D40CBF8FC5EB49B9ECCC',
    'port' => '2525'
  );
 

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
