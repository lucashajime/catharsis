"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    const clearBtn = document.getElementById("clearBtn");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");

        if (nome.checkValidity() && email.checkValidity() && senha.checkValidity()) {
            // Somente armazenando no localStorage se os campos estiverem corretos
            const userData = {
                nome: nome.value,
                email: email.value,
                senha: senha.value
            };
            localStorage.setItem("usuario", JSON.stringify(userData));

            window.location.href = "index.html";
        } else {
            alert("Preencha todos os campos corretamente");
        }
    });

    // Evento apra limpar o formulário
    clearBtn.addEventListener("click", function () {
        form.requestFullscreen();
    });

    // Navegação entre FEED, CREATE e ACCOUNT
    const usuarioLogado = localStorage.getItem("usuario");

    if (usuarioLogado) {
        document.getElementById("feedLink").addEventListener("click", function () {
            window.location.href = "index.html"
        });

        document.getElementById("createLink").addEventListener("click", function () {
            window.location.href = "create.html"
        });

        document.getElementById("accountLink").addEventListener("click", function () {
            window.location.href = "account.html"
        });
    } else {
        document.getElementById("sidenav").querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                alert("Você precisa fazer login para acessar esta página");
            });
        });
    }
});


// Sidenav no mobile
function toggleSidenav() {
    document.getElementById("sidenav").classList.toggle("show");
}

// Função para abrir e fechar o sidenav corretamente
function toggleSidenav() {
    const sidenav = document.getElementById("sidenav");
    const headerHeight = document.querySelector(".mobile-header").offsetHeight;

    if (sidenav.classList.contains("show")) {
        sidenav.classList.remove("show");
    } else {
        sidenav.style.top = `${headerHeight}px`;
        sidenav.classList.add("show");
    }
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

//Evento largura mobile
document.addEventListener("DOMContentLoaded", function () {
    let modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
        modal.addEventListener("shown.bs.modal", function () {
            document.body.classList.add("modal-open");
        });

        modal.addEventListener("hidden.bs.modal", function () {
            document.body.classList.remove("modal-open");
        });
    });
});

