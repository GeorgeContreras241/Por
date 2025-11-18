export const projects = [
    {
      id: 1,
      name: 'Nube - Gestor de Contraseñas',
      description:
        'Aplicación Full Stack segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend antes de almacenarse en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'ExpressJS', icon: 'Express' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: null,
      github: 'https://github.com/GeorgeContreras241/G-Password_manager',
      image: './images/project07.webp'
    },
    {
      id: 2,
      name: 'Local - Gestor de Contraseñas',
      description:
        'Aplicación local segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend y no se almacenan en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' }
      ],
      url: 'https://g-local-password-manager.vercel.app/',
      github: 'https://github.com/GeorgeContreras241/G-Local-password-manager',
      image: './images/project06.webp'
    },
    {
      id: 3,
      name: 'Landing Page Metálicas J Y N',
      description:
        'Sitio web corporativo para Metálicas J Y N, mostrando sus productos y servicios. Desarrollado con Astro para máximo rendimiento y SEO.',
      technologies: [
        { name: 'Astro', icon: 'Astro_icons' },
        { name: 'Tailwind', icon: 'Tailwind' }
      ],
      url: false,
      github: 'https://github.com/GeorgeContreras241/Ward-Spy',
      image: './images/project01.webp'
    },
    {
      id: 4,
      name: 'Tienda Online con Fake Store API',
      description:
        'E-commerce que consume la API de Fake Store, con funcionalidades de filtrado y búsqueda. Próximamente incluirá pasarela de pagos y historial de compras.',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' }
      ],
      url: 'https://store-api-sage.vercel.app',
      github: 'https://github.com/GeorgeContreras241/Store-Api',
      image: './images/project04.webp'
    },
    {
      id: 5,
      name: 'Portfolio Personal',
      description:
        'Portfolio personal desarrollado con Astro, mostrando mis proyectos y habilidades. Incluye secciones de proyectos, habilidades y contacto.',
      technologies: [
        { name: 'Astro', icon: 'Astro_icons' },
        { name: 'React', icon: 'React' },
        { name: 'Tailwind CSS', icon: 'Tailwind' }
      ],
      url: "https://porfolio-v2-nu.vercel.app",
      github: 'https://github.com/GeorgeContreras241/G-Porfolio_V2.git',
      image: './images/project08.webp'
    }
  ];