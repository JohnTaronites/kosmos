// Planety - animowany układ słoneczny + karty planet
const PLANET_VISUALS = {
  Sun: { name: 'Sun', size: 50, color: 'Sun', hexColor: '#ffeb3b', orbitRadius: 0, orbitSpeed: 0, temp: '5500°C (powierzchnia)', description: 'Gwiazda w centrum Układu Słonecznego. Zawiera ponad 99.8% masy całego układu!', funFact: 'Co sekundę Sun zamienia 600 milionów ton wodoru w hel przez reakcje fuzji jądrowej!' },
  Mercury: { name: 'Mercury', size: 12, color: 'Mercury', hexColor: '#a0522d', orbitRadius: 70, orbitSpeed: 9, temp: '-173°C do 427°C', description: 'Najbliższa Słońcu planeta. Bardzo mała i gorąca!', funFact: 'Mercury jest tak blisko Słońca, że jego temperatury mogą być bardzo gorące albo bardzo zimne!' },
  Venus: { name: 'Venus', size: 18, color: 'Venus', hexColor: '#e8a64f', orbitRadius: 95, orbitSpeed: 12, temp: '462°C', description: 'Najgorętsza planeta w Układzie Słonecznym! Często mylona z Sunm.', funFact: 'Venus jest tak gorąca, że jej powierzchnia jest pokryta płytkami lawy – jak gorący piec!' },
  Earth: { name: 'Earth', size: 20, color: 'Earth', hexColor: '#3498db', orbitRadius: 120, orbitSpeed: 14, temp: '15°C (średnia)', description: 'Nasza domowa planeta – jedyna znana nam z życiem!', funFact: 'Earth to nasz dom! Ma piękne oceany, góry i lasy, w których mieszkają zwierzęta.' },
  Mars: { name: 'Mars', size: 16, color: 'Mars', hexColor: '#e05533', orbitRadius: 150, orbitSpeed: 11, temp: '-63°C (średnia)', description: 'Czerwona Planeta – pełna kraterów i wulkanów.', funFact: 'Mars jest czerwony dzięki tlenkowi żelaza w piasku. Ma największy wulkan w Układzie Słonecznym – Olympus Mons!' },
  Jupiter: { name: 'Jupiter', size: 38, color: 'Jupiter', hexColor: '#d4a373', orbitRadius: 195, orbitSpeed: 18, temp: '-145°C', description: 'Największa planeta w Układzie Słonecznym. Ma ogromną plamę – Wielką Czerwoną Plamę.', funFact: 'Jupiter jest tak wielki, że zmieściłyby się w nim wszystkie inne planety razem!' },
  Saturn: { name: 'Saturn', size: 32, color: 'Saturn', hexColor: '#f4d03f', orbitRadius: 245, orbitSpeed: 22, hasRings: true, temp: '-178°C', description: 'Znana z pięknych lodowych pierścieni zrobionych z lodu i kamieni.', funFact: 'Pierścienie Saturna są tak delikatne, że mogą zostać rozwiane w ciągu kilku tysięcy lat!' },
  Uranus: { name: 'Uran', size: 26, color: 'Uranus', hexColor: '#85c1e9', orbitRadius: 290, orbitSpeed: 28, temp: '-224°C', description: 'Błękitna planeta – obraca się na bok, jakby spała na boku.', funFact: 'Uran kręci się tak nietypowo, że jego biegun północny jest skierowany prosto na Sun!' },
  Neptune: { name: 'Neptune', size: 24, color: 'Neptune', hexColor: '#5dade2', orbitRadius: 330, orbitSpeed: 34, temp: '-214°C', description: 'Najdalej od Słońca planeta – ma silne wiatry i niebieski odcień.', funFact: 'Neptune ma wiatry szybsze niż samolot – ponad 2000 km/h!' }
};

function lightenColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + (R * 0x10000) + (G * 0x100) + B).toString(16).slice(1);
}

window.createPlanetDots = function() {
  const diagram = document.querySelector('.solar-system-diagram');
  if (!diagram) return;
  Object.entries(PLANET_VISUALS).forEach(([key, planet]) => {
    if (planet.orbitRadius === 0) return; // Skip Sun - no orbit for the star
    const orbitPath = document.createElement('div');
    orbitPath.className = 'orbit-path';
    orbitPath.style.width = (planet.orbitRadius * 2) + 'px';
    orbitPath.style.height = (planet.orbitRadius * 2) + 'px';
    diagram.appendChild(orbitPath);
  });
  const planetOrder = [['Sun',0],['Mercury',1],['Venus',2],['Earth',3],['Mars',4],['Jupiter',5],['Saturn',6],['Uranus',7],['Neptune',8]];
  planetOrder.forEach(([key, index]) => {
    const planet = PLANET_VISUALS[key];
    if (planet.orbitRadius === 0) {
      // Sun - dodaj hover label i click handler do istniejącego elementu .sun
      const sunEl = diagram.querySelector('.sun');
      if (sunEl) {
        const sunLabel = document.createElement('div');
        sunLabel.style.cssText = 'position:absolute;bottom:-28px;left:50%;transform:translateX(-50%);font-size:0.8rem;color:#ffe066;background:rgba(0,0,0,0.6);padding:3px 8px;border-radius:4px;white-space:nowrap;opacity:0;transition:opacity 0.2s;pointer-events:none;z-index:999;';
        sunLabel.textContent = planet.name;
        diagram.appendChild(sunLabel);
        sunEl.style.cursor = 'pointer';
        sunEl.style.position = 'relative';
        sunEl.addEventListener('mouseenter', () => { sunLabel.style.opacity = '1'; });
        sunEl.addEventListener('mouseleave', () => { sunLabel.style.opacity = '0'; });
        sunEl.addEventListener('click', () => openPlanetModal(planet.name));
      }
      return;
    }
    const orbit = document.createElement('div');
    orbit.className = 'planet-orbit';
    orbit.style.setProperty('--orbit-radius', planet.orbitRadius + 'px');
    orbit.style.animationDuration = planet.orbitSpeed + 's';
    orbit.style.animationDelay = (index * 0.5) + 's';
    const dot = document.createElement('div');
    dot.className = 'planet-dot';
    dot.style.width = planet.size + 'px';
    dot.style.height = planet.size + 'px';
    dot.style.background = 'radial-gradient(circle at 30% 30%, ' + lightenColor(planet.hexColor, 30) + ', ' + planet.hexColor + ')';
    dot.style.boxShadow = '0 0 ' + planet.size + 'px ' + planet.hexColor;
    dot.setAttribute('data-name', planet.name);
    dot.style.cursor = 'pointer';
    dot.style.position = 'relative';
    const label = document.createElement('div');
    label.style.cssText = 'position:absolute;top:-22px;left:50%;transform:translateX(-50%);font-size:0.65rem;color:#fff;background:rgba(0,0,0,0.5);padding:2px 4px;border-radius:3px;opacity:0;transition:opacity 0.2s;pointer-events:none;white-space:nowrap;';
    label.textContent = planet.name;
    dot.appendChild(label);
    dot.addEventListener('mouseenter', () => { label.style.opacity = '1'; });
    dot.addEventListener('mouseleave', () => { label.style.opacity = '0'; });
    if (planet.hasRings) {
      const ring = document.createElement('div');
      ring.style.cssText = 'position:absolute;top:50%;left:50%;width:' + (planet.size*3) + 'px;height:' + (planet.size*0.6) + 'px;border:2px solid #e8a64f;border-radius:50%;transform:translate(-50%,-50%) rotateX(75deg);opacity:0.7;pointer-events:none;';
      dot.appendChild(ring);
    }
    dot.addEventListener('click', () => openPlanetModal(planet.name));
    orbit.appendChild(dot);
    diagram.appendChild(orbit);
  });
};

window.openPlanetModal = function(name) {
  const planet = Object.values(PLANET_VISUALS).find(p => p.name === name);
  if (!planet) return;
  const modal = document.getElementById('planetModal');
  if (!modal) return;
  modal.querySelector('.modal-title').textContent = planet.name;
  modal.querySelector('.modal-desc').textContent = planet.description;
  modal.querySelector('[data-stat="temp"]').textContent = planet.temp;
  modal.querySelector('[data-stat="orbit"]').textContent = planet.orbitRadius + ' mln km';
  modal.querySelector('.modal-funfact-text').textContent = planet.funFact;
  const visual = modal.querySelector('.modal-visual');
  if (visual) {
    let html = '<div style="width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 30% 30%, ' + lightenColor(planet.hexColor, 30) + ', ' + planet.hexColor + ');box-shadow:0 0 30px ' + planet.hexColor + ';margin:0 auto;position:relative;">';
    if (planet.hasRings) html += '<div style="position:absolute;top:50%;left:50%;width:120px;height:30px;border:2px solid ' + lightenColor(planet.hexColor, 10) + ';border-radius:50%;transform:translate(-50%,-50%) rotateX(75deg);opacity:0.7;"></div>';
    html += '</div>';
    visual.innerHTML = html;
  }
  modal.classList.add('active');
};

window.createPlanetCards = function() {
  const grid = document.getElementById('planetsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.values(PLANET_VISUALS).forEach(planet => {
    let visual = '<div style="width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 30% 30%, ' + lightenColor(planet.hexColor, 30) + ', ' + planet.hexColor + ');box-shadow:0 0 20px ' + planet.hexColor + ';margin:0 auto;position:relative;">';
    if (planet.hasRings) visual += '<div style="position:absolute;top:50%;left:50%;width:120px;height:30px;border:2px solid #e8a64f;border-radius:50%;transform:translate(-50%,-50%) rotateX(75deg);opacity:0.7;"></div>';
    visual += '</div>';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<div class="card-visual">' + visual + '</div><h3 class="card-title">' + planet.name + '</h3><p class="card-desc">' + planet.description + '</p><div class="card-info"><div class="card-info-item"><span class="card-info-label">Temperatura</span><span class="card-info-value">' + planet.temp + '</span></div><div class="card-info-item"><span class="card-info-label">Odległość</span><span class="card-info-value">' + planet.orbitRadius + ' mln km</span></div></div><div class="card-funfact">' + planet.funFact + '</div>';
    card.addEventListener('click', () => openPlanetModal(planet.name));
    grid.appendChild(card);
  });
};

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  });
});
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
});

document.addEventListener('DOMContentLoaded', () => {
  createPlanetDots();
  createPlanetCards();
});
