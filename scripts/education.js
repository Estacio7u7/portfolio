const iconMobileMenu = document.querySelector('.show-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const siteContent = document.querySelector('.site-content');

iconMobileMenu.addEventListener('click', toggleVisualization);

function toggleVisualization() {
    mobileMenu.classList.toggle('non-visible');
    console.log('togling');
}

const titles = [];

function fillTitles() {
    titles.push(
        {
            class: 'Pregrado',
            name: 'Ingenieria Mecatronica',
            ies: 'Universidad Santo Tomas',
            ies_ico: ['./images/Escudo_Usta.png', 'Universidad Santo Tomas'],
            startDate: 'Febrero 2017',
            finishDate: 'Diciembre 2022'
        }
    )

    titles.push(
        {
            class: 'Tecnico',
            name: 'Tecnico laboral en Analisis de Sistemas y Mantenimiento',
            ies: 'Instituto Colombiano de Aprendizaje - INCAP',
            ies_ico: ['./images/Escudo_INCAP.png', 'Instituto Colombiano de Aprendizaje'],
            startDate: 'Marzo 2012',
            finishDate: 'Junio 2013'
        }
    )

    titles.push(
        {
            class: 'Educacion Complementaria',
            name: 'Diseño De Productos Electrónicos Con Microcontroladores',
            ies: 'Servicio Nacional de Aprendizaje - SENA',
            ies_ico: ['./images/Escudo_SENA.jpg', 'Servicio Nacional de Aprendizaje'],
            startDate: 'Octubre 2021',
            finishDate: '',
        }
    )
}

fillTitles();

function renderTitle(titlesArray) {
    titlesArray.forEach(title => {

        const titleItem = document.createElement('div');
        titleItem.classList.add('title');

        const titleClass = document.createElement('p');
        titleClass.classList.add('title__class');
        titleClass.innerHTML = title.class;

        const titleName = document.createElement('p');
        titleName.classList.add('title__name');
        titleName.innerHTML = title.name;

        const titleIes = document.createElement('p');
        titleIes.classList.add('title__ies');
        titleIes.innerHTML = title.ies;

        const titleDuration = document.createElement('div');
        titleDuration.classList.add('title__duration');
        
        const titleSpanDuration = document.createElement('span');
        titleSpanDuration.innerHTML = 'Duracion';

        const titleDates = document.createElement('div');
        titleDates.classList.add('title__duration__dates');


        const titleStart = document.createElement('div');
        titleStart.classList.add('title__duration__dates__data');
        titleStart.innerHTML = title.startDate;

        const titleEnd = document.createElement('div');
        titleEnd.classList.add('title__duration__dates__data');
        titleEnd.innerHTML = title.finishDate;

        titleDates.appendChild(titleStart);
        titleDates.appendChild(titleEnd);

        titleDuration.appendChild(titleSpanDuration);
        titleDuration.appendChild(titleDates);

        const left = document.createElement('div');
        
        left.appendChild(titleClass);
        left.appendChild(titleName);
        left.appendChild(titleIes);
        left.appendChild(titleDuration);

        const ico = document.createElement('picture');
        ico.classList.add('title__ico');
        const ico_img = document.createElement('img');

        ico_img.setAttribute('src', title.ies_ico[0]);
        ico_img.setAttribute('alt', title.ies_ico[1]);

        ico.appendChild(ico_img);

        titleItem.appendChild(left);
        titleItem.appendChild(ico);

        siteContent.appendChild(titleItem);
    });
}

renderTitle(titles);