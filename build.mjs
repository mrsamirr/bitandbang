import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'none', // Set borderStyle to 'none' to remove the border
};
// Text + chalk definitions
const data = {
	name: 'Hi I am Samer 👋',
	status: 'CS student',
	web: 'https://bento.me/samir',
	gh: 'https://github.com/mrsamirr',
	linkedin: 'https://www.linkedin.com/in/mrsamirr/',
	desc: 'A full stack dev love to making, breaking, experimenting, developing and learning things about the web.',
	skills: {
		langs: ['.js', '.ts', '.cpp', '.java', '.py', '.sh'],
		skils: ['vim', 'git', 'docker', 'prisma ORM', 'postgreSQL'],
	},
};

// Actual strings we're going to output
const newline = '\n';
const output = JSON.stringify(data, null, 2);

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
