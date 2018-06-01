import React ,{Component} from 'react';
import axios from 'axios';
import SliderTemplate from './sider_template';
class Slider extends Component{
	state={
		news:[]
	}

	componentWillMount(){
		axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`)
		.then(res=> this.setState({news:res.data}))
		.catch(err => console.log(err));
	}
	render(){
		
		return(
			<div>
				<SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
			</div>
		)
	}
	
}

export default Slider;