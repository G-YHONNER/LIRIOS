    /* ==========================================================================
       24 COLORES ULTRA INTENSOS Y VIBRANTES PARA LAS FLORES
       ========================================================================== */
    const COLORS = [
      { name: "Amarillo Sol",    main: "#ffea00", mid: "#ff9100", back: "#ffd600", light: "#ffff8d", glow: "rgba(255, 234, 0, 1)" },
      { name: "Rojo Carmesí",    main: "#ff0044", mid: "#b80028", back: "#e60039", light: "#ff6690", glow: "rgba(255, 0, 68, 1)" },
      { name: "Rosa Intenso",    main: "#ff007f", mid: "#c40058", back: "#e6006b", light: "#ff73b9", glow: "rgba(255, 0, 127, 1)" },
      { name: "Fucsia Neón",     main: "#ff00b7", mid: "#ad007c", back: "#e000a0", light: "#ff80db", glow: "rgba(255, 0, 183, 1)" },
      { name: "Coral Vivo",      main: "#ff2a00", mid: "#b51800", back: "#e02400", light: "#ff8566", glow: "rgba(255, 42, 0, 1)" },
      { name: "Mandarina",       main: "#ff5500", mid: "#ba3600", back: "#e64d00", light: "#ff9d66", glow: "rgba(255, 85, 0, 1)" },
      { name: "Naranja Fuego",   main: "#ff7700", mid: "#c24f00", back: "#eb6b00", light: "#ffb866", glow: "rgba(255, 119, 0, 1)" },
      { name: "Oro Radiante",    main: "#ffc400", mid: "#cc7a00", back: "#ebaa00", light: "#ffe57f", glow: "rgba(255, 196, 0, 1)" },
      { name: "Verde Lima Neón", main: "#aaff00", mid: "#55aa00", back: "#88dd00", light: "#dcff80", glow: "rgba(170, 255, 0, 1)" },
      { name: "Verde Esmeralda", main: "#00ff88", mid: "#00994d", back: "#00cc6a", light: "#80ffc4", glow: "rgba(0, 255, 136, 1)" },
      { name: "Verde Jade Vivo", main: "#00e640", mid: "#008c23", back: "#00c435", light: "#7aff9e", glow: "rgba(0, 230, 64, 1)" },
      { name: "Aguamarina",      main: "#00ffcc", mid: "#00997a", back: "#00cca3", light: "#80ffe6", glow: "rgba(0, 255, 204, 1)" },
      { name: "Turquesa Eléctrico",main:"#00e5ff",mid: "#0088a3", back: "#00b8d4", light: "#84ffff", glow: "rgba(0, 229, 255, 1)" },
      { name: "Azul Cian",       main: "#00b0ff", mid: "#0062a3", back: "#0091ea", light: "#80d8ff", glow: "rgba(0, 176, 255, 1)" },
      { name: "Azul Eléctrico",  main: "#1a66ff", mid: "#0033b8", back: "#004de6", light: "#75aaff", glow: "rgba(26, 102, 255, 1)" },
      { name: "Azul Zafiro",     main: "#294dff", mid: "#0a1f99", back: "#1b3ae0", light: "#829bff", glow: "rgba(41, 77, 255, 1)" },
      { name: "Índigo Intenso",  main: "#5933ff", mid: "#2d00b3", back: "#471ae6", light: "#a68cff", glow: "rgba(89, 51, 255, 1)" },
      { name: "Violeta Vivo",    main: "#8c1aff", mid: "#4d0099", back: "#7300e6", light: "#c68cff", glow: "rgba(140, 26, 255, 1)" },
      { name: "Amatista",        main: "#b300ff", mid: "#660099", back: "#9900db", light: "#da80ff", glow: "rgba(179, 0, 255, 1)" },
      { name: "Púrpura Neón",    main: "#d900ff", mid: "#800099", back: "#bd00de", light: "#ee80ff", glow: "rgba(217, 0, 255, 1)" },
      { name: "Magenta Puro",    main: "#ff0099", mid: "#9e0059", back: "#db0080", light: "#ff75c8", glow: "rgba(255, 0, 153, 1)" },
      { name: "Rosa Rubí",       main: "#ff1a66", mid: "#a80038", back: "#e00b52", light: "#ff80ab", glow: "rgba(255, 26, 102, 1)" },
      { name: "Blanco Diamante", main: "#ffffff", mid: "#70b5ff", back: "#cce6ff", light: "#ffffff", glow: "rgba(255, 255, 255, 1)" },
      { name: "Rojo Rubí",       main: "#ff002b", mid: "#990014", back: "#d90022", light: "#ff7088", glow: "rgba(255, 0, 43, 1)" }
    ];

    let index = 23; // Inicia con los colores de tu ramo: Flor centro Roja, Flor derecha Rosa, Flor izquierda Mandarina
    const root = document.documentElement.style;
    const flowerNodes = document.querySelectorAll(".flower");

    function applyFlowerPalette() {
      const c = COLORS[index];
      root.setProperty("--c-main", c.main);
      root.setProperty("--c-mid", c.mid);
      root.setProperty("--c-back", c.back);
      root.setProperty("--c-light", c.light);
      root.setProperty("--c-glow", c.glow);

      flowerNodes.forEach((fl, i) => {
        // Modo Ramo Multicolor permanente: cada flor toma un color armónico distinto de los 24
        const fc = COLORS[(index + i * 3) % COLORS.length];
        fl.style.setProperty("--f-main", fc.main);
        fl.style.setProperty("--f-mid", fc.mid);
        fl.style.setProperty("--f-light", fc.light);
        fl.style.setProperty("--f-glow", fc.glow);
      });
    }

    function updateGardenColor(newIndex) {
      index = (newIndex + COLORS.length) % COLORS.length;
      applyFlowerPalette();
    }

    // Cambiar combinación de colores al presionar cualquier parte de la pantalla (Touch y Clic)
    let lastInteraction = 0;
    function handleTapOrClick(clientX, clientY) {
      const now = performance.now();
      if (now - lastInteraction < 200) return;
      lastInteraction = now;

      if (clientX < window.innerWidth * 0.35) {
        updateGardenColor(index - 1);
      } else {
        updateGardenColor(index + 1);
      }
      createSparkles(clientX, clientY, 34);
    }

    window.addEventListener("click", (e) => {
      handleTapOrClick(e.clientX, e.clientY);
    });

    window.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        handleTapOrClick(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") updateGardenColor(index - 1);
      if (e.key === "ArrowRight") updateGardenColor(index + 1);
    });

    // Bloqueo total de zoom en pantalla para móviles (gestos, pellizcos y doble toque)
    document.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener("touchmove", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    let lastTap = 0;
    document.addEventListener("touchend", (e) => {
      const now = performance.now();
      if (now - lastTap < 300) {
        e.preventDefault();
      }
      lastTap = now;
    }, { passive: false });

    document.addEventListener("gesturestart", (e) => e.preventDefault());
    document.addEventListener("gesturechange", (e) => e.preventDefault());
    document.addEventListener("gestureend", (e) => e.preventDefault());

    /* ==========================================================================
       CANVAS NOCTURNO, LUCIÉRNAGAS Y MARIPOSAS DE LUZ A 120HZ
       ========================================================================== */
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    function resizeCanvas() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    const particles = [];
    const bgStars = [];
    const fireflies = [];
    const butterflies = [];

    for (let i = 0; i < 95; i++) {
      bgStars.push({
        x: Math.random() * w,
        y: Math.random() * (h * 0.78),
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random(),
        da: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1)
      });
    }

    // Luciérnagas mágicas que ascienden desde el jardín
    for (let i = 0; i < 32; i++) {
      fireflies.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.3 + 0.9,
        alpha: Math.random() * 0.8 + 0.2,
        vy: -(Math.random() * 0.45 + 0.15),
        vx: (Math.random() - 0.5) * 0.35,
        angle: Math.random() * Math.PI * 2,
        colorOffset: i * 2
      });
    }

    // 4 Mariposas luminosas que revolotean suavemente sobre las flores a 120Hz
    for (let i = 0; i < 4; i++) {
      butterflies.push({
        x: w * (0.28 + i * 0.15),
        y: h * (0.45 + (i % 2) * 0.12),
        baseY: h * (0.42 + (i % 2) * 0.14),
        vx: (i % 2 === 0 ? 1 : -1) * (0.65 + i * 0.12),
        phase: i * 1.7,
        wingAngle: Math.random() * Math.PI * 2,
        size: 8 + (i % 2) * 2.5,
        colorOffset: i * 4
      });
    }

    function createSparkles(x, y, count = 16) {
      if (particles.length > 36) particles.splice(0, particles.length - 20);
      const c = COLORS[index];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.4 + 0.8;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          r: Math.random() * 2.4 + 0.9,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          color: i % 2 === 0 ? c.light : c.main
        });
      }
    }

    // Rastro de polvo estelar suave y optimizado
    let lastTrail = 0;
    function handlePointerMove(x, y) {
      const now = performance.now();
      if (now - lastTrail > 28) {
        lastTrail = now;
        if (particles.length > 45) return;
        const c = COLORS[index];
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.25,
          r: Math.random() * 1.8 + 0.7,
          alpha: 0.8,
          decay: 0.03,
          color: Math.random() < 0.5 ? c.light : "#ffffff"
        });
      }
    }

    window.addEventListener("mousemove", (e) => handlePointerMove(e.clientX, e.clientY));
    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    let lastFrameTime = performance.now();

    function animate(now = performance.now()) {
      const rawDt = now - lastFrameTime;
      const dt = Math.min(32, Math.max(1, rawDt));
      const step = dt / 16.6667;
      lastFrameTime = now;

      ctx.clearRect(0, 0, w, h);
      const c = COLORS[index];

      // 1. Estrellas del cielo titilando
      for (let i = 0; i < bgStars.length; i++) {
        const s = bgStars[i];
        s.alpha += s.da * step;
        if (s.alpha > 0.95 || s.alpha < 0.15) s.da *= -1;

        ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Luciérnagas multicolor flotando entre las hojas (Aceleradas por hardware)
      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i];
        f.angle += 0.022 * step;
        f.y += f.vy * step;
        f.x += (Math.sin(f.angle) * 0.38 + f.vx) * step;

        if (f.y < -15) {
          f.y = h + 15;
          f.x = Math.random() * w;
        }

        const fc = COLORS[(index + f.colorOffset) % COLORS.length];

        // Resplandor exterior suave
        ctx.globalAlpha = f.alpha * 0.35;
        ctx.fillStyle = fc.main;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo luminoso brillante
        ctx.globalAlpha = f.alpha;
        ctx.fillStyle = fc.light;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Mariposas de luz revoloteando (Sin bloqueos de GPU)
      for (let i = 0; i < butterflies.length; i++) {
        const b = butterflies[i];
        b.phase += 0.016 * step;
        b.wingAngle += 0.22 * step;
        b.x += b.vx * step;
        b.y = b.baseY + Math.sin(b.phase) * 34 + Math.cos(b.phase * 0.6) * 14;

        if (b.x > w + 40) b.x = -40;
        if (b.x < -40) b.x = w + 40;

        const bc = COLORS[(index + b.colorOffset) % COLORS.length];
        const wingFlap = Math.abs(Math.sin(b.wingAngle)) * 0.85 + 0.15;
        const dir = b.vx >= 0 ? 1 : -1;

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(Math.sin(b.phase) * 0.18 * dir);

        // Resplandor de mariposa
        ctx.globalAlpha = 0.32;
        ctx.fillStyle = bc.main;
        ctx.beginPath();
        ctx.ellipse(-2 * dir, -b.size * 0.45 * wingFlap, b.size * 1.15, b.size * 0.75 * wingFlap, -0.35 * dir, 0, Math.PI * 2);
        ctx.fill();

        // Ala superior brillante
        ctx.globalAlpha = 0.92;
        ctx.fillStyle = bc.light;
        ctx.beginPath();
        ctx.ellipse(-2 * dir, -b.size * 0.45 * wingFlap, b.size * 0.85, b.size * 0.55 * wingFlap, -0.35 * dir, 0, Math.PI * 2);
        ctx.fill();

        // Ala inferior
        ctx.beginPath();
        ctx.ellipse(-4 * dir, b.size * 0.35 * wingFlap, b.size * 0.65, b.size * 0.42 * wingFlap, 0.35 * dir, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // 4. Destellos interactivos de alto rendimiento
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * step;
        p.y += p.vy * step;
        p.vy += 0.04 * step;
        p.alpha -= p.decay * step;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Halo suave
        ctx.globalAlpha = p.alpha * 0.38;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    // Al cargar: quita la clase "container" para iniciar el florecimiento tal como hacía main.js
    window.onload = () => {
      document.body.classList.remove("container");
      updateGardenColor(23);
      lastFrameTime = performance.now();
      animate();
    };
