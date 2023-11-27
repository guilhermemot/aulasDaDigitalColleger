function validadorSenha(senha){
    let maiuscula = false;
    let minuscula = false;
    let numero = false;
    let especial = false;
    if(senha.lengh < 8){
        return alert("Senha menor que 8 caracteres");
    }
    for(let i = 0; i < senha.lengh; i++){
        if(senha[i] >= 'A' && senha[i] <= 'Z'){
            maiuscula = true;
        } else if (senha[i] >= 'a' && senha[i] <= 'z'){
            minuscula = true;
        } else if (senha[i] >= '0' && senha[i] <= '9'){
            numero = true;
        } else if (senha[i] == '@' || senha[i] == '#' || 
                   senha[i] == '$' || senha[i] == '%' || 
                   senha[i] == '&' || senha[i] == '*'){
            especial = true;
        }
    }
    if(maiuscula == false){
        return alert("A senha deve conter pelo menos 1 letra maiuscula");
    }
    if(minuscula == false){
        return alert("A senha deve conter pelo menos 1 letra minuscula");
    }
    if(numero == false){
        return alert("A senha deve conter pelo menos 1 numero");
    }
    if(especial == false){
        return alert("A senha deve conter pelo menos 1 caractere especial");
    }
    if(maiuscula && minuscula && numero && especial){
        return true;
    }
}