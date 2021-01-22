import {findFirstElementNode} from 'zb/html';
import UIBaseListItem from 'ui/widgets/base-list/base-list-item';
import {render} from 'generated/cutejs/oizombie/widgets/home-type-widget-item/home-type-widget-item.jst';


/**
 */
export default class homeTypeWidgetItem extends UIBaseListItem {
	/**
	 * @override
	 */
	_createContainer() {
console.log("home type widget item",this._data);
		const result = render({
			railTitle: this._data.railTitle ? this._data.railTitle :'jean pierre',
			title: this._data.title ? this._data.title : this._data.releaseYear,
		});

		this._container = (findFirstElementNode(result.root));
	}
};
