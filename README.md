# logc - The Logging Library ~~you~~ I always wanted

This is a personal project of mine, which fixes a few issues I find annoying with the current implementation of `console.log()` and other libraries.

> This library works best in addition to your usual `console.log()` workflow.

## Installation / Usage

```sh
npm i logc
```

your/project/index.ts

```ts
import { log, logInfo } from "logc";
logInfo("This is an example.");

function example(arg: any) {
  // do some logic here

  log(arg);
}

example("arg");
```

Output:

![Output](./demo-output.png)

## Documentation

| Function                 | native equivalent | Colors | Prints caller |
| ------------------------ | ----------------- | ------ | ------------- |
| log(any[]) / logc(any[]) | console.log()     | false  | true          |
| logInfo(any[])           | console.info()    | true   | true          |
| logWarning(any[])        | console.warn()    | true   | true          |
| logError(any[])          | console.error()   | true   | true          |
| logTime(any[])           | -                 | false  | false         |
| logTimePrecise(any[])    | -                 | false  | false         |

Do I plan to expand this? Idk, whenever I feel like something is missing, I will add/change it, eventually. (Maybe smth \w JSON)

If you have some ideas, PR's are welcome!

---

## The issues & solutions:

1. **I'm lazy**, when prototypes get bigger, you have trouble finding the right `console.log()` call. Thats why this library prints the calling function in front of the log output.
2. In the terminal, you cannot differentiate between the `err` and `out` stream. And `console.warn()` calls suck too. That's why this library has visual feedback, which channel is the current one.
3. Alternative logging libraries have mostly the following issues:
   - They are a complete replacement of `console.log()`, you cannot only use the things you like
   - The names are unneccessary long. (Again, I'm a lazy typer)

This library is by no means designed to be an entire logging library. Just use it when you feel you need it.

It uses Typescript and has an built-in documentation.

It is freaking easy to use, just use it like `console.log`.

Comes with NO bloatware.

Dependency free!
