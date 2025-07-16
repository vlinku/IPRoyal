    //functions used in the main testing
    function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); 
    const emailDomain = "iproyal.com";
    return `${randomString}@${emailDomain}`;
  }

    //Testing data used
    const passwordInput = 'Candidate715*';
    const firstNameInput = 'John';
    const lastNameInput = 'Doe';
    const generateRandomEmail = randomEmail();
    const emailInput = 'test@test.com';
   

export {
    generateRandomEmail,
    firstNameInput,
    lastNameInput,
    passwordInput,
    emailInput
  };