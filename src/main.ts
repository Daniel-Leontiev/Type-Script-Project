import { printValue } from '@packages/utils';
import './styles/app.scss';

const helloWorld = () => {
  printValue('New package test');
};

helloWorld();

(() => {
  const app = document.createElement('div');
  app.id = 'app';

  document.body.append(app);
})();
