import AbstractCuteWidget from 'cutejs/widgets/abstract-widget';
import {render, Out} from 'generated/cutejs/oizombie/widgets/abstract-type-widget/abstract-type-widget.jst';
import List from 'ui/data/list';
import BaseList from 'ui/widgets/base-list/base-list';

/**
 */
export default class AbstractTypeWidget extends AbstractCuteWidget {
	/**
	 * @param {Object} params
	 */
	constructor() {
		super();

		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported;
	}
	getContent(homeId) {
		return Promise.resolve(this.fetchContent(homeId))
			.then((retVal) => {
				console.log("RESOLVED CATEGORY")
				const source = new List(retVal);
				return source
			})
	}
	/**
	 * * @param {string} id for the current home scene
	 * gets and serialized the content for the Home Scene
	 */
	fetchContent(homeId) {

		let url = 'https://meoapp.tv.alticelabs.com/2020/Dev/ZombieBox/UMMeX/Public-API/api/v1/menu/' + homeId;
		let contentReturnArray = [];
		let subItems = [];
		return fetch(url)
			.then(response =>
				response.json()
					.then(data => ({
						data: data,
						status: response.status
					}))
					.then(res => {
						if (300 <= res.status <= 200) {
							for (let i = 0; i < res.data.length; i++) {
								let homeSceneContent = {};
								//define the menu item return data object!
								//after this you need to configure the item on the menu.js and menu-items.js
								//so it gets passed down
								homeSceneContent = {
									title: res['data'][i]['title'],
									scene: res['data'][i]['items'],
									sceneId: res['data'][i]['id'],
									itemType: res['data'][i]['itemType']
								};
								// if (res.data[i]['contentLists'].length > 0) {
								// 	console.log('res.data[i].contentLists', res['data'][i]['contentLists']);
								// 	obj.contentLists = {contentLists: res['data'][i]['contentLists']};
								// }
								// if (res.data[i]['childItems'].length > 0) {
								// 	let subItems = [];
								// 	for (let j = 0; j < res['data'][i]['childItems'].length; j++) {
								// 		let subitem = {};
								//
								// 		//define the subitem menu return data object!
								// 		subitem.sceneId = res['data'][i]['childItems'][j]['id'],
								// 			subitem.title = res['data'][i]['childItems'][j]['title'],
								// 			subitem.itemType = res['data'][i]['childItems'][j]['itemType'],
								// 			subItems.push(subitem);
								// 	}
								// 	obj.subItems = subItems; //must be array
								// 	console.log('finding the subitems id', subItems);
								// }
								contentReturnArray.push(homeSceneContent);

							}
							return contentReturnArray;
						} else {
							console.log('Bad Request', res.status);
						}
					}));
	}
	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}
};
