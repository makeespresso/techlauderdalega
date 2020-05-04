import React from "react";

import heroimage from '../assets/img/pcu.png';

const HeroImageImg = props => (
    <img className="pcu" src={heroimage} {...props}></img>
);

export{
    HeroImageImg,
};