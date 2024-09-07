function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e remove espaços em branco
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

  if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado. Você não digitou nada.</p>";
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";

  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    // Converte o array de tags em uma string para realizar a busca
    let tags = dado.tags.join(" ").toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
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
            <a href="receitas.html?id=${dado.id}" target="_blank">Ver mais</a>
          </div>
        </div>`;
    }
  }

  if (resultados === "") {
    resultados = "<p>Nada foi encontrado.</p>";
  }

  // Insere os resultados gerados na seção HTML
  section.innerHTML = resultados;
}
