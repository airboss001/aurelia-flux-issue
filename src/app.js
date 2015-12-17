import {inject} from 'aurelia-framework';
import {Dispatcher, handle} from 'aurelia-flux';
import {AppStore} from 'app-store';

@inject(Dispatcher, AppStore)
export class App {
  constructor(dispatcher, appStore) {
    this.dispatcher = dispatcher;
    this.appStore = appStore;

    console.log('In App Constructor');
  }

  update() {
    console.log('In update()');
    this.dispatcher.dispatch('update', undefined);
  }

  @handle('message')
  doUpdated(action, param) {
    console.log(param);
  }
}
