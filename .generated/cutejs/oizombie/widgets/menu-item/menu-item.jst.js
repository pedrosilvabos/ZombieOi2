import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     imageUrl: HTMLImageElement,
 *     arrow: HTMLDivElement,
 *     title: HTMLElement
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
		imageUrl: null,
		arrow: null,
		title: null
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
			case 'imageUrl':
				if (!exports.imageUrl) {
					exports.imageUrl = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrow':
				if (!exports.arrow) {
					exports.arrow = value;
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
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="w-menu-item">\r\n\t<img data-export-id = "imageUrl">\r\n\t<img src="./icons/home.svg">\r\n\t<div class="w-menu-item__arrow" data-export-id="arrow"></div>\r\n\t<span class="w-menu-item__title" data-export-id="title"></span>\r\n</div>\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
