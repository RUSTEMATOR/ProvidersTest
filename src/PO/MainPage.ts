import {Locator, Page} from "@playwright/test";
import BasePage from "./BasePage";

interface credentials {
    email: string,
    password: string
}

export default class MainPage extends BasePage {

    private signInButton: Locator = this.page.locator('#header_log_in_btn')
    private emailInput: Locator = this.page.locator('#login_modal_email_input')
    private passwordInput: Locator = this.page.locator('#login_password_input')
    private submitLoginButton : Locator = this.page.locator('#submit_login')
    private allProviders: Locator = this.page.locator('span.menu-providers-select__label')
    private depositButton: Locator = this.page.locator('#header_dep_btn')

    async openLoginModal() {
        await this.signInButton.click()
    }

    async login({email, password}: credentials) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.submitLoginButton.click()
        await this.depositButton.waitFor()
    }

    async getProvidersText() {
        const providers = this.allProviders.all()
        const providerNames: string[] = [];


    for (let provider of await providers) {
        const text = await provider.textContent();
        const filteredText = text?.replace(/\d+/g, '').trim(); // Remove numbers and trim whitespace
        if (filteredText) {
            providerNames.push(filteredText);
        }
    }

    return providerNames;
    }
}