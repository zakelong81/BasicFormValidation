function validate()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

//username
  if (userEntered.length >= 6)
  {


    //Turn the username items green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");

    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");

    document.getElementById("usernameError").innerHTML="Success creating User Name.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");

  }
  else
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");

  }

//password
  if (passEntered == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if(passEntered.length == 0)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password can't be empty";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  else
  {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");

    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");

    document.getElementById("passwordError").innerHTML="Success creating password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");

  }
}
