function _log(
  callback: (...arg0: any[]) => void,
  parentName: string,
  icon: string,
  args: any[]
): void {
  if (parentName) {
    callback(
      icon + " \033[3m\033[4m" + parentName + "\033[0m\033[3m()\033[0m: ",
      ...args
    );
  } else callback(icon, ...args);
}

/**
 * Writes arguments to the console output.
 * @param args arguments to show on the console output.
 */
function log(...args: any[]): void {
  _log(console.log, log.caller.name, "   ", args);
}
const logc = log;

/**
 * Writes arguments to the console output. As `info`.
 * @param args arguments to show on the console output.
 * @alias console.info()
 */
function logInfo(...args: any[]): void {
  _log(console.info, logInfo.caller.name, "\x1b[44m i \x1b[0m", args);
}

/**
 * Writes arguments to the console output. As `warn`.
 * @param args arguments to show on the console output.
 * @alias console.warn()
 */
function logWarning(...args: any[]): void {
  _log(console.warn, logWarning.caller.name, "\x1b[43m ! \x1b[0m", args);
}

/**
 * Writes arguments to the `error` output.
 * @param args arguments to show on the console error output.
 */
function logError(...args: any[]): void {
  _log(console.error, logError.caller.name, "\x1b[41m x \x1b[0m", args);
}

/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss` format.
 * @param args arguments to show on the console log output.
 */
function logTime(...args: any[]): void {
  _logTime(false, args);
}

/**
 * Logs the arguments together with the current **local** time in `hh:mm:ss:ms` format.
 * @param args arguments to show on the console log output.
 */
function logTimePrecise(...args: any[]): void {
  _logTime(true, args);
}

/**
 * HELPER FUNCTION: Logs the `args` with the **local** time.
 * @param precise Whether to show milliseconds
 * @param args arguments printed to the console.
 */
function _logTime(precise: boolean, ...args: any[]) {
  const date: Date = new Date(Date.now());
  const hours: string =
    date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
  const minutes: string =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  const seconds: string =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : "" + date.getSeconds();
  const milliseconds: string = "" + date.getMilliseconds();
  console.log(
    `    [${"\033[3m"}${hours}:${minutes}:${seconds}${
      precise ? ":" + milliseconds : ""
    }${"\033[0m"}]: `,
    ...args
  );
}

export { log, logc, logInfo, logWarning, logError, logTime, logTimePrecise };
