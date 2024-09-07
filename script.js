function pesquisar() {

  let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
  let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let titulo = "";
  let descricao = "";
  let tags = "";

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado, insira algo no campo de busca</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre cada elemento (dado) do array 'dados'
  for (let dado of dados) {
    titulo = dado.nome.toLowerCase();
    descricao = dado.curiosidade.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada dado e adiciona-o à string de resultados
      console.log(campoPesquisa);
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
  }
  if (!resultados) {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
  }
  section.innerHTML = resultados; // Insere o HTML construído dentro da seção selecionada, atualizando a página com os resultados da pesquisa
}