# Design System — Kanga-Shop

## Product Context
- **What this is:** Marque lifestyle camerounaise — concept store immersif vendant des produits importes du Cameroun (alimentaire, mode, art) avec storytelling
- **Who it's for:** Diaspora camerounaise en France (~300k) + Francais curieux de culture africaine
- **Space/industry:** E-commerce produits africains premium, concept store culturel
- **Project type:** Landing page storytelling + waitlist (validation de demande avant supply chain)

## Aesthetic Direction
- **Direction:** Luxury/Refined + Glassmorphism
- **Decoration level:** Minimal avec effets verre — glassmorphism (fond floute + transparence), ombres subtiles. La decoration vient de la lumiere, la transparence, et l'image hero
- **Mood:** Apple Store rencontre le paysage camerounais. Premium, chaud, immersif. Les produits camerounais meritent le meme ecrin que les produits Apple. Chaque produit est presente comme un objet desirable.
- **Reference sites:** Industrie Africa (luxe africain), ADJOAA (curated African designers), Apple.com (qualite d'execution)

## Typography
- **Display/Hero:** Satoshi (900/700) — sans-serif geometrique moderne, premium, variable font. Le "nouveau standard" des marques luxe tech.
- **Body:** Instrument Sans (400/500/600) — legerement humaniste, excellent pour le storytelling long, tres lisible
- **UI/Labels:** Satoshi (600/500) — meme famille que display pour coherence
- **Data/Tables:** Geist Mono (tabular-nums) — prix, references, donnees
- **Code:** Geist Mono
- **Loading:** Satoshi + Instrument Sans via FontShare CDN (api.fontshare.com), Geist Mono via Google Fonts
- **Scale:**
  - hero: clamp(48px, 10vw, 100px) / weight 900
  - h1: clamp(36px, 6vw, 72px) / weight 900
  - h2: clamp(32px, 5vw, 48px) / weight 900
  - h3: 24-36px / weight 700
  - body-lg: 18px / weight 400
  - body: 15px / weight 400
  - caption: 14px / weight 400
  - label: 13px / weight 600
  - mono-label: 11-12px / letter-spacing 2-3px / uppercase

## Color
- **Approach:** Balanced — palette extraite du paysage camerounais (image hero: arbre a fleurs dorees + volcan)
- **Primary:** #C8963A (Or Ambre) — extrait des fleurs de l'arbre, chaleur, richesse. Usage: CTAs principaux, prix, highlights, labels
- **Accent:** #D4572A (Terre Rouge) — terre rouge camerounaise. Usage: CTAs secondaires, badges, emphasis
- **Secondary:** #5A7A48 (Vert Feuillage) — feuillage de l'arbre. Usage: succes, elements secondaires, barres de progression
- **Earth:** #8B7355 (Brun Savane) — sol de la savane. Usage: bordures, separateurs, elements discrets
- **Sky:** #7A9CB8 (Bleu Volcan) — brume du volcan en fond. Usage: info, liens, elements informationnels
- **Background (dark):** #1C1A14 (Nuit Savane) — brun nuit chaud
- **Background surfaces:** #252218 (secondary), #2E2A1E (tertiary)
- **Text:** #FAF5EE (Creme Chaude) — plus organique que le blanc pur
- **Glass surfaces:** rgba(250, 245, 238, 0.08) avec backdrop-filter: blur(24px), border: rgba(250, 245, 238, 0.15)
- **Semantic:** success #5A7A48, warning #C8963A, error #D4572A, info #7A9CB8
- **Dark mode:** Default. Image hero visible a travers les surfaces glassmorphism
- **Input background:** --color-input-bg: #F5F0E8 (form fields on light sections)
- **Light mode:** Fond #FAF5EE, texte #1C1A14, surfaces glass rgba(28, 26, 20, 0.06)

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — le vide est un luxe, chaque element respire
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96)

## Layout
- **Approach:** Grid-disciplined avec sections hero plein ecran
- **Grid:** 12 colonnes, gap 24px
- **Max content width:** 1200px
- **Hero sections:** Full-width avec image de fond + overlay gradient + glassmorphism
- **Border radius:** sm:6px, md:12px, lg:20px, xl:28px, full:9999px
- **Glass panels:** border-radius xl (28px) pour les panneaux hero, lg (20px) pour les cartes

## Motion
- **Approach:** Intentional cinematique — style Apple
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(300-400ms) long(500-700ms)
- **Patterns:**
  - Scroll reveal: elements apparaissent en fondu + legere translation Y (20px)
  - Hover cards: translateY(-4px) + border-color transition
  - Hover buttons: translateY(-1px) + box-shadow glow
  - Hero background: glow subtil anime (8s, ease-in-out, alternate)
  - Theme toggle: transition 0.5s ease sur background et color

## Image Hero
- **Fichier:** Gemini_Generated_Image_1o7gkc1o7gkc1o7g.png
- **Description:** Grand arbre majestueux avec fleurs dorees, savane camerounaise, Mont Cameroun (volcan) en arriere-plan, ciel nuageux
- **Usage:** Fond du hero principal avec overlay gradient (transparent -> rgba(28,26,20,0.7)), glassmorphism par-dessus
- **Overlay:** linear-gradient(to bottom, rgba(28,26,20,0.3) 0%, rgba(28,26,20,0.5) 40%, rgba(28,26,20,0.7) 100%)

## Glassmorphism Specs
- **Panels principaux:** background rgba(28,26,20,0.45), backdrop-filter blur(32px), border rgba(250,245,238,0.12), border-radius 28px
- **Cartes:** background rgba(250,245,238,0.08), backdrop-filter blur(24px), border rgba(250,245,238,0.15), border-radius 20px
- **Waitlist inline:** background rgba(28,26,20,0.4), backdrop-filter blur(20px), border rgba(250,245,238,0.12), border-radius 20px, padding 8px
- **Hover:** augmenter l'opacite du background a 0.14-0.20, border-color transition vers la couleur primaire

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-19 | Palette extraite de l'image hero | L'utilisateur veut que les couleurs "fitent" avec son image de fond — arbre a fleurs dorees + volcan camerounais |
| 2026-03-19 | Glassmorphism sur image de fond | L'utilisateur imagine le glassmorphism directement sur sa photo, style Apple mais avec le paysage camerounais |
| 2026-03-19 | Direction luxe moderne | La diaspora et les Africains en general apprecient le luxe — un site Apple-quality positionne les produits camerounais comme premium |
| 2026-03-19 | Satoshi + Instrument Sans | Sans-serif geometrique premium pour les titres (Satoshi) + humaniste lisible pour le storytelling (Instrument Sans) |
| 2026-03-19 | Dark mode par defaut | Fond sombre chaud (#1C1A14) qui met en valeur l'image hero et les surfaces glassmorphism |
| 2026-03-19 | Or Ambre #C8963A comme primaire | Extrait des fleurs dorees de l'arbre dans l'image — plus chaud et naturel que l'or pur |
