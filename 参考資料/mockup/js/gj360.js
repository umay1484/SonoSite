/* -------------------------------------------------------------------------
 GJ360 共用 Javascript
------------------------------------------------------------------------- */
var gj360 = {
	api: null
};
gj360.api = {
	lehSs: function (opt, cbS, cbE) {
		return gj360.api.getJSON("/api/leh/ss.json", opt, cbS, cbE);
	},
	/* cb によって同期・非同期を切り替える */
	getJSON: function (url, opt, cbS, cbE) {
		if (cbE == null) {
			cbE	= function() {
				alert("API error : " + url);
			};
		}
		if (cbS) {
			$.ajax({
				scriptCharset: 'utf-8',
				type: "GET",
				url: url,
				data: opt,
				success: cbS,
				error: cbE,
				dataType: 'json'
			});
		}
		else {
			var ret	= null;
			$.ajax({
				scriptCharset: 'utf-8',
				type: "GET",
				async: false,
				url: url,
				data: opt,
				success: function(json){ ret = json; },
				error: cbE,
				dataType: 'json'
			});
			return ret;
		}
	}
};
