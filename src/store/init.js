import { isAuthorised } from '../selectors/isAuthorised';

export const initState = {
    auth: { isAuthorised: isAuthorised() }
}

export default initState;