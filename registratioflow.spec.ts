import { test, expect } from '@playwright/test'

//Store testing data and functions in the separate window
const { generateRandomEmail, firstNameInput, lastNameInput, passwordInput} = require("../tests/functionsAndData.ts");

test.describe.serial('User sign up form', () => {

  test('User registers by filling up the input form', async ({ page }) => {
    
    //variables used in the testing
    const registrationWindow = 'https://dashboard.iproyal.com/register';
    const titleSignUp = page.getByRole('heading', {name:'Sign up'});
    const fieldFirstName = page.locator('[name="firstName"]');
    const fieldLastName = page.locator('[name="lastName"]');
    const fieldEmailAddress = page.locator('[name="email"]');
    const fieldPassword = page.locator('[name="password"]');
    const buttonSignUp = page.locator('[data-testid="register-submit-button"]');
    const disposableEmailErrorMessageField = page.locator('[data-testid="pane-card-error-banner"]');
    const disposableEmailErrorMessageText = 'Disposable or temporary email address domains are not allowed.';
    
    //User fills registration form. The test is failed. I was not able find a way around the reCaptcha. When I fill the form manually reCaptcha does not appear.
    await page.goto(registrationWindow);
    await expect(titleSignUp).toHaveText('Sign up');
    await fieldFirstName.click();
    await fieldFirstName.fill(firstNameInput);
    await fieldLastName.click();
    await fieldLastName.fill(lastNameInput);
    await fieldEmailAddress.click();
    await fieldEmailAddress.fill(generateRandomEmail);
    await fieldPassword.click();
    await fieldPassword.fill(passwordInput);
    await buttonSignUp.click();
    await expect(disposableEmailErrorMessageField).toHaveText(disposableEmailErrorMessageText);
    
});
})