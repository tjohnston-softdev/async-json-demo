# Async JSON Demo

This is a demo project for the [yieldable-json](https://www.npmjs.com/package/yieldable-json) Node JS library. It opens an input JSON file, simulates processing, and saves the formatted definition as a separate output file.

While Node JS has [native functions](https://nodejs.org/en/knowledge/javascript-conventions/what-is-json/) for parsing and stringifying JSON files, they are linear and code-blocking, as opposed to the async nature of many Node scripts. This might be a non-issue for some projects but there are times when you want to process a JSON file in async for one reason or another. For example, reading large files using the native functions may cause the terminal to freeze. By using this library, you can read a large JSON file without the terminal freezing. You can even display a [loading spinner](https://www.npmjs.com/package/ora) if you want to.

The `input.json` file contains the JSON object that will be read by the script. The output file will be saved as `output.json`. As this is a simulation, no actual changes are made to the object in processing. However, the output definition will be formatted automatically in order to be readable.

The 'yieldable-json' library is relatively underground with an approximate several thousand downloads per week, and the latest major version released in December 2020. Don't let these figures discourage you. The library is very much reliable, and is lightweight at only ~71.2 kilobytes.

---

## Usage

1.  Open a terminal in the project folder.
2.  Run `npm install` to download the 'yieldable-json' package.
3.  Run `node index` to execute the demo.

---

## Credits

-   [@tjohnston-softdev](https://github.com/tjohnston-softdev) - Demo project.
-   [@gireeshpunathil](https://github.com/gireeshpunathil) - Lead developer of 'yieldable-json' library, on behalf of [IBM Runtime Technologies](https://github.com/ibmruntimes)

---

## Disclaimer

This demo project is licensed under CC0 1.0 Universal. I only wrote this as a reference for using the 'yieldable-json' library to parse and stringify JSON objects in an async manner. This is not an official demo and I am in no way affiliated with [@gireeshpunathil](https://github.com/gireeshpunathil) or anybody else who has worked on the 'yieldable-json' library. Furthermore, I also have no affiliation with [IBM Runtime Technologies](https://github.com/ibmruntimes), or any part of IBM as a company. While I will make an effort to maintain this repository where applicable, I do not accept any responsibility for how you use this code or 'yieldable-json' as a whole.
