// Função para pegar o parâmetro 'id' da URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Captura o ID da receita na URL
const id = getParameterByName("id");

// Encontra a receita correspondente ao ID
const receita = dados.find((item) => item.id == id);

// Verifica se a receita foi encontrada
if (receita) {
    // Gera a lista de ingredientes
    const listaIngredientes = receita.ingredientes
        .map(ingrediente => `<li>${ingrediente}</li>`)
        .join('');

    // Gera a lista de preparo
    const listaPreparo = receita.preparo
        .map(etapa => `<li>${etapa}</li>`)
        .join('');

    // Insere o conteúdo dinâmico no HTML
    document.getElementById("detalhes-receita").innerHTML = `
        <div class="receita">
            <header>
                <h1 class="title">${receita.titulo}</h1>
            </header>
            <section class="intro">
                <img src="${receita.imagem}" alt="${receita.titulo}">
                <div class="texto">
                    <p>${receita.descricao}</p>
                </div>
            </section>
            <main class="texto-principal">
                <section class="ingredientes">
                    <h2>Ingredientes</h2>
                    <ul>
                        ${listaIngredientes}
                    </ul>
                </section>
                <section class="modo-preparo">
                    <h2>Modo de Preparo</h2>
                    <ul>
                        ${listaPreparo}
                    </ul>
                </section>
            </main>
        </div>`;
} else {
    // Caso não encontre a receita, exibe uma mensagem de erro
    document.getElementById("detalhes-receita").innerHTML = `<p>Receita não encontrada.</p>`;
}
