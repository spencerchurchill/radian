let b64;

document.getElementById("lungPic").onchange = function() {
    let file = this.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        b64 = reader.result;
    }
}

document.getElementById("uploadData").onclick = function() {
    let Http = new XMLHttpRequest();
    let url = 'https://radian-app.herokuapp.com/diagnose?image='+b64;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        rsp = Http.responseText;
        document.getElementById("result").innerText = rsp;
        if (rsp) {
            alert(document.getElementById("patient_name")+" is predicted to have COVID-19.");
        }
    }
};