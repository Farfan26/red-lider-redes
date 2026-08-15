/* ============================================================
   Lista de redes sociales: para agregar una nueva red,
   solo añade un objeto aquí. Heredará automáticamente el
   mismo estilo, animación y comportamiento que las demás.
   ============================================================ */
const SOCIAL_NETWORKS = [
  {
    name: "Facebook",
    handle: "Red Líder",
    url: "https://www.facebook.com/share/1DQmLdSwVL/",
    leon: "assets/leon1.png",
    iconClass: "icon-facebook",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06z"/></svg>`
  },
  {
    name: "Instagram",
    handle: "@red.lider.oficial",
    url: "https://www.instagram.com/red.lider.oficial?igsh=aXNseHFiZnR2Z2V3",
    leon: "assets/leon2.png",
    iconClass: "icon-instagram",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.92 4.92 0 01-1.16 1.77 4.92 4.92 0 01-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.92 4.92 0 01-1.77-1.16 4.92 4.92 0 01-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77a4.92 4.92 0 011.77-1.16c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.51.6-.67 1.02-.12.31-.26.78-.3 1.65C4.27 8.75 4.26 9.07 4.26 12s.01 3.25.06 4.3c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.51 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.51-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.3s-.01-3.25-.06-4.3c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 00-.67-1.02 2.7 2.7 0 00-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 110 10.3 5.15 5.15 0 010-10.3zm0 8.5a3.35 3.35 0 100-6.7 3.35 3.35 0 000 6.7zm5.35-8.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg>`
  },
  {
    name: "TikTok",
    handle: "@red.lider.oficial",
    url: "https://www.tiktok.com/@red.lider.oficial?_r=1&_t=ZS-965ZexOicT",
    leon: "assets/leon3.png",
    iconClass: "icon-tiktok",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.2v13.35a2.72 2.72 0 11-2.72-2.72c.24 0 .48.03.7.08V9.4a5.9 5.9 0 00-.7-.04A5.92 5.92 0 004 15.28a5.92 5.92 0 0011.84 0V8.62a8.3 8.3 0 004.16 1.12V6.53a5.06 5.06 0 01-3.4-4.53z"/></svg>`
  }

  /* 👇 Ejemplo: así se agregaría una nueva red social
  {
    name: "LinkedIn",
    handle: "Red Líder",
    url: "https://www.linkedin.com/company/tu-empresa",
    leon: "assets/leon4.png",
    iconClass: "icon-default",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.48V23H.24V8.25zM8.5 8.25h4.29v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.48v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23H8.5V8.25z"/></svg>`
  }
  */
];

const container = document.getElementById('cards-col');

SOCIAL_NETWORKS.forEach((net, i) => {
  const card = document.createElement('a');
  card.href = net.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className = "social-card";
  card.style.animationDelay = (i * 0.15 + 0.1) + "s";

  card.innerHTML = `
    <div class="leon-wrap">
      <img src="${net.leon}" alt="Mascota Red Líder" class="leon-img">
    </div>
    <div class="icon-wrap ${net.iconClass}" style="animation-delay:${i * 0.3}s">
      ${net.svg}
    </div>
    <div class="card-text">
      <div class="name">${net.name}</div>
      <div class="handle">${net.handle}</div>
    </div>
    <div class="go-arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 6l6 6-6 6"/>
      </svg>
    </div>
  `;
  container.appendChild(card);
});