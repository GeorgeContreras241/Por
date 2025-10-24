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
        toggleActions: "play none none reverse",
        start: "top 85%",
        end: "bottom 15%",
      },
      duration: 0.4, 
      y: 15, 
      autoAlpha: 0, 
      stagger: 0.03
    });
  }
})

tl
  .from(".title", {
    y: 10,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  })
  .from(".subtitle", {
    y: 15,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=.8")
  .from(".links", {
    stagger: 1,
    y: 10,
    autoAlpha: 0, 
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
  }, "-=.5");

gsap.from(".projects", {
  scrollTrigger: {
    trigger: ".projects",
    markers: false,
    toggleActions: "play none none reverse",
    start: "top 85%",
    end: "bottom 15%",
  },
  y: -10,
  opacity: 1,
  duration: .6,
  ease: "power3.out",
  stagger: .1,
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
        start: "top 85%",
        end: "bottom 15%",
      },
      duration: 0.4, 
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
      start: "top 85%",
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
      start: "top 85%",
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
      markers: false,
      toggleActions: "play none none reverse",
      start: "top 80%",
      end: "bottom 15%",
    },
    x: i % 2 === 0 ? 30 : -30,
    opacity: 0,
    duration: 0.4,
    delay: 0.05 + (i * 0.1),
    ease: "power2.out"
  });
});
