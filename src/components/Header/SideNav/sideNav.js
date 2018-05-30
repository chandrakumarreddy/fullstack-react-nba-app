import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './sideNav_Item'
const Sidenav=(props)=>{
	return(
			<div>
				<SideNav
          				showNav = {props.showNav}
          				onHideNav = {props.onHideNav} navStyle={{
                    background:'#242424',
                    maxWidth:'220px',
                    color:'#dfdfdf'
                }}>
					<SideNavItem />
                </SideNav>
			</div>
		)
};

export default Sidenav;