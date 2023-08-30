import { Command, ux } from '@oclif/core';

import { generatePromptMessages } from '../prompt';
import { translate } from '../translator';
import type { CommandLine } from '../types';

export default class DefaultCommand extends Command {
  static strict = false;

  async run(): Promise<void> {
    const userInput = this.argv.join(' ');
    generatePromptMessages(userInput);
    let command: CommandLine;
    try {
      command = await translate(userInput);
      this.log(`\x1b[36m\n${command.content}\n\x1b[0m`);
    } catch (e) {
      ux.action.stop('Error');
      ux.error(e instanceof Error ? e.message : 'Unknown error', { exit: 500 });
    }
  }
}
