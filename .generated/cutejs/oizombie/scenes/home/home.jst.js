import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     sliderWrapper: HTMLDivElement,
 *     contentSliderWrapper: HTMLDivElement,
 *     sceneId: HTMLDivElement,
 *     itemType: HTMLDivElement,
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
		sliderWrapper: null,
		contentSliderWrapper: null,
		sceneId: null,
		itemType: null,
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
			case 'sliderWrapper':
				if (!exports.sliderWrapper) {
					exports.sliderWrapper = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'contentSliderWrapper':
				if (!exports.contentSliderWrapper) {
					exports.contentSliderWrapper = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'sceneId':
				if (!exports.sceneId) {
					exports.sceneId = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'itemType':
				if (!exports.itemType) {
					exports.itemType = value;
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
	__p += '<div data-export-id="sliderWrapper"></div>\r\n<div data-export-id="contentSliderWrapper">\r\n\r\n</div>\r\n<div class="description" data-export-id="sceneId"></div>\r\n<div class="description" data-export-id="itemType"></div>\r\n\r\n\r\n<div class="description" data-export-id="buttonsContainer"></div>\r\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
