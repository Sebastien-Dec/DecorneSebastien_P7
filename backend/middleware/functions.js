const validateEmail = function(email) {
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');
    return emailRegExp.test(email);
};

module.exports = validateEmail;

const validateUser = function(user) {
    if(user == null) {
        return "Veuillez remplir le formulaire";
    } else if(user.username == null || user.username.trim() == "") {
        return "Veuillez renseigner votre pseudonyme";
    } else if(user.type== null || user.type.trim() == "") {
        return "Veuillez indiquer si vous êtes modérateur";
    } else if(user.password !== user.confirmPassword) {
        return "Votre saisie ne correspond pas à votre mot de passe !"
    } else if(user.email == null || user.email.trim() =="") {
        return "Veuillez renseigner votre email";
    } else if(!validateEmail(user.email)) {
        return "Ceci n'est pas une adresse mail";
    } else {
        return user;
    }
}

module.exports = validateUser;