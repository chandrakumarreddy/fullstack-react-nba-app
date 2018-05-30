import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App=()=>{
		return(
				<BrowserRouter>
					<div>
						<Routes/>
					</div>
				</BrowserRouter>
			)
}

ReactDOM.render(<App />, document.getElementById('root'));
