"use strict";

/* -------------------------------------------------------------------------- */
/*                              Config                                        */
/* -------------------------------------------------------------------------- */
var CONFIG = {
  theme: 'light',
  isRTL: false
};
Object.keys(CONFIG).forEach(function (key) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});