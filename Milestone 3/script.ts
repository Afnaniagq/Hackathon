//referance to form and display

const rform =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayelement =document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission
// eventlistner run the function
rform.addEventListener('submit' ,(event:Event) =>{
    event.preventDefault();//prevent page reload

//collect input values
const name=(document.getElementById("name") as HTMLInputElement).value 
const email=(document.getElementById("email") as HTMLInputElement).value    
const phone=(document.getElementById("phone") as HTMLInputElement).value    
const education=(document.getElementById("education") as HTMLInputElement).value    
const experience=(document.getElementById("experience") as HTMLInputElement).value
const skills=(document.getElementById("skills") as HTMLInputElement).value   

//generate resume content
const resumeHTML =`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:<b>${name}</b>
<p><b>Email: <b>${email}</b>
<p><b>Phone Number: <b>${phone}</b>

<h3 class="style">Education</h3>
<p>${education}</p>

<h3 class="style">Experience</h3>
<p>${experience}</p>

<h3 class="style">Skills</h3>
<p>${skills}</p>
`;

// display genrated resume:
if(resumeDisplayelement){
    resumeDisplayelement.innerHTML =resumeHTML;
}
else{
    console.error("The resume display element is missing");
}

  })
