"use strict";

// Manipulação DOM e sintaxe de classes do ES6 - Referemte à atividade 16"
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    const clearBtn = document.getElementById("clearBtn");
    const sidenav = document.getElementById("sidenav");
    const usuarioLogado = getUsuarioLogado();

    form.addEventListener("submit", handleFormSubmit);
    clearBtn.addEventListener("click", () => form.reset());

    configurarNavegacao(usuarioLogado);
    configurarModais();
});

// Captura o usuário logado do localStorage em JavaScript - Referente à atividade 18
function getUsuarioLogado() {
    try {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        return usuario && usuario.email ? usuario : null;
    } catch (error) {
        console.error("Erro ao recuperar usuário do localStorage", error);
        return null;
    }
}

// Função para lidar com o envio do formulário - Referente a atividade 17
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
        alert("Preencha todos os campos corretamente");
        return;
    }

    const usuario = new Usuario(
        document.getElementById("nome").value,
        document.getElementById("email").value,
        document.getElementById("senha").value
    );
    
    salvarUsuario(usuario);
    window.location.href = "index.html";
}

// Classe para armazenar os dados capturados - Referente a atividade 18
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

// Salva o usuário no localStorage - Referente a atividade 18
function salvarUsuario(usuario) {
    try {
        localStorage.setItem("usuario", JSON.stringify(usuario)); 
    } catch (error) {
        console.error("Erro ao salvar usuário no localStorage", error);
    }
}

// Navegação condicional, somente disponível quando o usuário está logado.
function configurarNavegacao(usuarioLogado) {
    if (usuarioLogado) {
        document.getElementById("feedLink").addEventListener("click", () => window.location.href = "index.html");
        document.getElementById("createLink").addEventListener("click", () => window.location.href = "create.html");
        document.getElementById("accountLink").addEventListener("click", () => window.location.href = "account.html");
    } else {
        document.querySelectorAll("#sidenav a").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                alert("Você precisa fazer login para acessar esta página");
            });
        });
    }
}

// Função para abrir e fechar o menu lateral
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

// Configura eventos para modais
function configurarModais() {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("shown.bs.modal", () => document.body.classList.add("modal-open"));
        modal.addEventListener("hidden.bs.modal", () => document.body.classList.remove("modal-open"));
    });
}


// Evento Material Box do Materialize (SEGUNDA OPÇÃO SOBRE MODALS)

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {
        inDuration: 300,
        outDuration: 200
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Material Box
    const materialboxElements = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxElements);

    // Adiciona evento para exibir descrição ao clicar
    materialboxElements.forEach(img => {
        img.addEventListener('click', function () {
            const descriptionBox = this.closest('.image-container').querySelector('.image-description');
            descriptionBox.innerHTML = `
                <h3>${this.dataset.title}</h3>
                <p>${this.dataset.description}</p>
            `;
            descriptionBox.classList.toggle('visible');
        });
    });
});