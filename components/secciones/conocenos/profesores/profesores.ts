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
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
    contacto: "leguizamonmartin@industrialdetemperley.edu.ar",
  },
  {
    nombre: "Mariano Bustos",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Ingeniero Electrónico",
    linkedin: "https://www.linkedin.com/in/marianombustos/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Sandro Amiel",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Ingeniero Electrónico",
    linkedin: "https://www.linkedin.com/in/sandro-n-amiel-36a89232/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Christian Bernassani",
    img: "/imgs/electronica/placeholder_electronica.jpg",
    carrera: "Game developer",
    linkedin: "https://www.linkedin.com/in/christian-bernassani/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
];

export const profesoresElectromecanica = [
  {
    nombre: "Armando Casas",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "ingeniero espacial",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Jorge Nitales",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "ingeniero mecanico",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Haitor Tilla",
    img: "/imgs/electromecanica/placeholder_mecanica.jpg",
    carrera: "Tortillero licenciado",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
];

export const profesoresAutomotor = [
  {
    nombre: "Max Verstappen",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "piloto de cohete",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
    contacto: "rellenar",
  },
  {
    nombre: "afro Hamilton",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "ligador de colombianas",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "rayo Mcqueen",
    img: "/imgs/automotor/placeholder_automotor.jpg",
    carrera: "irritador de italianos",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
];

export const profesoresBasico = [
  {
    nombre: "Karen Fernandez",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "atendedora de boludos",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Susana Horia",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "filosofia",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
  {
    nombre: "Dolores Delano",
    img: "/imgs/basico/placeholder_basico.jpg",
    carrera: "biologia humana",
    linkedin: "https://www.linkedin.com/company/openai/",
    descripcion: "rellenar",
    contacto: "rellenar",
  },
];
export const todosLosProfesores = profesoresAutomotor.concat(
  profesoresBasico,
  profesoresElectromecanica,
  profesoresElectronica
  );
