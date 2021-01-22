import * as cutejs from 'cutejs-lib/cute-library';
import Button from "oizombie/widgets/button/button";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     homeButton: Button,
 *     backButton: Button,
 *     forwardButton: Button
 * }}
 */
export var Out;


/**
 * @param {*=} opt_templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		homeButton: null,
		backButton: null,
		forwardButton: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {Out} exports
	 */
	var exportFunction = function(value, key, exports) {
		switch (key) {
			case 'root':
				if (!exports.root) {
					exports.root = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'homeButton':
				if (!exports.homeButton) {
					exports.homeButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'backButton':
				if (!exports.backButton) {
					exports.backButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'forwardButton':
				if (!exports.forwardButton) {
					exports.forwardButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="row scenes">\r\n\t' +
	 cutejs.include('component', Button,  'Home', "homeButton", templatesData) +
	'\r\n</div>\r\n<div class="row history">\r\n\t' +
	 cutejs.include('component', Button,  'Back in history', "backButton", templatesData) +
	'\r\n\t' +
	 cutejs.include('component', Button,  'Forward in history', "forwardButton", templatesData) +
	'\r\n</div>\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
