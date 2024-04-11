//aqui se agregan los objetos de los profesores de cada especialidad
//aqui dejare unos datos a tener en cuenta

/*
nombre: "string", nombre del profesor, nombre real, nada de apodos
img: "/imgs/{especialidad}/{imagen del profesor}", las imagenes se guardan en la carpeta public, respetar organizacion de carpetas
carrera: "{titulo o carrera que tenga el profesor}", aqui agregr el titulo o carrera profesional que tenga ese profesor, ademas de se profesor
linkedin: "https://www.linkedin.com/in/{linkedin del profesor}/", en caso de no haber , colocar string 'nulo', el sistema evitara esta linea
descripcion: "rellenar", descripcion hablando un poco del profesor, maximo 440 caracteres para que cuadre bien en el contenedor
contacto: "rellenar", email de contacto direto con el profesor, en caso de no haber, coloar string 'nulo'
*/


export const profesoresElectronica = [
  {
    nombre: "Martin Leguizamon",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Ingeniero Electrónico",
    linkedin: "https://www.linkedin.com/in/martin-leguizamon-a6193919/",
    descripcion: "Profesor de electrónica con más de 10 años de experiencia en la enseñanza técnica. Apasionado por la electrónica y la tecnología, especializado en transmitir conocimientos prácticos y teóricos. Fomenta el aprendizaje activo y la resolución de problemas, preparando a los estudiantes para desafíos en la industria electrónica.",
    contacto: "leguizamonmartin@industrialdetemperley.edu.ar",
  },
  {
    nombre: "Mariano Bustos",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Ingeniero Electrónico",
    linkedin: "https://www.linkedin.com/in/marianombustos/",
    descripcion: "Profesor de electrónica con más de 10 años de experiencia en la enseñanza técnica. Apasionado por la electrónica y la tecnología, especializado en transmitir conocimientos prácticos y teóricos. Fomenta el aprendizaje activo y la resolución de problemas, preparando a los estudiantes para desafíos en la industria electrónica.",
    contacto: "profesorelectronica@example.com",
  },
  {
    nombre: "Sandro Amiel",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Ingeniero Electrónico",
    linkedin: "https://www.linkedin.com/in/sandro-n-amiel-36a89232/",
    descripcion: "Profesor de electrónica con más de 10 años de experiencia en la enseñanza técnica. Apasionado por la electrónica y la tecnología, especializado en transmitir conocimientos prácticos y teóricos. Fomenta el aprendizaje activo y la resolución de problemas, preparando a los estudiantes para desafíos en la industria electrónica.",
    contacto: "profesorelectronica@example.com",
  },
  {
    nombre: "Christian Bernassani",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Game developer",
    linkedin: "https://www.linkedin.com/in/christian-bernassani/",
    descripcion: "Profesor de electrónica con más de 10 años de experiencia en la enseñanza técnica. Apasionado por la electrónica y la tecnología, especializado en transmitir conocimientos prácticos y teóricos. Fomenta el aprendizaje activo y la resolución de problemas, preparando a los estudiantes para desafíos en la industria electrónica.",
    contacto: "profesorelectronica@example.com",
  },
];

export const profesoresElectromecanica = [
  {
    nombre: "Armando Casas",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "ingeniero espacial",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de electromecánica con vasta experiencia técnica. Fusiona electrónica y mecánica para preparar a estudiantes ante desafíos multidisciplinarios. Apasionado por la integración de sistemas y resolución de problemas complejos. Fomenta el aprendizaje práctico y habilidades interdisciplinarias para la industria.",
    contacto: "profesorelectromecanica@example.com",
  },
  {
    nombre: "Jorge Nitales",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "ingeniero mecanico",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de electromecánica con vasta experiencia técnica. Fusiona electrónica y mecánica para preparar a estudiantes ante desafíos multidisciplinarios. Apasionado por la integración de sistemas y resolución de problemas complejos. Fomenta el aprendizaje práctico y habilidades interdisciplinarias para la industria.",
    contacto: "profesorelectromecanica@example.com",
  },
  {
    nombre: "Haitor Tilla",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "Tortillero licenciado",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de electromecánica con vasta experiencia técnica. Fusiona electrónica y mecánica para preparar a estudiantes ante desafíos multidisciplinarios. Apasionado por la integración de sistemas y resolución de problemas complejos. Fomenta el aprendizaje práctico y habilidades interdisciplinarias para la industria.",
    contacto: "profesorelectromecanica@example.com",
  },
];

export const profesoresAutomotor = [
  {
    nombre: "Max Verstappen",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "piloto de cohete",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de automotor con amplia experiencia técnica. Especializado en sistemas automotrices, transmite conocimientos prácticos y teóricos para preparar a los estudiantes para la industria. Apasionado por la innovación y el mantenimiento de vehículos. Fomenta el aprendizaje activo y habilidades técnicas avanzadas para el sector automotriz.",
    contacto: "profesorautomotor@example.com",
  },
  {
    nombre: "afro Hamilton",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "ligador de colombianas",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de automotor con amplia experiencia técnica. Especializado en sistemas automotrices, transmite conocimientos prácticos y teóricos para preparar a los estudiantes para la industria. Apasionado por la innovación y el mantenimiento de vehículos. Fomenta el aprendizaje activo y habilidades técnicas avanzadas para el sector automotriz.",
    contacto: "profesorautomotor@example.com",
  },
  {
    nombre: "rayo Mcqueen",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "irritador de italianos",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesor de automotor con amplia experiencia técnica. Especializado en sistemas automotrices, transmite conocimientos prácticos y teóricos para preparar a los estudiantes para la industria. Apasionado por la innovación y el mantenimiento de vehículos. Fomenta el aprendizaje activo y habilidades técnicas avanzadas para el sector automotriz.",
    contacto: "profesorautomotor@example.com",
  },
];

export const profesoresBasico = [
  {
    nombre: "Karen Fernandez",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "atendedora de boludos",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesora del ciclo básico con experiencia sólida. Comprometida con el desarrollo integral de los estudiantes, enfocada en brindar una educación de calidad. Apasionada por inspirar el aprendizaje, fomenta la participación activa y el pensamiento crítico. Promueve un ambiente inclusivo y de crecimiento en el aula.",
    contacto: "profesoraciclobasico@example.com",
  },
  {
    nombre: "Susana Horia",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "filosofia",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesora del ciclo básico con experiencia sólida. Comprometida con el desarrollo integral de los estudiantes, enfocada en brindar una educación de calidad. Apasionada por inspirar el aprendizaje, fomenta la participación activa y el pensamiento crítico. Promueve un ambiente inclusivo y de crecimiento en el aula.",
    contacto: "profesoraciclobasico@example.com",
  },
  {
    nombre: "Dolores Delano",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "biologia humana",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Profesora del ciclo básico con experiencia sólida. Comprometida con el desarrollo integral de los estudiantes, enfocada en brindar una educación de calidad. Apasionada por inspirar el aprendizaje, fomenta la participación activa y el pensamiento crítico. Promueve un ambiente inclusivo y de crecimiento en el aula.",
    contacto: "profesoraciclobasico@example.com",
  },
];
export const todosLosProfesores = profesoresAutomotor.concat(
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica
  );
