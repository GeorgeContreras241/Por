const projects = [
  {
    id: 1,
    name: 'Nube - Gestor de Contraseñas',
    description:
      'Aplicación full stack segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend antes de almacenarse en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
    technologies: [
      { name: 'React', icon: 'React' },
      { name: 'Tailwind', icon: 'Tailwind' },
      { name: 'Express.js', icon: 'Express' },
      { name: 'MongoDB', icon: 'Mongo' }
    ],
    url: false,
    github: 'https://github.com/joaopaulo-dev/calculator-app',
    image: './project07.webp'
  },
  {
    id: 1,
    name: 'Local - Gestor de Contraseñas',
    description:
      'Aplicación Local segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend y no se almacenan en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
    technologies: [
      { name: 'React', icon: 'React' },
      { name: 'Tailwind', icon: 'Tailwind' }
    ],
    url: 'https://password-manager-three-liard.vercel.app/',
    github: 'https://github.com/GeorgeContreras241/newPass',
    image: './project06.webp'
  },
  {
    id: 2,
    name: 'Landing Page Metálicas J Y N',
    description:
      'Sitio web corporativo para Metálicas J Y N, mostrando sus productos y servicios. Desarrollado con Astro para máximo rendimiento y SEO.',
    technologies: [
      { name: 'Astro', icon: 'Astro_icons' },
      { name: 'Tailwind', icon: 'Tailwind' }
    ],
    url: 'https://metalicasjyn.vercel.app',
    github: 'https://github.com/GeorgeContreras241/Frontend-metalicas-j-y-n',
    image: './project01.webp'
  },
  {
    id: 3,
    name: 'Tienda Online con Fake Store API',
    description:
      'E-commerce que consume la API de Fake Store, con funcionalidades de filtrado y búsqueda. Próximamente incluirá pasarela de pagos y historial de compras.',
    technologies: [
      { name: 'React', icon: 'React' },
      { name: 'Tailwind', icon: 'Tailwind' }
    ],
    url: 'https://store-api-sage.vercel.app',
    github: 'https://github.com/GeorgeContreras241/Store-Api',
    image: './project04.webp'
  }
]

const frontendSkills = [
  { name: 'React', icon: 'React' },
  { name: 'Next.js', icon: 'Next' },
  { name: 'Astro', icon: 'Astro_icons' },
  { name: 'Vanilla JS', icon: 'JavaScript' },
  { name: 'Tailwind CSS', icon: 'Tailwind' },
  { name: 'Gsap', icon: 'JavaScript' }
]

const backendSkills = [
  { name: 'Node.js', icon: 'Node' },
  { name: 'Express.js', icon: 'Express' },
  { name: 'MongoDB', icon: 'Mongo' }
]

const devopsSkills = [{ name: 'Git Hub', icon: 'GitHub' }]


export { projects, frontendSkills, backendSkills, devopsSkills }