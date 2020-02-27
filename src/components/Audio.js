import React from 'react';

class Audio extends React.Component {
    render(){
        const audio = this.props.audio;
    return (
        <p>
            <audio controls>
                <source src={audio}></source>
            </audio>
        </p>
    );
    }

}

export default Audio;