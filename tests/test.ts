import {
  clog,
  logInfo,
  logWarning,
  logError,
  logTime,
  logTimePercise,
} from "../src/core";

describe("Default Logging", function () {
  it("Should correctly log to the console.", function () {
    clog("hello");
    logInfo("aha");
    logWarning(1235325);
    logError([{ error: "test" }]);

    const broHoHo = () => {
      clog("hello");
      logInfo("aha");
      logWarning(1235325);
      logError([{ error: "test" }]);
      console.time("lol");
      clog("wut");
      logTime({ milis: true });
      logTimePercise({ no: true });
    };
    broHoHo();
  });
});
