import React from 'react';
import {Link} from 'react-router-dom';
import style from './footer.css';
const Footer =()=>{
	return(
			<div className={style.footer}>
			<Link to='/' className={style.logo}>
				<img src="/images/nba_logo.png" alt="logo"/>
			</Link>
			<div className={style.right}>
				@NBA {new Date().getFullYear()} All Rights Reserved.
			</div>
			</div>
		)
}

export default Footer;