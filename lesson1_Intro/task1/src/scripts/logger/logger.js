export const createLogger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errortext) {
      logs.push(`log - ${name} - ${errortext}`);
    },
    getLogs() {
      return logs;
    },
  };
};
