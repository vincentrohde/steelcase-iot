import React from 'react';
import Headline from '../../components/Headline/Headline';
import AvatarIcon from '../../components/AvatarIcon/AvatarIcon';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Headline/>
            <div className="AvatarIcon">
                <AvatarIcon/>
            </div>
        </div>
    );
}

export default Navigation;