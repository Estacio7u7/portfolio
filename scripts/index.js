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
    mainTitle.innerHTML = 'Bienvenido a mi Portfolio';
    
    const intParagraph = document.createElement('P')
    intParagraph.classList.add('introduction__paragraph')
    intParagraph.innerHTML = 'Personalmente nunca he sido bueno en presentarme a mí mismo, me gusta más que mis proyectos y mis acciones hablen por mí. Es así como decidí crear un sitio web que, al mismo tiempo de presentar una galería de mis estudios y proyectos, es una demostración fiel de mis capacidades en desarrollo y despliegue como FrontEnd Developer.';

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