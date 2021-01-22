import app from 'generated/app';
import {Home} from '../scenes/home/home';
import Usuario from "../scenes/usuario/usuario";
import Player from "../scenes/player/player";
import PopUps from '../scenes/pop-ups/pop-ups';

/**
 */
export default class Router {
    /**
     */
    constructor() {
        /**
         * @type {PopUps} :inject
         */
        this.scenesPopUps;

        /**
         * @type {Home} :inject
         */
        this.scenesHome;
        /**
         * @type {Usuario} :inject
         */
        this.scenesUsuario;
        /**
         * @type {Player} :inject
         */
        this.scenesPlayer;
    }

    /**
     * @param {string} sceneName
     * @param {{
     *     id: number,
     *     subItem: ?number
     * }} activeSceneParams
     * @return {Promise}
     */
    show(sceneName, activeSceneParams) {
        const scene = this.getSceneByName('Home');

console.log("activeSceneParams",activeSceneParams)


        return app.getSceneOpener()
            .open(scene, () => {
                scene.configure(activeSceneParams);
                scene.setActiveSceneId(activeSceneParams);
            });
    }




    /**
     * @param {string} sceneName
     * @return {Home}
     */
    getSceneByName(sceneName) {
        let obj = {
            'Home': this.scenesHome, //menu-item ln64, check the name we pass and the routes!!!!!
            'usuario': this.scenesUsuario,
            'player': this.scenesPlayer,
            'pop-ups': this.scenesPopUps,

        }[sceneName];
        return obj
    }
}
