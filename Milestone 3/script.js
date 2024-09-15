//referance to form and display
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
// eventlistner run the function
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate resume content
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:<b>".concat(name, "</b>\n<p><b>Email: <b>").concat(email, "</b>\n<p><b>Phone Number: <b>").concat(phone, "</b>\n\n<h3 class=\"style\">Education</h3>\n<p>").concat(education, "</p>\n\n<h3 class=\"style\">Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3 class=\"style\">Skills</h3>\n<p>").concat(skills, "</p>\n");
    // display genrated resume:
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
