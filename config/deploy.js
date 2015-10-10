module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'dubtrack',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
