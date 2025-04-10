export function htmlToCode(html: string | null | undefined): string {
  if (!html) return '';

  const code = html
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\s*p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\s*div[^>]*>/gi, '')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\s*span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/gi, '&')
    .replace(/<[^>]+>/g, '');

  return code.trim();
}
