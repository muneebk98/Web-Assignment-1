// function runcheck() {
//     if (checkemail() && checkphone() && checkzipcode() && checkGraduationYear()) {
//         alert("Form submitted successfully!");
//         return true;
//     } else {
//         alert("Please correct the highlighted errors.");
//         return false;
//     }
// }

function checkemail() {
    var emaillabel = document.getElementById("email");
    if (!emaillabel.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Please enter a valid email.");
        return false;
    }
    return true;
}

function checkphone() {
    var phone = document.getElementById('pnumber');
    if (!phone.value.match(/^[0-9]{10,15}$/)) {
        alert('Phone number must be 10-15 digits');
        return false;
    } else {
        return true;
    }
}

function checkzipcode() {
    const zipcode = document.getElementById('zipcode');
    if (!zipcode.value.match(/^[0-9]{5}$/)) {
        alert('Zip code must be 5 digits');
        return false;
    } else {
        return true;
    }
}

function checkGraduationYear() {
    var gradYear = document.getElementById("grad-year").value;
    var gradYearNumber = parseInt(gradYear, 10);

    if (isNaN(gradYearNumber) || gradYearNumber >= 2025) {
        alert("Graduation year must be less than 2025.");
        return false;
    }
    return true;
}


function saveDataToLocalStorage(event) {

    event.preventDefault();

    if (checkemail() && checkphone() && checkzipcode() && checkGraduationYear()){

    var resumeInput = document.getElementById('resume');
    var resumeFileName = resumeInput.files.length > 0 ? resumeInput.files[0].name : '';

    
    var formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        pnumber: document.getElementById('pnumber').value,
        email: document.getElementById('email').value,
        resume: resumeFileName, 
        coverLetter: document.getElementById('cover-letter').value
    };

    
    var applications = JSON.parse(localStorage.getItem('applications')) || [];

    applications.push(formData);

    localStorage.setItem('applications', JSON.stringify(applications));

    alert("Application submitted successfully!");
}
else{
    alert("Please correct the highlighted errors.");
}
}
