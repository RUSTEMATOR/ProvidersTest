# Test info

- Name: Check providers for New Zealand >> Check list of providers with the expected data
- Location: C:\Users\Rustemator\Desktop\ProvidersTest\tests\providers.spec.ts:58:13

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 6
+ Received  + 6

@@ -1,12 +1,13 @@
  Array [
    "Providers",
-   "1spin4win",
-   "3 Oaks",
-   "4theplayer",
-   "7mojos",
+   "1spin4win162",
+   "3 Oaks102",
+   "4theplayer40",
+   "7mojos40",
    "Acerun",
+   "Aceroll",
    "Absolute Live Gaming",
    "Amatic",
    "Amusnet",
    "Amusnetlive",
    "Apparat Gaming",
@@ -25,11 +26,10 @@
    "Betsoft Gaming",
    "Bulletproof",
    "Bullsharkgames",
    "Clawbuster",
    "Eagaming",
-   "Elcasino",
    "Endorphina",
    "Evolution",
    "Evoplay Entertainment",
    "Eyecon",
    "Ezugi",
@@ -91,11 +91,11 @@
    "Tom Horn",
    "TrueLab",
    "Trustygaming",
    "Turbogames",
    "VoltEnt",
-   "Tvbet",
    "Wildcatgaming",
    "Winfast",
    "Winfinity",
+   "Winspinity",
    "Yggdrasil",
  ]
    at C:\Users\Rustemator\Desktop\ProvidersTest\tests\providers.spec.ts:65:35
```

# Page snapshot

```yaml
- banner:
  - button
  - link:
    - /url: /en-NZ
    - img
  - combobox:
    - text: 
    - textbox
    - group "Search your Games"
    - text: Search your Games 
  - link "Create account":
    - /url: /en-NZ?sign-up=modal
  - link "sign in":
    - /url: /en-NZ?sign-in=modal
  - combobox: en-NZ 
- main:
  - heading "WELCOME PACK" [level=3]
  - paragraph: NZ$2500
  - paragraph: +250 Free spins
  - link "Discover more!":
    - /url: /en-NZ/promotions
  - text: 
  - textbox "Email"
  - text: 
  - textbox "Password"
  - button ""
  - text: "null"
  - combobox:
    - text: 
    - textbox "Country": New Zealand
    - button "open menu": 
    - listbox
  - combobox:
    - text: 
    - textbox "Currency": NZD
    - button "open menu": 
    - listbox
  - text: I want to receive promos I am 18 years old and I accept the
  - link "Privacy Policy":
    - /url: /en-NZ/privacy-policy
  - text: and
  - link "Terms and Conditions":
    - /url: /en-NZ/terms-and-conditions
  - superscript: "*"
  - text: I wish to receive information about products or services, bonuses and promotions of our partners casinos
  - button "Create account" [disabled]
  - button ""
  - link "Lobby":
    - /url: /en-NZ
  - link "New":
    - /url: /en-NZ/games/new_online_games
  - link "Top":
    - /url: /en-NZ/games/top_casino_games
  - link "Popular":
    - /url: /en-NZ/games/popular
  - button ""
  - combobox:  Themes 
  - combobox:  Providers 
  - text: Top casino games
  - link "Show more":
    - /url: /en-NZ/games/top_casino_games
  - text: New online games
  - link "Show more":
    - /url: /en-NZ/games/new_online_games
  - text: Popular
  - link "Show more":
    - /url: /en-NZ/games/popular
  - text: King's Choice
  - link "Show more":
    - /url: /en-NZ/games/hot_games
  - heading "Promotions" [level=2]
  - link "show more":
    - /url: /promotions
  - button ""
  - text: welcome pack
  - button ""
  - text: NZ$2500 + 250 FS
  - button "Get it"
  - text: DESTINY WHEEL
  - button ""
  - text: Up to 1000 FS every day active
  - link "Get it":
    - /url: /en-NZ/promotions/wheel-of-fortune
  - text: "Time left: : 08 : 03 : 17 01 CASHBACK"
  - button ""
  - text: Up to 13% Every Thursday
  - button "Get it"
  - button ""
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
- contentinfo:
  - button ""
  - img
  - button ""
  - link:
    - /url: /en-NZ
    - img
  - link "":
    - /url: https://t.me/king_billy_official
  - link "":
    - /url: https://www.facebook.com/kingbilly.officialpage
  - link "":
    - /url: https://www.instagram.com/king_billy_official/
  - link "":
    - /url: "https://www.youtube.com/@kingbillycasino4878/ "
  - combobox: en-NZ 
  - text: HELP
  - list:
    - listitem:
      - link "Casino FAQ":
        - /url: /en-NZ/casino-faq
    - listitem:
      - link "Casino Dictionary":
        - /url: /en-NZ/dictionary
    - listitem:
      - link "Crypto Currencies FAQ":
        - /url: /en-NZ/btc-faq
    - listitem:
      - link "Complaints":
        - /url: /en-NZ/complaints
  - text: Info
  - list:
    - listitem:
      - link "Cookie Policy":
        - /url: /en-NZ/cookie-policy
    - listitem:
      - link "Terms and Conditions":
        - /url: /en-NZ/terms-and-conditions
    - listitem:
      - link "Privacy Policy":
        - /url: /en-NZ/privacy-policy
    - listitem:
      - link "Responsible Gaming":
        - /url: /en-NZ/responsible-gaming
    - listitem:
      - link "Legend":
        - /url: /en-NZ/the-legend
    - listitem:
      - link "Blog":
        - /url: https://www.kingbillycasino.com/blog/
  - text: Games
  - list:
    - listitem:
      - link "TOP":
        - /url: /en-NZ/games/top_casino_games
    - listitem:
      - link "NEW":
        - /url: /en-NZ/games/new_online_games
    - listitem:
      - link "SLOTS":
        - /url: /en-NZ/games/slots
    - listitem:
      - link "Table Games":
        - /url: /en-NZ/games/casino_table_games
    - listitem:
      - link "Live Casino":
        - /url: /en-NZ/games/live_casino
    - listitem:
      - link "Online roulette":
        - /url: /en-NZ/games/roulette
    - listitem:
      - link "Live blackjack":
        - /url: /en-NZ/games/live-blackjack
    - listitem:
      - link "Live roulette":
        - /url: /en-NZ/games/live-roulette
    - listitem:
      - link "Free Spins":
        - /url: /en-NZ/games/free-spins
    - listitem:
      - link "Online blackjack":
        - /url: /en-NZ/games/blackjack
    - listitem:
      - link "Online baccarat":
        - /url: /en-NZ/games/baccarat
    - listitem:
      - link "Mobile Casino":
        - /url: /en-NZ/games/mobile
    - listitem:
      - link "Free Slots":
        - /url: /en-NZ/games/free_slots
  - text: Promotions
  - list:
    - listitem:
      - link "Promotions":
        - /url: /en-NZ/promotions
    - listitem:
      - link "Tournaments":
        - /url: /en-NZ/tournaments
    - listitem:
      - link "VIP":
        - /url: /en-NZ/vip-club
    - listitem:
      - link "Bonus Terms and Conditions":
        - /url: /en-NZ/bonus-terms-conditions
  - text: Partners
  - list:
    - listitem:
      - link "Affiliate":
        - /url: https://kingbilly.partners
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/best-casino-2019
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/king-billy-is-the-new-casino-of-2017
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/2-more-awards-for-king-billy
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/2-more-awards-for-king-billy
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/king-billy-wins-askgamblers-awards-best-casino-3rd-place
    - img
  - paragraph: "Some casinos get one (or no) awards in their lifetime. King Billy gets one every year! 2017 brought us the Best New Casino Award in the prestigious AskGamblers Awards. In 2018, we won the Best Casino 3rd place AND the Player’s Choice Casino 2nd place. And in 2019 we brought home the big one: Best Casino in the AskGamblers Awards! We thank you, our players, who made all these awards possible and we want you to know that we are not done yet. There are many more awards to come!"
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/king-billy-has-a-dog
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/casino-guru
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/lcb-blog
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/king-billy-wins-best-casino-affiliate-program-at-the-igb-awards
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/kings-12-awards
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/king-billy-a-casino-you-can-trust
    - img
  - link:
    - /url: https://www.kingbillycasino.com/blog/en/kings-12-awards
    - img
  - link:
    - /url: /en-NZ
    - img
  - link:
    - /url: /en-NZ/responsible-gaming
    - img
  - link:
    - /url: /en-NZ
    - img
  - link:
    - /url: https://www.gamcare.org.uk/
    - img
  - link:
    - /url: https://www.askgamblers.com/
    - img
  - link:
    - /url: http://gamanon.org.uk/
    - img
  - link:
    - /url: https://www.gamblingtherapy.org/ru
    - img
  - link:
    - /url: https://www.gamblersanonymous.org.uk/
    - img
  - img
  - text: KingBillyCasino
- button ""
- text: We use cookies to improve your experience. By using our website you are accepting our
- link "Cookie Policy.":
  - /url: /en-NZ/privacy-policy
- button "accept"
- img
- status
```

# Test source

```ts
   1 | import {expect, Locator, test} from "@playwright/test";
   2 | import MainPage from "../src/PO/MainPage";
   3 | import {EXPECTED_RESULTS} from "../src/expectedResults/expectedResults";
   4 | import VpnController from "../src/VpnController/vpnController";
   5 | import { stat } from "fs";
   6 |
   7 | const testData = {
   8 |     IE: {
   9 |         location: 'Ireland',
  10 |         expectedResult: EXPECTED_RESULTS.IE
  11 |     },
  12 |     AU: {
  13 |         location: 'Australia - Melbourne',
  14 |         expectedResult: EXPECTED_RESULTS.AU
  15 |     },
  16 |     CA: {
  17 |         location: 'Canada - Montreal',
  18 |         expectedResult: EXPECTED_RESULTS.CA
  19 |     },
  20 |     DE: {
  21 |         location: 'Germany - Frankfurt - 1',
  22 |         expectedResult: EXPECTED_RESULTS.DE
  23 |     },
  24 |     NZ: {
  25 |         location: 'New Zealand',
  26 |         expectedResult: EXPECTED_RESULTS.NZ
  27 |     },
  28 |     NO: {
  29 |         location: 'Norway',
  30 |         expectedResult: EXPECTED_RESULTS.NO
  31 |     }
  32 | };
  33 |
  34 |
  35 | for (let {location, expectedResult} of Object.values(testData)) {
  36 |
  37 |     test.describe(`Check providers for ${location}`, () => {
  38 |         let mainPage: MainPage
  39 |         let vpnController: VpnController
  40 |
  41 |         test.beforeEach(async ({page}) => {
  42 |             mainPage = new MainPage(page)
  43 |             vpnController = new VpnController()
  44 |
  45 |             await vpnController.vpnConnect(location)
  46 |
  47 |             while (true) {
  48 |                 const status = await vpnController.isConnectedToLocation(location)
  49 |
  50 |                 if (status === true){
  51 |                     break
  52 |                 } else {
  53 |                     await vpnController.sleepVPN(2000)
  54 |                 }
  55 |             }
  56 |         })
  57 |
  58 |         test('Check list of providers with the expected data', async () => {
  59 |             await mainPage.navTo('/')
  60 |             await mainPage.getProvidersDropdown.waitFor({state: "visible"})
  61 |
  62 |             const providersList = await mainPage.getProvidersText()
  63 |             console.log(providersList)
  64 |
> 65 |             expect(providersList).toEqual(expectedResult)
     |                                   ^ Error: expect(received).toEqual(expected) // deep equality
  66 |         })
  67 |
  68 |
  69 |         test.afterEach(async () => {
  70 |             await vpnController.vpnDisconnect()
  71 |             await vpnController.sleepVPN(2000)
  72 |         })
  73 |     })
  74 | }
```