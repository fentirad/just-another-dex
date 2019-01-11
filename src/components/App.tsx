import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Grid from './Grid';

export interface AppState {
  timer: number
}

export class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

const appState = new AppState();

@observer
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid appState={appState} />
                <DevTools />
            </React.Fragment>        
        );
     }
};

export default App;
