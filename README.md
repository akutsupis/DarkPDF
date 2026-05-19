# DarkPDF

Dark Mode PDF reader forked from Lunarequest/NightPDF

It uses Electron but my eyes dont care.

![DarkPDF screencast](docs/nightpdf.gif?raw=true)

## Download Binaries

![DarkPDF logo](docs/nightpdf_small.png?raw=true)

Binaries for Linux, Macos and Windows

-   [Latest release](https://github.com/akutsupis/DarkPDF/releases/latest)
<br/>
<br/>

## Limitations

There is limited support for xfa forms, and saving forms with filled in data.

## Development

### Requirements

This software was developed using

-   node: v12.x
-   yarn: berry
-   Arch Linux Rolling/OpenSUSE Tumbleweed

## Instructions

1. Install dependencies

```bash
yarn
```

2. Run

```bash
yarn dev
```

### Building Release Version

1. Install dependencies

```bash
yarn
```

2. Build release

```bash
yarn dist
```

## CLI
```
Usage: DarkPDF [-p] [pdf]

Positionals:
  pdf, pdf  The pdf to open                                             [string]

Options:
      --help     Dark Mode PDF Reader built using Electron and PDF.js  [boolean]
      --version  Show version number                                   [boolean]
  -p, --pages    The page to open in the pdf                            [number]

Examples:
  DarkPDF -p 5 pdf.pdf  Loads pdf on the 5th page
```

## Licenses

-   [NightPDF](https://github.com/Lunarequest/NightPDF) is under [GPLv2 only](LICENSE)
-   [Electron](https://github.com/electron/electron) is under [MIT](https://github.com/electron/electron/blob/master/LICENSE)
-   [PDF.js](https://mozilla.github.io/pdf.js/) is under [Apache License 2.0](https://github.com/mozilla/pdf.js/blob/master/LICENSE)
