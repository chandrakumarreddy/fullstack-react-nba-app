import React ,{Component} from 'react';
import Header from '../../components/Header/header';

class Layout extends Component{
	state={

	}
	render(){
	return(
			<div>
				<Header/>
				{this.props.children}
				Footer
			</div>
		)
}
}

export default Layout;