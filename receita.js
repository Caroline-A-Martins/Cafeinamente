function obterParametro(url, parametro) {
    const parametros = new URLSearchParams(new URL(url).search);
    return parametros.get(parametro);
}

function mostrarReceita() {
    const id = obterParametro(window.location.href, 'id');
    const receita = dados.find(r => r.id === id);

    // Gerar a lista de ingredientes
    let listaIngredientes = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("");

    // Gerar a lista de modo de preparo
    let listaPreparo = receita.preparo.map(passos => `<li>${passos}</li>`).join("");

    let resultados = `
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

            <main>
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

    document.getElementById("mostra-receita").innerHTML = resultados;
}

// Executar a função quando a página é carregada
window.onload = mostrarReceita;
