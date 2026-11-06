/**
 * Renders a JSON-LD graph into the page.
 *
 * One component rather than a hand-written <script> per page, so the
 * serialisation and the escaping are decided once.
 *
 * On the escaping: JSON.stringify can emit the two-character sequence
 * `</` inside a string value, which ends the <script> element early and
 * leaves the rest of the graph as stray markup. Replacing `<` with its
 * unicode escape is the standard fix and leaves the parsed JSON
 * identical, because < decodes back to `<`.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Serialised from our own typed content, never from user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
