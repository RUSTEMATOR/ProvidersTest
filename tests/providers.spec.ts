import {expect, Locator, test} from "@playwright/test";
import MainPage from "../src/PO/MainPage";
import {EXPECTED_RESULTS} from "../src/expectedResults/expectedResults";
import VpnController from "../src/VpnController/vpnController";
import { stat } from "fs";
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


function normalize(arr: string[]) {
  return arr.map(s => s.trim().toLowerCase()).sort();
}

for (let {location, creds, expectedResult} of Object.values(testData)) {

    test.describe.skip(`Check providers for ${location}`, () => {
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
        })

        test('Check list of providers with the expected data', async () => {
            await mainPage.navTo('/')
            await mainPage.openLoginModal()
            await mainPage.login({
                email: creds.email,
                password: creds.password
            })
            await mainPage.getProvidersDropdown.waitFor({state: "visible"})

            const providersList = await mainPage.getProvidersText()
            console.log(providersList)

            expect(normalize([...providersList])).toEqual(normalize(expectedResult))
        })


        test.afterEach(async () => {
            await vpnController.vpnDisconnect()
            await vpnController.sleepVPN(2000)
        })
    })
}