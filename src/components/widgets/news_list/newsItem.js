import React ,{Component} from 'react';
import axios from 'axios';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import styles from './newsItem.css';
import Button from '../buttons/button';
import CardList from '../cardList/card_list';

class NewsList extends Component{
	state={
		items:[],
		teams:[],
		start:this.props.start,
		end:this.props.start+this.props.amount,
		amount:this.props.amount
	}
	componentWillMount(){
		//console.log(this.state);
		
		this.request(this.state.start,this.state.end);
	}
	loadMore=()=>{
		let end=this.state.end+3;
		this.request(this.state.end,end);
	}
	request=(start,end)=>{
		if(this.state.teams.length<1){
			axios.get(`http://localhost:3004/teams`)
			.then(res => this.setState({teams:res.data}))
			.catch(err => console.log(err));
		}

		axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
		.then(res=>this.setState({items:[...this.state.items,...res.data]}))
		.catch(err=>console.log(err));
	}
	renderNews = (type) => {
        let template = null;
        switch(type){
            case('card'):
                template = this.state.items.map((item,i) => (
                         <CSSTransition
                        classNames={{
                            enter:styles.newsList_wrapper,
                            enterActive:styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={styles.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardList teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break;
            
            default:
                template = null;
        }
			
        return template;
    }


	render(){
		return(
			<div>
				<TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews( this.props.type )}
                </TransitionGroup>
				<Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />
			</div>	
			)
	}
}


export default NewsList;