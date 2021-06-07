#!/usr/bin/env node
// https://github.com/nestjs/nest-cli/blob/master/bin/nest.ts
import * as commander from 'commander';
import { CommanderStatic } from 'commander';
import { CommandLoader } from '../commands';

const bootstrap = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const version = require('../package.json').version;
  const program: CommanderStatic = commander;
  program
    ?.version(version, '-v, --version', 'Output the current version.')
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage information');
  CommandLoader.load(program);
  commander?.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
