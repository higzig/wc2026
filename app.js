import { players, gameWeeks } from './data.js';

// ── FLAGS ────────────────────────────────────────────────────
const FLAGS = {
  "Brazil":"🇧🇷","Morocco":"🇲🇦","Germany":"🇩🇪","Curaçao":"🇨🇼","Netherlands":"🇳🇱",
  "Japan":"🇯🇵","Spain":"🇪🇸","Cabo Verde":"🇨🇻","Belgium":"🇧🇪","Egypt":"🇪🇬",
  "France":"🇫🇷","Senegal":"🇸🇳","Iraq":"🇮🇶","Norway":"🇳🇴","Argentina":"🇦🇷",
  "Algeria":"🇩🇿","Portugal":"🇵🇹","Congo DR":"🇨🇩","England":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croatia":"🇭🇷",
  "Colombia":"🇨🇴","Uzbekistan":"🇺🇿","Haiti":"🇭🇹","Scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","Sweden":"🇸🇪",
  "Côte d'Ivoire":"🇨🇮","Saudi Arabia":"🇸🇦","IR Iran":"🇮🇷","Austria":"🇦🇹",
  "Ghana":"🇬🇭","Panama":"🇵🇦","Tunisia":"🇹🇳","Ecuador":"🇪🇨","Uruguay":"🇺🇾",
  "New Zealand":"🇳🇿","Jordan":"🇯🇴",
};

const JERSEY = `<svg class="jersey-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L6 5L3 8L6 10V20H18V10L21 8L18 5L15 3C15 3 14 5 12 5C10 5 9 3 9 3Z" fill="currentColor" fill-opacity="0.6"/></svg>`;
const BALL = `<span class="tag-flag scorer-icon">⚽</span>`;

// ── STANDINGS ────────────────────────────────────────────────
function renderStandings() {
  const ranked = [...players].sort((a, b) => {
    const ptsDiff = (b.tp + b.sp) - (a.tp + a.sp);
    if (ptsDiff !== 0) return ptsDiff;
    return b.gd - a.gd;
  });

  const rowClasses = ['rank1','rank2','rank3'];

  return ranked.map((p, i) => {
    const pos = i + 1;
    const pts = p.tp + p.sp;
    const change = p.gwOnePos - pos;
    const arrowHTML = change > 0
      ? `<span class="pos-arrow up">↑${change}</span>`
      : change < 0
        ? `<span class="pos-arrow down">↓${Math.abs(change)}</span>`
        : `<span class="pos-arrow same">–</span>`;

    const cls = pos <= 3 ? `row rank${pos}` : pos === 12 ? 'row last-row' : 'row';
    const accent = (pos <= 3 || pos === 12) ? '<div class="accent-bar"></div>' : '';
    const spCls = p.sp === 0 ? ' zero' : '';
    const gdCls = p.gd > 0 ? 'pos' : p.gd < 0 ? 'neg' : 'zero';
    const totalCls = pts === 0 ? ' zero' : '';

    return `
    <div class="${cls}">
      ${accent}
      <div class="pos-num">${pos}${arrowHTML}</div>
      <div class="player-block"><div class="player-text">
        <div class="pname">${p.name}</div>
        <div class="psub">${p.country} · ${p.scorer}</div>
      </div></div>
      <div class="cg-val">${p.cg}</div>
      <div class="sg-val">${p.sg}</div>
      <div class="tp-val">${p.tp}</div>
      <div class="sp-val${spCls}">${p.sp}</div>
      <div class="gd-val ${gdCls}">${p.gd >= 0 ? '+' : ''}${p.gd}</div>
      <div class="total-val${totalCls}">${pts}</div>
    </div>`;
  }).join('');
}

// ── SCORE BOX ────────────────────────────────────────────────
function scoreBox(score) {
  if (!score) return `<div class="score-box vs"><span class="score-sep">V</span></div>`;
  const [h, a] = score.split('-').map(Number);
  const hc = h > a ? ' winner' : h < a ? ' loser' : '';
  const ac = a > h ? ' winner' : a < h ? ' loser' : '';
  return `<div class="score-box"><span class="score-num${hc}">${h}</span><span class="score-sep">-</span><span class="score-num${ac}">${a}</span></div>`;
}

// ── COUNTRY PILL ─────────────────────────────────────────────
function countryPill(player, country, score, side) {
  let pts, cls;
  if (!score) {
    pts = '–'; cls = 'pending';
  } else {
    const [h, a] = score.split('-').map(Number);
    const diff = side === 'left' ? h - a : a - h;
    if (diff > 0)      { pts = '+3 pts'; cls = 'win'; }
    else if (diff === 0){ pts = '+1 pt';  cls = 'draw'; }
    else               { pts = '+0 pts'; cls = 'loss'; }
  }
  return `<span class="side-player">${JERSEY}${player} - ${country}<span class="sp-pts ${cls}">${pts}</span></span>`;
}

// ── SCORER PILL ──────────────────────────────────────────────
function scorerPill(player, scorer, goals) {
  if (goals === null) {
    return `<span class="player-tag no-score">${BALL}${player} - ${scorer}<span class="gls-badge pending">–</span></span>`;
  } else if (goals === 0) {
    return `<span class="player-tag no-score">${BALL}${player} - ${scorer}<span class="gls-badge zero">+0 Gls</span></span>`;
  } else {
    const label = `+${goals} Gl${goals !== 1 ? 's' : ''}`;
    return `<span class="player-tag">${BALL}${player} - ${scorer}<span class="gls-badge">${label}</span></span>`;
  }
}

// ── MATCH ROW ────────────────────────────────────────────────
function renderMatch(match) {
  const hf = FLAGS[match.home] || '🏳️';
  const af = FLAGS[match.away] || '🏳️';

  const leftPlayers = match.leftPills.map(p => {
    const cpill = countryPill(p.player, match.home, match.score, 'left');
    const spill = p.scorerPlayer ? scorerPill(p.scorerPlayer, p.scorer, p.goals) : '';
    return cpill + spill;
  }).join('');

  const rightPlayers = match.rightPills.map(p => {
    const cpill = countryPill(p.player, match.away, match.score, 'right');
    const spill = p.scorerPlayer ? scorerPill(p.scorerPlayer, p.scorer, p.goals) : '';
    return cpill + spill;
  }).join('');

  const standalonePills = match.scorerPills.map(p => scorerPill(p.player, p.scorer, p.goals)).join('');

  const lBlock = leftPlayers ? `<div class="side-players">${leftPlayers}</div>` : '';
  const rBlock = rightPlayers ? `<div class="side-players">${rightPlayers}</div>` : '';
  const pillRow = standalonePills ? `\n        <div class="player-tags">${standalonePills}</div>` : '';

  return `
      <div class="match-row">
        <div class="match-row-meta">${match.time}</div>
        <div class="scoreboard">
          <div class="side"><span class="side-flag">${hf}</span><div class="side-text"><span class="side-name">${match.home}</span>${lBlock}</div></div>
          ${scoreBox(match.score)}
          <div class="side right"><div class="side-text"><span class="side-name">${match.away}</span>${rBlock}</div><span class="side-flag">${af}</span></div>
        </div>${pillRow}
      </div>`;
}

// ── GAME WEEKS ───────────────────────────────────────────────
function renderGameWeeks() {
  return gameWeeks.map(gw => {
    const nowBadge = gw.status === 'current'
      ? `<span class="now-badge">NOW</span>` : '';
    const matches = gw.matches.map(renderMatch).join('');
    return `
    <div class="gw-stage ${gw.stage}${gw.status === 'past' ? ' past' : gw.status === 'current' ? ' current' : ''}">
    <div class="gw-card ${gw.card}">
      <div class="gw-head"><div class="gw-title">${nowBadge}${gw.label}</div></div>
      ${matches}
    </div>
    </div>`;
  }).join('');
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('standings-rows').innerHTML = renderStandings();
  document.getElementById('gw-section').innerHTML = renderGameWeeks();

  // Animations
  const rows = document.querySelectorAll('.row');
  rows.forEach((row, i) => { row.style.transitionDelay = `${i * 60}ms`; });

  document.querySelectorAll('.card, .gw-stage, .legend-bar').forEach(el => el.classList.add('fade-up'));
  document.querySelectorAll('.gw-title').forEach(el => el.classList.add('slide-in-left'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up, .slide-in-left, .row').forEach(el => observer.observe(el));

  document.querySelectorAll('.gw-card').forEach(card => {
    card.querySelectorAll('.match-row').forEach((row, i) => {
      row.classList.add('fade-up');
      row.style.transitionDelay = `${i * 50}ms`;
      observer.observe(row);
    });
  });
});
