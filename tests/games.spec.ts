import {Locator, test} from "@playwright/test";
import MainPage from "../src/PO/MainPage";
import {EXPECTED_RESULTS} from "../src/expectedResults/expectedResults";
import AuthController from "../src/apiControllers/authController";
import VpnController from "../src/VpnController/vpnController";
import { USERS } from "../src/Users/users";



const testData = {
    IE: {
        location: 'Ireland',
        expectedResult: EXPECTED_RESULTS.IE,
        creds: USERS.IE
    },
    AU: {
        location: 'Australia - Melbourne',
        expectedResult: EXPECTED_RESULTS.AU,
        creds: USERS.AU
    },
    CA: {
        location: 'Canada - Montreal',
        expectedResult: EXPECTED_RESULTS.CA,
        creds: USERS.CA
    },
    DE: {
        location: 'Germany - Frankfurt - 1',
        expectedResult: EXPECTED_RESULTS.DE,
        creds: USERS.DE     
    },
    NZ: {
        location: 'New Zealand',
        expectedResult: EXPECTED_RESULTS.NZ,
        creds: USERS.NZ
    },
    NO: {
        location: 'Norway',
        expectedResult: EXPECTED_RESULTS.NO,
        creds: USERS.NO 
    }
};

for (let {location, creds} of Object.values(testData)) {

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
                email: creds.email,
                password: creds.password
            })
        })

        test('Check games of providers', async ({request}) => {
            const location = async () => {
               return (await request.get('https://www.kingbillycasino15.com/api/current_ip')).json()
            }
            console.log(await location())
            // const providerNames = await mainPage.getAllProviders(); 
            
            // for (const providerName of providerNames) {
            //     await mainPage.openProvidersDropdown();
            //     await mainPage.clickOnProvider(providerName);

            //     await mainPage.page.waitForTimeout(3000); 
            //     const playButtons = await mainPage.getAllPlayButtons();

            //     if (playButtons.length === 0) {
            //         console.warn(`No games found for provider: ${providerName}`);
            //         continue;
            //     }

            //     const numGamesToCheck = Math.min(2, playButtons.length); 
            //     for (let i = 0; i < numGamesToCheck; i++) {
            //         const gameTitle = await mainPage.getGameTitle(i);

            //         await test.step(`Checking "${gameTitle}" of provider "${providerName}"`, async () => {
            //             await mainPage.clickOnPlayButton(playButtons[i]);
            //             await mainPage.page.waitForTimeout(15000);

            //             const safeTitle = gameTitle.replace(/[<>:"\/\\|?*]/g, '-'); // sanitize filename
            //             await mainPage.page.screenshot({
            //                 path: `Screenshots/${location}/${providerName}_${safeTitle}.png`
            //             });

            //             await mainPage.navTo('/');
            //             await mainPage.openProvidersDropdown();
            //             await mainPage.clickOnProvider(providerName);
            //         });
            //     }

            //     await mainPage.navTo('/'); // reset to home before next provider
            // }
        });



        test.afterAll(async () => {
            await vpnController.vpnDisconnect()
            await vpnController.sleepVPN(2000)
        })
    })
}