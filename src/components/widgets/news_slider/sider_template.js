import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import style from './slider.css';

const SimpleSlider=(props)=>{
  let template=null;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...props.settings
    }
    switch(props.type){
      case "featured":
          template=props.data.map((item,i)=>{
            return(
                  <div key={i}>
                       <div className={style.featured_item}>
                            <div className={style.featured_image}
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                       </div>
                    </div>
              )
          });
          break;
      default:
          template=null    ;
    }
    return (
      <Slider {...settings}>
        {template}
      </Slider>
    );
  
}

export default SimpleSlider;