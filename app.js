// ── State ──
let cookies = [];

// ── Pre-loaded YouTube cookies ──
const PRELOADED_COOKIES = [
  {"domain":".youtube.com","expirationDate":1772283837,"hostOnly":false,"httpOnly":false,"name":"ST-3opvp5","path":"/","sameSite":null,"secure":false,"session":false,"storeId":null,"value":"session_logininfo=AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw%3AQUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","expirationDate":1806839694.822607,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSID","path":"/","sameSite":"no_restriction","secure":true,"session":false,"storeId":null,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrjnq8OrKd-5Qb5Az6ql2eEAACgYKAQYSARcSFQHGX2Miscfnpzk6iF9ZwZnvQanRAhoVAUF8yKrx-2kp14tNtOKcOuJ4j66h0076"},
  {"domain":".youtube.com","expirationDate":1803819783.984756,"hostOnly":false,"httpOnly":false,"name":"SIDCC","path":"/","sameSite":null,"secure":false,"session":false,"storeId":null,"value":"AKEyXzV4Dlg2UPxNtZh-eC7-KMfe1Xp8OhfLlKs3hfrq92boYvGJGY6ezSMVnUfbcwS2o5oD"},
  {"domain":".youtube.com","expirationDate":1806839694.822513,"hostOnly":false,"httpOnly":false,"name":"SID","path":"/","sameSite":null,"secure":false,"session":false,"storeId":null,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrkryL7KTGKnVLi-u2KUiqvwACgYKAXgSARcSFQHGX2Mih3NLTlx_3sPzrbCTiGtCZhoVAUF8yKq6q0XMskcl8Rj6ZSWagNNN0076"},
  {"domain":".youtube.com","expirationDate":1803815694.821905,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDTS","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","expirationDate":1806839694.822343,"hostOnly":false,"httpOnly":false,"name":"SAPISID","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1803819783.986251,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"AKEyXzVuMqI6w5eLU8L0BhuJw6boq2d_74lbiaKny1OPHFgG4cnrWdqtscl9PIEJi0jAS7K-ww"},
  {"domain":".youtube.com","expirationDate":1806839694.822251,"hostOnly":false,"httpOnly":true,"name":"SSID","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"A5Bnw2BylFsbH4Z0v"},
  {"domain":".youtube.com","expirationDate":1806839694.822389,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1806839694.822561,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrSMmqz-t-aBzuEI0wGMBYlAACgYKAaQSARcSFQHGX2MiZmzEF3UFIEsd1rRf6CkOPhoVAUF8yKrYNPlteRW2KeUW4tg5j1250076"},
  {"domain":".youtube.com","expirationDate":1806839694.822433,"hostOnly":false,"httpOnly":false,"name":"__Secure-3PAPISID","path":"/","sameSite":"no_restriction","secure":true,"session":false,"storeId":null,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","expirationDate":1803819783.986891,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSIDCC","path":"/","sameSite":"no_restriction","secure":true,"session":false,"storeId":null,"value":"AKEyXzVDt86t6M9I5NUhK8_uVol6W9_2foek7LS63cxKUajdRI4MfuvEVXxu7H35FrfB6mbJzVE"},
  {"domain":".youtube.com","expirationDate":1803815694.822079,"hostOnly":false,"httpOnly":true,"name":"__Secure-3PSIDTS","path":"/","sameSite":"no_restriction","secure":true,"session":false,"storeId":null,"value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","expirationDate":1806839694.822296,"hostOnly":false,"httpOnly":false,"name":"APISID","path":"/","sameSite":null,"secure":false,"session":false,"storeId":null,"value":"kMh20Gf_bv6AaPB0/AT1R1Xug6s4XAnyht"},
  {"domain":".youtube.com","expirationDate":1806839694.822189,"hostOnly":false,"httpOnly":true,"name":"HSID","path":"/","sameSite":null,"secure":false,"session":false,"storeId":null,"value":"AMLVvteGWUesgPdwz"},
  {"domain":".youtube.com","expirationDate":1806839695.418175,"hostOnly":false,"httpOnly":true,"name":"LOGIN_INFO","path":"/","sameSite":"no_restriction","secure":true,"session":false,"storeId":null,"value":"AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw:QUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","expirationDate":1806839698.978028,"hostOnly":false,"httpOnly":false,"name":"PREF","path":"/","sameSite":null,"secure":true,"session":false,"storeId":null,"value":"f6=80&tz=Asia.Calcutta&f4=4000000&f5=30000"}
];

// ── DOM refs ──
const urlInput        = document.getElementById('urlInput');
const importBtn       = document.getElementById('importBtn');
const exportBtn       = document.getElementById('exportBtn');
const clearBtn        = document.getElementById('clearBtn');
const fileInput       = document.getElementById('fileInput');
const cookieTextarea  = document.getElementById('cookieTextarea');
const cookieList      = document.getElementById('cookieList');
const cookieCount     = document.getElementById('cookieCount');
const logBox          = document.getElementById('logBox');
const sidebar         = document.getElementById('sidebar');
const toggleSidebar   = document.getElementById('toggleSidebar');
const openYoutubeBtn  = document.getElementById('openYoutubeBtn');
const bookmarkletBtn  = document.getElementById('bookmarkletBtn');
const copyConsoleBtn  = document.getElementById('copyConsoleBtn');
const bookmarkletArea = document.getElementById('bookmarkletArea');
const bookmarkletLink = document.getElementById('bookmarkletLink');
const toast           = document.getElementById('toast');

// ── Helpers ──
function log(msg, type = 'info') {
  const line = document.createElement('div');
  line.className = `log-${type}`;
  const ts = new Date().toLocaleTimeString('pt-BR');
  line.textContent = `[${ts}] ${msg}`;
  logBox.prepend(line);
  if (logBox.children.length > 80) logBox.lastChild.remove();
}

function showToast(msg, isErr = false) {
  toast.textContent = msg;
  toast.className = isErr ? 'err' : '';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderCookies() {
  cookieList.innerHTML = '';
  cookieCount.textContent = cookies.length;
  cookies.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'cookie-item';
    el.innerHTML = `
      <button class="cookie-del" data-i="${i}" title="Remover">&#215;</button>
      <div class="cn">${escHtml(c.name)}</div>
      <div class="cv">${escHtml(c.value)}</div>
      <div class="cd">${escHtml(c.domain || '')} ${c.secure ? '&#128274;' : ''} ${c.httpOnly ? '[httpOnly]' : ''}</div>
    `;
    cookieList.appendChild(el);
  });
  cookieList.querySelectorAll('.cookie-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i);
      cookies.splice(i, 1);
      renderCookies();
    });
  });
}

function parseCookies(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (e) {
    log('JSON inv\u00e1lido: ' + e.message, 'err');
    return null;
  }
}

// ── Build inject script ──
// Generates a JS snippet that sets all cookies via document.cookie
// Works when executed in the context of the target domain
function buildInjectScript(cookieList) {
  const lines = cookieList.map(c => {
    const parts = [];
    parts.push(`${c.name}=${c.value}`);
    if (c.path) parts.push(`path=${c.path}`);
    // NOTE: domain attribute from a different origin is ignored by browsers
    // user must run this on the target domain itself
    if (c.secure) parts.push('Secure');
    if (c.sameSite && c.sameSite !== 'null' && c.sameSite !== null) {
      const ss = c.sameSite === 'no_restriction' ? 'None' : c.sameSite;
      parts.push(`SameSite=${ss}`);
    }
    if (c.expirationDate) {
      const d = new Date(c.expirationDate * 1000);
      parts.push(`expires=${d.toUTCString()}`);
    }
    return `document.cookie=${JSON.stringify(parts.join('; '))};`;
  });
  return lines.join('\n') + '\nalert("\u2705 ' + cookieList.length + ' cookies injetados! Recarregando...");\nlocation.reload();';
}

// ── Actions ──
openYoutubeBtn.addEventListener('click', () => {
  const url = urlInput.value.trim() || 'https://www.youtube.com';
  window.open(url, '_blank');
  // auto-copy script to clipboard
  const script = buildInjectScript(cookies);
  navigator.clipboard.writeText(script).then(() => {
    showToast('\u2705 YouTube aberto! Script copiado \u2014 cole no Console (F12)');
    log('YouTube aberto + script copiado para clipboard', 'ok');
  }).catch(() => {
    showToast('YouTube aberto! Clique em "Copiar Script" e cole no Console.', false);
  });
});

copyConsoleBtn.addEventListener('click', () => {
  const script = buildInjectScript(cookies);
  navigator.clipboard.writeText(script).then(() => {
    showToast('\u2705 Script copiado! Cole no Console do YouTube (F12)');
    log('Script de injec\u00e7\u00e3o copiado para clipboard', 'ok');
  }).catch(() => {
    // fallback: show in textarea
    cookieTextarea.value = script;
    showToast('N\u00e3o foi poss\u00edvel copiar \u2014 script exibido na textarea', true);
  });
});

bookmarkletBtn.addEventListener('click', () => {
  const script = buildInjectScript(cookies);
  const bookmarklet = 'javascript:(function(){' + encodeURIComponent(script) + '})();';
  bookmarkletLink.href = bookmarklet;
  bookmarkletArea.style.display = 'block';
  showToast('\u2705 Bookmarklet gerado! Arraste para a barra de favoritos.');
  log('Bookmarklet gerado com ' + cookies.length + ' cookies', 'ok');
});

importBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const parsed = parseCookies(ev.target.result);
    if (!parsed) return;
    cookies = parsed;
    cookieTextarea.value = JSON.stringify(cookies, null, 2);
    renderCookies();
    log(`${cookies.length} cookies importados de "${file.name}"`, 'ok');
    showToast(`\u2705 ${cookies.length} cookies importados`);
  };
  reader.readAsText(file);
  fileInput.value = '';
});

exportBtn.addEventListener('click', () => {
  if (!cookies.length) { showToast('Nenhum cookie para exportar', true); return; }
  const blob = new Blob([JSON.stringify(cookies, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cookies.json';
  a.click();
  log(`${cookies.length} cookies exportados`, 'ok');
  showToast(`\u2705 ${cookies.length} cookies exportados`);
});

clearBtn.addEventListener('click', () => {
  cookies = [];
  cookieTextarea.value = '';
  renderCookies();
  log('Cookies limpos', 'info');
});

cookieTextarea.addEventListener('input', () => {
  const raw = cookieTextarea.value.trim();
  if (!raw) return;
  const parsed = parseCookies(raw);
  if (parsed) { cookies = parsed; renderCookies(); }
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
})();
