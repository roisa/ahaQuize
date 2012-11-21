var detik = 0;
var menit = 0;
var jam = 0;

//timer 15 menit
var timer_detik = 00;
var timer_menit = 15;
var timer_jam = 00;

function timer() { //timer countdown => 5 4 3 2 1 
	if (timer_jam == 0 && timer_menit == 0 && timer_detik == 0) { // jam menit detik 00:00:00 
		window.alert("Waktu mengerjakan telah habis. Tekan OK untuk melanjutkan"); // alert
		document.forms["form"].submit(); // action pada form
	}
	timer_detik = timer_detik - 1; // detik dikurangi satu
	if (timer_detik < 0) { // bila detik bernilai 0
		timer_detik = 59; // detik akan kembali ke nilai 59
		timer_menit = timer_menit - 1; // nilai menit akan dikurangi satu 
	}
	if (timer_menit < 0 && timer_jam != 0) { // sama seperti detik
		timer_menit = 59;
		timer_jam = timer_jam - 1;
	}
document.getElementById('timer').value = ((timer_jam <= 9) ? "0" + timer_jam : timer_jam) + ":" + ((timer_menit <= 9) ? "0" + timer_menit : timer_menit) + ":" + ((timer_detik <= 9) ? "0" + timer_detik : timer_detik);
setTimeout("timer()", 1000); // fungsi waktu dalam js
}

function load() 
{ // membuat fungsi untuk memanggil fungsi stopwatch dan timer
	timer(); // memanggil fungsi timer
	//fungsi load akan diletakkan pada bagian body, agar saat halaman di akses, maka fungsi load akan terpanggil dan timer serta coundown akan berjalan
}