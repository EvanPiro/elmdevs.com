// Polyfill for setImmediate
global.setImmediate = (callback, ...args) => {
  return setTimeout(() => callback(...args), 0);
};

// Polyfill for clearImmediate if needed
global.clearImmediate = (id) => {
  clearTimeout(id);
};
