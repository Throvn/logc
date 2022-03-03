import {
  log,
  logc,
  logInfo,
  logWarning,
  logError,
  logTime,
  logTimePrecise,
} from "../core";

describe("Default Logging", function () {
  it("Should correctly log to the console.", function () {
    log("hello");
    logInfo("aha");
    logWarning(1235325);
    logError([{ error: "test" }]);

    const broHoHo = () => {
      log("hello");
      logInfo("aha");
      logWarning(1235325);
      logError([{ error: "test" }]);
      console.time("lol");
      logc("wut");
      logTime({ milis: true });
      logTimePrecise({ no: true });
    };
    broHoHo();

    logInfo("This is an example.");

    function example(arg: any) {
      // do some logic here

      log(arg);
    }

    example("arg");
  });
});
