import BaseApplication from "generated/base-application";
import {Home} from "oizombie/scenes/home/home";
import Player from "oizombie/scenes/player/player";
import PopUps from "oizombie/scenes/pop-ups/pop-ups";
import Router from "oizombie/service/router";
import Usuario from "oizombie/scenes/usuario/usuario";


/**
 */
export default class {
	/**
	 * @param {BaseApplication} application
	 */
	constructor(application) {
		/**
		 * As proxy to system services
		 * @type {BaseApplication}
		 */
		this.application = application;

		/**
		 * @type {Home}
		 */
		this.scenesHome;

		/**
		 * @type {Player}
		 */
		this.scenesPlayer;

		/**
		 * @type {PopUps}
		 */
		this.scenesPopUps;

		/**
		 * @type {Usuario}
		 */
		this.scenesUsuario;

		/**
		 * @type {Router}
		 */
		this.serviceRouter;
	}

	/**
	 */
	bootstrap() {
		// Constructing
		this.scenesHome = new Home();
		this.scenesPlayer = new Player();
		this.scenesPopUps = new PopUps();
		this.scenesUsuario = new Usuario();
		this.serviceRouter = new Router();

		// Interlacing
		this.serviceRouter.scenesPopUps = this.scenesPopUps;
		this.serviceRouter.scenesHome = this.scenesHome;
		this.serviceRouter.scenesUsuario = this.scenesUsuario;
		this.serviceRouter.scenesPlayer = this.scenesPlayer;

		// Setup scenes
		this.application.addScene(this.scenesHome, 'home');
		this.application.addScene(this.scenesPlayer, 'player');
		this.application.addScene(this.scenesPopUps, 'pop-ups');
		this.application.addScene(this.scenesUsuario, 'usuario');
	}
};
