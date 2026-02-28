# 🍪 Cookie Browser

Webapp de navegador com gerenciador de cookies integrado. Os cookies do YouTube já vêm pré-carregados.

## Funcionalidades

- 🌐 Navegador embutido (iframe)
- 💉 Injeção de cookies via `document.cookie`
- 📥 Importar cookies de arquivo `.json` (formato Cookie Editor)
- 📤 Exportar cookies para `.json`
- ✏️ Editar cookies direto na textarea
- 🗑 Limpar todos os cookies
- 🔒 Abrir site em nova aba com cookies já injetados
- 🍪 17 cookies do YouTube pré-carregados

## Como usar

1. Abra o `index.html` no navegador
   ```bash
   python -m http.server 8080
   # acesse http://localhost:8080
   ```
2. Os cookies do YouTube já aparecem carregados
3. Clique em **"Abrir em nova aba ↗"** para abrir o YouTube com os cookies injetados
4. Para outros sites: mude a URL e importe novos cookies via **"Importar JSON"**

## Limitações conhecidas

- Cookies com flag `httpOnly` e `Secure` **não podem** ser definidos via `document.cookie` de uma página diferente do domínio alvo. Para isso, o fluxo de "abrir em nova aba" cria uma página intermediária que injeta antes de redirecionar.
- Muitos sites modernos (YouTube, Google) bloqueiam iframe com `X-Frame-Options`. Use o botão **"Abrir em nova aba"** nesses casos.

## Deploy no Railway

```bash
# Railway detecta automaticamente um projeto estático
# Basta conectar o repositório no dashboard
```
