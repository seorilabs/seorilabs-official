#!/usr/bin/env python3
"""Build the outlined Seori Labs Shared Stem identity from Inter 4.1."""

from __future__ import annotations

import argparse
import hashlib
import re
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


INK = "#112128"
CYAN = "#58C7C4"
PAPER = "#F9FBFB"
FROST = "#EEF2F2"
MUTED = "#52636A"
FONT_SHA256 = "4989b125924991b90d05b2d16e0e388c48f7d5bb8b30539bbf9c755278d0ccaf"
WORDMARK = "Seori Labs"


def compact_path(path_data: str) -> str:
    def compact_number(match: re.Match[str]) -> str:
        value = float(match.group(0))
        rounded = f"{value:.2f}".rstrip("0").rstrip(".")
        return "0" if rounded in {"-0", ""} else rounded

    return re.sub(r"-?\d+(?:\.\d+)?", compact_number, path_data)


def load_wordmark(font_path: Path) -> tuple[list[tuple[str, int]], int]:
    digest = hashlib.sha256(font_path.read_bytes()).hexdigest()
    if digest != FONT_SHA256:
        raise SystemExit(f"InterVariable.ttf SHA-256 mismatch: {digest}")

    font = instantiateVariableFont(TTFont(font_path), {"wght": 780}, inplace=False)
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    metrics = font["hmtx"].metrics
    paths: list[tuple[str, int]] = []
    cursor = 0

    for character in WORDMARK:
        glyph_name = cmap[ord(character)]
        if character != " ":
            pen = SVGPathPen(glyph_set)
            glyph_set[glyph_name].draw(pen)
            paths.append((compact_path(pen.getCommands()), cursor))
        cursor += metrics[glyph_name][0]

    return paths, cursor


def svg_document(view_box: str, title: str, description: str, body: str) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view_box}" role="img" aria-labelledby="title desc">
  <title id="title">{title}</title>
  <desc id="desc">{description}</desc>
{body}
</svg>
'''


def symbol(x: float, y: float, scale: float, ink: str, accent: str) -> str:
    return f'''  <g transform="translate({x} {y}) scale({scale})">
    <path d="M10 42 27 8h10l17 34H42L32 21 22 42Z" fill="{ink}"/>
    <rect x="13" y="50" width="43" height="8" fill="{ink}"/>
    <rect x="48" y="50" width="8" height="23" fill="{ink}"/>
    <rect x="13" y="65" width="43" height="8" fill="{ink}"/>
    <rect x="13" y="65" width="8" height="23" fill="{ink}"/>
    <rect x="13" y="80" width="43" height="8" fill="{ink}"/>
    <path d="M74 6h12v82H74Z" fill="{ink}"/>
    <path d="M59 24h15v12H59Z" fill="{accent}"/>
  </g>'''


def wordmark(paths: list[tuple[str, int]], x: float, baseline: float, scale: float, fill: str) -> str:
    path_elements = "\n".join(
        f'    <path d="{path_data}" transform="translate({offset} 0)"/>'
        for path_data, offset in paths
    )
    return f'''  <g fill="{fill}" transform="translate({x} {baseline}) scale({scale} {-scale})">
{path_elements}
  </g>'''


def write_asset(output_dir: Path, name: str, contents: str) -> None:
    (output_dir / name).write_text(contents, encoding="utf-8")


def build(font_path: Path, output_dir: Path) -> None:
    paths, units = load_wordmark(font_path)
    output_dir.mkdir(parents=True, exist_ok=True)

    write_asset(
        output_dir,
        "seori-labs-symbol.svg",
        svg_document(
            "0 0 96 96",
            "Seori Labs Shared Stem symbol",
            "A geometric symbol that stacks Seo and Ri on one shared stem to form the complete Korean name Seori.",
            symbol(0, 0, 1, INK, CYAN),
        ),
    )
    write_asset(
        output_dir,
        "seori-labs-symbol-mono.svg",
        svg_document(
            "0 0 96 96",
            "Seori Labs Shared Stem monochrome symbol",
            "A single-color symbol that stacks Seo and Ri on one shared stem.",
            symbol(0, 0, 1, INK, INK),
        ),
    )
    write_asset(
        output_dir,
        "seori-labs-logo.svg",
        svg_document(
            "0 0 408 112",
            "Seori Labs logo",
            "Primary Seori Labs logo with the Shared Stem symbol and outlined wordmark.",
            symbol(8, 8, 1, INK, CYAN) + "\n" + wordmark(paths, 132, 75, 0.024, INK),
        ),
    )
    write_asset(
        output_dir,
        "seori-labs-logo-reverse.svg",
        svg_document(
            "0 0 408 112",
            "Seori Labs reverse logo",
            "Reverse Seori Labs logo for dark backgrounds.",
            symbol(8, 8, 1, PAPER, CYAN) + "\n" + wordmark(paths, 132, 75, 0.024, PAPER),
        ),
    )
    wordmark_width = units * 0.024
    write_asset(
        output_dir,
        "seori-labs-logo-stacked.svg",
        svg_document(
            "0 0 340 224",
            "Seori Labs stacked logo",
            "Stacked Seori Labs logo for compact layouts.",
            symbol(122, 20, 1, INK, CYAN)
            + "\n"
            + wordmark(paths, (340 - wordmark_width) / 2, 182, 0.024, INK),
        ),
    )
    favicon_body = (
        f'  <rect x="4" y="4" width="88" height="88" rx="20" fill="{INK}"/>\n'
        + symbol(9.6, 9.6, 0.8, PAPER, CYAN)
    )
    write_asset(
        output_dir,
        "seori-labs-favicon.svg",
        svg_document(
            "0 0 96 96",
            "Seori Labs favicon",
            "The Seori Labs Shared Stem symbol on a dark rounded square.",
            favicon_body,
        ),
    )

    board_body = f'''  <rect width="1440" height="1024" fill="{FROST}"/>
  <rect x="56" y="48" width="1328" height="928" rx="32" fill="#FFFFFF"/>
  <text x="104" y="114" fill="#0F7D7A" font-family="Inter, Pretendard, sans-serif" font-size="18" font-weight="800" letter-spacing="2.4">SEORI LABS IDENTITY — SHARED STEM</text>
  <text x="104" y="174" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="52" font-weight="780">두 사람의 성에서 시작한, 하나의 이름.</text>
  <text x="106" y="216" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="19" font-weight="560">Seo and Yi become one complete name: Seori.</text>

  <g transform="translate(104 276)">
    <rect width="586" height="220" rx="22" fill="#F7F9F9" stroke="#DCE5E5"/>
{symbol(34, 54, 1.16, INK, CYAN)}
{wordmark(paths, 180, 126, 0.029, INK)}
    <text x="36" y="190" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="14" font-weight="650">PRIMARY — NO TAGLINE</text>
  </g>

  <g transform="translate(734 276)">
    <rect width="602" height="220" rx="22" fill="{INK}"/>
{symbol(34, 54, 1.16, PAPER, CYAN)}
{wordmark(paths, 180, 126, 0.029, PAPER)}
    <text x="36" y="190" fill="#B8C8C8" font-family="Inter, Pretendard, sans-serif" font-size="14" font-weight="650">REVERSE</text>
  </g>

  <g transform="translate(104 548)">
    <text x="0" y="0" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="26" font-weight="780">Symbol logic</text>
    <g transform="translate(0 34)">
      <rect width="258" height="232" rx="20" fill="#F7F9F9" stroke="#DCE5E5"/>
      <g opacity="0.22" stroke="#7A8D92" stroke-width="1">
        <path d="M32 28V196M64 28V196M96 28V196M128 28V196M160 28V196M192 28V196M224 28V196"/>
        <path d="M24 36H234M24 68H234M24 100H234M24 132H234M24 164H234M24 196H234"/>
      </g>
{symbol(72, 62, 1.18, INK, CYAN)}
    </g>
    <text x="286" y="72" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="21" font-weight="760">서 — first family name</text>
    <text x="286" y="100" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="16" font-weight="560">위쪽 모듈은 남편의 성 서에서 시작</text>
    <text x="286" y="140" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="21" font-weight="760">리 — second family name</text>
    <text x="286" y="168" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="16" font-weight="560">아래쪽 모듈은 아내의 성 이를 서리 안에 담음</text>
    <text x="286" y="208" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="21" font-weight="760">Shared stem — one Seori</text>
    <text x="286" y="236" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="16" font-weight="560">두 음절이 오른쪽 세로축을 공유해 하나가 됨</text>
  </g>

  <g transform="translate(772 548)">
    <text x="0" y="0" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="26" font-weight="780">Core palette</text>
    <g transform="translate(0 34)">
      <rect width="156" height="116" rx="18" fill="{INK}"/>
      <text x="18" y="76" fill="{PAPER}" font-family="Inter, Pretendard, sans-serif" font-size="15" font-weight="760">Seori Ink</text>
      <text x="18" y="98" fill="#B8C8C8" font-family="Inter, Pretendard, sans-serif" font-size="13" font-weight="650">#112128</text>
    </g>
    <g transform="translate(174 34)">
      <rect width="156" height="116" rx="18" fill="{CYAN}"/>
      <text x="18" y="76" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="15" font-weight="760">Signal Cyan</text>
      <text x="18" y="98" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="13" font-weight="650">#58C7C4</text>
    </g>
    <g transform="translate(348 34)">
      <rect width="156" height="116" rx="18" fill="{PAPER}" stroke="#DCE5E5"/>
      <text x="18" y="76" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="15" font-weight="760">Paper</text>
      <text x="18" y="98" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="13" font-weight="650">#F9FBFB</text>
    </g>
    <text x="0" y="190" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="20" font-weight="760">32px</text>
    <rect x="70" y="162" width="40" height="40" rx="9" fill="{INK}"/>
{symbol(74, 166, 0.33, PAPER, CYAN)}
    <text x="140" y="190" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="20" font-weight="760">Mono</text>
{symbol(216, 160, 0.46, INK, INK)}
    <text x="302" y="190" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="14" font-weight="600">권장 최소 심볼 24px</text>
  </g>

  <path d="M104 872H1336" stroke="{CYAN}" stroke-width="4"/>
  <text x="104" y="918" fill="{INK}" font-family="Inter, Pretendard, sans-serif" font-size="18" font-weight="760">Two surnames. One complete name. One shared foundation.</text>
  <text x="104" y="948" fill="{MUTED}" font-family="Inter, Pretendard, sans-serif" font-size="15" font-weight="560">Primary identity — two colors, one complete name, one shared stem.</text>'''
    write_asset(
        output_dir,
        "seori-labs-brand-board.svg",
        svg_document(
            "0 0 1440 1024",
            "Seori Labs Shared Stem brand board",
            "A brand board presenting the Shared Stem symbol, outlined wordmark, core palette, and small-size use.",
            board_body,
        ),
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--font", type=Path, required=True)
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path(__file__).resolve().parent / "final",
    )
    args = parser.parse_args()
    build(args.font, args.output_dir)


if __name__ == "__main__":
    main()
