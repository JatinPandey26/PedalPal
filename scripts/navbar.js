const logged_out_navbar_options = document.querySelector(
 ".logged-out-nav-options"
);
const logged_in_navbar_options = document.querySelector(
 ".logged-in-nav-options"
);
const logout_button = document.querySelector(".logout-button");

function authenticationCheck() {
 const user = localStorage.getItem("user");
 console.log(user);
 if (user) {
  logged_out_navbar_options.style = "display: none";
  logged_in_navbar_options.style = "display: flex";
 } else {
  logged_in_navbar_options.style = "display: none";
  logged_out_navbar_options.style = "display: flex";
 }
}

function logout() {
 localStorage.removeItem("user");
 authenticationCheck();
}

logout_button.addEventListener("click", logout);

window.onload = authenticationCheck;
