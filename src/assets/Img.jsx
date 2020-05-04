import React from "react";

import heroimage from '../assets/img/pcu.png';

const HeroImageImg = props => (
    <img className="pcu" src={heroimage} {...props}></img>
);

const BannerHeroImg = props => (
    <img className="women" src={bannerimage} {...props}></img>
);

export{
    HeroImageImg,
    BannerHeroImg,
};