export function cleanHtml(text: string | null | undefined): string {
  if (!text) return '';
  return text
    .replace(/<\/?(ul|li|p|br)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .trim();
}
