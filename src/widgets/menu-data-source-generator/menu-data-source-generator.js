import AbstractCuteWidget from 'cutejs/widgets/abstract-widget';
import {Out, render} from 'generated/cutejs/oizombie/widgets/menu-data-source-generator/menu-data-source-generator.jst';


/**
 */
export default class menuDataSourceGenerator extends AbstractCuteWidget {

	constructor() {
		super();
		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported;
	}

	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}

	/**

	 * @return {Promise<?>} Promise<?>
	 *     gets the full side menu
	Model :
		childItems: []
		contentLists: [{listType: "Banner", title: "Destaques", visibleToAnonymousUsers: true,…},…]
		id: "a1de9cf1-bcba-40d7-88d4-c2b3343e5031"
		itemType: "Home"
		position: 0
		positionType: "Header"
		title: "Home"
		url: null
		visibleToAnonymousUsers: false
	 */

	_getMenuContent() {

		let url = 'https://meoapp.tv.alticelabs.com/2020/Dev/ZombieBox/UMMeX/Public-API/api/v1/menu?useragent=Android';
		let data2 = [];
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
								let obj = {};
								//define the menu item return data object!
								//after this you need to configure the item on the menu.js and menu-items.js
								//so it gets passed down
								obj = {
									title: res['data'][i]['title'],
									scene: res['data'][i]['itemType'],
									sceneId: res['data'][i]['id'],
									itemType: res['data'][i]['itemType']
								};
								if (res.data[i]['contentLists'].length > 0) {
									console.log('res.data[i].contentLists', res['data'][i]['contentLists']);
									obj.contentLists = {contentLists: res['data'][i]['contentLists']};
								}
								if (res.data[i]['childItems'].length > 0) {
									let subItems = [];
									for (let j = 0; j < res['data'][i]['childItems'].length; j++) {
										let subitem = {};

										//define the subitem menu return data object!
										subitem.sceneId = res['data'][i]['childItems'][j]['id'],
											subitem.title = res['data'][i]['childItems'][j]['title'],
											subitem.itemType = res['data'][i]['childItems'][j]['itemType'],
											subItems.push(subitem);
									}
									obj.subItems = subItems; //must be array
									console.log('finding the subitems id', subItems);
								}
								data2.push(obj);
							}
							return data2;
						} else {
							console.log('Bad Request', res.status);
						}
					}));
	}
};
