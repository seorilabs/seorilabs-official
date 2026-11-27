# First Light rollout

Revision 1 · 2026-11-27

The studio selected First Light in the design conversation. The selected artwork is shown in the offline First Light asset review. The design and test plans below are ready for approval as one rollout.

## Website

Publish an English studio page at `/en/studio/` and link to it from the existing homepage studio section. Show the landscape and portrait splash compositions and provide direct downloads of the English logo and both stills. Use the new symbol in site chrome, favicon and the existing Organization logo URL. Update the studio brand guide to show the new assets and their sources. Keep the existing URL, localization, consent, catalog and legal behavior.

## Games

```text
Cold launch → First Light → Game title → Existing start flow
                     ↳ Local load and service initialization continue
```

The shared Godot addon owns the artwork and splash control. The reference project and newly generated games enable it through their project bootstrap settings. Updating an existing game's common bundle alone leaves its setting off. The starter template installs the verified common bundle and pins its source commit and file hashes. The outgame skill points to that default and tells authors how to verify it.

First Light runs once per cold launch. Use separate bundled crystal backgrounds for landscape and portrait and keep the English mark within the central safe area when the window changes shape. Two halves slide together, then the wordmark appears. The full opening completes within 1.2 seconds. Pressing or tapping dismisses it and consumes that input before the title receives further input. Use a short still of up to 0.4 seconds when reduced motion is enabled. The title and its real loading and error states remain available after dismissal or timeout. If artwork cannot load, proceed to the title. The splash runs offline and silent.

## Acceptance and verification

| Condition | Verification |
| --- | --- |
| WEB-1. The official English page shows both exact studio compositions and offers the three downloads. | Build the static site, open the link from the homepage at desktop and phone widths, and check focus, direct URLs, file sizes, image dimensions and bytes. |
| WEB-2. The official logo appears in light and dark modes, in browser tabs and in organization metadata. | Verify rendered site chrome, favicon variants and Organization JSON-LD. Run existing catalog, support, legal, URL and build checks. Verify the public GitHub Pages deployment and response bytes after merge. |
| GAME-1. The correct composition displays once, the wordmark fits at small and wide sizes, and the title appears automatically. | Run Godot headless startup assertions and inspect the actual rendered engine screen at 320 × 568, 390 × 844, 1280 × 720 and a wider desktop viewport. Check a resize across the orientation boundary. |
| GAME-2. Input dismisses the splash without activating the title, and initialization still completes or presents its normal error state. | Check keyboard, mouse and touch input in development. Exercise first launch, relaunch, reduced motion, offline startup, delayed and failed initialization, and the transition to the existing title. |
| GAME-3. The starter includes and enables the pinned assets by default. | Check the bundle, run the reference and starter regression suites, initialize a separate test project with the standard command, then see the splash and reach its title. |
| SKILL-1. New game instructions route to the pinned default splash. | Validate the shared skill repository and its consumer symlinks, then cross-check the instructions against the verified starter. |

Use development-only L3 verification in the web and Godot repositories. Complete three independent functional and visual review rounds for the studio page and the Godot splash. Use the existing site build and Godot CI as their respective regression evidence. CSS/bitmap appearance is evaluated from live renders, and deterministic behavior starts with failing assertions. No native SDK or export settings are in scope. The site goes through its existing GitHub Pages production workflow. Game repositories merge their source and template changes. No Android, iOS or Steam build or store promotion is in this rollout.

## Rollout and rollback

Merge the studio page and shared Godot addon through their repository PRs. Build the starter bundle from the merged foundation SHA, then verify the starter and update the shared skill. Restore the prior branding with a Pages revert PR if necessary. A template or addon revert can restore the previous bundle pin, leaving game save data unaffected.

The artwork uses the approved native-generated crystal plates in two orientations and an outlined Inter 4.1 wordmark. Original sources, checksums and processing are in the First Light asset record.
