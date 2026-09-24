
async function loadMaterials(){
  const res = await fetch('assets/materials.json');
  return res.json();
}

function cardTemplate(item){
  return `<div class="card" data-subject="${item.subject}" data-type="${item.type}">
    <div class="meta">${item.subject} · ${item.type}</div>
    <h4>${item.title}</h4>
    <p>${item.desc}</p>
    <a href="${item.file}" download>Letöltés &darr;</a>
  </div>`;
}

function render(items){
  const results = document.getElementById('results');
  const empty = document.getElementById('empty');
  results.innerHTML = items.map(cardTemplate).join('');
  empty.hidden = items.length !== 0;
}

function buildFilters(items){
  const subjects = [...new Set(items.map(i => i.subject))];
  const filterBar = document.getElementById('filters');
  filterBar.innerHTML = '<span class="chip active" data-subject="all">Összes</span>' +
    subjects.map(s => `<span class="chip" data-subject="${s}">${s}</span>`).join('');
}

loadMaterials().then(items => {
  render(items);
  buildFilters(items);

  let activeSubject = 'all';

  function applyFilters(){
    const q = document.getElementById('search').value.toLowerCase();
    const filtered = items.filter(i => {
      const matchesSubject = activeSubject === 'all' || i.subject === activeSubject;
      const haystack = `${i.title} ${i.subject} ${i.type} ${i.desc}`.toLowerCase();
      return matchesSubject && haystack.includes(q);
    });
    render(filtered);
  }

  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('filters').addEventListener('click', (e) => {
    if(!e.target.classList.contains('chip')) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    activeSubject = e.target.dataset.subject;
    applyFilters();
  });
});
