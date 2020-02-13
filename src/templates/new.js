import React from 'react';
import Slider from 'react-slider';
export default class Sideview extends React.Component{
    render(){
        return(
            <Slider 
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            >
                <Page>one</Page>
                <Page>two</Page>
                <Page>three</Page>
            </Slider>
        )
    }
}