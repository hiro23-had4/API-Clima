const contenido = document.querySelector('.contenido');
const nombreDiv = document.querySelector('.nombre-ciudad');
const tempActual = document.querySelector('.tem-actual');
const tempMax = document.querySelector('.tem-max');
const tempMin = document.querySelector('.tem-min');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarAlerta('Ambos campos deben de estar llenos');
        return;
    }

    // consultar API
    consultarAPI(ciudad, pais);

}

function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
            'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    `;

        contenido.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    };
}

function consultarAPI(ciudad, pais) {
    const appId = 'c27d92472b93a59c06e80fa9b629faa8';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner();

    setTimeout(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                limpiarHTML();
                if (datos.cod === '404') {
                    mostrarAlerta('Ciudad no Encontrada');
                    return
                };
                mostrarClima(datos)
            })
    }, 3000);

}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const centigrados = KelvinACentigrados(temp);
    const max = KelvinACentigrados(temp_max);
    const min = KelvinACentigrados(temp_min);

    const nameCiudad = document.createElement('p');
    nameCiudad.classList.add('mb-2', 'text-5xl', 'font-medium', 'text-slate-500');
    nameCiudad.innerText = `Clima en ${name}`;

    const actual = document.createElement('p');
    actual.classList.add('font-bold', 'text-6xl', 'text-center');
    actual.innerHTML = `${centigrados} &#8451`;

    const temMaximo = document.createElement('p');
    temMaximo.classList.add('font-bold', 'text-6xl', 'text-center');
    temMaximo.innerHTML = `${max} &#8451`;

    const temMinimo = document.createElement('p');
    temMinimo.classList.add('font-bold', 'text-6xl', 'text-center');
    temMinimo.innerHTML = `${min} &#8451`;

    nombreDiv.appendChild(nameCiudad);
    tempActual.appendChild(actual);
    tempMax.appendChild(temMaximo);
    tempMin.appendChild(temMinimo);

}

const KelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    const contenedores = [nombreDiv, tempActual, tempMax, tempMin];

    contenedores.forEach(div => {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    });
}

function Spinner() {
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    tempActual.appendChild(divSpinner);
}