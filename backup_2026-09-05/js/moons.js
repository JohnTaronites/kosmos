// Księżyce - dane i animacje
const MOON_DATA = {
  'Moon (Earth)': { 
    name: 'Moon (Earth)', planet: 'Earth', radius: 1737, distance: 384400,
    temp: '-173°C do 127°C',
    description: 'Nasz naturalny satelita – widoczny w nocy.',
    funFact: 'Księżyc powoduje przypływy i odpływy oceanów na Ziemi!',
    color: '#b0b0b0'
  },
  'Ganymede (Jupiter)': { 
    name: 'Ganymede (Jupiter)', planet: 'Jupiter', radius: 2634, distance: 1070400,
    temp: '-163°C', 
    description: 'Największy księżyc w Układzie Słonecznym – większy niż Merkury!',
    funFact: 'Ganimedes ma własną pole magnetyczne!',
    color: '#c0c0c0'
  },
  'Europa (Jupiter)': { 
    name: 'Europa (Jupiter)', planet: 'Jupiter', radius: 1561, distance: 671000,
    temp: '-160°C',
    description: 'Pokryta lodowcami – może kryć pod powierzchnią ocean.',
    funFact: 'Pod lodem Europy kryje się ocean wody słonej – dwa razy więcej niż na Ziemi!',
    color: '#e0e8f0'
  },
  'Titan (Saturn)': { 
    name: 'Titan (Saturn)', planet: 'Saturn', radius: 2576, distance: 1221800,
    temp: '-179°C',
    description: 'Jedyny księżyc z gętą atmosferą – jak Ziemia!',
    funFact: 'Na Tytanie są jeziora ciekłego metanu – może tam istnieje życie!',
    color: '#e8d5a3'
  },
  'Io (Jupiter)': { 
    name: 'Io (Jupiter)', planet: 'Jupiter', radius: 1821, distance: 421800,
    temp: '-130°C',
    description: 'Najbardziej wulkaniczne ciało w Układzie Słonecznym.',
    funFact: 'Io ma ponad 400 aktywnych wulkanów!',
    color: '#f4c430'
  },
  'Charon (Pluto)': { 
    name: 'Charon (Pluto)', planet: 'Pluto', radius: 606, distance: 19590,
    temp: '-230°C',
    description: 'Największy księżyc Plutona – razem tworzą układ podwójny.',
    funFact: 'Pluton i Charon tak podobne, że krążą wokół wspólnego punktu!',
    color: '#707070'
  }
};
window.moonData = MOON_DATA;

function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + (R * 0x10000) + (G * 0x100) + B).toString(16).slice(1);
}
window.moonLighten = lightenColor;

function getMoonColor(moon) {
  return moon.color || '#c0c0c0';
}

function createMoonCards() {
  const grid = document.getElementById('moonsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.entries(MOON_DATA).forEach(([key, moon]) => {
    const moonColor = moon.color || '#c0c0c0';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-visual">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, ${lightenColor(moonColor, 30)}, ${moonColor}); box-shadow: 0 0 20px ${moonColor}; margin: 0 auto;"></div>
      </div>
      <h3 class="card-title">${moon.name}</h3>
      <p class="card-desc">${moon.description}</p>
      <div class="card-info">
        <div class="card-info-item"><span class="card-info-label">Radius</span><span class="card-info-value">${moon.radius} km</span></div>
        <div class="card-info-item"><span class="card-info-label">Distance from ${moon.planet}</span><span class="card-info-value">${moon.distance} km</span></div>
      </div>
      <div class="card-funfact">${moon.funFact}</div>
    `;
    card.addEventListener('click', () => openMoonModal(key));
    grid.appendChild(card);
  });
}
window.createMoonCards = createMoonCards;

function openMoonModal(key) {
  const moon = MOON_DATA[key];
  if (!moon) return;
  const modal = document.getElementById('moonModal');
  if (!modal) return;
  const moonColor = moon.color || '#c0c0c0';
  modal.querySelector('.modal-title').textContent = moon.name;
  modal.querySelector('.modal-desc').textContent = moon.description;
  const tempEl = modal.querySelector('[data-stat="temp"]');
  if (tempEl) tempEl.textContent = moon.temp;
  const radiusEl = modal.querySelector('[data-stat="radius"]');
  if (radiusEl) radiusEl.textContent = `${moon.radius} km`;
  const distanceEl = modal.querySelector('[data-stat="distance"]');
  if (distanceEl) distanceEl.textContent = `${moon.distance} km from ${moon.planet}`;
  const funfactEl = modal.querySelector('.modal-funfact-text');
  if (funfactEl) funfactEl.textContent = moon.funFact;
  const visual = modal.querySelector('.modal-visual');
  if (visual) {
    visual.innerHTML = `<div style="width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, ${lightenColor(moonColor, 30)}, ${moonColor}); box-shadow: 0 0 30px ${moonColor}; margin: 0 auto;"></div>`;
  }
  modal.classList.add('active');
}
window.openMoonModal = openMoonModal;

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  });
});
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
});

document.addEventListener('DOMContentLoaded', () => {
  createMoonCards();
});
