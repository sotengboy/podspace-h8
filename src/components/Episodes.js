import React from 'react';
import Audio from './Audio';

class Episodes extends React.Component {
    render(){
        const episodes = this.props.episodes;
    return (
        <div>
    {episodes.map(item => 
            <Audio audio={item.audio} key={item.id} />
        )}
        </div>
    );
    }
}
export default Episodes;