# 자산 출처

원본: `seorilabs/lizard-tycoon` 저장소, 릴리스 1.4.2 기준

| 이 저장소         | 원본 경로                                  |
| ----------------- | ------------------------------------------ |
| `icon-256.webp`   | `play-store/icon-512.png`                  |
| `shots/*.webp`    | `play-store/screenshots/phone/*.png`       |
| `shots/en/*.webp` | `play-store/screenshots/phone/en-US/*.png` |

## 변환 규칙

픽셀 아트라 정수 배율로만 축소한다. 원본 1080x1920을 정확히 1/2인 540x960으로 줄인다.
비정수 배율은 픽셀 격자를 뭉개 게임이 실제보다 흐릿해 보인다.

```sh
cwebp -q 80 -resize 540 960 <원본>.png -o <대상>.webp
cwebp -q 82 -resize 256 256 play-store/icon-512.png -o icon-256.webp
```

스토어 스크린샷이 바뀌면 같은 명령으로 다시 만든다.
