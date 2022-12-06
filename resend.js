<script>
let resendTimer = true;
function timer(remaining){
    document.getElementById("resend").disabled = true;
    var m = Math.floor(remaining / 60);
	var s = remaining % 60;
	m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById('resend').innerHTML = "Resend otp after "+  m + ':' + s;
	remaining -= 1;
	if(remaining >= 0 && resendTimer) {
		setTimeout(function() {
			timer(remaining);
		}, 1000);
		return;
	  }
	  if(!resendTimer) {
		
		return;
	  }
	  document.getElementById("resend").disabled = false;
	  document.getElementById("resend").innerHTML = "Resend OTP";
}
timer(180);
</script>
