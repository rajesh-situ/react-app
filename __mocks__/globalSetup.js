module.exports = () => {
  global.window = global.window || global || {};
  window.fetch = (...args) => Promise.resolve(args);
};
