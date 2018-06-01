import React from 'react';
import styles from './card_list.css';
import FontAwesome from 'react-fontawesome';

const CardList=(props)=>{
	//console.log(props);
	const teamDataName = (teams,team) =>{
		//console.log(teams,team);
        let data = teams.find((item)=>{
            return item.id === team
        });
        
        if(data){
            return data.name
        }
    }
	return(
			<div className={styles.cardNfo}>
            <span className={styles.teamName}>
                {teamDataName(props.teams,props.team)}
            
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        	</div>
		)
}

export default CardList;