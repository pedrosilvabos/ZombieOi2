import * as cutejs from 'cutejs-lib/cute-library';
import BaseList from "ui/widgets/base-list/base-list";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     content: BaseList
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
		content: null
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
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="w-category-type-widget">\r\n    I AM THE CATEGORY TYPE WIDGET\r\n\r\n<!--    <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">-->\r\n    ' +
	 cutejs.include('component', BaseList,  {options: {padding: 5, lineSize: 1}, itemClass: ''}, "content", templatesData) +
	'\r\n</div>\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
