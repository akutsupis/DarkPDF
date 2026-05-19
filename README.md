# DarkPDF

Dark Mode PDF reader forked from [Lunarequest/NightPDF](https://github.com/Lunarequest/NightPDF)

![DarkPDF screenshot](docs/nightpdf.gif?raw=true)

## Download

![DarkPDF logo](docs/nightpdf_small.png?raw=true)

Binaries for Linux, macOS, and Windows

- [Latest release](https://github.com/akutsupis/DarkPDF/releases/latest)

## Limitations

- Limited support for XFA forms and saving forms with filled-in data
- macOS builds are unsigned — right-click → Open on first launch to bypass Gatekeeper
- Windows builds are unsigned — SmartScreen may show an "Unknown publisher" warning on first run

## Development

### Requirements

- Node.js v22.x
- yarn v4.x (berry)

### Running locally

```bash
yarn        # install dependencies
yarn dev    # build and launch in development mode
```

### Building a release

```bash
yarn dist
```

## CLI

```
Usage: DarkPDF [-p] [pdf]

Positionals:
  pdf  The PDF file to open                                             [string]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -p, --pages    The page to open in the PDF                           [number]

Examples:
  DarkPDF -p 5 pdf.pdf  Opens pdf.pdf at page 5
```

## Licenses

- [NightPDF](https://github.com/Lunarequest/NightPDF) is under [GPLv2 only](LICENSE)
- [Electron](https://github.com/electron/electron) is under [MIT](https://github.com/electron/electron/blob/master/LICENSE)
- [PDF.js](https://mozilla.github.io/pdf.js/) is under [Apache License 2.0](https://github.com/mozilla/pdf.js/blob/master/LICENSE)
