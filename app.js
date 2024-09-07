function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";
  
  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre cada dado da pesquisa e cria um elemento HTML para cada um
  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
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

  // Insere os resultados gerados na seção HTML
  section.innerHTML = resultados;
}
