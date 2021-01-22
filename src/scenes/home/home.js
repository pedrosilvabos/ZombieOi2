import {Out, render} from 'generated/cutejs/oizombie/scenes/home/home.jst';
import {AbstractBase} from '../abstract-base/abstract-base';
//all the types of widgets to compose scenes
import CategoryTypeWidget from "../../widgets/category-type-widget/category-type-widget";
import HomeTypeWidget from '../../widgets/home-type-widget/home-type-widget'
import {text} from 'zb/html';

/**
 */
export class Home extends AbstractBase {
    /**
     */
    constructor() {
        super();

        this.canRemoveWidget = false;

        /**
         * @type {Out}
         * @protected
         */
        this._exported;
        this._addContainerClass('s-home');

    }


    /**
     * @override
     */
    afterDOMHide() {
        super.afterDOMHide();

    }

    /**
     *  @param {scene} params
     *  @param {itemType} params //i dont think this is in use
     */

    configure(scene, itemType) {
        console.log('scene', scene)
        console.log('itemType', itemType)
        let CategoryTypeWidget2
        switch (scene.itemType) {
            case 'Home':
                CategoryTypeWidget2 = new HomeTypeWidget();
                break;
            case 'Category':
                CategoryTypeWidget2 = new CategoryTypeWidget();
                break;
        }

        text(this._exported.itemType, scene.itemType)


        //we should investigate the promise canceling
        return Promise.resolve(CategoryTypeWidget2.getContent(scene.sceneId))
            .then(
                () => {
                    if (this.widgetToRemove) {
                        this._exported.buttonsContainer.removeChild(this.widgetToRemove.getContainer());
                    }
                    this.appendWidget(CategoryTypeWidget2);
                    this._exported.buttonsContainer.appendChild(CategoryTypeWidget2.getContainer());
                    this.widgetToRemove = CategoryTypeWidget2;
                }
            );
        //END HOME
    }


    /**
     * @override
     */
    _renderTemplate() {
        return render(this._getTemplateData(), this._getTemplateOptions());
    }


}
