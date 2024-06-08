import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => DOMPurify.sanitize(input, { USE_PROFILES: { html: false } });
