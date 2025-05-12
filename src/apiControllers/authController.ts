import { APIRequestContext} from "@playwright/test";

interface credentials {
    email: string,
    password: string
}

export default class AuthController {
    public request: APIRequestContext
    protected SIGN_IN_PATH = '/api/users/sign_in'

    protected headers = {
        'accept': 'application/vnd.s.v1+json',
        'Content-Type': 'application/json',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'Origin': 'https://www.kingbillycasino.com'
    }

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async signIn({email, password}: credentials) {
        return await this.request.post(this.SIGN_IN_PATH, {
            headers: this.headers,
            data: {
                email,
                password
            }
        })
    }
}