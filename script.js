function mostrarSite() {
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let erro = document.getElementById("erro");
    let header = document.querySelector("header");
    erro.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";
    header.style.display = "block";
}
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
function addNotice() {
    let container = document.getElementById("noticiasDiv");
    let noticiaCriada = document.createElement("div");
    let v1 = document.getElementById("titulo");
    let v2 = document.getElementById("descricao");
    let url = document.getElementById("url");
    noticiaCriada.innerHTML = '<div class="card" style="width: 18rem;"><img src="' + url.value + '"class="card-img-top" alt="..."><div class="card-body"><p class="card-text">' + v1.value + '</p><p class="textoNotPrincipal">' + v2.value + '</p></div>';
    container.appendChild(noticiaCriada);
}