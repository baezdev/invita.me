import { supabase } from "../config/supabase.config.js";

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

export const loginWithEmail = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return await response;
};
