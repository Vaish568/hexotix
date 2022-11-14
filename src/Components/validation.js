export const validation = (values) => {
  const error = {};
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexPhone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!values.firstName) {
    error.firstName = "Name is required!";
  }
  if (!values.email) {
    error.email = "Email is required!";
  } else if (!regexEmail.test(values.email)) {
    error.email = "Enter a valid email";
  }

  if (!values.Phone) {
    error.Phone = "Contact number is required!";
  } else if (!regexPhone.test(values.Phone)) {
    error.Phone = "Enter a valid number";
  }
  if (!values.password) {
    error.password = "password is required!";
  } else if (values.password.length < 8) {
    error.password = "passwod length should be >=8 !";
  }
  if (!values.confirmPassword) {
    error.confirmPassword = "Reneter your password!";
  } else if (values.password !== values.confirmPassword) {
    error.confirmPassword = "Recheck your password";
  }

  return error;
};
