# Ascensão Pro — Landing Page

Landing page premium para a **Jornada do Potencial Ascensão Pro**.
Stack: **Vite + React 18 + Tailwind CSS 3**. Zero dependência exótica, build limpo no CI/CD.

## 🚀 Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build      # gera ./dist
npm run start      # preview local em http://localhost:3000
```

## ☁️ Deploy no Vercel (via GitHub)

1. Faça push deste projeto para um repositório GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. O Vercel detecta **Vite** automaticamente:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. (Opcional) Cadastre as variáveis listadas em `.env.example` no painel **Settings → Environment Variables**.
5. Clique em **Deploy**. Pronto.

> Nenhum servidor customizado. Nenhuma configuração extra. Funciona out-of-the-box.

## 🔧 Variáveis de ambiente

Veja `.env.example`. Variáveis expostas ao front devem começar com `VITE_`.

## 📁 Estrutura

```
ascensao-pro/
├── public/              # imagens (depoimentos)
├── src/
│   ├── App.jsx          # landing completa
│   ├── main.jsx
│   └── index.css        # Tailwind + tokens
├── index.html           # GTM, GA4, Meta Pixel
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ✅ Form/CTA

Os botões "Quero me inscrever agora" apontam para o checkout Eduzz original
(`https://chk.eduzz.com/801E4VKNW7`). Para alterar, edite `CHECKOUT_URL` em `src/App.jsx`.

## 📊 Tracking

GTM, Google Analytics 4 e Meta Pixel já estão integrados em `index.html`
(mesmos IDs do site original).
