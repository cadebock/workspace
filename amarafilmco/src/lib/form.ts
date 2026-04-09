/** Formspree POST URL. Set `PUBLIC_FORMSPREE_ID` in `.env` (form id from Formspree dashboard). */
export function getFormspreeAction(): string {
  const id = import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined;
  return id ? `https://formspree.io/f/${id}` : "";
}
