function getFormvalue() {
    var form=document.getElementById('form1');
	var formdata=new FormData(form);
	var first=formdata.get('fname');
	var second=formdata.get('lname');
	alert(first+" "+second);

}
