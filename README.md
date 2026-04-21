# FFMPEG-WebPrep

FFMPEG-WebPrep is a lightweight command-line utility for converting source videos into browser-friendly MP4 outputs using FFmpeg under a simple JavaScript-based interface.

It is designed for developers and content pipelines that need a straightforward, scriptable preprocessing step before publishing media to the web.

## Features

- **Simple CLI workflow**: convert with a single command.
- **Browser-focused output**: prepares media for broad playback compatibility.
- **Portable distribution option**: compile to a standalone binary with Bun.
- **Minimal setup**: small codebase with no framework overhead.

## Requirements

- [FFmpeg](https://ffmpeg.org/) installed and available in your `PATH`
- One of the following runtimes:
  - [Node.js](https://nodejs.org/), or
  - [Bun](https://bun.sh/)

## Quick Start

```bash
node webcon.js /path/to/input.avi /path/to/output.mp4
```

Using Bun:

```bash
bun webcon.js /path/to/input.avi /path/to/output.mp4
```

## Usage

```bash
<runtime> webcon.js <input_video> <output_mp4>
```

### Arguments

- `input_video`: path to the source media file (for example, `.avi`, `.mov`, `.mkv`)
- `output_mp4`: destination path for the converted `.mp4` file

## Build a Portable Binary (Bun)

If you want to ship the converter as a single executable:

```bash
bun build ./webcon.js --outfile webcon --compile
```

This generates a standalone binary named `webcon` in the current directory.

## Example

```bash
./webcon ./samples/raw_capture.avi ./dist/raw_capture.web.mp4
```

## Project Structure

```text
.
├── webcon.js      # CLI entry point
├── README.md
└── LICENSE
```

## License

This project is licensed under the terms of the license in [`LICENSE`](./LICENSE).

## Contributing

Contributions are welcome. If you open a pull request, please include:

- a clear problem statement,
- a concise description of the implementation, and
- any relevant command examples or validation steps.
