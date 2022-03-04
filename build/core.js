Object.defineProperty(exports, "__esModule", { value: true });
exports.logTimePrecise = exports.logTime = exports.logError = exports.logWarning = exports.logInfo = exports.logc = exports.log = void 0;
function _log(callback, parent, icon, args) {
    if (parent && parent.name) {
        callback(icon + " \033[3m\033[4m" + parent.name + "\033[0m\033[3m()\033[0m: ", ...args);
    }
    else
        callback(icon, ...args);
}
/**
 * Writes arguments to the console output.
 * @param args arguments to show on the console output.
 */
function log(...args) {
    _log(console.log, log.caller, "   ", args);
}
exports.log = log;
const logc = log;
exports.logc = logc;
/**
 * Writes arguments to the console output. As `info`.
 * @param args arguments to show on the console output.
 * @alias console.info()
 */
function logInfo(...args) {
    _log(console.info, logInfo.caller, "\x1b[44m i \x1b[0m", args);
}
exports.logInfo = logInfo;
/**
 * Writes arguments to the console output. As `warn`.
 * @param args arguments to show on the console output.
 * @alias console.warn()
 */
function logWarning(...args) {
    _log(console.warn, logWarning.caller, "\x1b[43m ! \x1b[0m", args);
}
exports.logWarning = logWarning;
/**
 * Writes arguments to the `error` output.
 * @param args arguments to show on the console error output.
 */
function logError(...args) {
    _log(console.error, logError.caller, "\x1b[41m x \x1b[0m", args);
}
exports.logError = logError;
/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss` format.
 * @param args arguments to show on the console log output.
 */
function logTime(...args) {
    _logTime(false, args);
}
exports.logTime = logTime;
/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss:ms` format.
 * @param args arguments to show on the console log output.
 */
function logTimePrecise(...args) {
    _logTime(true, args);
}
exports.logTimePrecise = logTimePrecise;
/**
 * HELPER FUNCTION: Logs the `args` with the **local** time.
 * @param precise Whether to show milliseconds
 * @param args arguments printed to the console.
 */
function _logTime(precise, ...args) {
    const date = new Date(Date.now());
    const hours = date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
    const milliseconds = "" + date.getMilliseconds();
    console.log(`    [${"\033[3m"}${hours}:${minutes}:${seconds}${precise ? ":" + milliseconds : ""}${"\033[0m"}]: `, ...args);
}
