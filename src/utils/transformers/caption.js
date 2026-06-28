/**
 * Custom Shiki transformer that adds a LaTeX-style caption to a code block.
 *
 * Reads a `caption="..."` meta attribute on a fenced code block and wraps the
 * rendered `<pre>` in a `<figure>` with a `<figcaption>` below it. Use it to
 * label and reference examples the way you would with `\caption{}` in LaTeX:
 *
 * ```rust caption="Listing 1: A Ref and RefMut held at the same time."
 * ...
 * ```
 *
 * Numbering is authored explicitly inside the caption text (e.g. "Listing 1:")
 * so that numbers stay stable per post — the transformer runs per block and has
 * no reliable per-page counter to auto-increment.
 */
export const transformerCaption = () => ({
  root(node) {
    const meta = this.options.meta?.__raw;
    if (!meta) return;

    const match = meta.match(/caption=(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/);
    if (!match) return;

    const caption = match[1] ?? match[2] ?? match[3];
    if (!caption) return;

    const preIndex = node.children.findIndex(
      child => child.type === "element" && child.tagName === "pre"
    );
    if (preIndex === -1) return;

    const pre = node.children[preIndex];

    node.children[preIndex] = {
      type: "element",
      tagName: "figure",
      properties: { class: ["code-listing"] },
      children: [
        pre,
        {
          type: "element",
          tagName: "figcaption",
          properties: {
            class: [
              "mt-2 mb-2 text-center text-xs italic text-foreground/70",
            ],
          },
          children: [{ type: "text", value: caption }],
        },
      ],
    };
  },
});
