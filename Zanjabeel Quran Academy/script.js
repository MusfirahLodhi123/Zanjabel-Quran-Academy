function submitForm() {
    // Collect form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const learn = document.getElementById('learn').value;
    const whatsappNo = document.getElementById('whatsappNo').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const email = document.getElementById('email').value;

    // Validation checks
    if (name.trim() === '' || age.trim() === '' || gender.trim() === '' || learn.trim() === '' || whatsappNo.trim() === '' || phoneNo.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Validate phone number format
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phoneNo)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Construct email body
    const subject = 'New Enrollment';
    const emailBody = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nThings you want to learn: ${learn}\nWhatsApp Number: ${whatsappNo}\nPhone Number: ${phoneNo}\nEmail: ${email}`;

    // Send email using mailto link
    const mailtoLink = `mailto:zanjabeelquranacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;
}
var bar = document.getElementById("bar");
var close = document.getElementById("close");
var nav = document.getElementById("navbar");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}