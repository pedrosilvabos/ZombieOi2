var path = require('path');
const {PARTIAL} = require('zombiebox-extension-dependency-injection').types.ImportType;

/**
 * @param {Object} config
 * @return {Object}
 */
module.exports = function(config) {
	return {
		project: {
			name: 'oizombie',
			src: path.resolve(__dirname, 'src'),
			entry: path.resolve(__dirname, 'src/application.js')
		},
		include: [
			{
				name: 'images',
				static: {
					'/icons/alert.svg': path.resolve(__dirname, 'static/images/icons/alert.svg'),
					'/icons/all-checked.svg': path.resolve(__dirname, 'static/images/icons/all-checked.svg'),
					'/icons/all-checked.svg': path.resolve(__dirname, 'static/images/icons/all-checked.svg'),
					'/icons/angle-down.svg': path.resolve(__dirname, 'static/images/icons/angle-down.svg'),
					'/icons/angle-left.svg': path.resolve(__dirname, 'static/images/icons/angle-left.svg'),
					'/icons/angle-right.svg': path.resolve(__dirname, 'static/images/icons/angle-right.svg'),
					'/icons/angle-up.svg': path.resolve(__dirname, 'static/images/icons/angle-up.svg'),
					'/icons/back7.svg': path.resolve(__dirname, 'static/images/icons/back7.svg'),
					'/icons/caret-down.svg': path.resolve(__dirname, 'static/images/icons/caret-down.svg'),
					'/icons/caret-up.svg': path.resolve(__dirname, 'static/images/icons/caret-up.svg'),
					'/icons/cast.svg': path.resolve(__dirname, 'static/images/icons/cast.svg'),
					'/icons/check.svg': path.resolve(__dirname, 'static/images/icons/check.svg'),
					'/icons/chevron-down.svg': path.resolve(__dirname, 'static/images/icons/chevron-down.svg'),
					'/icons/chevron-left.svg': path.resolve(__dirname, 'static/images/icons/chevron-left.svg'),
					'/icons/chevron-up.svg': path.resolve(__dirname, 'static/images/icons/chevron-up.svg'),
					'/icons/child.svg': path.resolve(__dirname, 'static/images/icons/child.svg'),
					'/icons/circle.svg': path.resolve(__dirname, 'static/images/icons/circle.svg'),
					'/icons/circle-edit.svg': path.resolve(__dirname, 'static/images/icons/circle-edit.svg'),
					'/icons/clock-o.svg': path.resolve(__dirname, 'static/images/icons/clock-o.svg'),
					'/icons/cloud-minus.svg': path.resolve(__dirname, 'static/images/icons/cloud-minus.svg'),
					'/icons/cloud-plus.svg': path.resolve(__dirname, 'static/images/icons/cloud-plus.svg'),
					'/icons/comment-exclamation.svg': path.resolve(__dirname, 'static/images/icons/comment-exclamation.svg'),
					'/icons/commenting-o.svg': path.resolve(__dirname, 'static/images/icons/commenting-o.svg'),
					'/icons/comments-o.svg': path.resolve(__dirname, 'static/images/icons/comments-o.svg'),
					'/icons/compress.svg': path.resolve(__dirname, 'static/images/icons/compress.svg'),
					'/icons/desktop.svg': path.resolve(__dirname, 'static/images/icons/desktop.svg'),
					'/icons/desktop-checked.svg': path.resolve(__dirname, 'static/images/icons/desktop-checked.svg'),
					'/icons/devices.svg': path.resolve(__dirname, 'static/images/icons/devices.svg'),
					'/icons/devices-checked.svg': path.resolve(__dirname, 'static/images/icons/devices-checked.svg'),
					'/icons/episodes.svg': path.resolve(__dirname, 'static/images/icons/episodes.svg'),
					'/icons/episodes-1.svg': path.resolve(__dirname, 'static/images/icons/episodes-1.svg'),
					'/icons/exchange.svg': path.resolve(__dirname, 'static/images/icons/exchange.svg'),
					'/icons/exclamation-triangle.svg': path.resolve(__dirname, 'static/images/icons/exclamation-triangle.svg'),
					'/icons/expand.svg': path.resolve(__dirname, 'static/images/icons/expand.svg'),
					'/icons/eye.svg': path.resolve(__dirname, 'static/images/icons/eye.svg'),
					'/icons/facebook-square.svg': path.resolve(__dirname, 'static/images/icons/facebook-square.svg'),
					'/icons/faq.svg': path.resolve(__dirname, 'static/images/icons/faq.svg'),
					'/icons/folder-minus.svg': path.resolve(__dirname, 'static/images/icons/check.svg'),
					'/icons/folder-plus.svg': path.resolve(__dirname, 'static/images/icons/folder-plus.svg'),
					'/icons/folder-minus.svg': path.resolve(__dirname, 'static/images/icons/folder-minus.svg'),
					'/icons/folder-plus.svg': path.resolve(__dirname, 'static/images/icons/folder-plus.svg'),
					'/icons/fwd30.svg': path.resolve(__dirname, 'static/images/icons/fwd30.svg'),
					'/icons/heart.svg': path.resolve(__dirname, 'static/images/icons/heart.svg'),
					'/icons/home.svg': path.resolve(__dirname, 'static/images/icons/home.svg'),
					'/icons/laptop.svg': path.resolve(__dirname, 'static/images/icons/laptop.svg'),
					'/icons/laptop-checked.svg': path.resolve(__dirname, 'static/images/icons/laptop-checked.svg'),
					'/icons/list-ul.svg': path.resolve(__dirname, 'static/images/icons/list-ul.svg'),
					'/icons/minus-circle.svg': path.resolve(__dirname, 'static/images/icons/minus-circle.svg'),
					'/icons/more-content.svg': path.resolve(__dirname, 'static/images/icons/more-content.svg'),
					'/icons/mute.svg': path.resolve(__dirname, 'static/images/icons/mute.svg'),
					'/icons/no-alert.svg': path.resolve(__dirname, 'static/images/icons/no-alert.svg'),
					'/icons/no-content.svg': path.resolve(__dirname, 'static/images/icons/no-content.svg'),
					'/icons/pause.svg': path.resolve(__dirname, 'static/images/icons/pause.svg'),
					'/icons/pencil.svg': path.resolve(__dirname, 'static/images/icons/pencil.svg'),
					'/icons/play.svg': path.resolve(__dirname, 'static/images/icons/play.svg'),
					'/icons/play-circle.svg': path.resolve(__dirname, 'static/images/icons/play-circle.svg'),
					'/icons/play-tv.svg': path.resolve(__dirname, 'static/images/icons/play-tv.svg'),
					'/icons/plus.svg': path.resolve(__dirname, 'static/images/icons/plus.svg'),
					'/icons/plus-circle.svg': path.resolve(__dirname, 'static/images/icons/plus-circle.svg'),
					'/icons/record-series.svg': path.resolve(__dirname, 'static/images/icons/record-series.svg'),
					'/icons/redeploy.svg': path.resolve(__dirname, 'static/images/icons/redeploy.svg'),
					'/icons/rent.svg': path.resolve(__dirname, 'static/images/icons/rent.svg'),
					'/icons/save.svg': path.resolve(__dirname, 'static/images/icons/save.svg'),
					'/icons/search.svg': path.resolve(__dirname, 'static/images/icons/search.svg'),
					'/icons/share.svg': path.resolve(__dirname, 'static/images/icons/share.svg'),
					'/icons/show-cast.svg': path.resolve(__dirname, 'static/images/icons/show-cast.svg'),
					'/icons/signatures.svg': path.resolve(__dirname, 'static/images/icons/signatures.svg'),
					'/icons/star.svg': path.resolve(__dirname, 'static/images/icons/star.svg'),
					'/icons/step-backward.svg': path.resolve(__dirname, 'static/images/icons/step-backward.svg'),
					'/icons/step-forward.svg': path.resolve(__dirname, 'static/images/icons/step-forward.svg'),
					'/icons/stop.svg': path.resolve(__dirname, 'static/images/icons/stop.svg'),
					'/icons/tag.svg': path.resolve(__dirname, 'static/images/icons/tag.svg'),
					'/icons/thumbs-o-down.svg': path.resolve(__dirname, 'static/images/icons/thumbs-o-down.svg'),
					'/icons/thumbs-o-up.svg': path.resolve(__dirname, 'static/images/icons/thumbs-o-up.svg'),
					'/icons/times.svg': path.resolve(__dirname, 'static/images/icons/times.svg'),
					'/icons/trash.svg': path.resolve(__dirname, 'static/images/icons/trash.svg'),
					'/icons/twitter-square.svg': path.resolve(__dirname, 'static/images/icons/twitter-square.svg'),
					'/icons/usd.svg': path.resolve(__dirname, 'static/images/icons/usd.svg'),
					'/icons/user.svg': path.resolve(__dirname, 'static/images/icons/user.svg'),
					'/icons/user-area.svg': path.resolve(__dirname, 'static/images/icons/user-area.svg'),
					'/fonts/oiplay.ttf': path.resolve(__dirname, 'static/fonts/oiplay.ttf'),
					'/fonts/oiplay.eot': path.resolve(__dirname, 'static/fonts/oiplay.eot'),
					'/fonts/oiplay.woff': path.resolve(__dirname, 'static/fonts/oiplay.woff')

				}
			}
		],
		devServer: {
			backdoor: path.resolve(__dirname, 'src/dev.js')
		},
		extensions: {
			di: {
				services: {
					scenesHome: {
						_import: PARTIAL
					}
				},
				servicesAutodetect: [
					{
						group: 'scenes',
						directory: path.resolve(__dirname, 'src/scenes')
					},
					{
						group: 'service',
						directory: path.resolve(__dirname, 'src/service')
					}
				]
			}
		}

	};
};
