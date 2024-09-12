function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber) && length(phoneRegex)===10;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateValue(element){
    return element.value!==0
}