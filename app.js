// ── State ──
let cookies = [];
let countdownTimer = null;
let countdownValue = 3;

// ── Pre-loaded YouTube cookies ──
const PRELOADED_COOKIES = [
  {"domain":".youtube.com","expirationDate":1772283837,"hostOnly":false,"httpOnly":false,"name":"ST-3opvp5","path":"/","sameSite":null,"secure":false,"session":false,"value":"session_logininfo=AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw%3AQUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","expirationDate":1806839694.822607,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSID","path":"/","sameSite":"no_restriction","secure":true,"session":false,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrjnq8OrKd-5Qb5Az6ql2eEAACgYKAQYSARcSFQHGX2Miscfnpzk6iF9ZwZnvQanRAhoVAUF8yKrx-2kp14tNtOKcOuJ4j66h0076"},
  {"domain":".youtube.com","expirationDate":1803819783.984756,"hostOnly":false,"httpOnly":false,"name":"SIDCC","path":"/","sameSite":null,"secure":false,"session":false,"value":"AKEyXzV4Dlg2UPxNtZh-eC7-KMfe1Xp8OhfLlKs3hfrq92boYvGJGY6ezSMVnUfbcwS2o5oD"},
  {"domain":".youtube.com","expirationDate":1806839694.822513,"hostOnly":false,"httpOnly":false,"name":"SID","path":"/","sameSite":null,"secure":false,"session":false,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrkryL7KTGKnVLi-u2KUiqvwACgYKAXgSARcSFQHGX2Mih3NLTlx_3sPzrbCTiGtCZhoVAUF8yKq6q0XMskcl8Rj6ZSWagNNN0076"},
  {"domain":".youtube.com","expirationDate":1803815694.821905,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDTS","path":"/","sameSite":null,"secure":true,"session":false,"value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","expirationDate":1806839694.822343,"hostOnly":false,"httpOnly":false,"name":"SAPISID","path":"/","sameSite":null,"secure":true,"session":false,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1803819783.986251,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":null,"secure":true,"session":false,"value":"AKEyXzVuMqI6w5eLU8L0BhuJw6boq2d_74lbiaKny1OPHFgG4cnrWdqtscl9PIEJi0jAS7K-ww"},
  {"domain":".youtube.com","expirationDate":1806839694.822251,"hostOnly":false,"httpOnly":true,"name":"SSID","path":"/","sameSite":null,"secure":true,"session":false,"value":"A5Bnw2BylFsbH4Z0v"},
  {"domain":".youtube.com","expirationDate":1806839694.822389,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":null,"secure":true,"session":false,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1806839694.822561,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":null,"secure":true,"session":false,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrSMmqz-t-aBzuEI0wGMBYlAACgYKAaQSARcSFQHGX2MiZmzEF3UFIEsd1rRf6CkOPhoVAUF8yKrYNPlteRW2KeUW4tg5j1250076"},
  {"domain":".youtube.com","expirationDate":1806839694.822433,"hostOnly":false,"httpOnly":false,"name":"__Secure-3PAPISID","path":"/","sameSite":"no_restriction","secure":true,"session":false,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1803819783.986891,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSIDCC","path":"/","sameSite":"no_restriction","secure":true,"session":false,"value":"AKEyXzVDt86t6M9I5NUhK8_uVol6W9_2foek7LS63cxKUajdRI4MfuvEVXxu7H35FrfB6mbJzVE"},
  {"domain":".youtube.com","expirationDate":1803815694.822079,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSIDTS","path":"/","sameSite":"no_restriction","secure":true,"session":false,"value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","expirationDate":1806839694.822296,"hostOnly":false,"httpOnly":false,"name":"APISID","path":"/","sameSite":null,"secure":false,"session":false,"value":"kMh20Gf_bv6AaPB0/AT1R1Xug6s4XAnyht"},
  {"domain":".youtube.com","expirationDate":1806839694.822189,"hostOnly":false,"httpOnly":true,"name":"HSID","path":"/","sameSite":null,"secure":false,"session":false,"value":"AMLVvteGWUesgPdwz"},
  {"domain":".youtube.com","expirationDate":1806839695.418175,"hostOnly":false,"httpOnly":true,"name":"LOGIN_INFO","path":"/","sameSite":"no_restriction","secure":true,"session":false,"value":"AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw:QUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","expirationDate":1806839698.978028,"hostOnly":false,"httpOnly":false,"name":"PREF","path":"/","sameSite":null,"secure":true,"session":false,"value":"f6=80&tz=Asia.Calcutta&f4=4000000&f5=30000"}
];

// ── DOM refs ──
const urlInput       = document.getElementById('urlInput');
const importBtn      = document.getElementById('importBtn');
const exportBtn      = document.getElementById('exportBtn');
const clearBtn       = document.getElementById('clearBtn');
const fileInput      = document.getElementById('fileInput');
const cookieTextarea = document.getElementById('cookieTextarea');
const cookieListEl   = document.getElementById('cookieList');
const cookieCount    = document.getElementById('cookieCount');
const logBox         = document.getElementById('logBox');
const sidebar        = document.getElementById('sidebar');
const toggleSidebar  = document.getElementById('toggleSidebar');
const openYoutubeBtn = document.getElementById('openYoutubeBtn');
const copyConsoleBtn = document.getElementById('copyConsoleBtn');
const bookmarkletBtn = document.getElementById('bookmarkletBtn');
const bookmarkletArea= document.getElementById('bookmarkletArea');
const bookmarkletLink= document.getElementById('bookmarkletLink');
const toast          = document.getElementById('toast');
const autoLaunch     = document.getElementById('autoLaunch');
const countdownNum   = document.getElementById('countdownNum');
const cdText         = document.getElementById('cdText');
const cancelBtn      = document.getElementById('cancelCountdown');
const countdownCircle= document.getElementById('countdownCircle');

// ── Helpers ──
function log(msg, type = 'info') {
  const line = document.createElement('div');
  line.className = `log-${type}`;
  line.textContent = `[${new Date().toLocaleTimeString('pt-BR')}] ${msg}`;
  logBox.prepend(line);
  if (logBox.children.length > 60) logBox.lastChild.remove();
}

function showToast(msg, isErr = false) {
  toast.textContent = msg;
  toast.className = isErr ? 'err show' : 'show';
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderCookies() {
  cookieListEl.innerHTML = '';
  cookieCount.textContent = cookies.length;
  cookies.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'cookie-item';
    el.innerHTML = `
      <button class="cookie-del" data-i="${i}">&#215;</button>
      <div class="cn">${escHtml(c.name)}</div>
      <div class="cv">${escHtml(c.value)}</div>
      <div class="cd">${escHtml(c.domain||'')} ${c.secure?'&#128274;':''} ${c.httpOnly?'[httpOnly]':''}</div>
    `;
    cookieListEl.appendChild(el);
  });
  cookieListEl.querySelectorAll('.cookie-del').forEach(btn =>
    btn.addEventListener('click', () => { cookies.splice(+btn.dataset.i,1); renderCookies(); })
  );
}

function parseCookies(raw) {
  try {
    const p = JSON.parse(raw);
    return Array.isArray(p) ? p : [p];
  } catch(e) { log('JSON inv\u00e1lido: '+e.message,'err'); return null; }
}

// ── Build inject script ──
function buildInjectScript(list) {
  const lines = list.map(c => {
    const parts = [`${c.name}=${c.value}`];
    if (c.path) parts.push(`path=${c.path}`);
    if (c.secure) parts.push('Secure');
    if (c.sameSite && c.sameSite !== 'null' && c.sameSite !== null) {
      parts.push(`SameSite=${c.sameSite==='no_restriction'?'None':c.sameSite}`);
    }
    if (c.expirationDate) parts.push(`expires=${new Date(c.expirationDate*1000).toUTCString()}`);
    return `document.cookie=${JSON.stringify(parts.join('; '))};`;
  });
  return lines.join('\n')
    + `\nconsole.log('\u2705 ${list.length} cookies injetados');`
    + `\nalert('\u2705 ${list.length} cookies injetados! Recarregando...');`
    + `\nlocation.reload();`;
}

// ── Open YouTube ──
function openYoutube() {
  const url = urlInput.value.trim() || 'https://www.youtube.com';
  window.open(url, '_blank');
  const script = buildInjectScript(cookies);
  navigator.clipboard.writeText(script)
    .then(() => {
      showToast('\u2705 YouTube aberto! Script copiado \u2014 cole no Console (F12)');
      log('YouTube aberto + script copiado', 'ok');
    })
    .catch(() => {
      showToast('YouTube aberto! Clique em "Copiar Script" e cole no Console.');
    });
}

// ── Countdown ──
function startCountdown() {
  countdownValue = 3;
  updateCountdownUI();
  autoLaunch.classList.remove('hidden');
  countdownTimer = setInterval(() => {
    countdownValue--;
    updateCountdownUI();
    if (countdownValue <= 0) {
      clearInterval(countdownTimer);
      autoLaunch.classList.add('hidden');
      openYoutube();
    }
  }, 1000);
}

function updateCountdownUI() {
  countdownNum.textContent = countdownValue;
  cdText.textContent = countdownValue;
  // animate circle: dasharray 163 = full circle
  const pct = countdownValue / 3;
  countdownCircle.style.strokeDashoffset = String(163 * (1 - pct));
}

cancelBtn.addEventListener('click', () => {
  clearInterval(countdownTimer);
  autoLaunch.classList.add('hidden');
  log('Contagem cancelada', 'info');
});

// ── Button events ──
openYoutubeBtn.addEventListener('click', () => {
  clearInterval(countdownTimer);
  autoLaunch.classList.add('hidden');
  openYoutube();
});

copyConsoleBtn.addEventListener('click', () => {
  const script = buildInjectScript(cookies);
  navigator.clipboard.writeText(script)
    .then(() => { showToast('\u2705 Script copiado! Cole no Console do YouTube (F12)'); log('Script copiado', 'ok'); })
    .catch(() => { cookieTextarea.value = script; showToast('Script exibido na textarea', true); });
});

bookmarkletBtn.addEventListener('click', () => {
  const bm = 'javascript:(function(){' + encodeURIComponent(buildInjectScript(cookies)) + '})();';
  bookmarkletLink.href = bm;
  bookmarkletArea.style.display = 'block';
  showToast('\u2705 Bookmarklet gerado! Arraste para favoritos.');
  log('Bookmarklet gerado', 'ok');
});

importBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => {
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ev => {
    const p = parseCookies(ev.target.result); if(!p) return;
    cookies = p;
    cookieTextarea.value = JSON.stringify(cookies, null, 2);
    renderCookies();
    log(`${cookies.length} cookies importados de "${f.name}"`, 'ok');
    showToast(`\u2705 ${cookies.length} cookies importados`);
  };
  r.readAsText(f);
  fileInput.value = '';
});

exportBtn.addEventListener('click', () => {
  if (!cookies.length) { showToast('Nenhum cookie', true); return; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(cookies,null,2)],{type:'application/json'}));
  a.download = 'cookies-youtube.json';
  a.click();
  log(`${cookies.length} cookies exportados`, 'ok');
  showToast(`\u2705 Exportado`);
});

clearBtn.addEventListener('click', () => { cookies=[]; cookieTextarea.value=''; renderCookies(); log('Cookies limpos','info'); });

cookieTextarea.addEventListener('input', () => {
  const p = parseCookies(cookieTextarea.value.trim());
  if (p) { cookies = p; renderCookies(); }
});

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleSidebar.textContent = sidebar.classList.contains('collapsed') ? '\u203a' : '\u2039';
});

// ── Init ──
(function init() {
  cookies = JSON.parse(JSON.stringify(PRELOADED_COOKIES));
  cookieTextarea.value = JSON.stringify(cookies, null, 2);
  renderCookies();
  log(`${cookies.length} cookies do YouTube pr\u00e9-carregados`, 'ok');
  // auto-launch countdown
  startCountdown();
})();
