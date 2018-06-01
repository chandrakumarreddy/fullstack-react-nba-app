import React from 'react';
import NewsSlider from '../widgets/news_slider/slider';
import NewsItem from '../widgets/news_list/newsItem'; 
import VideosItem from '../widgets/videos_list/videosItem'; 
const Home=()=>{
		
	return(
			<div>
				<NewsSlider start={0} end={3} settings={{dots:false}} type="featured"/>
				<NewsItem start={3} amount={3} loadMore={true} type="card"/>
				<VideosItem start={0} amount={3} loadMore={true} type="card" title={true}/>
			</div>
		)
}

export default Home;