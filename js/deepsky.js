// Dalekie obiekty - dane i wizualizacje
const DEEPSKY_DATA = [
  { id: 'pluto', name: 'Pluto', type: 'dwarf', description: 'Najbardziej znana planeta karlowata w pasie Kuipera.', temp: '-230C', distance: '5.9 mld km', funFact: 'Pluton ma serce! Lodowy obszar w ksztalcie serca nazywany Tombaugh Regio.', color: '#b0a090' },
  { id: 'eris', name: 'Eris', type: 'dwarf', description: 'Nieco wieksza niz Pluton, odkryta w 2005 roku.', temp: '-240C', distance: '10.1 mld km', funFact: 'Odkrycie Erisa doprowadzilo do ponownej klasyfikacji Plutona.', color: '#d8d8e0' },
  { id: 'ceres', name: 'Ceres', type: 'dwarf', description: 'Najwiekszy obiekt w pasie asteroid.', temp: '-106C', distance: '414 mln km', funFact: 'Ceres moze miec podpowierzchniowy ocean wody!', color: '#8a8580' },
  { id: 'makemake', name: 'Makemake', type: 'dwarf', description: 'Planeta karlowata w pasie Kuipera, odkryta w 2005 r.', temp: '-240C', distance: '6.8 mld km', funFact: 'Makemake nie ma atmosfery – jest pokryta lodem metanowym!', color: '#c8a878' },
  { id: 'haumea', name: 'Haumea', type: 'dwarf', description: 'Planeta karlowata o dziwnym ksztalcie jajowatym.', temp: '-240C', distance: '6.5 mld km', funFact: 'Haumea kreci sie tak szybko, ze wyciagnela sie wzdluz rownika!', color: '#e0d4c0' },
  { id: 'andromeda', name: 'Andromeda Galaxy', type: 'galaxy', description: 'Najblizsza spiralna galaktyka – widoczna golym okiem.', temp: '-20C', distance: '2.5 mln lat swietlnych', funFact: 'Andromeda zbliza sie do nas – za 4.5 mld lat polacza sie z Mleczna Droga!', color: '#9b59b6' },
  { id: 'ton618', name: 'TON 618', type: 'blackhole', description: 'Jedna z najwiekszych znanych supermasywnych czarnych dziur – kwazar.', temp: 'miliony C', distance: '10.4 mld lat swietlnych', funFact: 'Masa TON 618 to ok. 66 miliard mas Slonca – jeden z najciezszych obiektow!', color: '#e74c3c' },
  { id: 'orion_const', name: 'Orion (Wielki Wedrowiec)', type: 'constellation', description: 'Jedna z najbardziej rozpoznawalnych konstelacji – widoczna zima.', temp: '---', distance: 'Gwiazdy: 243-1360 lat sw.', funFact: 'Pas Oriona to jedno z najlatwiejszych do znalezienia ksztaltow na niebie!', stars: [{name:'Betelgeuse',x:35,y:30,size:10,color:'#ff6b6b'},{name:'Bellatrix',x:65,y:25,size:6,color:'#8ecae6'},{name:'Rigel',x:75,y:75,size:10,color:'#8ecae6'},{name:'Saiph',x:45,y:80,size:6,color:'#8ecae6'},{name:'Alnitak',x:42,y:52,size:7,color:'#8ecae6'},{name:'Alnilam',x:50,y:52,size:7,color:'#8ecae6'},{name:'Mintaka',x:58,y:52,size:7,color:'#8ecae6'}], lines:[[0,2],[0,1],[2,3],[3,0],[0,4],[1,4],[4,5],[5,6]] },
  { id: 'ursa_major_const', name: 'Ursa Major (Wielka Niedzwiedzica)', type: 'constellation', description: 'Znana z "Wielkiego Wozu" – sluzy do znajdowania Biegunowki.', temp: '---', distance: 'Gwiazdy: 78-124 lat sw.', funFact: 'Dwie gwiazdy na koncu wozu wskazuja na Polaris – Gwiazde Polnocna!', stars: [{name:'Dubhe',x:25,y:55,size:8,color:'#fff4b8'},{name:'Merak',x:35,y:70,size:7,color:'#fff4b8'},{name:'Phecda',x:45,y:65,size:7,color:'#fff4b8'},{name:'Megrez',x:55,y:55,size:6,color:'#fff4b8'},{name:'Alioth',x:65,y:45,size:7,color:'#fff4b8'},{name:'Mizar',x:75,y:38,size:8,color:'#fff4b8'},{name:'Alkaid',x:85,y:30,size:7,color:'#fff4b8'}], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  { id: 'cassiopeia_const', name: 'Cassiopeia (Kasjopeja)', type: 'constellation', description: 'Charakterystyczne "W" na polnocnym niebie – kraglorodzinie widoczna.', temp: '---', distance: 'Gwiazdy: 54-613 lat sw.', funFact: 'Kasjopeja to krolowa w mitologii – jej tron jest zamkniety w wiecznym kregu!', stars: [{name:'Schedar',x:20,y:45,size:8,color:'#ffd3b6'},{name:'Caph',x:40,y:30,size:7,color:'#ffd3b6'},{name:'Gamma Cas',x:55,y:45,size:7,color:'#ffd3b6'},{name:'Ruchbah',x:70,y:30,size:7,color:'#ffd3b6'},{name:'Segin',x:85,y:45,size:6,color:'#ffd3b6'}], lines:[[0,1],[1,2],[2,3],[3,4]] },
  { id: 'scorpius_const', name: 'Scorpius (Skorpion)', type: 'constellation', description: 'Pieknna, wyrazna konstelacja letnia – przypomina skorpiona.', temp: '---', distance: 'Gwiazdy: 10-600 lat sw.', funFact: 'Antares – "Rival Marsa" – to czerwona olbrzymia gwiazda w sercu Skorpiona!', stars: [{name:'Antares',x:50,y:55,size:10,color:'#ff6b6b'},{name:'Graffias',x:35,y:35,size:7,color:'#8ecae6'},{name:'Dschubba',x:40,y:45,size:6,color:'#8ecae6'},{name:'Sargas',x:65,y:40,size:7,color:'#8ecae6'},{name:'Shaula',x:80,y:70,size:7,color:'#8ecae6'},{name:'Lesath',x:85,y:78,size:6,color:'#8ecae6'}], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,2]] }
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
  const stars = obj.stars;
  const lines = obj.lines;
  const width = 320, height = 240;
  const margin = 20; // margines wewnętrzny
  // Znajdź min i max współrzędnych
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  stars.forEach(s => {
    if (s.x < minX) minX = s.x;
    if (s.x > maxX) maxX = s.x;
    if (s.y < minY) minY = s.y;
    if (s.y > maxY) maxY = s.y;
  });
  // Jeśli brak zakresu, użyj domyślnego
  if (minX === Infinity) { minX = 0; maxX = 100; }
  if (minY === Infinity) { minY = 0; maxY = 100; }
  const rangeX = maxX - minX || 100;
  const rangeY = maxY - minY || 100;
  // Skala z zachowaniem proporcji i marginesem
  const scale = Math.min(
    (width - 2 * margin) / rangeX,
    (height - 2 * margin) / rangeY
  );
  const offsetX = (width - rangeX * scale) / 2;
  const offsetY = (height - rangeY * scale) / 2;
  // Funkcja transformująca
  const tx = (x) => offsetX + (x - minX) * scale;
  const ty = (y) => offsetY + (y - minY) * scale;

  let svg = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" style="filter:drop-shadow(0 0 20px rgba(255,255,255,0.3));">';
  // Linie między gwiazdami
  for (let i = 0; i < lines.length; i++) {
    const s1 = stars[lines[i][0]], s2 = stars[lines[i][1]];
    if (s1 && s2) {
      svg += '<line x1="' + tx(s1.x) + '" y1="' + ty(s1.y) + '" x2="' + tx(s2.x) + '" y2="' + ty(s2.y) + '" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round"/>';
    }
  }
  // Gwiazdy
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    const x = tx(s.x), y = ty(s.y);
    const r = s.size * 0.8; // mniejsze gwiazdy
    svg += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + s.color + '" filter="url(#starGlow)"/>';
    svg += '<text x="' + x + '" y="' + (y - r - 8) + '" fill="rgba(255,255,255,0.9)" font-size="9" text-anchor="middle" font-family="Comfortaa,cursive">' + s.name + '</text>';
  }
  svg += '<defs><filter id="starGlow"><feGaussianBlur stdDeviation="1.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>';
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
      card.style.cssText = 'min-height:450px;display:flex;flex-direction:column;align-items:center;';
      card.innerHTML = '<div class="card-visual constellation-visual" style="width:100%;max-width:450px;height:320px;margin-bottom:1rem;">' + createConstellationSVG(obj) + '</div><h3 class="card-title">' + obj.name + '</h3><p class="card-desc">' + obj.description + '</p><div class="card-info"><div class="card-info-item"><span class="card-info-label">Stars</span><span class="card-info-value">' + obj.stars.length + '</span></div><div class="card-info-item"><span class="card-info-label">Distance</span><span class="card-info-value">' + obj.distance + '</span></div></div><div class="card-funfact">' + obj.funFact + '</div>';
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