
function transform(inputStr, xsltStr, outElem){
	var input = (new DOMParser()).parseFromString(inputStr, 'text/xml');
	var xslt = (new DOMParser()).parseFromString(xsltStr, 'text/xml');
	var xsltProcessor=new XSLTProcessor();
	xsltProcessor.importStylesheet(xslt);
	var resultDocument = xsltProcessor.transformToFragment(input,document);
	hiddenDiv.innerHTML = '';
	hiddenDiv.appendChild(resultDocument);
	outElem.value = hiddenDiv.innerHTML;
}

var goAndDo = function(){
	transform(input.value, xslt.value, output);
};

input.onkeyup = goAndDo;
input.onchange = goAndDo;
xslt.onkeyup = goAndDo;
xslt.onchange = goAndDo;
