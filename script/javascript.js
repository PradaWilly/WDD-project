
  function post() {
    var fname = document.querySelector('.fnameb').value.trim();
    var lname = document.querySelector('.snameb').value.trim();
    var email = document.querySelector('.cremail2').value.trim();  //this grabs the information a user inputs in the form//
    var dob = document.querySelector('.crdob').value.trim();       
    
    if (fname == '' || lname == '' || email == '' || dob == '') {
      alert('Please fill in all required fields.');            //this is validation, so it checks if all the fields have been filled//
      return;
    }

    var interest = document.querySelector('input[name="interest"]:checked');
    var notification = document.querySelector('input[name="notis"]:checked');
    var interestValue = interest ? interest.value : 'Not selected';        //this checks if the radio boxes have been ticked or not//
    var notificationValue = notification ? notification.value : 'Not selected';

    
    var msg='Here is your information!' + '\n' +
                'First Name: ' + fname + '\n' +
                'Last Name: ' + lname + '\n' +
                'Email: ' + email + '\n' +       //this alerts the information that the script grabbed//
                'Date of Birth: ' + dob + '\n' +
                'What are you most interested in ?: ' + interestValue + '\n' +
                'Would you like to receive notifications ?: ' + notificationValue;
    
    alert(msg);
  
  }
  