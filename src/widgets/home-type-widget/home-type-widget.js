import {Out, render} from 'generated/cutejs/oizombie/widgets/home-type-widget/home-type-widget.jst';
import abstractTypeWidget from '../abstract-type-widget/abstract-type-widget';
import List from 'ui/data/list';
import Key from 'zb/device/input/key';

/**
 */
export default class homeTypeWidget extends abstractTypeWidget {
    /**
     * @param {Object} params
     */
    constructor() {
        super();

        this.iterator = 0;
        /**
         * @type {Out}
         * @protected
         */
        this._exported;
    }

    getContent(sceneId) {
        return Promise.resolve(this.getHomeContent(sceneId))
            .then((retVal) => {
                console.log("retVal",retVal)
                this.contentStorage = retVal
                console.log("RESOLVED CATEGORY")
                const source = new List(retVal[0].scene);
                console.log("source", source)

                this._exported.content.on(
                    this._exported.content.EVENT_CLICK, (eventName, items) => {
                        console.log('clicked ', items);
                    });
                this._exported.content.on(
                    this._exported.content.EVENT_FOCUS, (eventName, items) => {
                        console.log('HOME SCENE was focused ');
                    });

                this._exported.content.setSource(source)
            })


    }
    processKey(zbKey) {
        if (zbKey === Key.UP) {
            console.log('UPPP', this.contentStorage[this.iterator].scene);
            console.log(this.iterator);


            this._exported.content.setSource(new List(this.contentStorage[this.iterator].scene));
            if (this.iterator !== 0) {
                this.iterator -= 1;
                return true;
            }
            console.log("reached the upper limit of the rail")

            return true;
        }
        if (zbKey === Key.DOWN) {
            console.log('DOWN', this.contentStorage[this.iterator].scene);
            console.log(this.iterator);
           console.log('this.contentStorage.length',this.contentStorage.length)
            this._exported.content.setSource(new List(this.contentStorage[this.iterator].scene));
            if(this.iterator < this.contentStorage.length-1){
                this.iterator += 1;
                return true;
            }
            console.log("reached the bottom of the rail")
            return true;
        }

        return super.processKey(zbKey);
    }

    up() {
        console.log('GOING UP');
    }

    down() {
        console.log('GOING DOWN');
    }
    /**
     * * @param {string} id for the current home scene
     * gets and serialized the content for the Home Scene
     */
    getHomeContent(sceneId) {

        let url = 'https://meoapp.tv.alticelabs.com/2020/Dev/ZombieBox/UMMeX/Public-API/api/v1/menu/' + sceneId;
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
                                let homeSceneItems = {};
                                //define the menu item return data object!
                                //after this you need to configure the item on the menu.js and menu-items.js
                                //so it gets passed down
                                homeSceneContent = {
                                    title: res['data'][i]['title'],
                                    scene: res['data'][i]['items'],
                                    sceneId: res['data'][i]['id'],
                                    itemType: res['data'][i]['itemType']
                                };


                                for (let j = 0; j < res.data[i].items.length; j++) {
                                    homeSceneItems = {
                                        title: res['data'][i]['items'][j]['title']
                                    }



                                }
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
