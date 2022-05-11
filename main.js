function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(pergunta) {

    divLinha = document.createElement("div");
    divLinha.setAttribute('class', 'ic-class-form-row col-12')

    divFormCheck = document.createElement("div");
    divFormCheck.setAttribute('class', 'ic-class-form-check-legal form-check form-check-inline')

    divLabel = document.createElement("div");
    divLabel.setAttribute('class', 'col-10 m-0 p-0')

    var label = document.createElement('label');
    label.setAttribute('class', 'ic-class-form-check-label-legal form-check-label')
    label.setAttribute('for', pergunta.id)

    label.innerHTML = pergunta.pergunta
    
    divLabel.appendChild(label);

    divCheckBox = document.createElement("div");
    divCheckBox.setAttribute('class', 'col-2 text-center m-0 p-0 justify-content-center align-items-center')
   
    var checkBox = document.createElement('input');
    checkBox.setAttribute('id', pergunta.id)
    checkBox.setAttribute('type','checkbox')
    checkBox.setAttribute('class','ic-class-form-check-input-legal')
    checkBox.setAttribute('data-ic-form-field', pergunta.id)
    checkBox.setAttribute('name', pergunta.id)

    divCheckBox.appendChild(checkBox);

    divFormCheck.appendChild(divLabel);
    divFormCheck.appendChild(divCheckBox);

    divLinha.appendChild(divFormCheck);

    return divLinha;
}

function main() {
    let data = get("http://127.0.0.1:8080/");

    let perguntas = JSON.parse(data);

    let listaPerguntas = document.getElementById("listaPerguntas");
    perguntas.forEach(element => {
        let linha = criaLinha(element);
        listaPerguntas.appendChild(linha);
    });
}

main()