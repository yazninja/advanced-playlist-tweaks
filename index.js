import{ default as path } from 'path'

export class advPlaylistPlugin {
    constructor(env) {
        // Define plugin enviornment within the class
        this.env = env
    }

    // Called when the backend is ready
    onReady(win) {

    }

    // Called when the renderer is ready (app.init())
    onRendererReady(win) {
        console.log("\n\n\n [nowPlayingInfoPlugin] Ready \n\n\n");
    }
   
    onBeforeQuit() {
    }
}
