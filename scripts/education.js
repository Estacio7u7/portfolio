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
            name: 'Ingenieria Mecatronica',
            ies: 'Universidad Santo Tomas',
            description: 'Ingeniero Mecatrónico egresado de la Universidad Santo Tomás. Experiencia académica en planificación y ejecución de proyectos I+D+I, diseño y desarrollo de dispositivos y circuitos prototipo bajo herramientas CAD CAM, programación de PLC Siemens bajo metodología internacional GRAFCET y guía GEMMA, programación de dispositivos en plataformas Arduino, Raspberry, ESP32, ESP8266, Microcontroladores PIC de Microchip. Profesional con gran actitud de servicio, trabajo en equipo, compañerismo, capacidad de control, alto compromiso y abierto a cualquier conocimiento nuevo que permita mejorar el desarrollo de mis actividades.',
            startDate: '2017',
            finishDate: '2022'
        }
    )

    titles.push(
        {
            name: 'Diseño De Productos Electrónicos Con Microcontroladores',
            ies: 'Servicio Nacional de Aprendizaje - SENA',
            description: 'Capacitación en diseño de dispositivos electrónicos con microcontroladores PIC programados en lenguaje ensamblador. Recoleccion de requisitos, planeacion y ejecucion de proyectos.',
            startDate: '2021',
            finishDate: '2021'
        }
    )

    titles.push(
        {
            name: 'Tecnico laboral en Analisis de Sistemas y Mantenimiento',
            ies: 'Instituto Colombiano de Aprendizaje - INCAP',
            description: 'Capacitacion en analisis, mantenimiento y reparacion de computadoras. Capacitacion en herramientas ofimaticas y diseño gráfico.',
            startDate: '2012',
            finishDate: '2013'
        }
    )
}

fillTitles();

function renderTitle(titlesArray) {
    titlesArray.forEach(title => {

        /*
        <div class="title">
            <div class="title__name">Nombre del titulo obtenido</div>
            <div class="title__ies">Instituto o IES</div>
            <hr class="title__divider">
            <div class="title__description"> Breve Descripcion</div>
            <hr class="title__divider">
            <div class="title__duration">
                <span>Duracion</span>
                <div class="title__duration__dates">
                    
                    <div class="title__duration__dates__data">
                        <span>Fecha Inicio</span>
                        <p> -- Fecha -- </p>
                    </div>

                    <div class="title__duration__dates__data">
                        <span>Fecha Final</span>
                        <p> -- Fecha -- </p>
                    </div>
                
                </div>
            </div>
        </div>

        */

        const titleItem = document.createElement('div');
        titleItem.classList.add('title');

        const titleName = document.createElement('p');
        titleName.classList.add('title__name');
        titleName.innerHTML = title.name;

        const titleIes = document.createElement('p');
        titleIes.classList.add('title__ies');
        titleIes.innerHTML = title.ies;

        const titleDivider = document.createElement('hr');
        titleDivider.classList.add('title__divider');

        const titleDescription = document.createElement('div');
        titleDescription.classList.add('title__description');
        titleDescription.innerHTML = title.description;

        const titleDivider2 = document.createElement('hr');
        titleDivider2.classList.add('title__divider');

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

        titleItem.appendChild(titleName);
        titleItem.appendChild(titleIes);
        titleItem.appendChild(titleDivider);
        titleItem.appendChild(titleDescription);
        titleItem.appendChild(titleDivider2);
        titleItem.appendChild(titleDuration);

        siteContent.appendChild(titleItem);
    });
}

renderTitle(titles);