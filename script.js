function pesquisar() {

    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa

    // Itera sobre cada elemento (dado) do array 'dados'
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada dado e adiciona-o à string de resultados
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.instagram}" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.curiosidade}</p>
          <a href="${dado.wiki}" target="_blank">Mais informações</a>
        </div>
      `;
    }
    section.innerHTML = resultados; // Insere o HTML construído dentro da seção selecionada, atualizando a página com os resultados da pesquisa
}