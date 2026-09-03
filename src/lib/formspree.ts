  // 1. Centralized Formspree IDs
  export const FORMSPREE_IDS = {
    WORKPLACE_HQ_RESOURCES: 'xdenqbvr',
    WORKPLACE_HQ_CONTACT: 'xdenqbvr', // Swap when you create a dedicated contact form
    LAGOS_JOBS_CONTACT: 'xrpgkjde',
  } as const

  interface FormspreePayload {
    [key: string]: any
  }

  /**
   * Central utility to send notifications via Formspree.
   * @param formId - Formspree form ID or key from FORMSPREE_IDS
   * @param data - Object containing form fields to send
   */
  export async function sendFormspreeNotification(
    formId: string,
    data: FormspreePayload
  ): Promise<boolean> {
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.error(`Formspree error (${response.status}):`, await response.text())
        return false
      }

      return true
    } catch (error) {
      console.error('Failed to submit to Formspree:', error)
      return false
    }
  }