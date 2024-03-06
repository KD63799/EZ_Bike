const checker = (arr) => arr.every((v) => v === true);

// Compter de nombre de caractères
function countChar(input, longueur) {
    if (input.value.length > 2 && input.value.length <= longueur) {
        input.classList.remove("danger");
        input.classList.add("success");
        input.parentElement.classList.add("success-checked");
        console.info(`✅ ${input.id}: Nb de charactère OK`);
        return true;
    } else {
        input.classList.remove("success");
        input.parentElement.classList.remove("success-checked");
        input.classList.add("danger");
        console.warn(`${input.id}: Nb de charactère incorrect`);
        return false;
    }
}

// Vérifier la présence d'un mail valide et d'un numéro de téléphone valide
function validationUI(input, regex) {
    if (regex.test(input.value)) {
        input.classList.remove("danger");
        input.classList.add("success");
        input.parentElement.classList.add("success-checked");
        console.info(`✅ ${input.id} input is valid`);
        return true;
    } else {
        input.classList.remove("success");
        input.parentElement.classList.remove("success-checked");
        input.classList.add("danger");
        console.warn(`${input.id} is invalid`);
        return false;
    }
}

// Empêcher l'injection de code ou de caractères spéciaux
function sanitizeInput(input) {
    // Enlever les balises HTML
    input = input.replace(/<[^>]*>/g, "");
    // Enlever les caractères spéciaux dangereux
    input = input.replace(/[^a-zA-Z0-9 ]/g, "");
    // Enlever les espaces multiples
    input = input.replace(/\s\s+/g, " ");
    // Enlever les espaces en début et fin de chaîne
    input = input.trim();
    return input;
}

console.log("script loaded");
const form = document.querySelector("form");
const submitBtn = document.getElementById("form_btn");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexTel = /^(\+33\s?|0)\s?[1-9]\s?(\d{2}\s?){3}\d{2}$/;

// Soumission du formulaire

submitBtn.addEventListener("click", (e) => {
    // Tester chaque champ
    // A chaque fois on enregistre la réponse dans un tableau
    // Tester si tous les champs du tableau === true pour envoyer le formulaire
    e.preventDefault();
    console.log("========================> form submitted");
    let isValid = false;
    let verif = [];
    console.log("form.elements => ", form.elements);
    for (let i = 0; i < form.elements.length; i++) {
        let field = form.elements[i];

        if (field.id === "firstName" || field.id === "lastName") {
            field.value = sanitizeInput(field.value);
            isValid = countChar(field, 20);
            verif.push(isValid);
        }

        if (field.id === "email") {
            isValid = validationUI(field, regexEmail);
            verif.push(isValid);
        }

        if (field.id === "phone") {
            isValid = validationUI(field, regexTel);
            verif.push(isValid);
        }
        if (field.id === "message") {
            field.value = sanitizeInput(field.value);
            isValid = countChar(field, 200);
            verif.push(isValid);
        }
    }
    console.log("verif => ", verif);
    if (checker(verif)) {
        console.log("✅ DATA SENT TO SERVER");
        setTimeout(() => form.submit(), 10000);
        localStorage.setItem("id", "18/04/2024");
    } else {
        console.warn("FORM IS INVALID");
    }
});