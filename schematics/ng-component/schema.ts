import { ZorroComponentOptions } from '../utils/build-component';

export interface Schema extends ZorroComponentOptions {
  [key: string]: string | boolean;
}
