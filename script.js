const form = document.getElementById("form");
const username = document.getElementById("username");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const cepInput = document.getElementById("cep");

let usuarios = [];
let cep = [];

cepInput.addEventListener("input", function() {
  cep = cepInput.value.split("");
  
  if(cep.length >=8){
    completaEndereco();
  }

  
  


});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

});

function checkInputs() {
  function cadastrarUsuario() {
    let nome = username.value;
    let idadeUsuario = parseInt(idade.value);

    if (nome !== "" && idadeUsuario) {
      usuarios.push({ nome: nome, idade: idadeUsuario });

      if (usuarios.length === 6) {
        usuarios = usuarios.filter((usuario) => usuario.idade >= 18);
      }

      console.log("Usuários: ", usuarios);
    }
  }

  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }

  cadastrarUsuario();
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function completaEndereco(){
  
  let cep = $('#cep').val();
  if (!cep){
    alert("Insira um cep valido!")
  }

    var settings = {
        "url": `https://viacep.com.br/ws/${cep}/json/`,
        "method": "GET",            
      };
      
      $.ajax(settings).done(function (response) {  

        $('#logradouro').val(response.logradouro);
        $('#bairro').val(response.bairro);
        
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Erro na requisição AJAX: ",textStatus,errorThrown);
        alert("CEP informado invalido!");
      });
  
  

}
