const vocabulary = [
['acercarse a','to approach'],
['andar','to walk, to move'],
['dar un paseo','to take a walk, stroll'],
['dejar de','to stop (doing something)'],
['escalar','to climb (a rock or mountain)'],
['perderse','to get lost'],
['refugiarse','to take shelter'],
['el bosque','wood, forest'],
['el desierto','desert'],
['hermoso, -a','beautiful'],
['la naturaleza','nature'],
['el paisaje','landscape'],
['el refugio','refuge, shelter'],
['la roca','rock'],
['la sierra','sierra, mountain range'],
['el valle','valley'],
['los binoculares','binoculars'],
['la brújula','compass'],
['la linterna','flashlight'],
['el repelente de insectos','insect repellent'],
['el saco de dormir','sleeping bag'],
['la tienda de acampar','tent'],
['caer granizo','to hail'],
['el granizo','hail'],
['el relámpago','lightning'],
['el trueno','thunder'],
['suceder','to occur'],
['tener lugar','to take place'],
['al amanecer','at dawn'],
['al anochecer','at dusk'],
['al principio','at the beginning'],
['un rato','a while'],
['una vez allí','once there'],
['el entrenamiento','training'],
['entrenarse','to train'],
['hacer un esfuerzo','to make an effort'],
['inscribirse','to register'],
['la inscripción','registration'],
['alcanzar','to reach'],
['la carrera','race'],
['la ceremonia','ceremony'],
['el certificado','certificate, diploma'],
['contra','against'],
['eliminar','to eliminate'],
['la entrega de premios','awards ceremony'],
['¡Felicitaciones!','Congratulations!'],
['la medalla','medal'],
['la meta','goal'],
['obtener','to obtain, get'],
['el / la participante','participant'],
['el / la representante','representative'],
['salir campeón, campeona','to become the champion'],
['el trofeo','trophy'],
['vencer','to beat'],
['animado, -a','excited'],
['asustar','to scare'],
['darse cuenta de','to realize'],
['desafortunadamente','unfortunately'],
['desanimado, -a','discouraged'],
['duro, -a','hard'],
['emocionarse','to be moved'],
['estar orgulloso / orgullosa de','to be proud of'],
['impresionar','to impress'],
['pasarlo bien / mal','to have a good / bad time'],
['aparecer','to appear'],
['así','this way'],
['hacia','toward'],
['perder el equilibrio',"to lose one's balance"],
['sin embargo','however']
];
let position = 0;
let english = false;
const card = document.getElementById('card');
function render() {
  document.getElementById('word').textContent = vocabulary[position][english ? 1 : 0];
  document.getElementById('word').lang = english ? 'en' : 'es';
  document.getElementById('language').textContent = english ? 'English' : 'Español';
  document.getElementById('hint').textContent = english ? 'Click to see Spanish' : 'Click to reveal English';
  document.getElementById('count').textContent = `${position + 1} / ${vocabulary.length}`;
  card.classList.toggle('english', english);
}
function flip() { english = !english; render(); }
function move(delta) { position = (position + delta + vocabulary.length) % vocabulary.length; english = false; render(); }
card.addEventListener('click', flip);
document.getElementById('back').addEventListener('click', () => move(-1));
document.getElementById('next').addEventListener('click', () => move(1));
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  if (event.code === 'Space' && event.target === document.body) { event.preventDefault(); flip(); }
});
render();
