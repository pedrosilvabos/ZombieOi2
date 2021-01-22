import AbstractCuteWidget from 'cutejs/widgets/abstract-widget';
import {Out, render} from 'generated/cutejs/oizombie/widgets/login/login.jst';
import {send} from 'zb/http/xhr';


/**
 */
export default class login extends AbstractCuteWidget {
	/**
	 * @param {Object} params
	 */
	constructor(params) {
		super();

		/**
		 * @type {Out}
		 * @protected
		 */
		this._exported;

	}
	makeMeTalk(){
		send("https://hsso.oi.net.br/nidp/app/login?id=tve&sid=0&option=credential&sid=0&target=https%3A%2F%2Fhsso.oi.net.br%2Fnidp%2Foauth%2Fnam%2Fauthz%3Fresponse_type%3Dcode%26scope%3Doiplay%26acr_values%3D%2Fsecure%2Fname%2Fpassword%2Ftveverywhere%2Furi%26client_id%3D363274c4-5b7b-4076-a9d7-1fea22d257a5%26redirect_uri%3Dhttps%3A%2F%2Fapimhml.oi.net.br%2Foauth%2Foi%26state%3De2c25cec-ace1-4abe-b45c-3b2db3aed12e", {

			"Sec-Fetch-Dest": "document"
		}).then((response) => console.log("response",response))
	}
	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}
};
