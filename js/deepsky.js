// Dalekie obiekty - dane i wizualizacje
const DEEPSKY_DATA = [
  { id: 'pluto', name: 'Pluto', type: 'dwarf', description: 'Najbardziej znana planeta karlowata w pasie Kuipera.', temp: '-230C', distance: '5.9 mld km', funFact: 'Pluton ma serce! Lodowy obszar w ksztalcie serca nazywany Tombaugh Regio.', color: '#b0a090' },
  { id: 'eris', name: 'Eris', type: 'dwarf', description: 'Nieco wieksza niz Pluton, odkryta w 2005 roku.', temp: '-240C', distance: '10.1 mld km', funFact: 'Odkrycie Erisa doprowadzilo do ponownej klasyfikacji Plutona.', color: '#d8d8e0' },
  { id: 'ceres', name: 'Ceres', type: 'dwarf', description: 'Najwiekszy obiekt w pasie asteroid.', temp: '-106C', distance: '414 mln km', funFact: 'Ceres moze miec podpowierzchniowy ocean wody!', color: '#8a8580' },
  { id: 'makemake', name: 'Makemake', type: 'dwarf', description: 'Planeta karlowata w pasie Kuipera, odkryta w 2005 r.', temp: '-240C', distance: '6.8 mld km', funFact: 'Makemake nie ma atmosfery – jest pokryta lodem metanowym!', color: '#c8a878' },
  { id: 'haumea', name: 'Haumea', type: 'dwarf', description: 'Planeta karlowata o dziwnym ksztalcie jajowatym.', temp: '-240C', distance: '6.5 mld km', funFact: 'Haumea kreci sie tak szybko, ze wyciagnela sie wzdluz rownika!', color: '#e0d4c0' },
  { id: 'andromeda', name: 'Andromeda Galaxy', type: 'galaxy', description: 'Najblizsza spiralna galaktyka – widoczna golym okiem.', temp: '-20C', distance: '2.5 mln lat swietlnych', funFact: 'Andromeda zbliza sie do nas – za 4.5 mld lat polacza sie z Mleczna Droga!', color: '#9b59b6' },
  { id: 'ton618', name: 'TON 618', type: 'blackhole', description: 'Jedna z najwiekszych znanych supermasywnych czarnych dziur – kwazar.', temp: 'miliony C', distance: '10.4 mld lat swietlnych', funFact: 'Masa TON 618 to ok. 66 miliard mas Slonca – jeden z najciezszych obiektow!', color: '#e74c3c' },
  { id: 'orion_const', name: 'Orion (Wielki Wędrowiec)', type: 'constellation', description: 'Jedna z najbardziej rozpoznawalnych konstelacji zimowego nieba.', temp: '---', distance: 'Gwiazdy: ok. 250–2000 lat św.', funFact: 'Trzy gwiazdy w jednej linii tworzą Pas Oriona — jeden z najłatwiejszych do rozpoznania układów gwiazd.', stars: [{name:'Betelgeuse', x:18, y:20, size:10, color:'#ff6b6b', labelDx:-2, labelDy:-12},{name:'Bellatrix', x:82, y:22, size:7, color:'#8ecae6', labelDx:2, labelDy:-12},{name:'Alnitak', x:38, y:47, size:7, color:'#8ecae6', labelDx:-10, labelDy:-12},{name:'Alnilam', x:50, y:49, size:7, color:'#8ecae6', labelDx:0, labelDy:16},{name:'Mintaka', x:62, y:51, size:7, color:'#8ecae6', labelDx:10, labelDy:16},{name:'Saiph', x:25, y:82, size:7, color:'#8ecae6', labelDx:-3, labelDy:18},{name:'Rigel', x:76, y:80, size:10, color:'#8ecae6', labelDx:4, labelDy:18}], lines:[[0,1],[1,6],[6,5],[5,0],[0,2],[2,3],[3,4],[4,1],[2,5],[4,6]] },
  { id: 'ursa_major_const', name: 'Ursa Major (Wielka Niedźwiedzica)', type: 'constellation', description: 'Wielka Niedźwiedzica jest jedną z najbardziej charakterystycznych konstelacji północnego nieba.', temp: '---', distance: 'Gwiazdy: ok. 78–124 lat św.', funFact: 'Siedem jasnych gwiazd tworzy Wielki Wóz. Linia Merak–Dubhe pomaga odnaleźć Gwiazdę Polarną.', stars: [{name:'Dubhe', x:22, y:28, size:8, color:'#fff4b8', labelDx:-2, labelDy:-13},{name:'Merak', x:22, y:62, size:7, color:'#fff4b8', labelDx:-2, labelDy:18},{name:'Phecda', x:48, y:62, size:7, color:'#fff4b8', labelDx:0, labelDy:18},{name:'Megrez', x:48, y:28, size:6, color:'#fff4b8', labelDx:0, labelDy:-13},{name:'Alioth', x:70, y:30, size:8, color:'#fff4b8', labelDx:0, labelDy:-13},{name:'Mizar', x:87, y:45, size:8, color:'#fff4b8', labelDx:0, labelDy:-13},{name:'Alkaid', x:104, y:65, size:8, color:'#fff4b8', labelDx:0, labelDy:18}], lines:[[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]] },
  { id: 'cassiopeia_const', name: 'Cassiopeia (Kasjopeja)', type: 'constellation', description: 'Charakterystyczne W widoczne na północnym niebie.', temp: '---', distance: 'Gwiazdy: ok. 54–613 lat św.', funFact: 'Kasjopeja jest jednym z najłatwiejszych do rozpoznania układów gwiazd północnego nieba.', stars: [{name:'Schedar', x:15, y:55, size:8, color:'#ffd3b6', labelDx:-2, labelDy:18},{name:'Caph', x:35, y:25, size:7, color:'#ffd3b6', labelDx:0, labelDy:-13},{name:'Gamma Cas', x:55, y:55, size:8, color:'#ffd3b6', labelDx:0, labelDy:18},{name:'Ruchbah', x:75, y:25, size:7, color:'#ffd3b6', labelDx:0, labelDy:-13},{name:'Segin', x:98, y:55, size:6, color:'#ffd3b6', labelDx:-2, labelDy:18}], lines:[[0,1],[1,2],[2,3],[3,4]] },
  { id: 'scorpius_const', name: 'Scorpius (Skorpion)', type: 'constellation', description: 'Wyrazista konstelacja letniego nieba przypominająca skorpiona z zakrzywionym ogonem.', temp: '---', distance: 'Gwiazdy: ok. 80–600 lat św.', funFact: 'Antares jest czerwoną nadolbrzymią gwiazdą i swoim kolorem przypomina Marsa.', stars: [{name:'Graffias', x:18, y:25, size:7, color:'#8ecae6', labelDx:-5, labelDy:-13},{name:'Dschubba', x:28, y:40, size:7, color:'#8ecae6', labelDx:0, labelDy:-13},{name:'Antares', x:45, y:54, size:11, color:'#ff6b6b', labelDx:0, labelDy:18},{name:'Sargas', x:66, y:48, size:8, color:'#fff4b8', labelDx:0, labelDy:-13},{name:'Shaula', x:88, y:66, size:8, color:'#8ecae6', labelDx:-2, labelDy:18},{name:'Lesath', x:96, y:78, size:7, color:'#8ecae6', labelDx:2, labelDy:18}], lines:[[0,1],[1,2],[2,3],[3,4],[4,5]] }
];
window.deepskyData = DEEPSKY_DATA;



function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + (R * 0x10000) + (G * 0x100) + B).toString(16).slice(1);
}
function getVisualHTML(obj) {
  const objColor = obj.color || '#95a5a6';
  if (obj.type === 'dwarf') return '<div style="width:60px;height:60px;border-radius:50%;background:radial-gradient(circle at 30% 30%, ' + lightenColor(objColor, 30) + ', ' + objColor + ');box-shadow:0 0 20px ' + objColor + ';margin:0 auto;display:block;"></div>';
  if (obj.type === 'galaxy') return '<svg style="display:block; margin:0 auto;" width="80" height="80" viewBox="0 0 80 80"><path d="M40,20 Q30,10 40,0 T40,20 Q50,30 40,40 T40,20 Q30,50 40,60 T40,20 Q50,70 40,80 T40,20 Q70,90 80,100" stroke="' + lightenColor(objColor, 20) + '" stroke-width="3" fill="none" opacity="0.7"/></svg>';
  if (obj.type === 'blackhole') return '<div style="position:relative;width:80px;height:80px;margin:0 auto;display:block;"><div style="width:40px;height:40px;background:#000;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"></div><div style="width:70px;height:70px;border:2px dashed ' + lightenColor(objColor, 30) + ';border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotateX(75deg);animation:accretionSpin 3s linear infinite;"></div></div>';
  if (obj.type === 'constellation') return '<div style="width:100px;height:100px;border-radius:50%;background:radial-gradient(circle at 30% 30%, ' + lightenColor(objColor, 30) + ', ' + objColor + ');box-shadow:0 0 20px ' + objColor + ';margin:0 auto;display:block;"></div>';
  return '<div style="width:60px;height:60px;border-radius:50%;background:' + objColor + ';margin:0 auto;display:block;"></div>';
}

function createConstellationSVG(obj) {
  const width = 480;
  const height = 320;

  const stars = obj.stars;
  const lines = obj.lines;

  let svg = `
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 120 80"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="${obj.name}"
    >
  `;

  // Linie
  lines.forEach(([a, b]) => {
    const s1 = stars[a];
    const s2 = stars[b];

    if (!s1 || !s2) return;

    svg += `
      <line
        x1="${s1.x}"
        y1="${s1.y}"
        x2="${s2.x}"
        y2="${s2.y}"
        stroke="rgba(220,230,255,0.58)"
        stroke-width="0.55"
        stroke-linecap="round"
      />
    `;
  });

  // Gwiazdy
  stars.forEach((s) => {
    const labelDx = s.labelDx || 0;
    const labelDy = s.labelDy || -8;

    svg += `
      <circle
        cx="${s.x}"
        cy="${s.y}"
        r="${Math.max(1.2, s.size * 0.18)}"
        fill="${s.color}"
        class="constellation-star"
      />

      <circle
        cx="${s.x}"
        cy="${s.y}"
        r="${Math.max(2, s.size * 0.35)}"
        fill="${s.color}"
        opacity="0.15"
      />

      <text
        x="${s.x + labelDx}"
        y="${s.y + labelDy}"
        fill="rgba(255,255,255,0.92)"
        font-size="2.8"
        text-anchor="middle"
        font-family="Comfortaa, sans-serif"
      >${s.name}</text>
    `;
  });

  svg += `
      </svg>
  `;

  return svg;
}


function createDeepSkyCards() {
  var grid = document.getElementById('deepskyGrid');
  if (!grid) return;
  grid.innerHTML = '';
  DEEPSKY_DATA.forEach(function(obj) {
    if (obj.type === 'constellation') return;
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '<div class="card-visual">' + getVisualHTML(obj) + '</div><h3 class="card-title">' + obj.name + '</h3><p class="card-desc">' + obj.description + '</p><div class="card-info"><div class="card-info-item"><span class="card-info-label">Temperature</span><span class="card-info-value">' + obj.temp + '</span></div><div class="card-info-item"><span class="card-info-label">Distance</span><span class="card-info-value">' + obj.distance + '</span></div></div><div class="card-funfact">' + obj.funFact + '</div>';
    card.addEventListener('click', function() { openDeepSkyModal(obj.id); });
    grid.appendChild(card);
  });
  var constContainer = document.getElementById('constellationsContainer');
  if (constContainer) {
    constContainer.innerHTML = '';
    DEEPSKY_DATA.filter(function(obj) { return obj.type === 'constellation'; }).forEach(function(obj) {
      var card = document.createElement('div');
      card.className = 'card constellation-card';

      card.innerHTML = '<div class="card-visual constellation-visual">' + createConstellationSVG(obj) + '</div><h3 class="card-title">' + obj.name + '</h3><p class="card-desc">' + obj.description + '</p><div class="card-info"><div class="card-info-item"><span class="card-info-label">Stars</span><span class="card-info-value">' + obj.stars.length + '</span></div><div class="card-info-item"><span class="card-info-label">Distance</span><span class="card-info-value">' + obj.distance + '</span></div></div><div class="card-funfact">' + obj.funFact + '</div>';
      card.addEventListener('click', function() { openDeepSkyModal(obj.id); });
      constContainer.appendChild(card);
    });
  }
}
window.createDeepSkyCards = createDeepSkyCards;

function openDeepSkyModal(id) {
  var obj = DEEPSKY_DATA.find(function(o) { return o.id === id; });
  if (!obj) return;
  var modal = document.getElementById('deepskyModal');
  if (!modal) return;
  modal.querySelector('.modal-title').textContent = obj.name;
  modal.querySelector('.modal-desc').textContent = obj.description;
  var tempEl = modal.querySelector('[data-stat="temp"]');
  if (tempEl) tempEl.textContent = obj.temp;
  var distEl = modal.querySelector('[data-stat="distance"]');
  if (distEl) distEl.textContent = obj.distance;
  var funfactEl = modal.querySelector('.modal-funfact-text');
  if (funfactEl) funfactEl.textContent = obj.funFact;
  var visual = modal.querySelector('.modal-visual');
  if (visual) {
    if (obj.type === 'constellation') {
      visual.innerHTML = '<div style="width:100%;max-width:500px;height:350px;margin:0 auto;">' + createConstellationSVG(obj) + '</div>';
    } else {
      visual.innerHTML = '<div style="width:120px;height:120px;margin:0 auto;">' + getVisualHTML(obj) + '</div>';
    }
  }
  modal.classList.add('active');
}
window.openDeepSkyModal = openDeepSkyModal;

document.querySelectorAll('.modal-close').forEach(function(btn) { btn.addEventListener('click', function() { document.querySelectorAll('.modal-overlay').forEach(function(m) { m.classList.remove('active'); }); }); });
document.querySelectorAll('.modal-overlay').forEach(function(modal) { modal.addEventListener('click', function(e) { if (e.target === modal) modal.classList.remove('active'); }); });

document.addEventListener('DOMContentLoaded', function() { createDeepSkyCards(); });

var animStyle = document.createElement('style');
animStyle.textContent = '@keyframes accretionSpin { from { transform: translate(-50%,-50%) rotateX(75deg) rotate(0deg); } to { transform: translate(-50%,-50%) rotateX(75deg) rotate(360deg); } }';
document.head.appendChild(animStyle);
window.dsLighten = lightenColor;