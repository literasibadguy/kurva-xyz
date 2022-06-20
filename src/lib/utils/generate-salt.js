

export const generateIdSalt = (idPrefix) => {
    const salt = Math.random().toString(36).substr(2, 9);
  return document.getElementById(idPrefix + salt)
    ? generateIdSalt(idPrefix)
    : salt;
};