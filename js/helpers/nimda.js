import { getUserLogged } from "../auth/getUser.js";
import { supabase } from "../config/supabase.config.js";

const checkSuperUser = async () => {
  const user = await getUserLogged();
  const usersContainer = document.querySelector(".users");

  if (!user) {
    window.location.href = "/";
    return;
  }

  if (user.id !== "be85e04a-292a-4cb0-95cf-1f1ca5742a9a") {
    window.location.href = "/";
    return;
  }

  const { data } = await supabase.from("users").select().neq("name", "admin");
  let users = "";
  data.forEach(({ email, name }) => {
    users += /* html */ `
    <div class="user__card-container">
      <div class="user__card">
        <div class="user__card-info">
          <p class="user__card-name">Nombre: ${name}</p>
          <p class="user__card-email">Correo: ${email}</p>
        </div>
        <div class="user__card-actions">
          <button class="user__card-action edit">Editar <i class='bx bxs-pencil'></i></button>
          <button class="user__card-action delete">Borrar <i class='bx bxs-trash'></i></button>
        </div>
      </div>
    </div>
    `;
  });

  usersContainer.innerHTML = users;
};

checkSuperUser();
