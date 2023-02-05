import { registerPlugin } from '@capacitor/core';

import type { FcmSubPlugin } from './definitions';

const FcmSub = registerPlugin<FcmSubPlugin>('FcmSub', {
  web: () => import('./web').then(m => new m.FcmSubWeb()),
});

export * from './definitions';
export { FcmSub };
