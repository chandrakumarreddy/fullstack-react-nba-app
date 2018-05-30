import React from 'react';
import {Link} from 'react-router-dom';
import style from './header.css';
import FontAwesome from 'react-fontawesome';

const Header=(props)=>{
	const navBars=()=>{
		return(
			<div className={style.bars}>
			<FontAwesome name="bars" style={{
					color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
			}} />
			</div>
			)
	}

	const logo =()=>{
		return (
			<Link to='/' className={style.logo}>
				<img src="/images/nba_logo.png" alt=""/>
			</Link>
			)
	}

	return(
			<div>
				<header className={style.header}>
	            	<div className={style.headerOpt}>
			                {navBars()}
			                {logo()}
            		</div>
        		</header>
			</div>
		)
}

export default Header;