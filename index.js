#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const clip = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple password generator')

program
    .option('-l, --length <number>', 'length of password','8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'no numbers')
    .option('-ns, --no-symbols', 'no symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Save to file
if(save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clip.writeSync(generatedPassword);
    
// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))

log(chalk.yellow('Password copied to clipboard'))
