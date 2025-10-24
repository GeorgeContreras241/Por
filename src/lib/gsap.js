import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Actualizar coordenadas del mouse
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    gsap.set(".pointer_mouse", { x: posX, y: posY });
  });
  

const tl = gsap.timeline({
  defaults: {
    duration: 0.6,
    ease: "power2.out",
    y: 10,
    opacity: 0,
    markers: false,
    
  },
});

let split = SplitText.create(".text", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".text",
        markers: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "bottom 15%",
      },
      duration: 0.3, 
      y: 15, 
      autoAlpha: 0, 
      stagger: 0.03
    });
  }
})

// Hero section animations - Faster version
tl
  // Console log text
  .from(".title", {
    y: 10,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out"
  })
  // Main heading
  .from("h1.subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(2.5)",
    scale: 0.95
  }, "-=.2")
  // Role text
  .from("div.subtitle", {
    y: 15,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out"
  }, "-=.3")
  // Description box
  .from(".relative.group > .relative", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=.2")
  // Buttons
  .from(".links a", {
    y: 10,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out"
  }, "-=.2");

// Projects section animations - Faster version
gsap.utils.toArray('.group.relative').forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: 'top 90%',
      end: 'bottom 10%',
      toggleActions: 'play none none reverse',
    },
    y: 20,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
    delay: i * 0.02
  });

  // Image hover effect - Faster
  const img = project.querySelector('img');
  if (img) {
    img.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  }
});

// About section animations - Faster version
gsap.from("#about .bg-gray-900\\/50", {
  scrollTrigger: {
    trigger: "#about",
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none none'
  },
  y: 20,
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out'
});

gsap.from("#about img", {
  scrollTrigger: {
    trigger: "#about",
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none none'
  },
  scale: 0.95,
  opacity: 0,
  duration: 0.6,
  ease: 'back.out(2)',
  delay: 0.1
});

// Skills section animations - Faster version
const skillSections = [
  { selector: "#skills .grid > div:nth-child(1) ul li", delay: 0 },
  { selector: "#skills .grid > div:nth-child(2) ul li", delay: 0.02 },
  { selector: "#skills .grid > div:nth-child(3) ul li", delay: 0.04 }
];

skillSections.forEach(section => {
  gsap.utils.toArray(section.selector).forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 92%',
        end: 'bottom 8%',
        toggleActions: 'play none none none'
      },
      y: 15,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      delay: i * 0.03 + section.delay
    });
  });
});

// Section header animations - Faster version
const sectionHeaders = [
  "#skills h2",
  "#about h2",
  "#projects h2"
];

sectionHeaders.forEach(selector => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 92%',
      toggleActions: 'play none none none',
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
});

gsap.from('.image', {
  scrollTrigger: {
    trigger: ".image",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 1,
  duration: .6,
  ease: "power3.out",
  stagger: .1,
})

gsap.from(".title_scroll", {
  scrollTrigger: {
    trigger: ".title_scroll",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 1,
  duration: .6,
  ease: "power3.out",
  stagger: .1,
})

let textScroll = SplitText.create(".text_scroll", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".text_scroll",
        markers: false,
        toggleActions: "play none none reverse",
        start: "top 90%",
        end: "bottom 15%",
      },
      duration: 0.3, 
      opacity: 1,
      y: 10, 
      autoAlpha: 0, 
      stagger: 0.03
    });
  }
})

gsap.from(".image_scroll", {
  scrollTrigger: {
    trigger: ".image_scroll",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 1,
  duration: .6,
  ease: "power3.out",
  stagger: .1,
})

// Animación para la sección de habilidades
// Título de la sección
gsap.from(".skills-title", {
  scrollTrigger: {
    trigger: "#skills",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
});

// Subtítulo de la sección
gsap.from(".skills-subtitle", {
  scrollTrigger: {
    trigger: "#skills",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 80%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power3.out"
});

// Categorías de habilidades
gsap.utils.toArray(".skills-category").forEach((category, i) => {
  gsap.from(category, {
    scrollTrigger: {
      trigger: category,
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 15%",
    },
    x: i % 2 === 0 ? -10 : 10,
    opacity: 0,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Items de habilidades
gsap.utils.toArray(".skill-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item.closest('.gsap-list'),
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 10%",
    },
    y: 10,
    opacity: 0,
    duration: 0.6,
    delay: 0.02 * (i % 10), // Agrupar por decenas para evitar retrasos muy largos
    ease: "back.out(1.2)",
    stagger: {
      amount: 0.5
    }
  });
});

// Animación para la sección de certificados
// Título de la sección
gsap.from(".certificates-title", {
  scrollTrigger: {
    trigger: ".certificates-section",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: 10,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
});

// Items de certificados
gsap.utils.toArray(".certificate-item").forEach((item, i) => {
  // Animación del logo
  const logo = item.querySelector('.certificate-logo');
  gsap.from(logo, {
    scrollTrigger: {
      trigger: item,
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 90%",
      end: "bottom 15%",
    },
    scale: 0.5,
    opacity: 0,
    duration: 0.4,
    delay: i * 0.1,
    ease: "back.out(1.7)"
  });

  // Animación del contenido
  
  gsap.from(".certificate-content", {
    scrollTrigger: {
      trigger: item,
      toggleActions: "play none none reverse",
      start: "top 85%",
      end: "bottom 15%",
    },
    x: i % 2 === 0 ? 30 : -30,
    opacity: 0,
    duration: 0.4,
    delay: 0.05 + (i * 0.1),
    ease: "power2.out"
  });
});
