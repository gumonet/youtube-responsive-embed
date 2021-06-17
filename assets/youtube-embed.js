const $GMN_ObjYoutube = {
	iframes : [],
	init: () => {
		$GMN_ObjYoutube.frames = $GMN_ObjYoutube.getAllYoutubeIframes();
		$GMN_ObjYoutube.processIframes();
		window.addEventListener('resize', $GMN_ObjYoutube.processIframes);
	},
	processIframes: () => {
		for( let i = 0; i < $GMN_ObjYoutube.frames.length; i++  ) {
			let iframe = $GMN_ObjYoutube.frames[ i ];
			$GMN_ObjYoutube.resizeIframe( iframe );
		}
	},
	getAllYoutubeIframes: () => {
		return document.getElementsByClassName('responsive-youtube');
	},
	resizeIframe: ( iframe ) => {
		let parent = iframe.parentElement;
		iframe.height = ( iframe.height / iframe.width ) * parent.clientWidth;
		iframe.width = parent.clientWidth;
	}
}

$GMN_ObjYoutube.init();