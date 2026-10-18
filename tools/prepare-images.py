"""Convert the camera originals in assets/images/ into web-ready JPEGs in assets/img/.

Handles HEIC, honours EXIF rotation, strips metadata, caps the long edge and
re-encodes at a sensible quality. Originals are left untouched.

    python tools/prepare-images.py
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-photos"
OUT = ROOT / "public" / "img"
THUMBS = ROOT / "public" / "img" / "thumbs"

MAX_EDGE = 1800
THUMB_EDGE = 420
QUALITY = 82

# source folder -> output name prefix
GROUPS = {
    "View": "view",
    "Common Amenities": "amenity",
    "Family Room": "family",
    "Twin Room ( Double room with twin beds )": "twin",
    "Double Room/Comfort Double Room": "comfort",
    "Double Room/Deluxe Double Room": "deluxe",
}


def convert(src: Path, dest: Path, max_edge: int) -> tuple[int, int]:
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)      # camera rotation baked in
        im = im.convert("RGB")                # drop alpha / CMYK oddities
        im.thumbnail((max_edge, max_edge), Image.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        return im.size


def main() -> int:
    if not SRC.is_dir():
        print(f"No source folder at {SRC}", file=sys.stderr)
        return 1

    OUT.mkdir(parents=True, exist_ok=True)
    total_in = total_out = 0

    for folder, prefix in GROUPS.items():
        files = sorted(
            p for p in (SRC / folder).iterdir()
            if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png", ".heic"}
        )
        if not files:
            print(f"  (nothing in {folder})")
            continue

        for i, src in enumerate(files, 1):
            name = f"{prefix}-{i:02d}.jpg"
            dest = OUT / name
            w, h = convert(src, dest, MAX_EDGE)
            convert(src, THUMBS / name, THUMB_EDGE)

            total_in += src.stat().st_size
            total_out += dest.stat().st_size
            shape = "landscape" if w > h else "portrait" if h > w else "square"
            print(f"{name:16} {w:>5}x{h:<5} {shape:10} {dest.stat().st_size/1024:7.0f} KB   <- {src.name}")

    print(f"\n{total_in/1048576:.1f} MB in  ->  {total_out/1048576:.1f} MB out")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
