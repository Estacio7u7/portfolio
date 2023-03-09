const iconMobileMenu = document.querySelector('.show-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const siteContent = document.querySelector('.site-content');

iconMobileMenu.addEventListener('click', toggleVisualization);

function toggleVisualization() {
    mobileMenu.classList.toggle('non-visible');
    console.log('togling');
}

const engineeringProjects = [];

function fillProjects() {
    engineeringProjects.push(
        {
            name: 'Rediseño del prototipo Cardio One V1.0 y desarrollo de algoritmos confiables que permiten la identificación de biomarcadores a partir de las señales ECG y PPG',
            role: 'Investigador Junior en mecatrónica',
            img: [ './images/cardioone.jpg', 'CardioOne V2.0'],
            description: 'Desarrollo del firmware y hardware del dispositivo Cardio One V2.0 a partir del rediseño del prototipo CardioOne V1.0 para la adquisición e identificación de bio-marcadores a partir de las señales de ECG Y PPG.',
            actions: [
                'Rediseñé el circuito, para reducir el área de la placa, y la estructura del dispositivo, para reducir su volumen, bajo herramientas CAD.',
                'Creé la aplicación CardioOne Mobile que permite usar el dispositivo con el teléfono inteligente.',
                ],
            achievements: [
                'Se redujo el tamaño del dispositivo en un factor de 10 con un volumen final de 20.4cm^3. Este volumen reducido permite a los usuarios portarlo en su muñeca y monitorear su frecuencia cardiaca y porcentaje de oxígeno en sangre en cualquier momento del día.',
                'El proyecto amplio el campo de aplicación del dispositivo desarrollado en el proyecto predecesor para enfocarlo a medicina preventiva y supervision.',
                'Determinamos la estrategia para el filtrado más eficiente basados en la menor deformacion de la onda.',
                'Obtuvimos una calificacion merecedora del reconocimiento a tesis laureada.'
            ]
        }
    )

    engineeringProjects.push(
        {
            name: 'Robot para asistencia en entorno doméstico para enfermos de COVID-19',
            role: 'Investigador Junior en Mecatrónica',
            img: [ './images/robot.jpg', 'Robot para asistencia domestica'],
            description: 'Diseño y simulación de un robot asistente para pacientes diagnosticados con COVID19, con el objetivo de ofrecer una alternativa que permita reducir el riesgo de contagio al personal médico y familiares de los pacientes. El sistema consiste de un módulo de hardware de adquisición de señales biomédicas, la cual se envía mediante Bluetooth a una base de datos que contiene la información clínica, que se almacena en el subsistema principal, y es procesada utilizando inteligencia artificial para generar alertas tempranas. Además, el sistema móvil está compuesto de módulos de desinfección, dispensación de medicamentos y movimiento controlado por mapeo y localización simultáneos (SLAM) del entorno.',
            actions: [
                'Identifiqué los subsistemas y desarrollé un plan de trabajo para alcanzar los objetivos del proyecto',
                'Diseñé los circuitos electricos y electronicos necesarios para el funcionamiento seguro del robot',
            ],
            achievements: [
                'Se realizo el diseño, planeacion y presupuesto del proyecto. Se presento el diseño mas rentable a la comunidad educativa con el presupuesto mas bajo pero que cumpla con los requisitos funcionales.',
                'Se realizo la simulacion SLAM del dispositivo en el entorno de ROS bajo Ubuntu',
            ],
        }
    )

    engineeringProjects.push(
        {
            name: 'Diseño de un dispositivo capaz de alertar de obstáculos en el tren superior para personas con baja visión y ceguera',
            role: 'Investigador Junior en Mecatrónica',
            img: [ './images/alerta.jpg', 'Dispositivo de alerta'],
            description: 'Diseño de un dispositivo para alertar obstáculos y orientar personas con baja visión principalmente enfocado en el tren superior del cuerpo',
            actions: [
                'Planificacion y ejecucion del proyecto, desarrollo de EDT y asignacion de tareas en el equipo de trabajo',
                'Diseño del firmware para deteccion de distancia con el sensor laser seleccionado para el dispositivo.',
                'Determinacion de los componentes necesarios para satisfacer los requisitos funcionales.'
            ],
            achievements: [
                'Fabricamos el primer prototipo funcional y lo expusimos en la exposicion de proyectos mecatronicos organizado por la facultad.',
                'Logramos evidenciar un campo no atendido dentro de las discapacidades visuales y un posible campo de negocio que al momento de realizado el proyecto se encontraba inatendido'
            ]
        }
    )

}

fillProjects();

function renderProjects(projectsArray) {
    projectsArray.forEach(project => {

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

        const projectSpanAchievements = document.createElement('span');
        projectSpanAchievements.innerHTML = 'Logros Obtenidos';

        const achievementsMade = document.createElement('ul');
        
        project.achievements.forEach(achieve => {
            let listItem = document.createElement('li');
            listItem.innerHTML = achieve;
            achievementsMade.appendChild(listItem);
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

        projectInformation.appendChild(projectSpanAchievements);
        projectInformation.appendChild(achievementsMade);

    });
}

renderProjects(engineeringProjects);