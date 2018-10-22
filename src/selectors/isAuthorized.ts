const isMatch = (ex: RegExp, e: string): boolean => {
    const r = e.match(ex);
    return r != null && r.length > 0;
}

const isAuthorized = () => {
    const keys = Object.keys(localStorage);
    const key = keys.find(e => isMatch(/persist:root/, e));
    const item = key && localStorage.getItem(key);
    const data = item && JSON.parse(item);
    const auth = data && JSON.parse(data.auth);

    return auth && auth.isAuthorised;
};

export default isAuthorized;