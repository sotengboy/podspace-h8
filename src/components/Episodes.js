import React from 'react';
import Audio from './Audio';

class Episodes extends React.Component {
    render(){
        const episodes = this.props.episodes;
    return (
        <div>
    {episodes.map(item => 
            <Audio audio={item.audio} />
        )}
        </div>
    );
    }
}
export default Episodes;