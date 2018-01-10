var d = new Date();

document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.08.7" + d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ".0";

var constraints = {audio:true, video:true};
navigator.mediaDevices.getUserMedia(constraints).then(on_success).catch(on_error);


var video = document.getElementByID("id_video");

function on_success(stream)
{
    video.srcObject = stream;
};

function on_error(error)
{
    alert("Error");
};