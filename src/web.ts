import { WebPlugin } from '@capacitor/core';

import type { FcmSubPlugin } from './definitions';

export class FcmSubWeb extends WebPlugin implements FcmSubPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
