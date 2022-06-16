
export default function removeServiceWorkers() {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    return navigator.serviceWorker
        .getRegistrations()
        .then((all) => {
            return Promise.all(all.map((reg) => reg.unregister()));
        })
        .then((tasks) => {
            if (tasks.length) {
                window.location.reload();
            }
        });
}