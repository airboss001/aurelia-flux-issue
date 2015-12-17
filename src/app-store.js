import {inject} from 'aurelia-framework';
import {Dispatcher, handle} from 'aurelia-flux';

@inject(Dispatcher)
export class AppStore {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;

    console.log('In AppStore Constructor');
  }

  @handle('update')
  doUpdate(action, param) {
    console.log('In AppStore doUpdate');
    this.dispatcher.dispatch('message', 'AppStore Updated');
  }
}