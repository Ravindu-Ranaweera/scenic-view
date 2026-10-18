/**
 * Prefixes a public-folder path with the deployment base path.
 *
 * next/link and next/image normally add basePath for you, but not when
 * `images.unoptimized` is set: the src then bypasses the loader that
 * would have added it. On a GitHub Pages project site that leaves every
 * photograph pointing at the domain root and 404ing, so these paths are
 * prefixed explicitly.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time, so this stays a plain
 * string concatenation at runtime.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
