/**
 * Writes arguments to the console output.
 * @param args arguments to show on the console output.
 */
declare function log(...args: any[]): void;
declare const logc: typeof log;
/**
 * Writes arguments to the console output. As `info`.
 * @param args arguments to show on the console output.
 * @alias console.info()
 */
declare function logInfo(...args: any[]): void;
/**
 * Writes arguments to the console output. As `warn`.
 * @param args arguments to show on the console output.
 * @alias console.warn()
 */
declare function logWarning(...args: any[]): void;
/**
 * Writes arguments to the `error` output.
 * @param args arguments to show on the console error output.
 */
declare function logError(...args: any[]): void;
/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss` format.
 * @param args arguments to show on the console log output.
 */
declare function logTime(...args: any[]): void;
/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss:ms` format.
 * @param args arguments to show on the console log output.
 */
declare function logTimePrecise(...args: any[]): void;
export { log, logc, logInfo, logWarning, logError, logTime, logTimePrecise };
