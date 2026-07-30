# Font substitutions

Three fonts used in the original Canva design are paid/commercial fonts that are not available as free web fonts. I substituted free Google Fonts that are visually close. If you own licenses for the originals, these can be swapped in later (see notes below).

| Used on | Original Canva font | Free substitute used in code |
|---|---|---|
| Home / Career OS / More Work — headings | The Seasons (paid) | Cormorant Garamond |
| Home / Career OS / More Work — body text | Gotham (paid) | Montserrat |
| Via page — logo/wordmark | TAN Nimbus (paid) | Fraunces |
| Via page — headings | Playfair Display | Playfair Display (already free, used as-is) |
| Via page — body text | Assistant | Assistant (already free, used as-is) |
| CV page — headings | Yeseva One | Yeseva One (already free, used as-is) |
| CV page — body text | Open Sans | Open Sans (already free, used as-is) |

## If you purchase/own the original fonts later
1. Add the font files to a new `assets/fonts/` folder.
2. Add `@font-face` rules for them at the top of `styles.css`.
3. Update the `--font-*` variables in the `:root` block of `styles.css` to reference the real font names instead of the substitutes above.

No other changes are needed — every page already reads its fonts from those CSS variables.
