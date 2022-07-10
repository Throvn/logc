import {
  log,
  logc,
  logInfo,
  logWarning,
  logError,
  logTime,
  logTimePrecise,
} from "../core";
import { expect } from "chai";

describe("Default Logging", function () {

  it("Should correctly log to the console", function () {
    logError("This is still a todo.");
    expect(false).to.be.true;
  });
});