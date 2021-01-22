import {findFirstElementNode} from 'zb/html';
import UIBaseListItem from 'ui/widgets/base-list/base-list-item';
import {render} from 'generated/cutejs/oizombie/widgets/horizontal-list-item/horizontal-list-item.jst';


/**
 */
export default class horizontalListItem extends UIBaseListItem {

	/**
	 * @override
	 */
	_createContainer() {
		console.log("THIS IS THE DATA",this._data)
		const result = render({
			title: this._data.title,
		});

		this._container = (findFirstElementNode(result.root));
	}
}
