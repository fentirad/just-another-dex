import * as React from 'react';
import { AppState } from './App';
import { observer } from 'mobx-react';


@observer
class Grid extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
            </div>
        );
     }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

export default Grid;
