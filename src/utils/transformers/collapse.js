/**
 * Custom Shiki transformer that collapses long code blocks.
 *
 * Blocks with more than `maxLines` lines get a `collapsible` class, their line
 * count in `data-lines`, and the number of preview lines in the
 * `--collapse-lines` CSS variable. typography.css clamps the block to that many
 * lines and fades the last few out, and PostDetails.astro adds the
 * "Show all N lines" toggle.
 *
 * Add `nocollapse` to a fenced code block's meta to always show it in full:
 *
 * ```rust nocollapse
 * ...
 * ```
 *
 * @param {Object} options - Configuration options for the transformer
 * @param {number} [options.maxLines=15] - Blocks longer than this collapse
 * @param {number} [options.previewLines=12] - Lines visible while collapsed
 */
export const transformerCollapse = ({
  maxLines = 15,
  previewLines = 12,
} = {}) => ({
  pre(node) {
    const meta = this.options.meta?.__raw ?? "";
    if (/(^|\s)nocollapse(\s|$)/.test(meta)) return;

    const lines = this.source.replace(/\n+$/, "").split("\n").length;
    if (lines <= maxLines) return;

    this.addClassToHast(node, "collapsible");
    node.properties["data-lines"] = String(lines);

    const style = String(node.properties.style || "");
    const sep = style && !style.trim().endsWith(";") ? ";" : "";
    node.properties.style = `${style}${sep}--collapse-lines: ${previewLines};`;
  },
});
