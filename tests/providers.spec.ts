import {expect, Locator, test} from "@playwright/test";
import MainPage from "../src/PO/MainPage";
import {EXPECTED_RESULTS} from "../src/expectedResults/expectedResults";
import VpnController from "../src/VpnController/vpnController";
import { stat } from "fs";

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


for (let {location, expectedResult} of Object.values(testData)) {

    test.describe(`Check providers for ${location}`, () => {
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
            await mainPage.getProvidersDropdown.waitFor({state: "visible"})

            const providersList = await mainPage.getProvidersText()
            console.log(providersList)

            expect(providersList).toEqual(expectedResult)
        })


        test.afterEach(async () => {
            await vpnController.vpnDisconnect()
            await vpnController.sleepVPN(2000)
        })
    })
}