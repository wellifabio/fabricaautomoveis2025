const titulo = document.querySelector('header h1');
const uri = 'http://localhost:3000/';
var alocacoes = [];

async function carregarTitulo() {
    const response = await fetch(uri);
    const data = await response.json();
    titulo.textContent = data.titulo;
}

async function carregarAlocacoes() {
    const response = await fetch(uri + 'alocacoes');
    alocacoes = await response.json();
    console.log(alocacoes);
}

async function montarAreas() {
    const main = document.querySelector('main');
    for (let i = 1; i <= 11; i++) {
        const area = document.createElement('div');
        area.id = `area-${i}`;
        area.innerHTML = `<p>${i}</p>`;
        main.appendChild(area);
    }
}

async function inicializar() {
    await carregarTitulo();
    await montarAreas();
    await carregarAlocacoes();
    await pintarAreas();
}

async function pintarAreas(){
    for(const alocacao of alocacoes){
        const area = document.querySelector(`#area-${alocacao.area}`);
        area.classList.add('alocado');
    }
}

inicializar();