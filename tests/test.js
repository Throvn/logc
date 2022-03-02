Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../src/core");
describe("Default Logging", function () {
    it("Should correctly log to the console.", function () {
        (0, core_1.clog)("hello");
        (0, core_1.logInfo)("aha");
        (0, core_1.logWarning)(1235325);
        (0, core_1.logError)([{ error: "test" }]);
        const broHoHo = () => {
            (0, core_1.clog)("hello");
            (0, core_1.logInfo)("aha");
            (0, core_1.logWarning)(1235325);
            (0, core_1.logError)([{ error: "test" }]);
            console.time("lol");
            (0, core_1.clog)("wut");
            (0, core_1.logTime)({ milis: true });
            (0, core_1.logTimePercise)({ no: true });
        };
        broHoHo();
    });
});
