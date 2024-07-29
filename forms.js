const forms = window.document.getElementById('formIntegration');

function validateName(validateFullName){
    const nameFull = validateFullName.split(' ');
    return nameFull.length >= 2;
}

forms.addEventListener('submit', function(e){
    e.preventDefault();

    const messageSuccess = '<b>Form sent successfully<b />';
    const messageFail = '<b>Incomplete Name<b />';
    const yourName = window.document.getElementById('Name');
    const Name = window.document.getElementById('Name');
    if (!validateName(Name.value)){
        alert('Please fill in your full name');
        const msgFail = document.querySelector('.fail-message');
        msgFail.innerHTML = messageFail;
        msgFail.style.display = 'block';
        yourName.style.background = 'red';
    } else {
        alert("All right");
        const msgSuccess = document.querySelector('.success-message');
        msgSuccess.innerHTML = messageSuccess;
        msgSuccess.style.display = 'block';
    }
})

console.log(forms);