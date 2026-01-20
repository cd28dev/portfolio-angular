export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;

  // Estos los dejamos opcionales por si luego agregas un formulario
  name?: string;
  message?: string;
}
