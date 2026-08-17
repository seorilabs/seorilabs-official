# Seori Labs Shared Stem Identity

## 상태

이 디렉터리는 승인된 `Shared Stem` 아이덴티티의 설계 근거와 재생성 소스입니다. 배포용 자산은 `static/brand/`와 `static/favicon.svg`에 반영합니다.

## 확정안: Shared Stem

`서리`는 서리나 frost에서 가져온 이름이 아니라, 남편의 성 `서`와 아내의 성 `이`에서 시작한 완성된 이름입니다. 심볼은 이 어원을 외부에 두 이름처럼 나열하지 않고 `서리`라는 하나의 한글 구조 안에 담습니다.

- 위쪽 `서`: 남편의 성에서 시작한 첫 음절
- 아래쪽 `리`: 아내의 성 `이`를 `서리` 안에 담은 둘째 음절. `ㄹ`의 우측·좌측 세로획을 모두 보존해 `피`와 구분
- 공유 세로획: 두 음절이 나란히 흩어지지 않고 하나의 이름과 기반이 됨
- Signal Cyan 가로획: 두 모듈이 만나는 유일한 접점

기존 심볼의 점 세 개, 밑줄, 다중 보조색과 가로 로고의 descriptor를 제거했습니다. 결과적으로 심볼은 2색, 단색, 반전 환경에서 같은 구조를 유지합니다.

## 최종 자산

- `final/seori-labs-symbol.svg`: 기본 심볼
- `final/seori-labs-symbol-mono.svg`: 단색 심볼
- `final/seori-labs-logo.svg`: 기본 가로형
- `final/seori-labs-logo-reverse.svg`: 어두운 배경용 가로형
- `final/seori-labs-logo-stacked.svg`: 세로형
- `final/seori-labs-favicon.svg`: 파비콘·앱 아이콘용 컨테이너
- `final/seori-labs-brand-board.svg`: 디자인 의도와 적용 예시

워드마크는 [Inter 4.1](https://github.com/rsms/inter/releases/tag/v4.1)의 weight 780을 SVG path로 변환했습니다. 따라서 배포 환경의 폰트 설치 여부에 따라 형태가 바뀌지 않습니다. Inter는 SIL Open Font License 1.1로 배포됩니다.

## 색상

| 이름        | 값        | 용도                           |
| ----------- | --------- | ------------------------------ |
| Seori Ink   | `#112128` | 기본 심볼·워드마크·어두운 배경 |
| Signal Cyan | `#58C7C4` | 검증 신호 한 획에만 사용       |
| Paper       | `#F9FBFB` | 반전 심볼·워드마크             |

## 사용 기준

- 기본 심볼 최소 권장 크기: 24px
- 파비콘·앱 아이콘에서는 `seori-labs-favicon.svg` 사용
- 심볼 주변 최소 여백: 심볼 너비의 25%
- 가로형에는 descriptor나 슬로건을 결합하지 않음
- 단색 출력에서는 청록 획을 별도 명도로 남기지 않고 전체를 한 색으로 통일

## 검토 메모

일반적인 `S`·화살표·원형 연결 심볼은 시각 검색에서 유사 사례가 많아 제외했습니다. 이 검색은 방향을 좁히기 위한 검토이며 정식 상표 조사나 법률 검토를 대신하지 않습니다.

운영 자산 매핑은 다음과 같습니다.

- 기본·반전·세로형·단색 로고: `static/brand/`
- 정사각형 브랜드 마크: `static/brand/seori-labs-mark.svg`
- 웹사이트 파비콘: `static/favicon.svg`, `static/favicon.png`, `static/favicon.ico`

## 재생성

`build_assets.py`는 Python `fontTools`와 공식 Inter 4.1 배포본의 `InterVariable.ttf`를 사용합니다. 실행 시 폰트의 SHA-256을 확인하고 모든 최종 SVG를 재생성합니다.

```sh
python3 design/brand-v2/build_assets.py --font /path/to/InterVariable.ttf
```
