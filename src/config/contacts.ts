export const WHATSAPP_NUMBER = '5567991452985';
export const WHATSAPP_FORMATTED_NUMBER = '+55 67 99145-2985';
export const WHATSAPP_API_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
export const WA_ME_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const getWhatsappMessageUrl = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
