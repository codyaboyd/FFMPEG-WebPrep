import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
    console.error('Usage: node script.js <path/to/input> <path/to/output.mp4>');
    process.exit(1);
}

// Check if the input file exists
if (!fs.existsSync(inputPath)) {
    console.error(`The file at ${inputPath} does not exist.`);
    process.exit(1);
}

// Construct the ffmpeg command
const ffmpegCommand = `ffmpeg -i "${inputPath}" -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k "${outputPath}"`;

console.log('Starting conversion...');
exec(ffmpegCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error occurred: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log('Conversion completed successfully.');
    console.log(`Output available at ${outputPath}`);
});

