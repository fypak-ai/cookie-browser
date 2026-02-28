// ── State ──
let cookies = [];
let currentTarget = 'https://www.youtube.com';

// ── Pre-loaded YouTube cookies ──
const PRELOADED_COOKIES = [
  {"domain":".youtube.com","name":"ST-3opvp5","path":"/","secure":false,"httpOnly":false,"value":"session_logininfo=AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw%3AQUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","name":"__Secure-3PSID","path":"/","secure":true,"httpOnly":true,"sameSite":"no_restriction","value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrjnq8OrKd-5Qb5Az6ql2eEAACgYKAQYSARcSFQHGX2Miscfnpzk6iF9ZwZnvQanRAhoVAUF8yKrx-2kp14tNtOKcOuJ4j66h0076"},
  {"domain":".youtube.com","name":"SIDCC","path":"/","secure":false,"httpOnly":false,"value":"AKEyXzV4Dlg2UPxNtZh-eC7-KMfe1Xp8OhfLlKs3hfrq92boYvGJGY6ezSMVnUfbcwS2o5oD"},
  {"domain":".youtube.com","name":"SID","path":"/","secure":false,"httpOnly":false,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrkryL7KTGKnVLi-u2KUiqvwACgYKAXgSARcSFQHGX2Mih3NLTlx_3sPzrbCTiGtCZhoVAUF8yKq6q0XMskcl8Rj6ZSWagNNN0076"},
  {"domain":".youtube.com","name":"__Secure-1PSIDTS","path":"/","secure":true,"httpOnly":true,"value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","name":"SAPISID","path":"/","secure":true,"httpOnly":false,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","name":"__Secure-1PSIDCC","path":"/","secure":true,"httpOnly":true,"value":"AKEyXzVuMqI6w5eLU8L0BhuJw6boq2d_74lbiaKny1OPHFgG4cnrWdqtscl9PIEJi0jAS7K-ww"},
  {"domain":".youtube.com","name":"SSID","path":"/","secure":true,"httpOnly":true,"value":"A5Bnw2BylFsbH4Z0v"},
  {"domain":".youtube.com","name":"__Secure-1PAPISID","path":"/","secure":true,"httpOnly":false,"value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","name":"__Secure-1PSID","path":"/","secure":true,"httpOnly":true,"value":"g.a0007QitU5CUHHjVT3TrA7fMp85a8ciLOxQ_nVpzfI65jJNAmLzrSMmqz-t-aBzuEI0wGMBYlAACgYKAaQSARcSFQHGX2MiZmzEF3UFIEsd1rRf6CkOPhoVAUF8yKrYNPlteRW2KeUW4tg5j1250076"},
  {"domain":".youtube.com","name":"__Secure-3PAPISID","path":"/","secure":true,"httpOnly":false,"sameSite":"no_restriction","value":"mH0zBGD4AbpbCvbz/ACqBQWw_GgNscMJHS"},
  {"domain":".youtube.com","name":"__Secure-3PSIDCC","path":"/","secure":true,"httpOnly":true,"sameSite":"no_restriction","value":"AKEyXzVDt86t6M9I5NUhK8_uVol6W9_2foek7LS63cxKUajdRI4MfuvEVXxu7H35FrfB6mbJzVE"},
  {"domain":".youtube.com","name":"__Secure-3PSIDTS","path":"/","secure":true,"httpOnly":true,"sameSite":"no_restriction","value":"sidts-CjQBBj1CYpunbAnuwwdbdPef3QwF4lPpPEsJPWoMMUUyqJwJIZ0P662HjFixP3SkZXOdyUGJEAA"},
  {"domain":".youtube.com","name":"APISID","path":"/","secure":false,"httpOnly":false,"value":"kMh20Gf_bv6AaPB0/AT1R1Xug6s4XAnyht"},
  {"domain":".youtube.com","name":"HSID","path":"/","secure":false,"httpOnly":true,"value":"AMLVvteGWUesgPdwz"},
  {"domain":".youtube.com","name":"LOGIN_INFO","path":"/","secure":true,"httpOnly":true,"sameSite":"no_restriction","value":"AFmmF2swRQIhAIbQySxQyVu6bP86wrSr-3FosghXeeKcmCdejBeiDNmSAiAJxfFIwKiGfFzjtUTCCNiFN801UA8NetU4-nc4OAGmcw:QUQ3MjNmelVGekthZXowUzM4ZkZFWUpCcjc5d1ZOZVpELW1JUXBnLWtHWE85RlJNeldQcGNEakZ5dkRFQjBJTXE1UzdFQTl0XzZtRTFzSGNuQUpoaEpEM0puVlRiZ1NhbFprZHNNSG52UzhBRUNoX0ZoWG9FTS0wRGhTVmVpc2VUY0Nhd25iSElfMTJYWllmUWlCQUVoOWZvLUlybDlLVEFn"},
  {"domain":".youtube.com","name":"PREF","path":"/","secure":true,"httpOnly":false,"value":"f6=80&tz=Asia.Calcutta&f4=4000000&f5=30000"}
];

// ── DOM refs ──
const urlInput      = document.getElementById('urlInput');
const goBtn         = document.getElementById('goBtn');
const importBtn     = document.getElementById('importBtn');
const exportBtn     = document.getElementById('exportBtn');
const injectBtn     = document.getElementById('injectBtn');
const clearBtn      = document.getElementById('clearBtn');
const fileInput     = document.getElementById('fileInput');
const cookieTextarea= document.getElementById('cookieTextarea');
const cookieList    = document.getElementById('cookieList');
const cookieCount   = document.getElementById('cookieCount');
const logBox        = document.getElementById('logBox');
const frame         = document.getElementById('browserFrame');
const currentUrlEl  = document.getElementById('currentUrl');
const reloadBtn     = document.getElementById('reloadBtn');
const openNewTab    = document.getElementById('openNewTab');
const overlayOpenBtn= document.getElementById('overlayOpenBtn');
const iframeOverlay = document.getElementById('iframeOverlay');
const sidebar       = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

// ── Helpers ──
function log(msg, type='info') {
  const line = document.createElement('div');
  line.className = `log-${type}`;
  const ts = new Date().toLocaleTimeString('pt-BR');
  line.textContent = `[${ts}] ${msg}`;
  logBox.prepend(line);
  if (logBox.children.length > 80) logBox.lastChild.remove();
}

function renderCookies() {
  cookieList.innerHTML = '';
  cookieCount.textContent = cookies.length;
  cookies.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'cookie-item';
    el.innerHTML = `
      <button class="cookie-del" data-i="${i}" title="Remover">✕</button>
      <div class="cn">${escHtml(c.name)}</div>
      <div class="cv">${escHtml(c.value)}</div>
      <div class="cd">${escHtml(c.domain || '')} ${c.secure ? '🔒' : ''} ${c.httpOnly ? '[httpOnly]' : ''}</div>
    `;
    cookieList.appendChild(el);
  });
  cookieList.querySelectorAll('.cookie-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i);
      const name = cookies[i].name;
      cookies.splice(i, 1);
      renderCookies();
      log(`Cookie removido: ${name}`, 'info');
    });
  });
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function parseCookies(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch(e) {
    log('JSON inválido: ' + e.message, 'err');
    return null;
  }
}

// ── Navigate ──
function navigate(url) {
  if (!url) return;
  if (!/^https?:\/\//.test(url)) url = 'https://' + url;
  currentTarget = url;
  currentUrlEl.textContent = url;
  urlInput.value = url;
  iframeOverlay.classList.remove('visible');
  frame.src = url;
  log(`Navegando para: ${url}`, 'info');
}

// detect X-Frame-Options block
frame.addEventListener('load', () => {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    if (!doc || doc.URL === 'about:blank') return;
    // if we can access contentDocument it loaded fine
    iframeOverlay.classList.remove('visible');
  } catch(e) {
    // cross-origin blocked = normal for most sites
    iframeOverlay.classList.add('visible');
    log('Site bloqueou iframe (X-Frame-Options). Use "Abrir em nova aba".', 'err');
  }
});

// ── Cookie injection into current tab (document.cookie) ──
function injectCookiesToPage() {
  if (!cookies.length) { log('Nenhum cookie para injetar.', 'err'); return; }
  let ok = 0;
  cookies.forEach(c => {
    try {
      let str = `${encodeURIComponent(c.name)}=${encodeURIComponent(c.value)}`;
      if (c.path)    str += `; path=${c.path}`;
      if (c.domain)  str += `; domain=${c.domain}`;
      if (c.secure)  str += `; Secure`;
      if (c.sameSite && c.sameSite !== 'null') str += `; SameSite=${c.sameSite}`;
      if (c.expirationDate) {
        const d = new Date(c.expirationDate * 1000);
        str += `; expires=${d.toUTCString()}`;
      }
      document.cookie = str;
      ok++;
    } catch(e) {
      log(`Erro ao injetar ${c.name}: ${e.message}`, 'err');
    }
  });
  log(`${ok}/${cookies.length} cookies injetados na página atual.`, 'ok');
}

// Open in new tab with bookmarklet to set cookies then redirect
function openWithCookies() {
  const target = currentTarget || urlInput.value || 'https://www.youtube.com';
  if (!cookies.length) { window.open(target, '_blank'); return; }

  // Build a self-contained page that sets cookies and redirects
  const cookieScript = cookies.map(c => {
    let str = `${encodeURIComponent(c.name)}=${encodeURIComponent(c.value)}`;
    if (c.path)    str += `; path=${c.path}`;
    if (c.secure)  str += `; Secure`;
    if (c.sameSite && c.sameSite !== 'null') str += `; SameSite=${c.sameSite}`;
    if (c.expirationDate) {
      const d = new Date(c.expirationDate * 1000);
      str += `; expires=${d.toUTCString()}`;
    }
    return `document.cookie=${JSON.stringify(str)};`;
  }).join('\n');

  const html = `<!DOCTYPE html><html><head><title>Redirecionando...</title></head><body>
<script>
${cookieScript}
window.location.href = ${JSON.stringify(target)};
<\/script>
<p>Injetando cookies e redirecionando...</p>
</body></html>`;

  const blob = new Blob([html], {type:'text/html'});
  const blobUrl = URL.createObjectURL(blob);
  window.open(blobUrl, '_blank');
  log(`Abrindo ${target} em nova aba com cookies.`, 'ok');
}

// ── Events ──
goBtn.addEventListener('click', () => navigate(urlInput.value));
urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') navigate(urlInput.value); });

reloadBtn.addEventListener('click', () => {
  iframeOverlay.classList.remove('visible');
  frame.src = frame.src;
});

openNewTab.addEventListener('click', openWithCookies);
overlayOpenBtn.addEventListener('click', openWithCookies);

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
  };
  reader.readAsText(file);
  fileInput.value = '';
});

exportBtn.addEventListener('click', () => {
  if (!cookies.length) { log('Nenhum cookie para exportar.', 'err'); return; }
  const blob = new Blob([JSON.stringify(cookies, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cookies.json';
  a.click();
  log(`${cookies.length} cookies exportados.`, 'ok');
});

injectBtn.addEventListener('click', () => {
  // also try to parse textarea if modified
  const raw = cookieTextarea.value.trim();
  if (raw) {
    const parsed = parseCookies(raw);
    if (parsed) { cookies = parsed; renderCookies(); }
  }
  injectCookiesToPage();
});

clearBtn.addEventListener('click', () => {
  cookies = [];
  cookieTextarea.value = '';
  renderCookies();
  log('Cookies limpos.', 'info');
});

cookieTextarea.addEventListener('change', () => {
  const raw = cookieTextarea.value.trim();
  if (!raw) return;
  const parsed = parseCookies(raw);
  if (parsed) { cookies = parsed; renderCookies(); log(`${cookies.length} cookies carregados da textarea.`, 'ok'); }
});

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleSidebar.textContent = sidebar.classList.contains('collapsed') ? '›' : '‹';
});

// ── Init ──
(function init() {
  cookies = [...PRELOADED_COOKIES];
  cookieTextarea.value = JSON.stringify(cookies, null, 2);
  urlInput.value = currentTarget;
  renderCookies();
  log(`${cookies.length} cookies do YouTube pré-carregados.`, 'ok');
  log('Use "Abrir em nova aba" para abrir o YouTube com os cookies injetados.', 'info');
  navigate(currentTarget);
})();
