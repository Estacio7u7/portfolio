const iconMobileMenu = document.querySelector('.show-mobile-menu')
const mobileMenu = document.querySelector('.mobile-menu');
const siteContent = document.querySelector('.site-content');

iconMobileMenu.addEventListener('click', toggleVisualization);

function toggleVisualization() {
    mobileMenu.classList.toggle('non-visible');
    console.log('togling');
}

const projectArray = [];

function fillProjectArray(){
    projectArray.push({
        type:'Ingenieria',
        description:'Proyectos desarrollados durante el desarrollo de mi carrera universitaria de Ingeniería Mecatrónica.',
        link:'./projects-eng.html',
        alt:'Proyectos de Ingenieria',
    })

    projectArray.push({
        type:'Frontend',
        description:'Proyectos web desarrollados con tecnologías HTML, CSS y JavasCript.',
        link:'./projects-frontend.html',
        alt:'Proyectos FrontEnd',
    })

    projectArray.push({
        type:'Backend',
        description:'Proyectos desarrollados en Java principalmente para conectar el API REST con bases de datos MySQL.',
        link:'./projects-backend.html',
        alt:'Proyectos Backend',
    })
}

fillProjectArray();


function renderMainPage() {
    const introduction = document.createElement('div');
    introduction.classList.add('introduction');

    const mainTitle = document.createElement('p');
    mainTitle.classList.add('introduction__title')
    mainTitle.innerHTML = 'Bienvenido a mi Portafolio';
    
    const intParagraph = document.createElement('P')
    intParagraph.classList.add('introduction__paragraph')
    intParagraph.innerHTML = 'Soy Ingeniero mecatrónico con énfasis en automatización industrial egresado de la Universidad Santo Tomás con facultades en análisis de sistemas y mantenimiento. Poseo conocimientos en planificación y ejecución de proyectos I+D+I, diseño y desarrollo de dispositivos prototipo bajo herramientas CAD-CAM, programación de PLCs bajo metodología GRAFCET y guía GEMMA, programación de sistemas embebidos ESP32, Arduino y microcontroladores PIC. En esta página se encuentran mis proyectos, estudios y certificaciones.';

    introduction.appendChild(mainTitle);
    introduction.appendChild(intParagraph);

    const projects = document.createElement('div');
    projects.classList.add('projects')

    projectArray.forEach(project => {
        let projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');

        let type = document.createElement('p');
        type.classList.add('project-links__type');
        type.innerHTML = project.type;

        let description = document.createElement('p');
        description.classList.add('project-links__description');
        description.innerHTML = project.description

        let anchor = document.createElement('a');
        anchor.classList.add('project-links__anchor');
        anchor.setAttribute('href', project.link);
        anchor.innerHTML = 'Quiero verlos';

        let anchorArrow = document.createElement('img');
        anchorArrow.setAttribute('src', './icons/right_arrow_icon.svg');
        anchorArrow.setAttribute('alt', project.alt);

        anchor.appendChild(anchorArrow);

        projectLinks.appendChild(type);
        projectLinks.appendChild(description);
        projectLinks.appendChild(anchor);

        projects.appendChild(projectLinks);
    });

    siteContent.appendChild(introduction);
    siteContent.appendChild(projects);

}

renderMainPage();