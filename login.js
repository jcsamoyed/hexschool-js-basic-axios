const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const help = document.querySelector("#help");

function signIn() {
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
    .post("https://hexschool-tutorial.herokuapp.com/api/signin", account)
    .then(function (res) {
      console.log(res);
      if (res.data.message == "此帳號不存在或帳號密碼錯誤") {
        help.textContent =
          "This email address does not exist or the email and password is incorrect.";
        return;
      } else if (res.data.message == "Email 格式不正確") {
        help.textContent = "Please enter the correct email.";
        return;
      }
      email.value = "";
      password.value = "";
      help.textContent = "Login success!";
    })
    .catch(function (error) {
      console.log(error);
    });
}

submit.addEventListener("click", function () {
  signIn();
});
