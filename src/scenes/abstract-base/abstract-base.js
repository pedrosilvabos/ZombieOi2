import AbstractCuteScene from 'cutejs/layers/abstract-scene';
import {Value} from 'zb/geometry/direction';
import {Out, render} from 'generated/cutejs/oizombie/scenes/abstract-base/abstract-base.jst';
import app from 'generated/app';
import MenuWidget from '../../widgets/menu/menu';
import DataGenerator from '../../widgets/menu-data-source-generator/menu-data-source-generator';

/**
 */
export class AbstractBase extends AbstractCuteScene {

	/**
	 */
	constructor() {
		super();
		this._menuContent2

		/**
		 * @type {?MenuWidget}
		 * @protected
		 */
		this._menu;

		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported;
		;
		this._addContainerClass('s-abstract-base');


	}
	setMenu(ret){
		console.log("setting source", ret)
		this._menuContent2 = ret
		this._createMenu();
		this.setDefaultWidget(this._menu);
	}
	/**
	 * Called before widget shown.
	 */
	beforeDOMShow() {


	}

	/** @override */


	/**
	 * This makes the active scene a different color on the menu
	 * @param {{
	 *     id: number,
	 *     subItem: ?number
	 * }} data
	 */
	setActiveSceneId(data) {
		this._menu.activateItemByID(data);

	}


	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}


	/**
	 * @private
	 */
	_createMenu() {
		//console.log('example', this._example);
		this._menu = new MenuWidget({
			menu: this._menuContent2
		});

		this._container.appendChild(this._menu.getContainer());
		this.appendWidget(this._menu);

		this.setNavigationRule(this._menu, Value.UP, null);
		this.setNavigationRule(this._menu, Value.DOWN, null);
		app.on(app.EVENT_MENU_TOGGLE, (event, object) => {
			this._menu.setMenuSection(object);
		});
	}
}

