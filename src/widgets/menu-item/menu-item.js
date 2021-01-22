import {findFirstElementNode, text, updateClassName} from 'zb/html';
import Button from 'ui/widgets/button/button';
import app from 'generated/app';
import {Out, render} from 'generated/cutejs/oizombie/widgets/menu-item/menu-item.jst';


/**
 */
export class MenuItem extends Button {
	/**help-bar-item
	 * @param {MenuItem.Input} data
	 */
	constructor(data) {

		const exp = render();
		const container = findFirstElementNode(exp.root);
		super(container, data);

		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported = exp;

		/**
		 * @type {MenuItem.Input}
		 * @protected
		 */
		this._data = data;

		/**
		 * @type {boolean}
		 * @private
		 */
		this._isCollapsed = false;

		/**
		 * @type {boolean}
		 * @private
		 */
		this._selected = false;


		if (data.modifier) {
			updateClassName(this._container, data.modifier, true);

		}

		if (data.subItems) {
			this.setCollapsed(true);
			this.onClick(this._toggle.bind(this));
		} else {
			this.onClick(() => {
				let param = {};

				if (this._data.parentItem !== null) {
					param = {id: this._data.parentItem, subItem: this._data.id}; //stand alone button
				} else {
					param = {id: this._data.id, subItem: null};//button in subitem
				}

				console.log('this._data', this._data);
				param.sceneId = this._data.sceneId;
				param.itemType = this._data.itemType;
				app.sc.serviceRouter.show(this._data.scene, param);
			});
		}

		updateClassName(this.getContainer(), '_sub-item', this._data.parentItem !== null);

		if (data.image) {
			this.addIcon(data.image);
		}
		this.setTitle(data.title);
	}

	/**
	 * @param {boolean} state
	 */
	setCollapsed(state) {
		this._isCollapsed = state;
		this.setUnfolded(!state);

		updateClassName(this._exported.arrow, '_down', state);
		updateClassName(this._exported.arrow, '_up', !state);
	}

	/**
	 * @return {number}
	 */
	getID() {
		return this._data.id;
	}

	/**
	 * @return {?Array<MenuItem.Input>}
	 */
	getSubItems() {
		return this._data.subItems;
	}

	/**
	 * @param {string} title
	 */
	setTitle(title) {
		text(this._exported.title, title);
	}

	/**
	 * adds icon to the menu item
	 * if it has an icon on the json that makes the menuInpui in abstract-base.js
	 * @param {string} image
	 */
	addIcon(image) {

		this._exported.imageUrl.src = image.toString();
		//	console.log(this._exported)
	}

	/**
	 * @param {boolean} state
	 */
	setSelected(state) {
		this._selected = state;
		updateClassName(this.getContainer(), SELECTED_CLASS, state);
	}

	/**
	 * @param {boolean} state
	 */
	setUnfolded(state) {
		updateClassName(this.getContainer(), UNFOLDED_CLASS, state);
	}

	/**
	 * @protected
	 */
	_toggle() {

		app._fireEvent(app.EVENT_MENU_TOGGLE, {id: this.getID(), status: !this._isCollapsed});
	}
}


/**
 * @const {string}
 */
export const UNFOLDED_CLASS = '_unfolded';


/**
 * @const {string}
 */
export const SELECTED_CLASS = '_selected';


/**
 * @typedef {{
 *     subItems: ?Array<MenuItem.Input>,
 *     parentItem: ?number,
 *     scene: string,
 *     title: string,
 *     id: number,
 *     modifier: (string|undefined)
 * }}
 */
MenuItem.Input;
