import * as cutejs from 'cutejs-lib/cute-library';
import BaseList from "ui/widgets/base-list/base-list";
import HomeTypeWidgetItem from "oizombie/widgets/home-type-widget-item/home-type-widget-item";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     content: BaseList,
 *     debug: HTMLDivElement
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
		content: null,
		debug: null
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
			case 'content':
				if (!exports.content) {
					exports.content = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'debug':
				if (!exports.debug) {
					exports.debug = value;
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
	__p += '<div class="w-home-type-widget">\r\n    I AM THE HOME TYPE WIDGET\r\n    <div data-export-id="debug"></div>\r\n\r\n    ' +
	 cutejs.include('component', BaseList,  {options: {padding: 5, lineSize: 1}, itemClass: HomeTypeWidgetItem}, "content", templatesData) +
	'\r\n</div>\r\n\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
