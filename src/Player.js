import React, { Component } from 'react';
import PlayerAPI from './PlayerAPI'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
        }        
    }

    componentDidMount() {
        const playerFetched = PlayerAPI.get(
            parseInt(this.props.match.params.number, 10)
        );
        this.setState({
            player: playerFetched,
        });        
    }

    render() {        
        const player = this.state.player;
        if (!player) {
            return (
                <div>Sorry, but the player was not found</div>
            );
        }
        return (
            <div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
            </div>
        );
    }
}
  
export default Player;