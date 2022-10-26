import { supabase } from "../config/supabase.config.js";

/**
 * Devuelve el correo electrónico, el nombre y la identificación del usuario si el usuario ha iniciado sesión; de lo contrario, devuelve nulo
 * @returns El objeto de usuario.
 */
export const getUserLogged = async () => {
  try {
    const { data } = await supabase.auth.getUser();
    const { user } = await data;

    if (!user) {
      return null;
    }

    return {
      email: user.email,
      name: user.user_metadata.name,
      id: user.id,
      role: user.role,
    };
  } catch (error) {
    console.log(error);
  }
};
