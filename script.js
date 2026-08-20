// ===========================================================
// RENDER — builds DOM from SITE_DATA (see data.js)
// ===========================================================

function renderCertifications(){
  const grid = document.getElementById('certGrid');
  grid.innerHTML = SITE_DATA.certifications.map(c => `
    <div class="cert-card">
      <div class="cert-top">
        <span class="cert-id">${c.id}</span>
        <span class="pill ${c.status === 'verified' ? 'verified' : 'progress'}">${c.status === 'verified' ? 'VERIFIED' : 'IN PROGRESS'}</span>
      </div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-year">${c.year}</div>
    </div>
  `).join('');
}

function renderFindings(){
  const grid = document.getElementById('findGrid');
  const filterRow = document.getElementById('filterRow');

  const cats = Array.from(new Set(SITE_DATA.findings.map(f => f.category)));
  const labels = SITE_DATA.categoryLabels || {};

  filterRow.innerHTML = `<button class="filter-btn active" data-filter="all">All</button>` +
    cats.map(c => `<button class="filter-btn" data-filter="${c}">${labels[c] || c}</button>`).join('');

  grid.innerHTML = SITE_DATA.findings.map(f => `
    <div class="find-card" data-cat="${f.category}">
      <div class="find-top"><span>${f.id}</span><span>${f.year}</span></div>
      <div class="find-title">${f.link && f.link !== '#' ? `<a href="${f.link}" target="_blank" rel="noopener">${f.title}</a>` : f.title}</div>
      <div class="find-desc">${f.desc}</div>
      <div class="tag-row">${f.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');

  filterRow.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      grid.querySelectorAll('.find-card').forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      });
    });
  });
}

function renderTools(){
  const grid = document.getElementById('toolGrid');
  grid.innerHTML = SITE_DATA.tools.map(t => `
    <div class="tool-card">
      <div class="tool-icon">${t.icon}</div>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <a class="tool-link" href="${t.link}" target="_blank" rel="noopener">View repo →</a>
    </div>
  `).join('');
}

function renderTimeline(){
  const list = document.getElementById('timelineList');
  list.innerHTML = SITE_DATA.timeline.map(t => `
    <div class="t-item">
      <div class="t-date">${t.date}</div>
      <div class="t-role">${t.role}</div>
      <div class="t-desc">${t.desc}</div>
    </div>
  `).join('');
}

// ===========================================================
// TERMINAL TYPING EFFECT
// ===========================================================
function runTerminal(){
  const body = document.getElementById('termBody');
  const lines = SITE_DATA.terminalLines || [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(reduceMotion){
    body.innerHTML = lines.map(renderStaticLine).join('\n');
    return;
  }

  let li = 0;
  function typeLine(){
    if(li >= lines.length){
      const cur = document.createElement('span');
      cur.className = 'cursor';
      body.appendChild(cur);
      return;
    }
    const line = lines[li];
    const prefix = line.type === 'cmd' ? '$ ' : '';
    const span = document.createElement('div');
    if(line.type === 'cmd') span.innerHTML = '<span class="prompt"></span>';
    else if(line.type === 'ok') span.className = 'ok';
    else span.className = 'out';
    body.appendChild(span);

    const full = prefix + line.text;
    let ci = 0;
    const speed = line.type === 'cmd' ? 38 : 12;
    (function typeChar(){
      if(ci <= full.length){
        span.textContent = full.slice(0, ci);
        ci++;
        setTimeout(typeChar, speed);
      } else {
        li++;
        setTimeout(typeLine, line.type === 'cmd' ? 200 : 380);
      }
    })();
  }
  typeLine();
}

function renderStaticLine(line){
  const prefix = line.type === 'cmd' ? '$ ' : '';
  return prefix + line.text;
}

// ===========================================================
// SCROLL REVEAL
// ===========================================================
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ===========================================================
// MOBILE NAV
// ===========================================================
function initNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => links.classList.toggle('open'));
  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ===========================================================
// CONTACT FORM (Formspree)
// ===========================================================
function initForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const actionUrl = form.getAttribute('action');

    if(!actionUrl || actionUrl.includes('YOUR_FORM_ID')){
      status.textContent = 'Form not connected yet — set your Formspree endpoint in index.html.';
      status.className = 'form-status mono error';
      return;
    }

    status.textContent = 'Sending...';
    status.className = 'form-status mono';

    try{
      const res = await fetch(actionUrl, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if(res.ok){
        status.textContent = 'Message sent — thanks, I\'ll get back to you soon.';
        status.className = 'form-status mono success';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Try emailing directly instead.';
        status.className = 'form-status mono error';
      }
    } catch(err){
      status.textContent = 'Network error. Try emailing directly instead.';
      status.className = 'form-status mono error';
    }
  });
}

// ===========================================================
// INIT
// ===========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCertifications();
  renderFindings();
  renderTools();
  renderTimeline();
  runTerminal();
  initReveal();
  initNav();
  initForm();
});
