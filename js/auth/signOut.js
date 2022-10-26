import { supabase } from "../config/supabase.config.js";

/**
 * cerrar la sesion activa
 */
export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.reload();
};
