

function getLocalStorage()  {
    let cand;
    try {
        cand = window.localStorage;
    } catch (e) {
        // ignore
    }
    return cand || {};
}

export const localStorage = getLocalStorage();