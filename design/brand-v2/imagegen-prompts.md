# Image generation exploration log

Mode: built-in `image_gen`

생성 이미지는 형태 탐색에만 사용했고 최종 자산에는 포함하지 않았습니다. 최종 `Shared Stem` SVG는 직접 재구성했으며 워드마크는 Inter 4.1을 path로 변환했습니다.

## 1. Equal partnership concept sheet

```text
Use case: logo-brand
Asset type: exploratory symbol concept sheet for Seori Labs, a Korean software product studio
Primary request: Create six original minimal symbol concepts expressing two equal founders whose family names combine into one complete name, Seori. Each mark must be made from exactly two equal-weight geometric components that become one cohesive silhouette; the relationship should feel like partnership, shared authorship, and a durable foundation rather than romance.
Subject: six clearly separated symbol-only variations in a 3 by 2 grid; explore precise interlocking, shared negative space, balanced counterforms, and one subtle central join; no component should dominate the other
Style/medium: strict flat 2D vector logo exploration, mature, calm, highly geometric, optically balanced, strong silhouette, suitable for exact SVG reconstruction
Composition/framing: square white concept sheet, equal cells, centered symbols, generous white margins, no labels
Color palette: solid near-black #112128 only on pure white; represent the central join through negative space, not a second color
Constraints: each mark must work in one color and remain identifiable at 16px; exactly two primary components; original designs only; no wordmark; no text; no gradients; no outlines; no shadows; no texture; no 3D; no rounded-square containers; no dots; no arrows; no literal letters S or L; no literal Hangul glyphs; no watermark
Avoid: heart, wedding ring, infinity loop, yin-yang, handshake, chain link, snowflake, sparkle, atom, circuit, brain, laboratory flask, generic AI logo, crypto logo, logistics logo, real-estate roof, pinwheel, swastika-like rotation
```

원형·육각형·프레임 계열은 연결이나 교류를 표현했지만 스톡 로고와 유사하거나 코인·인프라 브랜드로 읽힐 가능성이 있어 제외했습니다.

## 2. Quarter-circle refinement

```text
Use case: precise-object-edit
Asset type: focused logo-symbol cleanup
Input images: Image 1: concept reference; use only the top-left symbol, discard the other five
Primary request: isolate the top-left concept and redraw it as one centered flat symbol. Make the two components mathematically identical quarter-cut circular blocks, rotated 180 degrees and offset diagonally so together they create a subtle flowing S-shaped silhouette. Keep equal visual weight and a small clean shared square of negative space between them.
Style/medium: strict flat 2D vector logo, mature and calm
Composition/framing: one large centered symbol on pure white #FFFFFF with generous margin
Color palette: solid near-black #112128 only
Constraints: exactly two identical components; crisp geometric edges; strong silhouette at 16px; no text; no gradients; no outlines; no shadows; no texture; no lighting; no 3D; no extra shapes; no watermark
Avoid: black background, yin-yang, chain link, heart, infinity symbol, arrows, pinwheel, speech bubbles, quotation marks, generic S letterform
```

정리된 형태도 기존 교류·연결 로고와 가까워 최종 후보에서 제외했습니다.

## 3. Complete-name Hangul study

```text
Use case: logo-brand
Asset type: exploratory Hangul symbol concept sheet for Seori Labs
Primary request: Create six original compact symbol concepts derived from the exact Korean brand name "서리". Treat the two syllable blocks "서" and "리" as equal partners that combine into one complete modern seal-like product mark. Preserve the structural logic of Hangul but simplify the strokes into a proprietary geometric system rather than using an existing font.
Subject: six clearly separated symbol-only variations in a 3 by 2 grid; explore side-by-side, stacked, shared-stem, and interlocking two-block constructions; each variation should still plausibly derive from "서리" when explained
Style/medium: strict flat 2D vector logo exploration, mature Korean software studio, calm, precise, minimal, optically balanced, strong silhouette
Composition/framing: square pure-white concept sheet, equal cells, centered symbols, generous margins, no labels
Color palette: solid near-black #112128 only
Text (verbatim): "서리" as the sole structural source, but do not add captions or typeset text below
Constraints: exactly two equal syllable modules; readable or structurally defensible at 24px; one color; original designs only; crisp edges; no gradients; no outlines; no shadows; no texture; no 3D; no containers; no Latin letters; no extra text; no watermark
Avoid: traditional red stamp, calligraphy, roof/house, arrows, heart, wedding ring, infinity loop, yin-yang, chain link, snowflake, sparkle, atom, circuit, generic AI logo, crypto logo
```

이미지 결과의 일반 글꼴 형태를 그대로 사용하지 않고, `서`와 `리`가 하나의 세로획을 공유한다는 구조만 추출해 최종 SVG를 직접 설계했습니다.
