Object.defineProperty(exports, "__esModule", { value: true });
const logc_1 = require("@throvn/logc");
describe("Default Logging", function () {
    it("Should correctly log to the console.", function () {
        (0, logc_1.log)("hello");
        (0, logc_1.logInfo)("aha");
        (0, logc_1.logWarning)(1235325);
        (0, logc_1.logError)([{ error: "test" }]);
        const broHoHo = () => {
            (0, logc_1.log)("hello");
            (0, logc_1.logInfo)("aha");
            (0, logc_1.logWarning)(1235325);
            (0, logc_1.logError)([{ error: "test" }]);
            console.time("lol");
            (0, logc_1.logc)("wut");
            (0, logc_1.logTime)({ milis: true });
            (0, logc_1.logTimePrecise)({ no: true });
        };
        broHoHo();
        (0, logc_1.logInfo)("This is an example.");
        function example(arg) {
            // do some logic here
            (0, logc_1.log)(arg);
        }
        example("arg");
    });
});
