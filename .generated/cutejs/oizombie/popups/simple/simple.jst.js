import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     title: HTMLDivElement,
 *     message: HTMLDivElement,
 *     buttonsContainer: HTMLDivElement
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
		title: null,
		message: null,
		buttonsContainer: null
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
			case 'title':
				if (!exports.title) {
					exports.title = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'message':
				if (!exports.message) {
					exports.message = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'buttonsContainer':
				if (!exports.buttonsContainer) {
					exports.buttonsContainer = value;
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
	__p += '<div class="p-simple__title" data-export-id="title"></div>\r\n<div class="p-simple__message" data-export-id="message"></div>\r\n<div class="p-simple__buttons" data-export-id="buttonsContainer"></div>';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
