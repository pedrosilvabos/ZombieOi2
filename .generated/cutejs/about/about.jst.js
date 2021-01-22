import * as cutejs from 'cutejs-lib/cute-library';
import Button from "ui/widgets/button/button";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     btnExit: Button,
 *     arrowUp: Button,
 *     arrowDown: Button,
 *     popupContainer: HTMLDivElement,
 *     slider: HTMLDivElement,
 *     content: HTMLDivElement
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
		btnExit: null,
		arrowUp: null,
		arrowDown: null,
		popupContainer: null,
		slider: null,
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
			case 'btnExit':
				if (!exports.btnExit) {
					exports.btnExit = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrowUp':
				if (!exports.arrowUp) {
					exports.arrowUp = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrowDown':
				if (!exports.arrowDown) {
					exports.arrowDown = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'popupContainer':
				if (!exports.popupContainer) {
					exports.popupContainer = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'slider':
				if (!exports.slider) {
					exports.slider = value;
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
	__p += '<div class="p-zb-about">\n\t<div class="p-zb-about__container" data-export-id="popupContainer">\n\t\t<div class="p-zb-about__slider" data-export-id="slider">\n\t\t\t<div class="p-zb-about__header">\n\t\t\t\t<div class="p-zb-about__logo"></div>\n\t\t\t\t<div class="p-zb-about__title"><span>ZombieBox</span> Application</div>\n\t\t\t\t<div class="p-zb-about__copyright">zombiebox.tv © Interfaced</div>\n\t\t\t</div>\n\t\t\t<div class="p-zb-about__content" data-export-id="content"></div>\n\t\t</div>\n\t\t<div class="p-zb-about__btn _exit" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "btnExit", templatesData) +
	'"></div>\n\t\t<div class="p-zb-about__btn _up" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "arrowUp", templatesData) +
	'"></div>\n\t\t<div class="p-zb-about__btn _down" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "arrowDown", templatesData) +
	'"></div>\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
