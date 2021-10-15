const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const help = document.querySelector("#help");

function signup() {
  let account = {};
  account.email = email.value;
  account.password = password.value;

  if (!email.value && !password.value) {
    help.textContent = "Please enter the email and password.";
    return;
  } else if (!email.value) {
    help.textContent = "Please enter the email.";
    return;
  } else if (!password.value) {
    help.textContent = "Please enter the password.";
    return;
  }
  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signup", account)
    .then(function (res) {
      console.log(res);
      if (res.data.message == "此帳號已被使用") {
        help.textContent = "This email address has already exists.";
        return;
      } else if (res.data.message == "Email 格式不正確") {
        help.textContent = "Please enter the correct email.";
        return;
      }
      email.value = "";
      password.value = "";
      help.textContent = "Registration success!";
    })
    .catch(function (error) {
      console.log(error);
    });
}

submit.addEventListener("click", function () {
  signup();
});
