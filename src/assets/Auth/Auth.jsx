const validateForm = (setFormValidity) => {
  const isValid = Object.values(validationErrors).every(
    (error) => error === ""
  );

  setFormValidity(isValid);
};

const validateField = (fieldName, value, setValidationErrors) => {
  let errorMessage = "";

  switch (fieldName) {
    case "fullname":
      errorMessage = validateName(value);
      break;

    case "username":
      errorMessage = validateUsername(value);
      break;

    case "email":
      errorMessage = validateEmail(value);
      break;

    case "address":
      errorMessage = value === "" ? "Address is required" : "";
      break;

    case "phone":
      errorMessage = value === "" ? "Phone is required" : "";
      break;

    case "password":
      errorMessage = value === "" ? "Password is required" : "";
      break;

    case "confirmPassword":
      errorMessage =
        value === ""
          ? "Confirm Password is required"
          : password !== confirmPassword
          ? "Passwords do not match"
          : "";
      break;

    default:
      break;
  }

  setValidationErrors((prevErrors) => ({
    ...prevErrors,
    [fieldName]: errorMessage,
  }));
};

const validateName = (value) => {
  const words = value.trim().split(/\s+/);
  const fullname = value.trim();

  const returnValue =
    fullname === ""
      ? "please enter fullname"
      : fullname === "admin"
      ? "Forbidden user name"
      : fullname.length < 3
      ? "username too short"
      : words.length < 2
      ? "Enter both firstname and lastname"
      : words[0].length < 3 || words[1].length < 3
      ? "firstname or lastname too short"
      : "";

  return returnValue;
};

const validateUsername = (value) => {
  const username = value.trim();

  const returnValue =
    username === ""
      ? "please enter username"
      : username.length < 3
      ? "username too short"
      : "";
};

const validateEmail = (value) => {
  const email = value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const returnValue =
    email === ""
      ? "please enter email address"
      : !emailRegex(email)
      ? "please enter a valid email address"
      : "";

  return returnValue;
};

 const handleInputChange = (e, stateProps) => {
   stateProps(e.target.value);
 };

export {
  validateForm,
  validateField,
  validateName,
  validateUsername,
  validateEmail,
  handleInputChange,
};