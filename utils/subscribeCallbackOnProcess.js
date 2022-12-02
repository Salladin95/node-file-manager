const subscribeCallbackOnCommand = (cb, command) => {
  return (...arg) => {
    console.log(`subscribed on ${command}`);
    process.stdin.on("data", (data) => {
      const stringData = data.toString().trim();
      if (!stringData.match(command)) {
        return;
      }
      cb(arg);
    });
  };
};

export default subscribeCallbackOnCommand;
