const iconMobileMenu = document.querySelector('.show-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const siteContent = document.querySelector('.site-content');

iconMobileMenu.addEventListener('click', toggleVisualization);

function toggleVisualization() {
    mobileMenu.classList.toggle('non-visible');
    console.log('togling');
}

const projects = [];

function fillProjects() {
    projects.push(
        {
            name: 'Basic-Website',
            role: 'Frontend Developer Junior',
            img: [ './images/basicwebsite.bmp', 'Basic Website'],
            description: 'Sitio web básico con dos páginas HTML creadas para practicar y poner en practica todos los conceptos de HTML y CSS.',
            actions: [
                'Cree el diseño de la pagina web, incluyendo practicamente todos los componentes del HTML.',
                'Cree el estilo para la hoja CSS basado en la pagina web de El Espectador.',
                'Cree una carta del anime Yu Gi Oh! como una página secundaria.'
                ],
            technologies: [
                'HTML',
                'CSS',
            ]
        }
    )

    projects.push(
        {
            name: 'Website de Compras',
            role: 'Frontend Developer Junior',
            img: [ './images/websitecompras.bmp', 'Website de compras'],
            description: 'Creamos este sitio web basado en la maquetación del curso de Platzi. Además de la maquetación de HTML y CSS agregamos JavasCript para unificar las maquetas y ciertas funcionalidades que están hardcoded en HTML.',
            actions: [
                'Construccion del HTML y CSS para cada componente del sitio web',
                'Integracion de los componentes en un mismo archivo: index.html',
                'Agregamos funcionalidades como menus desplegables o detalles de productos con JavaScript.'
                ],
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
            ]
        }
    )

    projects.push(
        {
            name: 'Escape from the Zoo',
            role: 'Frontend Developer Junior',
            img: [ './images/escapefromzoo.bmp', 'Juego Escape from the Zoo'],
            description: 'Un juego simple tipo web view en el cual eres un gorila y debes escapar del zoologico. Es un clasico juego en el que resolvemos sencillos laberintos para luchar contra el reloj.',
            actions: [
                'Diseño de los mapas para el videojuego.',
                'Maquetacion para el responsive design del videojuego',
                'Mejora de la logica para el juego, el posicionamiento y el uso de JavaScript.'
                ],
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
            ]
        }
    )

}

fillProjects();

function renderProjects(frontArray) {
    frontArray.forEach(project => {

        const projectItem = document.createElement('div');
        projectItem.classList.add('project');

        const projectName = document.createElement('p');
        projectName.classList.add('project__name');
        projectName.innerHTML = project.name;

        const projectRole = document.createElement('p');
        projectRole.classList.add('project__role');
        projectRole.innerHTML = project.role;

        const projectDivider = document.createElement('hr');
        projectDivider.classList.add('project__divider');

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project__description');
        
        const projectPicture = document.createElement('figure');
        const pictureImg = document.createElement('img');
        pictureImg.setAttribute('src', project.img[0]);
        pictureImg.setAttribute('alt', project.img[1]);


        const projectSummary = document.createElement('p');
        projectSummary.innerHTML = project.description;

        const projectDivider2 = document.createElement('hr');
        projectDivider2.classList.add('project__divider');

        const projectInformation = document.createElement('div');
        projectInformation.classList.add('project__information');
        
        const projectSpanActions = document.createElement('span');
        projectSpanActions.innerHTML = 'Acciones Realizadas';

        const actionsMade = document.createElement('ul');
        
        project.actions.forEach(action => {
            let listItem = document.createElement('li');
            listItem.innerHTML = action;
            actionsMade.appendChild(listItem);
        })

        const projectSpanTechnologies = document.createElement('span');
        projectSpanTechnologies.innerHTML = 'Tecnologias aplicadas';

        const technologiesApplied = document.createElement('ul');
        
        project.technologies.forEach(tech => {
            let listItem = document.createElement('li');
            listItem.innerHTML = tech;
            technologiesApplied.appendChild(listItem);
        })

        

        siteContent.appendChild(projectItem);

        projectItem.appendChild(projectName);
        projectItem.appendChild(projectRole);
        projectItem.appendChild(projectDivider);
        projectItem.appendChild(projectDescription);
        projectDescription.appendChild(projectPicture)
        projectPicture.appendChild(pictureImg);
        projectDescription.appendChild(projectSummary);
        projectItem.appendChild(projectDivider2);
        projectItem.appendChild(projectInformation);

        projectInformation.appendChild(projectSpanActions);
        projectInformation.appendChild(actionsMade);

        projectInformation.appendChild(projectSpanTechnologies);
        projectInformation.appendChild(technologiesApplied);

    });
}

renderProjects(projects);