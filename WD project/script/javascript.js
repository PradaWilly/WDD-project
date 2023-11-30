
  function post() {
    var fname = document.querySelector('.fnameb').value;
    var lname = document.querySelector('.snameb').value;
    var email = document.querySelector('.cremail2').value;
    var dob = document.querySelector('.crdob').value;

    
    var interest = document.querySelector('input[name="interest"]:checked');
    var notification = document.querySelector('input[name="notis"]:checked');
    var interestValue = interest ? interest.value : 'Not selected';
    var notificationValue = notification ? notification.value : 'Not selected';

    
    var msg='Here is your information!' + '\n' +
                'First Name: ' + fname + '\n' +
                'Last Name: ' + lname + '\n' +
                'Email: ' + email + '\n' +
                'Date of Birth: ' + dob + '\n' +
                'What are you most interested in ?: ' + interestValue + '\n' +
                'Would you like to receive notifications ?: ' + notificationValue;
    
    alert(msg);
  }