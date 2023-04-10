//trabalho com informacao inserida pelo usuario
async function getUF(uf){
    const divInfoUF = document.querySelector(".info-uf");
    
    // Limpa o conteúdo da div
    divInfoUF.innerHTML = "";
    
    // Cria os elementos necessários com os mesmos IDs
    const divInterna = document.createElement("div");
    divInterna.classList = "info-uf-interna"
    divInfoUF.appendChild(divInterna); 

    const elNome = document.createElement("p");
    elNome.id = "nome";
    divInterna.appendChild(elNome);

    const elSigla = document.createElement("p");
    elSigla.id = "sigla";
    divInterna.appendChild(elSigla);

    const elId = document.createElement("p");
    elId.id = "id";
    divInterna.appendChild(elId);
    
    const elRegiao = document.createElement("p");
    elRegiao.id = "regiao";
    divInterna.appendChild(elRegiao);
    
    const elPop = document.createElement("p");
    elPop.id = "pop";
    divInterna.appendChild(elPop);
    
    const elMalha = document.createElement("img");
    elMalha.id = "malha";
    divInterna.appendChild(elMalha);
    
    // Requisições da API do IBGE
    const x = uf;
    const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${x}`);
    const data = await resposta.json();
    const respostaID = await fetch(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${data.id}`);
    const dataID = await respostaID.json();

    // DOM final  
    elId.innerHTML = `ID pelo IBGE: ${data.id}`;
    elSigla.innerHTML = `Sigla da UF: ${data.sigla}`;
    elNome.innerHTML = `Nome da UF: ${data.nome}`;
    elRegiao.innerHTML = `Regiao: ${data.regiao.nome}`;
    elPop.innerHTML = `Populacao atualmente: ${dataID.projecao.populacao}`;
    elMalha.src = `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${data.id}`;
    elMalha.alt = `Malha do estado ${data.nome}`;
}