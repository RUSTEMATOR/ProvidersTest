import {Locator, Page} from "@playwright/test";
import BasePage from "./BasePage";
import { LoadFnOutput } from "module";
import { timeLog } from "console";
import { text } from "stream/consumers";

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
    private gameCount: Locator = this.page.locator('sup.menu-providers-select__games-count')
    private depositButton: Locator = this.page.locator('#header_dep_btn')
    private providersDropdown: Locator = this.page.locator('#games-page-providers-filter')
    private gameCard: Locator = this.page.locator('.game')
    private playGameButton: Locator = this.page.locator('.game__play')
    private gameTitle: Locator = this.page.locator('.game__title')
    private catalogueList: Locator = this.page.locator('.catalog__list')

    async openLoginModal() {
        await this.signInButton.click()
    }

    async login({email, password}: credentials) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.submitLoginButton.click()
        await this.depositButton.waitFor()
    }

    async openProvidersDropdown() {
        await this.providersDropdown.click()
    }

    async getProvidersText() {
        const providers = this.allProviders.all()
        const allGameCount = await this.gameCount.all()
        const providerNames: string[] = [];
        Promise.all(
            allGameCount.map(async (counter) => {
                await counter.evaluate((node) => {
                    node.remove()
                })
            })
        ).then(() => {
            console.log('All game counts removed');
        })

        for (let provider of await providers) {
            const text = await provider.textContent();
            if (typeof(text) !== 'undefined' && text !== null) {
                providerNames.push(text)
            } else {
                throw new Error('Provider text is undefined or null');
            }
        }

        return providerNames;
    }

    async getAllProviders() {
        return this.allProviders.all()   
    }

    async clickOnProvider(provider: Locator) {
        await provider.click()
    }

    async getAllGameCards(): Promise<Array<Locator>> {
        await this.catalogueList.waitFor({state: "visible"})
        return this.gameCard.all()
    }
    
    async hoverOverGameCard(locator: Locator) {
        await locator.hover()
    }

    async getAllPlayButtons(): Promise<Array<Locator>> {
        return await this.playGameButton.all()
    }

    async getGameTitle(index: number): Promise<string> {
        const gameCards = await this.getAllGameCards();

        const gameCard = gameCards[index];
        if (!gameCard) {
            throw new Error(`Game card at index ${index} not found.`);
        }

        await this.hoverOverGameCard(gameCard);

        const titleLocator = gameCard.locator(this.gameTitle);
        const titleText = await titleLocator.textContent();

        if (titleText === null) {
            throw new Error(`Title text at index ${index} is null.`);
        }

        return titleText;
    }

    async clickOnPlayButton(button: Locator) {
        await button.click()
    }

    get getGameCount() {
        return this.gameCount
    }

    get getProvidersDropdown() {
        return this.providersDropdown
    }

    
}