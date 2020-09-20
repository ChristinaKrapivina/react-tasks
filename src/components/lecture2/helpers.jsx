function validateName(value) {
  let error;

  if (!value) {
    error = 'Your name is required';
  }

  return error;
}

function validateEmail(value) {
  let error;

  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

function validatePass(value) {
  let error;

  if (!value) {
    error = 'Password is required';
  } else if (value.length > 6) {
    error = 'Password should be at least 6 characters';
  }

  return error;
}

export const validateField = (name, value) => {
  switch (name) {
    case 'firstName':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'password':
      return validatePass(value);
    default:
      return null;
  }
}

export const validateForm = ( signin, email, firstName, password, confirmPassword ) => {
  const errors = [];

  if (!signin) {
    const nameError = validateName(firstName);
    nameError && errors.push(nameError);

    const passError = validatePass(password);
    passError && errors.push(passError);

    const confirmError = password !== confirmPassword ? 'Passwords don\'t match': '';
    confirmError && errors.push(confirmError);
  }
  const emailError = validateEmail(email);
  emailError && errors.push(emailError);

  return errors;
};