import * as me from 'melonjs/dist/melonjs.module.js';

import data from '../../data.js'
import HUD from '../renderables/HUD.js'

class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // load a level
		me.level.load("area01");

		// reset the score
		data.score = 0;

		// add our HUD to the game world
		this.HUD = new HUD.Container();
		me.game.world.addChild(this.HUD);

		// play the audio track
		me.audio.playTrack("dst-inertexponent");
    }

    onDestroyEvent() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);

		// stop the current audio track
		me.audio.stopTrack();
	}
};

export default PlayScreen;
