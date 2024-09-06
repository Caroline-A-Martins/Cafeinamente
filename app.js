function pesquisar() { }

let section = document.getElementById("resultados-pesquisa");

let resultados = "";

for (let dado of dados) {
    resultados += `
            <div class="item-resultado">
            <img src="${dado.imagem}" class="imagem-resultado"/>
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.pagina}"target="blank">Ver mais</a>
            </div>`;
}

section.innerHTML = resultados;
