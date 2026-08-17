# Seori Labs BI/CI Guide

## Brand Idea

`서리`는 두 사람의 성 `서`와 `이`에서 시작해 하나의 이름이 되었습니다. Seori Labs는 제품 개발, 자동화, AI 시스템을 작게 만들고 검증하는 소프트웨어 스튜디오이며, 브랜드 아이디어는 **Two surnames. One complete name. One shared foundation.**입니다.

## Logo Concept

`Shared Stem` 심볼은 한글 `서`와 `리`를 위아래로 쌓고 오른쪽 세로획을 공유합니다. 두 성을 따로 나열하지 않고 `서리`라는 완성된 이름으로 표현합니다.

- 위쪽 `서`: 첫 번째 성에서 시작한 음절
- 아래쪽 `리`: 두 번째 성 `이`를 `서리` 안에 담은 음절
- `Shared Stem`: 두 음절이 공유하는 오른쪽 세로축
- `Signal Cyan`: 두 음절이 만나는 유일한 강조 획
- `ㄹ` 가독성: 우측 상단과 좌측 하단 세로획을 유지해 `피`와 구분

## Logo Assets

- Primary horizontal: `static/brand/seori-labs-logo.svg`
- Reverse horizontal: `static/brand/seori-labs-logo-reverse.svg`
- Stacked: `static/brand/seori-labs-logo-stacked.svg`
- Symbol: `static/brand/seori-labs-symbol.svg`
- Mark with container: `static/brand/seori-labs-mark.svg`
- Monochrome symbol: `static/brand/seori-labs-symbol-mono.svg`
- Brand board: `static/brand/seori-labs-brand-board.svg`
- Website favicon: `static/favicon.svg`, `static/favicon.png`, `static/favicon.ico`

## Logo Usage

- 기본 로고는 밝은 배경에서 `seori-labs-logo.svg`를 사용합니다.
- 어두운 배경에서는 `seori-labs-logo-reverse.svg`를 사용합니다.
- 밝은 정사각형 공간에는 `seori-labs-symbol.svg`, 앱 아이콘·소셜 프로필에는 컨테이너가 있는 `seori-labs-mark.svg`를 사용합니다.
- 단색 인쇄, 각인, 워터마크에는 `seori-labs-symbol-mono.svg`를 사용합니다.
- 로고 주변 최소 여백은 심볼 너비의 25% 이상을 확보합니다.
- 최소 권장 크기는 심볼 24px, 가로형 로고 140px입니다.
- 가로형 로고에는 descriptor나 슬로건을 결합하지 않습니다.

## Misuse

- 로고 색상을 임의로 바꾸지 않습니다.
- 심볼과 워드마크 비율을 따로 늘이거나 줄이지 않습니다.
- 그림자, 외곽선, 과한 그라데이션을 추가하지 않습니다.
- 심볼의 `서`, `리`, 공유 세로획을 분리하거나 획을 생략하지 않습니다.
- 복잡한 이미지 위에 충분한 대비 없이 배치하지 않습니다.
- 문장 안에서 로고 SVG를 텍스트처럼 사용하지 않습니다. 본문에서는 `Seori Labs`로 표기합니다.

## Color System

| Token       | Hex       | Usage                                    |
| ----------- | --------- | ---------------------------------------- |
| Seori Ink   | `#112128` | Primary symbol, wordmark, dark surface   |
| Signal Cyan | `#58C7C4` | The single joining stroke                |
| Paper       | `#F9FBFB` | Reverse symbol and clean surface         |
| Frost       | `#EEF2F2` | Brand-board and neutral field background |
| Muted       | `#52636A` | Supporting copy                          |

로고 자체에는 `Seori Ink`, `Signal Cyan`, `Paper`만 사용합니다. 제품 UI의 상태색은 기능적 의미가 있을 때 별도로 사용할 수 있지만 로고 안에는 넣지 않습니다.

## Typography

- English wordmark: Inter 4.1, weight 780을 path로 변환한 공식 자산
- English body: Inter 또는 시스템 sans-serif
- Korean: Pretendard, Apple SD Gothic Neo, Noto Sans KR, 시스템 sans-serif
- Headlines: 800-900 weight, tight but readable line-height
- Body: 400-650 weight, generous line-height
- Letter spacing: 기본값 0. 작은 대문자 라벨에만 제한적으로 사용합니다.

## BI Voice

Seori Labs의 말투는 선명하고 실용적이어야 합니다.

- 짧은 문장으로 목적을 먼저 말합니다.
- 기술명보다 사용자가 얻는 변화를 먼저 설명합니다.
- 가능성을 과장하지 않고, 검증 방식과 제약을 함께 말합니다.
- "실험"은 장식적인 표현이 아니라 작은 단위로 증명하는 작업 방식을 의미합니다.

## CI Principles

1. Build: 손에 잡히는 제품을 빠르게 구현합니다.
2. Automate: 반복 업무와 운영 흐름을 단순하게 만듭니다.
3. Explore: AI와 새로운 인터페이스를 실제 사용 맥락 안에서 검증합니다.

## Application Rules

- UI 반경은 기존 웹사이트와 맞춰 8px 중심으로 사용합니다.
- 장식적인 배경보다 정보의 계층, 간격, 대비를 우선합니다.
- 브랜드 강조선은 `Signal Cyan`을 사용합니다. 제품 UI의 성공·주의 상태색은 로고와 분리합니다.
- 로고와 함께 쓰는 사진/그래픽은 실험실 분위기보다 실제 제품, 코드, 자동화 흐름, 인터페이스가 드러나는 이미지를 우선합니다.
