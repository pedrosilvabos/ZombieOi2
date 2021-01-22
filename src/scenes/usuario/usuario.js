import {Out, render} from 'generated/cutejs/oizombie/scenes/usuario/usuario.jst';
import {AbstractBase} from '../abstract-base/abstract-base';
import Login from '../../widgets/login/login';

/**
 */
export default class usuario extends AbstractBase {
	/**
	 */
	constructor() {
		super();

		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported;

		this._addContainerClass('s-usuario');



		//this._container.appendChild(this._login.getContainer());
		//this.appendWidget(this._login);

	}

	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}
};
