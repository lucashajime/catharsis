"use strict";

// Navegação entre FEED, SEARCH e ACCOUNT
document.getElementById("feedLink").addEventListener("click", function() {
    window.location.href = "#feed";
});

document.getElementById("searchLink").addEventListener("click", function() {
    window.location.href = "#search";
});

document;getElementById("accountLink").addEventListener("click", function() {
    alert("Dados do Formulário de Conta serão adicionados em breve");
});

// Sidenav no mobile
function toggleSidenav() {
    document.getElementById("sidenav").classList.toggle("show");
}

// Classe para armazenar os dados capturados
    class Usuario {
        constructor(nome, email, senha) {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
        }
    }

// Evento submit do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //validação do formulário
    if (!this.checkValidity()) {
        return;
    }

    // Capturando os dados dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    // Instanciando um objeto da classe Usuario com os dados capturados
    const usuario = new Usuario(nome, email, senha);
    console.log("Dados capturados:", usuario);

});

// Evento para limpar os campos do formulário
document.getElementById("clearBtn").addEventListener("click", function() {
    const inputs = document.querySelectorAll(".input-cadastro");
    inputs.forEach(function(input) {
        input.value = "";
    });
});

