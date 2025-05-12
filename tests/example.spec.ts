import {test} from "@playwright/test";
import MainPage from "../src/PO/MainPage";
import AuthController from "../src/apiControllers/authController";


test.describe('Providers test', () => {
    let mainPage: MainPage

    test('Check providers', async ({page}) => {
        mainPage = new MainPage(page)

        await mainPage.navTo('/')
        await mainPage.openLoginModal()
        await mainPage.login({
            email: 'samoilenkofluttershy@gmail.com',
            password: '193786Az()'
        })

        const text = await mainPage.getProvidersText()

        console.log(text)


    })
})