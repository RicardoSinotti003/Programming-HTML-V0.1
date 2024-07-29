const forms = window.document.getElementById('formIntegration');

function validateName(validateFullName){
    const nameFull = validateFullName.split(' ');
    return nameFull.length >= 2;
}

forms.addEventListener('submit', function(e){
    e.preventDefault();

    const Name = window.document.getElementById('Name');
    if (!validateName(Name.value)){
        alert('Please fill in your full name');
    } else {
        alert("All right")
    }
})

console.log(forms);