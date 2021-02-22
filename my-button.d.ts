import { DefineComponent, Plugin } from 'vue';

declare const MyButton: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default MyButton;
