# Shipping raster provenance

Every non-vector asset served from `public/`, where it came from, and what still
needs replacing.

| File | Source | Status |
|---|---|---|
| `brand/coin.png` | Client-supplied 3D render, background removed (Photoroom), resized to 1200px wide. Original: `Gold_coin_floating_in_studio_20260910120017-Photoroom.png` | **Final** — client asset |
| `pattern/geo-tile.png` | Client-supplied Islamic geometric pattern (`Islamic_geometric_pattern_vector_2K_20260910120652.jpeg`). Rebuilt as a 4-way mirror of the artefact-free bottom-right quadrant, which removes a flare in the source's top-left corner and makes the tile seamless by construction. | **Final** — derived from client asset |
| `pattern/geo-alpha.png` | Same tile, converted to white lines with alpha taken from line darkness, so the pattern can be tinted by a design token at any opacity over any ground. This is the file the CSS actually uses. | **Final** — derived from client asset |
| `brand/*.svg` | Client logo suite, copied unmodified from `MAGHANIM FINAL PRODUCT/`. | **Final** — client asset |
| `brand/*-tight.svg` | The same artwork with the viewBox cropped to its true bounding box. The originals sit inside a large empty square canvas and render as specks at header size; these are what the components use. Paths are untouched — nothing recoloured, stretched or redrawn. | **Final** — derived from client asset |
| `src/app/icon.svg`, `src/app/apple-icon.svg` | Generated from `mark-gold-tight.svg` on the emerald ground. | **Final** — derived from client asset |

## Still to replace

- Partner logo files for Flocash, Mawarid Finance, Arab Financial Services and
  Odoo. The Partners section currently shows labelled reservations reading
  "Logo to follow" — deliberately not fake logos.
- An Open Graph image. None is shipped; add one once approved copy exists.
