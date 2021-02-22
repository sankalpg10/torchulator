var Out = document.getElementById("Out");
var errorboard = document.getElementById("errorboard");
/*
var N = document.getElementById("Nin");
var C = document.getElementById("Cin");
var L = document.getElementById("Lin");
var D = document.getElementById("Din");
var H = document.getElementById("Hin");
var W = document.getElementById("Win");
var kernelsize = document.getElementById("kernelsize");
var padding = document.getElementById("padding");
var dilation = document.getElementById("dilation");
var stride = document.getElementById("stride");
*/
function Conv1D() {

	try {
		var Lin = parseInt(document.getElementById("Lin").value);
		var kernelsize = document.getElementById("kernelsize").value.split(",");
		var padding = document.getElementById("padding").value.split(",");
		var dilation = document.getElementById("dilation").value.split(",");
		var stride = document.getElementById("stride").value.split(",");

		if (kernelsize.length > 1){
			throw "Kernel size should be 1 dimensional for Conv1D";
		}
		else if (padding.length > 1){
			throw "Padding should be 1 dimensional for Conv1D";
		}
		else if (dilation.length > 1){
			throw "Dilation should be 1 dimensional for Conv1D";
		}
		else if (stride.length > 1){
			throw "Stride should be 1 dimensional for Conv1D";
		}

		var L_out = (((Lin + 2 * padding - dilation * (kernelsize - 1) - 1) / stride) + 1);
		string = "Lout: " + L_out.toString();
		Out.innerHTML = string;
		errorboard.innerHTML = null;
	}
	catch(err){
		errorboard.innerHTML = err;
	}
}

function Conv2D() {
	try{
		var Hin = parseInt(document.getElementById("Hin").value);
		var Win = parseInt(document.getElementById("Win").value);
		var kernelsize = document.getElementById("kernelsize").value.split(",");
		var padding = document.getElementById("padding").value.split(",");
		var dilation = document.getElementById("dilation").value.split(",");
		var stride = document.getElementById("stride").value.split(",");

		if (kernelsize.length != 2){
			throw "Kernel size should be 2 dimensional for Conv1D";
		}
		else if (padding.length != 2){
			throw "Padding should be 2 dimensional for Conv1D";
		}
		else if (dilation.length != 2){
			throw "Dilation should be 2 dimensional for Conv1D";
		}
		else if (stride.length != 2){
			throw "Stride should be 2 dimensional for Conv1D";
		}
		var H_out = "Hout: " + (((Hin + 2 * padding[0] - dilation[0] * (kernelsize[0] - 1) - 1) / stride[0]) + 1).toString();
		var W_out = "	Wout: " + (((Win + 2 * padding[1] - dilation[1] * (kernelsize[1] - 1) - 1) / stride[1]) + 1).toString();

		Out.innerHTML = H_out + W_out;
		errorboard.innerHTML = null;
	}
	catch(err){
		errorboard.innerHTML = err;
	}
}

function main() {
	layer = document.getElementById("layer");
	layer_name = layer.options[layer.selectedIndex].text;
	if (layer_name === "Conv1D"){
		Conv1D();
	}
	else if (layer_name === "Conv2D"){
		Conv2D();
	}
}