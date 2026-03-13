// marked is loaded via CDN <script> tag in index.html before this module runs.
export function parseMarkdown(content) {
  if (typeof marked !== 'undefined') {
    return marked.parse(content || '');
  }
  // Fallback: very basic paragraph wrapping
  return '<p>' + String(content || '').replace(/\n\n/g, '</p><p>') + '</p>';
}
