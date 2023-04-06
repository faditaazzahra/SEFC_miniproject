function luassegi() {
	var a = document.getElementById('alas').value;
	var t = document.getElementById('tinggi').value;

	luas = 0.5*a*t

	if (a == "" && t =="") {
		alert('Anda belum menginputkan angka!');
		}else{
			document.getElementById('hasil').innerHTML = `L = 1/2 x a x t <br><br> L = 1/2 x ${a} x ${t} <br><br> L = ${luas} cm2`;
		}
}

function kelsegi() {
	var s1 = document.getElementById('sisi1').value;
	var s2 = document.getElementById('sisi2').value;
	var s3 = document.getElementById('sisi3').value;
	var total = parseInt(s1) + parseInt(s2) + parseInt(s3);

	if (s1 == "" && s2 =="" && s3 =="") {
			alert('Anda belum menginputkan angka!');
		}else{
			document.getElementById('hasilkel').innerHTML = `K = S1 + S2 + S3 <br><br> K = ${s1} + ${s2} + ${s3} <br><br> K = ${total} cm`;
		}
}

function luas() {
	var alas = document.getElementById('jajar').value;
	var tinggi = document.getElementById('genjang').value;

	luas = alas*tinggi

	if (alas == "" && tinggi =="") {
			alert('Anda belum menginputkan angka!');
		}else{
			document.getElementById('outputluas').innerHTML = `L = a x t <br><br> L = ${alas} x ${tinggi} <br><br> L = ${luas} cm2`;
		}
}

function kel() {
	var a = document.getElementById('alaskel').value;
	var b = document.getElementById('miring').value;
	var jumlah = 2*(parseInt(a) + parseInt(b));

	if (a == "" && b =="") {
			alert('Anda belum menginputkan angka!');
		}else{
			document.getElementById('outputkel').innerHTML = `K = 2 x ( a + b ) <br><br> K = 2 x ( ${a} + ${b} ) <br><br> K = ${jumlah} cm`;
		}
}

$(document).ready(function(){
	var currentSection=0;
	$('#inikonten').hide();
	$('ul li a').click(function(){
		$('ul li a').removeClass('aktif');
		$(this).addClass('aktif');

		var href = $(this).attr('href');
		$('#kontenkonten>div').hide();

		$(href).show();

		if(currentSection == 0){
			$('#inikonten').slideToggle();
			currentSection = href;
		}else if(currentSection == href){
			$('#inikonten').slideToggle();
			currentSection = 0;
		}else{
			currentSection = href;
		}
		return false;
	});
});

function clear1() {
	document.getElementById('alas').value='';
	document.getElementById('tinggi').value='';

	var a = document.getElementById('alas').value;
	var t = document.getElementById('tinggi').value;

	if (a == "" && t =="") {
			document.getElementById('hasil').innerHTML = `L = 1/2 x a x t <br><br> L = 1/2 x 0 x 0 <br><br> L = 0 cm2`;
		}else{
			alert('Input Data Tidak Berhasil Dihapus');
		}
}

function clearkel() {
	document.getElementById('sisi1').value='';
	document.getElementById('sisi2').value='';
	document.getElementById('sisi3').value='';

	var s1 = document.getElementById('sisi1').value;
	var s2 = document.getElementById('sisi2').value;
	var s3 = document.getElementById('sisi3').value;

	if (s1 == "" && s2 =="" && s2 == "") {
			document.getElementById('hasilkel').innerHTML = `K = S1 + S2 + S3 <br><br> K = 0 + 0 + 0 <br><br> K = 0 cm`;
		}else{
			alert('Input Data Tidak Berhasil Dihapus');
		}
}

function hapus1() {
	document.getElementById('jajar').value='';
	document.getElementById('genjang').value='';

	var a = document.getElementById('jajar').value;
	var t = document.getElementById('genjang').value;

	if (a == "" && t =="") {
			document.getElementById('outputluas').innerHTML = `L = a x t <br><br> L = 0 x 0 <br><br> L = 0 cm2`;
		}else{
			alert('Input Data Tidak Berhasil Dihapus');
		}
}

function hapuskel() {
	document.getElementById('alaskel').value='';
	document.getElementById('miring').value='';

	var a = document.getElementById('alaskel').value;
	var b = document.getElementById('miring').value;

	if (a == "" && b =="") {
			document.getElementById('outputkel').innerHTML = `K = 2 x ( a + b ) <br><br> K = 2 x ( 0 + 0 ) <br><br> K = 0 cm`;
		}else{
			alert('Input Data Tidak Berhasil Dihapus');
		}
}