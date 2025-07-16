import {Locator, test} from "@playwright/test";
import MainPage from "../src/PO/MainPage";
import {EXPECTED_RESULTS} from "../src/expectedResults/expectedResults";
import VpnController from "../src/VpnController/vpnController";



const testData = {
    IE: {
        location: 'Ireland',
        expectedResult: EXPECTED_RESULTS.IE
    },
    AU: {
        location: 'Australia - Melbourne',
        expectedResult: EXPECTED_RESULTS.AU
    },
    CA: {
        location: 'Canada - Montreal',
        expectedResult: EXPECTED_RESULTS.CA
    },
    DE: {
        location: 'Germany - Frankfurt - 1',
        expectedResult: EXPECTED_RESULTS.DE
    },
    NZ: {
        location: 'New Zealand',
        expectedResult: EXPECTED_RESULTS.NZ
    },
    NO: {
        location: 'Norway',
        expectedResult: EXPECTED_RESULTS.NO
    }
};

for (let {location} of Object.values(testData)) {

    test.describe(`Providers test ${location}`, () => {
        let mainPage: MainPage
        let vpnController: VpnController

        test.beforeEach(async ({page}) => {
            mainPage = new MainPage(page)
            vpnController = new VpnController()

             await vpnController.vpnConnect(location)

            while (true) {
                const status = await vpnController.isConnectedToLocation(location)

                if (status === true){
                    break
                } else {
                    await vpnController.sleepVPN(2000)
                }
            }

            await mainPage.navTo('/')
            await mainPage.openLoginModal()
            await mainPage.login({
                email: 'samoilenkofluttershy@gmail.com',
                password: '193786Az()'
            })
        })

        test('Check games of providers', async () => { 
            const providers: Array<Locator> = await mainPage.getAllProviders()

            for (let provider of providers) {
                await mainPage.openProvidersDropdown()
                const providerName = await provider.textContent()
                await mainPage.clickOnProvider(provider)


                for (let i = 0; i <= 1; i++) {
                    const gameTitle = await mainPage.getGameTitle(i)
                    const playButtons: Array<Locator> = await mainPage.getAllPlayButtons()
                    await test.step(`Checking ${gameTitle} of provider: ${providerName}`, async () => {
                    await mainPage.clickOnPlayButton(playButtons[i])
                    await mainPage.page.waitForTimeout(15000)
                    

                    await mainPage.page.screenshot({path: `Screenshots/${location}/${providerName}_${gameTitle}.png`})
                })
                    await mainPage.navTo('/')
                    await mainPage.openProvidersDropdown()
                    await mainPage.clickOnProvider(provider)
                }
                await mainPage.navTo('/')
                
            }


        })


        test.afterAll(async () => {
            await vpnController.vpnDisconnect()
            await vpnController.sleepVPN(2000)
        })
    })
}