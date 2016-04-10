	function valamivalami(pname,px,py,pmap){
		$("body").trigger({
			type: "refreshmap",
			name: pname,
			walk: px+1
		});
	}
