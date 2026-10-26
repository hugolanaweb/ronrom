# Ronrom Clínica Felina

Projeto conceitual para uma empresa fictícia. Site estático em Astro, CSS com custom properties, JS apenas em ilhas (menu, filtro, trilha) e no efeito de entrada das seções.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # saída em dist/
npm run preview
```

## Onde trocar os placeholders

Tudo que está entre `[colchetes]` (endereço, telefone, horário, CRMV, CNPJ, equipe) fica em `src/data/site.ts`.
Serviços, valores fictícios, FAQ e textos recorrentes também estão lá. Não há formulário: o agendamento é pelo WhatsApp.

## Variáveis de ambiente (`.env.example`)

- `PUBLIC_SITE_URL`: URL final (sitemap, Open Graph, schema). Atualize também `public/robots.txt`.
- `PUBLIC_WHATSAPP_NUMBER`: dígitos com DDI e DDD.

## Fotos

As fotos em `src/assets/photos` vêm do Pexels (licença gratuita para uso comercial, sem obrigação de atribuição). São imagens de banco de imagens, não da clínica: troque pelas fotos reais quando houver.

| Arquivo | Página do Pexels |
| --- | --- |
| `hero-carrier.jpg` | https://www.pexels.com/photo/cozy-orange-tabby-cat-relaxing-in-sunlit-carrier-29931479/ |
| `carrier-closeup.jpg` | https://www.pexels.com/photo/close-up-of-a-white-and-orange-cat-21767483/ |
| `carrier-home.jpg` | https://www.pexels.com/photo/a-kitten-sitting-on-the-floor-in-a-room-17842246/ |
| `window-sleep.jpg` | https://www.pexels.com/photo/ginger-cat-lying-on-windowsill-19756666/ |
| `window-sunset.jpg` | https://www.pexels.com/photo/warm-sunlit-cat-by-a-window-30668936/ |
| `curled-blanket.jpg` | https://www.pexels.com/photo/cozy-sleeping-cat-in-warm-blankets-37461569/ |
| `blanket-nap.jpg` | https://www.pexels.com/photo/cozy-tabby-cat-sleeping-peacefully-in-blanket-31961534/ |
| `exam-table.jpg` | https://www.pexels.com/photo/a-close-up-shot-of-a-tabby-cat-6130971/ |
| `tabby-floor.jpg` | https://www.pexels.com/photo/brown-tabby-cat-on-brown-wooden-floor-9376273/ |
| `sun-floor.jpg` | https://www.pexels.com/photo/cute-cat-lying-on-the-floor-in-a-ray-of-sun-16327228/ |
| `golden-portrait.jpg` | https://www.pexels.com/photo/golden-hour-portrait-of-domestic-cat-29809171/ |
| `floor-play.jpg` | https://www.pexels.com/photo/red-cat-laying-on-back-on-floor-at-home-11500108/ |
| `ginger-floor.jpg` | https://www.pexels.com/photo/cute-cat-lying-on-floor-19425219/ |

O componente `ArchImage` gera AVIF/WebP com srcset via `astro:assets`. Sem `src`, mostra um placeholder.

## Cabeçalhos de segurança

A CSP e o Referrer-Policy também vão em `<meta>`. Para os cabeçalhos HTTP reais, `public/_headers` funciona em Netlify/Cloudflare Pages; em outro host, replique no servidor.
