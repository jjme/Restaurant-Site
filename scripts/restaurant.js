function clearErrors() {    
    for (var i = 0; i < document.forms["contactForm"].elements.length; i++) {
        if (document.forms["contactForm"].elements[i].className.indexOf("invalid") != -1) {
                document.forms["contactForm"].elements[i].classList.remove("is-invalid");
        }
    }    
} 


// I could use built-in form validation w/ custom bootstrap messages 
// but to show more JavaScript and use similar code that the course taught
// I will use server-side validation w/ custom bootstrap messages
function validateItem() {
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var info = document.forms["contactForm"]["info"].value;
    var daysChecked = document.getElementsByName("days");

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (name == "") {
        document.forms["contactForm"]["name"].classList.add("is-invalid");
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    else if (regexEmail.test(email) == false) {
        document.forms["contactForm"]["email"].classList.add("is-invalid");
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    else if (regexPhone.test(phone) == false && phone != "") {
        document.forms["contactForm"]["phone"].classList.add("is-invalid");
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
    else if (info == "") {
        document.forms["contactForm"]["info"].classList.add("is-invalid");
        document.forms["contactForm"]["info"].focus();
        return false;
    }
    
    var allDays = "";
    for (var i = 0; i < daysChecked.length; i++) {
        if (daysChecked[i].checked) {
            allDays += "." + daysChecked[i].value
        }
    }
    if (allDays == "") {
        document.forms["contactForm"]["monday"].classList.add("is-invalid");
        document.forms["contactForm"]["tuesday"].classList.add("is-invalid");
        document.forms["contactForm"]["wednesday"].classList.add("is-invalid");
        document.forms["contactForm"]["thursday"].classList.add("is-invalid");
        document.forms["contactForm"]["friday"].classList.add("is-invalid");
        return false;
    }
    alert("Request successfully sent!");
}