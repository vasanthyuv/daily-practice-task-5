function validation() {
    var name = document.getElementById("uname").value;
    
    var pwd = document.getElementById("pass").value;
    var cpwd = document.getElementById("cpass").value;


    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.*\s).{6,12}$/;
    var letters = /^[A-Za-z]+$/;
  

    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
   
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(pwd.length < 8)
    {
        alert ('Password minimum length is 8');
    }
    else if(pwd.length > 15)
    {
        alert ('Password max length is 15');
    }
    else
    {                                           
           alert('Thank You for Registration & You are Redirecting to Website');
           display(name,pwd);
          
    }




    function display(name, pwd) {
        document.write("<h2>Registration Details:</h2>");
        document.write("<p><strong>Name:</strong> " + name + "</p>");
        document.write("<p><strong>password:</strong> " + pwd + "</p>");
       
    }
}





















