import { supabase } from "../config/supabase.config.js";

/**
 * Toma un correo electrónico, una contraseña y un nombre, y luego usa la API de autenticación de Supabase para crear un nuevo usuario
 * con esa información.
 * @param email - La dirección de correo electrónico del usuario.
 * @param password - string
 * @param name - El nombre del usuario
 * @returns La respuesta es un objeto
 */
export const registerNewUser = async (email, password, name) => {
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  return await response;
};

/**
 * Toma un correo electrónico y una contraseña, y devuelve una respuesta de la API de Supabase.
 * @param email - La dirección de correo electrónico del usuario.
 * @param password - La contraseña del usuario.
 * @returns La respuesta es un objeto
 */
export const loginWithEmail = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return await response;
};
