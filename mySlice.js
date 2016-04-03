String.prototype.mySlice = function(start, end) {
	
	var S = this; 
	var len = S.length;
	var intStart = start - 0;
	var intEnd = end ? (end - 0) : len;

	if ( intStart != intStart)
		intStart = 0;

	var from = intStart < 0
				? Math.max(len + intStart, 0)
				: Math.min(intStart, len);

	var to = intEnd < 0
				? Math.max(len + intEnd, 0)
				: Math.min(intEnd, len);

	var span = Math.max(to - from, 0);

	var str='';
	for ( var i = 0; i < span; i++ ){
		str += S[from + i];
	}

	return str;

}
