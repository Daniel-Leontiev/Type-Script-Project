import { printValue } from '@packages/utils';
import './styles/app.scss';

const helloWorld = () => {
  printValue('New package test');
};

helloWorld();

(() => {
  const app = document.createElement('div');
  app.id = 'app';

  const text = document.createElement('span');
  text.textContent = 'Hello Typescript with Webpack!';
  app.append(text);

  document.body.append(app);
})();
