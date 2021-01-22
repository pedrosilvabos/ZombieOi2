import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {{
 *     title: string,
 *     railTitle: string
 * }}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     title: HTMLDivElement,
 *     debug: HTMLDivElement
 * }}
 */
export var Out;


/**
 * @param {In} templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(templateParams, opt_options) {
	/**
	 * @this {In}
	 * @return {Out}
	 */
	var _template = function() {
		var templatesData = {};
		var exports = {
			root: null,
			title: null,
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
				case 'title':
					if (!exports.title) {
						exports.title = value;
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
		__p += '<div class="w-home-type-widget-item">\r\n    <div data-export-id="title"></div>\r\n    <div data-export-id="debug"></div>\r\n    <div class="w-home-type-widget-item__title"> ' +
		 cutejs.escape( this.title ) +
		'</div>\r\n    <div class="w-home-type-widget-item__wrap">\r\n    </div>\r\n</div>\r\n';
		
		return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
	};
	return _template.call(templateParams);
};
