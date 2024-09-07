function pesquisar() { }

let section = document.getElementById("resultados-pesquisa");
let resultados = "";

//let campoPesquisa = getElementById//("campo-pesquisa").value

// Itera sobre cada dado da pesquisa e cria um elemento HTML para cada um
for (let dado of dados) {

  // if (dado.titulo.includes(campoPesquisa)){

  // }
  // dado.titulo.includes(campoPesquisa)
  // Cria um novo elemento div para cada resultado
  resultados += `
        <div class="item-resultado">
    <!-- Exibe a imagem do resultado --> 
    <img src="${dado.imagem}" class="imagem-resultado" />
    <!-- Cria um contêiner para o título, descrição e link -->
    <div class="conteudo-resultado">
        <!-- Exibe o título do resultado --> 
        <h2>${dado.titulo}</h2>
        <!-- Exibe a descrição do resultado --> 
        <p class="descricao-meta">${dado.descricao}</p>
        <!-- Cria um link para ver mais detalhes do resultado --> 
        <a href="receitas.html?id=${dado.id}" target="_blank" onclick="mostra-receita">Ver mais</a>
    </div>
</div>`;
}

// Insere os resultados gerados na seção HTML
section.innerHTML = resultados;