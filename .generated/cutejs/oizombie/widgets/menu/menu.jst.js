import * as cutejs from 'cutejs-lib/cute-library';
import ScrollBar from "ui/widgets/scroll-bar/scroll-bar";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     scrollBar: ScrollBar,
 *     buttons: HTMLDivElement
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
		scrollBar: null,
		buttons: null
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
			case 'scrollBar':
				if (!exports.scrollBar) {
					exports.scrollBar = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'buttons':
				if (!exports.buttons) {
					exports.buttons = value;
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
	__p += '<div class="w-menu">\r\n\t<div class="w-menu__wrap" data-export-id="buttons"></div>\r\n\t' +
	 cutejs.include('component', ScrollBar,  {isVertical: true}, "scrollBar", templatesData) +
	'\r\n</div>\r\n\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
