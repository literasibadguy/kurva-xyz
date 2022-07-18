import { store } from "./store/store";

const disablePage = () => {
    const main = document.querySelector('main') || {};

    console.log('DISABLE UNDANGAN PAGE');

    document.body.classList.add('overflow-hidden');
    main.inert = true;
}

const enablePage = () => {
    const main = document.querySelector('main') || {};
    
    document.body.classList.remove('overflow-hidden');
    main.inert = false;
}

export const openNavigationDrawer = store.action(() => {
  disablePage();
  return {isNavigationDrawerOpen: true};
});

export const closeNavigationDrawer = store.action(() => {
  enablePage();
  return {isNavigationDrawerOpen: false};
});

export const openModal = store.action(() => {
    disablePage();
    return {isModalOpen: true};
  });
  
  export const closeModal = store.action(() => {
    enablePage();
    return {isModalOpen: false};
  });