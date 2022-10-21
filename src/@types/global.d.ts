import { reactotron } from '../tools/reactotron';

declare global {
  interface Console {
    tron: typeof reactotron;
  }
}
