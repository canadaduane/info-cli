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
      this.log(command.content);
    } catch (e) {
      ux.action.stop('Error');
      ux.error(e instanceof Error ? e.message : 'Unknown error', { exit: 500 });
    }
  }
}
