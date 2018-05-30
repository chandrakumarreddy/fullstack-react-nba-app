import React ,{Component} from 'react';
import Header from '../../components/Header/header';
import Footer from  '../../components/Footer/footer'
class Layout extends Component{
	state={
			showNav:false
	}
	onHideNav=(action)=>{
		this.setState({
			showNav:action
		})
	}
	onOpenNav=(action)=>{
		this.setState({
			showNav:action
		})
	}
	render(){
	return(
			<div>
				<Header  showNav={this.state.showNav} onHideNav={()=>this.onHideNav(false)} onOpenNav={()=>this.onOpenNav(true)}/>
				{this.props.children}
				<Footer/>
			</div>
		)
}
}

export default Layout;