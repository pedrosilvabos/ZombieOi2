import BaseApplication from 'generated/base-application';
import {log as consoleLog,
	setLogger as consoleSetLogger,
	setLevel as consoleSetLevel,
	Level as ConsoleLevel} from 'zb/console/console';
import Remote from 'zb/console/loggers/remote';
import BaseServiceContainer from 'generated/dependency-injection/base-service-container';
import About from 'about/about';
import DataGenerator from './widgets/menu-data-source-generator/menu-data-source-generator';
import {Resolution, ResolutionInfo} from 'zb/device/resolutions';


//we need here a manual scene so we can intract with it
//it could be the preloader?
//the problem here is that on load we need the content to be shown

/**
 */
export default class Application extends BaseApplication {
	constructor() {

		super();
		this.DataGenerator = new DataGenerator();

		/**
		 * @type {BaseServiceContainer}
		 */
		this.sc;
		/**
		 * Fired with: {{
		 *     id: number,
		 *     status: boolean
		 * }}
		 * @const {string}
		 */
		consoleSetLevel(ConsoleLevel.LOG);
		consoleSetLogger(new Remote());
		this.EVENT_MENU_TOGGLE = 'menu-toggle';
	}

	/**
	 * @override
	 */
	processKey(zbKey, e) {
		About.processKey(zbKey);
		return super.processKey(zbKey, e);
	}

	/**
	 * @override
	 */
	_appendScreenSizeClass() {
		// No super necessary
		const resolutionInfo = ResolutionInfo[Resolution.HD];
		this._appendViewportSize(resolutionInfo);
		this._body.classList.add('zb-full-hd');
	}

	/**
	 * @override
	 */
	onReady() {
		super.onReady();
		this.sc = new BaseServiceContainer(this);
		this.sc.bootstrap();
	}

	/**
	 * @override
	 */
	onStart() {
		consoleLog('onStart event!1111!');
		consoleLog("WWWWWWOOO");

		this.home();
	}

	/**
	 * @override
	 */
	home() {
		consoleLog("WWWWWWOOO");
		let scene = {}
		scene.sceneId = "CONFIGURED FROM APPLICATION"
		this.DataGenerator = new DataGenerator();
		this._menuContent2 = Promise.resolve(this.DataGenerator._getMenuContent())
			.then((ret) => {
console.log("data returned in the applicationjs",ret)
				return this.getSceneOpener()
					.open(this.sc.scenesHome, () => {
						this.sc.scenesHome.setMenu(ret); //this will build the menu through the home menu to the abstract base.y
						this.sc.scenesHome.configure(ret[0],ret[0].itemType) //kind of a hack (review) because it is set to home mannualy
					});
				return ret;
			});

	}

	/**
	 * @override
	 */
	_onDeviceReady(eventName, device) {
		super._onDeviceReady(eventName, device);
		//this._createThrobber();
	}


}
