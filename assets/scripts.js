const $DP_Single_Page = {
	iframes : [],
	init: () => {
		$DP_Single_Page.iframes = $DP_Single_Page.getAllIframes();
		$DP_Single_Page.processIframes();
		window.addEventListener('resize', $DP_Single_Page.processIframes);
	},
	processIframes: () => {
		for( let i = 0; i < $DP_Single_Page.iframes.length; i++  ) {
			let iframe = $DP_Single_Page.iframes[ i ];
			$DP_Single_Page.resizeIframe( iframe );
		}
	},
	getAllIframes: () => {
		return document.querySelectorAll('iframe');
	},
	resizeIframe: ( iframe ) => {
		let parent = iframe.parentElement;
		iframe.height = ( iframe.height / iframe.width ) * parent.clientWidth;
		iframe.width = parent.clientWidth;
	}
}

$DP_Single_Page.init();