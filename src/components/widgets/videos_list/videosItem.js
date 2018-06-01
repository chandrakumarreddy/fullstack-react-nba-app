import React ,{Component} from 'react';
//import {Link} from 'react-router-dom';
import styles from './videosItem.css';
import Button from '../buttons/button';

class VideosList extends Component{
		state = {
            teams:[],
            videos:[],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }

        renderTitle = () => {
            return this.props.title ? 
                <h3><strong>NBA</strong> Videos</h3>
            : null
        }

		loadMore= () => {}

		renderButton = () => {
            return this.props.loadMore ? 
                <Button
                    type="loadmore"
                    loadMore={()=> this.loadMore()}
                    cta="Load More Videos"
                />
                : 
                <Button type="linkTo" cta="More videos" linkTo="/videos"/>
        }

		render(){
			this.renderButton();
			return(
						 <div className={styles.videoList_wrapper}>
		                    { this.renderTitle() }
		                    {this.renderButton()}                    
		                </div>
				  )
		}
		
}

export default VideosList;