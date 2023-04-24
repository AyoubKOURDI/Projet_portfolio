import React from "react";
import SocialItem from "./SocialItem";


function Social() {
    return (
        <ul className="list-group">
            <SocialItem
                argument='FACEBOOK'
                id='facebook'
                img='https://picsum.photos/50'
            />
            <SocialItem
                argument='YOUTUBE'
                id='youtube'
                img='https://picsum.photos/51'
            />
            <SocialItem
                argument='INSTAGRAM'
                id='instagram'
                img='https://picsum.photos/52'
            />
        </ul>
    );
}

export default Social;
