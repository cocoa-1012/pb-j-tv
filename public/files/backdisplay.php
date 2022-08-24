<?php 
$user_script = $_SERVER['REQUEST_URI'];
list($uname) = explode('?',end(explode("/", $user_script)));

include_once "admin/includes/session_increase.php";

include_once "admin/includes/dbconnect.php";
//fetch the userid

/*if($userid == "") {
	header("Location:notfound.php");
}*/
$sname = $_SERVER['SCRIPT_NAME'];
$expname = explode("/", $sname);
$proname = $expname[1];
$projecturl =  "http://".$_SERVER['HTTP_HOST']."/";
$total_play = 0;

	$queryB = mysql_query("SELECT * FROM displaycams WHERE user_id='$userid' AND back_display='yes'");
	$qBcount = mysql_num_rows($queryB);
	if($qBcount>0){
		$querysRes = mysql_fetch_object($queryB);
		//   echo $querysRes->camera_name;
		$cam_ips = $querysRes->ip_address; 
	}else{
		$cam_ips='';
	}

 

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>PupDates - backdisplay</title>
<link rel="stylesheet" type="text/css" href="<?php print $projecturl; ?>admin/css/common1.css" />
<link type="text/css" rel="stylesheet" href="<?php print $projecturl; ?>css/colorbox.css" />
<link type="text/css" rel="stylesheet" href="<?php print $projecturl; ?>css/dpSocialFeedr.css" />

<!--FOR MESSAGES POP UP AND SOUND TIMER-->
<link rel="stylesheet" href="<?php print $projecturl; ?>css/smartnoti.style.css" type="text/css" media="screen">

<script type="text/javascript" src="<?php print $projecturl; ?>js/jquery-1.9.1.min.js"></script>
<script src="<?php print $projecturl; ?>js/jquerys.easing.1.3.js" type="text/javascript"></script>
<script src="<?php print $projecturl; ?>js/jquery.zlab.smartnoti-0.4.js" type="text/javascript"></script>
<!--END OF MESSAGES POP UP AND TIMER-->

<!--<script src="<?php print $projecturl; ?>admin/js/slideshow/jquery.js"></script>-->
<script src="<?php print $projecturl; ?>admin/js/slideshow/jquery.cycle2.js"></script>

<script type="text/javascript">
var startBaseTime = new  Date();
var startTime = new  Date(<?= date("Y,").(date('m')-1).date(",d,H,i,s") ?>);

var timeDiff = parseInt((startTime.getTime() - startBaseTime.getTime())/1000);
//alert(startBaseTime+"\n"+startTime+"\n"+timeDiff+"\n<?= date("Y,m,d,h,i,s") ?>");

	function formatAMPM(date) {
		var hours = date.getHours();

		var minutes = date.getMinutes();
		var ampm = 'am'; 
		if (hours >= 12 ) ampm= 'pm'; 
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
}
function restorePlayer()
{
	$('#livePlayer').removeClass('small').addClass('livePlayerHome');
	$('#livePlayer').show();
}

function show_data(mid)
{
 //$('#livePlayer').hide();
 $('#livePlayer').removeClass('livePlayerHome').addClass('small');
 setTimeout(function(){restorePlayer()}, 33000);
 $('#HomeRight').load('<?php print $projecturl; ?>pupdates_messages.php?uid=<?php echo $userid;?>');
 $('.btn').load('<?php print $projecturl; ?>alert.php?uid=<?php echo $userid;?>&msg_id='+mid+'').hide().fadeIn(30000);
}

function show_data_check() 
{
	alert('show_data_check')
$.ajax({
url:"<?php print $projecturl; ?>updatealertmessage.php?uid=<?php echo $userid;?>",
success:function(result){
	alert(result)
		if(result > 0) {
			//show_data(result);
			setTimeout(function(){show_data(result)},5000);
		}
}});
}

//setInterval('show_data_check()', 5000); // check for every 1 secs

var pupdates=new Array();
var pendingpupdates=new Array();


function show_messages() 
{
	$.ajax({
	url:"<?php print $projecturl; ?>messages.php?uid=<?php echo $userid;?>",
	dataType: "json",
	success:function(result){
		if(!result || !result.count|| !result.messages) return;
		deb=0;
		countm=0;
		var allmessages= $.merge(result.messages,pendingpupdates)
		if(deb)console.log('result.messages')
		if(deb)console.log(result.messages)
		if(deb)console.log('pendingpupdates')
		if(deb)console.log(pendingpupdates)
		if(deb)console.log('allmessages')
		if(deb)console.log(allmessages)
		for (k in allmessages) {
			//console.log(result.messages);
			m=allmessages[k];
			if(deb)console.log('k')
			if(deb)console.log(k)
			if(deb)console.log('m')
			if(deb)console.log(m)

			if(!m || !m.id || $.inArray(m.id,pupdates)>-1) {
				continue;
			}
			countm++;
			if(deb)console.log($("#messages .message:visible").length)
			if(countm>3 || $("#messages .message:visible").length>=3){
				pendingpupdates.push(m);
				continue;
			}			
			
			pupdates.push(m.id);
			
			tt=parseInt(m.time)+parseInt(timeDiff);
			var d = new Date(tt *1000);
			//alert("timeDiff:"+timeDiff+"\nm.time:"+m.time+"\ntt:"+tt+"\nd:d"+d);
			
			
			chars_class="";
			if(m.message.length>99){
				chars_class="chars-100";
			}else if(m.message.length>79){
				chars_class="chars-80";
			}else if(m.message.length>49){
				chars_class="chars-50";
			}else if(m.message.length>36){
				chars_class="chars-35";
			}else if(m.message.length>19){
				chars_class="chars-20";
			}else{
				chars_class="chars-0";
			}
			countTexts = ($('.message').length + 1)
			$('.message').removeClass('cant_'+$('.message').length);
			$('.message').addClass('cant_'+($('.message').length+1));
			html='';
			html=html+'<div id="message-'+m.id+'" class="message message-type-'+m.status_type+' '+chars_class+' cant_'+countTexts+'">';
				html=html+'<div class="message-title">',
					html=html+'<div class="message-icon"></div>';
					html=html+'<div class="message-time">'+formatAMPM(d)+'</div>';
					html=html+'<div class="message-title-text">New Message!</div>';
				html=html+'</div>';
				html=html+'<div class="message-text">'+m.message+'</div>';
			html=html+'</div>';
			setTimeout("delete_message("+m.id+");",m.duration * 1000);
			
			$("#messages").append(html).slideDown('slow');
			tiltMessage(m.id,0);
			//$("#livePlayer").slideUp('slow');
 			$('#livePlayer').removeClass('livePlayerHome').addClass('small');

			clicksound  = ss_soundbits("<?= SOUND_TRACK_PATH ?>/"+m.sound+".ogg","<?= SOUND_TRACK_PATH ?>/"+m.sound,"<?= SOUND_TRACK_PATH ?>/"+m.sound+".mp3","<?= SOUND_TRACK_PATH ?>/"+m.sound+".wav","<?= SOUND_TRACK_PATH ?>/Jubilant Fanfare.wav");
			setTimeout("clicksound.playclip()",300);
		}
		setClasses()
}});
}
show_messages();
setInterval('show_messages()', 5000);
var  tiltMsgInt; 
function tiltMessage(id,count){
	//console.log(id+','+count);
	count++;
	tiltMsgInt = setInterval(function(tiltMsgInt){
        $('#message-'+id).find('.message-title').toggleClass('tiltTitle');
        $('#message-'+id).find('.message-text').toggleClass('tiltText');
       	count++;
   		if(count > 60){
			$('#message-'+id).find('.message-title').attr('class','message-title');
			$('#message-'+id).find('.message-text').attr('class','message-text');
  			clearInterval(tiltMsgInt);
		}
     },500)
}
function delete_message(id) {
	countTexts = ($('.message').length - 1)
	$('.message').removeClass('cant_'+$('.message').length);
	$('.message').addClass('cant_'+($('.message').length-1));
	
	$('#message-'+id).slideUp('fast',function(){ 
		setClasses();
		if($("#messages .message:visible").length==0){
			//$("#livePlayer").slideDown('fast');
			 $('#livePlayer').removeClass('small').addClass('livePlayerHome');
		} 
	}).remove();

}
function setClasses(){
	t=$("#messages .message:visible").length;
	$obj=$("body,#messages"); 
	if(t<1)$obj.removeClass('has_messages').removeClass('total_0');
	if(t!=1)$obj.removeClass('total_1');
	if(t!=2)$obj.removeClass('total_2');
	if(t!=3)$obj.removeClass('total_3');
	if(t!=4)$obj.removeClass('total_4');
	$obj.addClass('total_'+t);
	if(t>0)$obj.addClass('has_messages');

}
</script>
<script type="text/javascript">
    var audiotypes={
        "mp3": "audio/mpeg",
        "mp4": "audio/mp4",
        "ogg": "audio/ogg",
        "wav": "audio/wav"
    }

    function ss_soundbits(sound){
        var audio_element = document.createElement('audio')
        if (audio_element.canPlayType){
            for (var i=0; i<arguments.length; i++){
                var source_element = document.createElement('source')
                source_element.setAttribute('src', arguments[i])
                if (arguments[i].match(/\.(\w+)$/i))
                    source_element.setAttribute('type', audiotypes[RegExp.$1])
				console.log(source_element)
                audio_element.appendChild(source_element)
            }
            audio_element.load()
            audio_element.playclip=function(){
                audio_element.pause()
                //audio_element.currentTime=0 
                audio_element.play()
            }
							console.log(audio_element)
			document.body.appendChild(audio_element)
			
            return audio_element
        }
    }


(function($)
{
    $(document).ready(function()
    {
		// last updates.....
		$.ajaxSetup(
        {
            cache: false,
            success: function() {
                $('#content_updates').show();
            }
        });
        var container = $("#content_updates");
        //container.load("<?php print $projecturl; ?>content_updates.php?front_userid=<?php print $userid; ?>");
        var refreshId = setInterval(function()
        {
            container.load('<?php print $projecturl; ?>content_updates.php?front_userid=<?php print $userid; ?>&total_play=<?php print $total_play; ?>');
        }, 20000);

		// events.....
		
		$(function() 
		{
			setInterval(refreshiframeVids, 20 * 60000);
		});
		function refreshiframeVids() 
		{
			var iframe = document.getElementById("livePlayer");
			iframe.contentWindow.location.reload();
		}
		
		$(function() {
			setInterval(refreshiframeevents, 50000);
			});
			function refreshiframeevents() {
			$('#eventsframe').attr('src', $('#eventsframe').attr('src'));
		}
		$(function() {
			setInterval(refreshiframe, 70000);
			});
			function refreshiframe() {
			$('#slideframe').attr('src', $('#slideframe').attr('src'));
		}
		// social network....
		$.ajaxSetup(
        {
            cache: false,
            success: function() {
                $('#content_social_all').show();
            }
        });
        var content_social = $("#content_social_all");
<!--        content_social.load("<?php print $projecturl; ?>content_social.php?front_userid=<?php print $userid; ?>");-->  
		var refreshId = setInterval(function()
        {
            content_social.load('<?php print $projecturl; ?>content_social.php?front_userid=<?php print $userid; ?>&projecturl=<?php print $projecturl; ?>');
        }, 50000);
    });
})(jQuery);

// alreadypp=0;
function updateClock ( )
    {
	var currentTime = new  Date();

	currentTime.setSeconds( currentTime.getSeconds() + timeDiff );

    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
 	//if(!alreadypp)alert(currentTime + " HHHH " + currentHours);
	//alreadypp=1;
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
 
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
 
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
    // Compose the string for display
    var currentTimeString = currentHours + "<span class='clocktoggle'>:</span>" + currentMinutes + /*":" + currentSeconds + */ " " + timeOfDay;
     
     
    $("#clock").html(currentTimeString);
	
	$(body).css(
         
 }
 
$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});





</script>
<!-- Facebook INtegration -->
<!--<script type="text/javascript" src="<?php print $projecturl; ?>js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<?php print $projecturl; ?>js/jquery.bxSlider.min.js"></script>
<script type="text/javascript" src="<?php print $projecturl; ?>js/jquery.colorbox.min.js"></script>
<script type="text/javascript" src="<?php print $projecturl; ?>js/jquery.dpSocialFeedr.js"></script>-->
<style>
.tiltText{
	background-color: #ff0 !important;
}
.tiltTitle{
	background-color: #666 !important;
}
#case_press .msgContents{
	padding:20px 0;
}
#case_press .msgContents p{
	min-height:1300px;
	padding:0 !important;
	text-align:left!important;
/*	width:400px;
*/	font-size:200px;
}
#case_press .msgContents span{
padding:0 0 20px;
}
#case_press .msgContents span.icon3{
	background:url("<?php print $projecturl; ?>admin/images/li3.png") no-repeat right bottom;
	padding:15px 20px 0px 0px;
	display:block;
	height:125px!important;
	border:none;
	text-align:left;
	/*font:27px Arial, Helvetica, sans-serif;line-height:32px!important;*/
	color:#000;
	display:block;
}
#case_press .msgContents span.icon2{
	background:url("<?php print $projecturl; ?>admin/images/li2.png") no-repeat right bottom;
	padding:15px 20px 0px 0px;
	display:block;
	height:125px!important;
	border:none;
	text-align:left;
	/*font:27px Arial, Helvetica, sans-serif;	line-height:32px!important;*/
	color:#000;

	display:block;
}
#case_press .msgContents span.icon1{
	background:url("<?php print $projecturl; ?>admin/images/li1.png") no-repeat right bottom;
		padding:15px 20px 0px 0px;
		display:block;
	height:125px!important;
	border:none;
	text-align:left;
	/*font:27px Arial, Helvetica, sans-serif;line-height:32px!important;*/
	color:#000;
	display:block;
}
.clsHomelist li span#maxline{
	top:20px !important; 
	 font: 50px Arial,Helvetica,sans-serif!important; 
}
/*#HomeRight li.icon3 span{
top:45px !important;
}*/
.new{ background:none; width:auto; height:auto; }
.new .display{}
.new .display .main, .new .display .sidebar{position:absolute; top:0; bottom:0; left:0; right:0;}

.new .display .main{right:30%;}
	.new .display .main iframe{ width:100%; height:100%;   border:0; background:url(<?php print $projecturl; ?>admin/images/bg_pattern.png)}
	
.new .display .sidebar{	
						left:70%; 
						background: url(<?php print $projecturl; ?>images/sidebar.jpg) no-repeat #15b9ec;
						background-size:cover;
						background-position:bottom;
	}
	.new .display .sidebar .logo{ width:50%; position:absolute; bottom:5%; left:50%; margin-left:-25%;transition:all 0.2s;}

.new #messages{ background:#FFF; display:none; text-align:left;}
	.new #messages .message{}
		.new #messages .message *{ transition:all ease-in-out 0.3s;}
		.new #messages .message .message-title{padding:10px 20px ; color:#fff; text-align:center; font-size:25px; background:#06f;}
			.new #messages .message .message-title .message-time{ float:right; text-transform:uppercase;   }
			.new #messages .message .message-title .message-title-text{}
		.new #messages .message .message-text{ padding:20px 30px; font-size:35px; min-height:150px;}
			.new #messages .message.chars-100 .message-text{ font-size:40px; }
			.new #messages .message.chars-80 .message-text{ font-size:50px; }
			.new #messages .message.chars-50 .message-text{ font-size:60px; }
			.new #messages .message.chars-20 .message-text{ font-size:70px; }
			.new #messages .message.chars-0 .message-text{ font-size:100px; }

			.new #messages .message.chars-100 .message-text{ font-size:9vh; }
			.new #messages .message.chars-80 .message-text{ font-size:10vh; }
			.new #messages .message.chars-50 .message-text{ font-size:11vh; }
			.new #messages .message.chars-20 .message-text{ font-size:13vh; }
			.new #messages .message.chars-0 .message-text{ font-size:15vh; }
			
		.new #messages .message.message-type-1 .message-title{ background:DarkBlue;}
		.new #messages .message.message-type-2 .message-title{ background:forestgreen;}
		.new #messages .message.message-type-3 .message-title{ background:firebrick;}
		.new #messages .message.message-type-4 .message-title{ background:blueviolet;}
		.new #messages .message.message-type-5 .message-title{ background:lightseagreen;}
		
		
			#messages{
				height: 100%;
			}
	 		.cant_1 .message-text{
	 			font-size:20vh !important;
	 		}
	 		.cant_1{
	 			height: 100%;
	 		}
	 		.message-title{
	 			height: 20%;
	 			padding-top:10px !important;
	 			padding-bottom:0px !important;
	 		}
	 		.message-text{
	 			height: 80%;
	 			padding-top:10px !important;
	 			padding-bottom:0px !important;
	 			text-align: center;
	 		}
	 		
	#clock{ color:#FFF; font-size:45px; padding-top:30px;     text-shadow: 1px 4px 6px #000, 0 0 0 #000, 1px 4px 6px #000;}
	
	#livePlayer{transition:all 0.2s}
	.has_messages #livePlayer{
		  margin-left: 30%;
			position: absolute;
			left: 70%;
			background: rgb(204, 204, 204);
			right: 0;
			z-index: 1000;
			height: 40%;
			width: 43%;
			bottom: 0;
	}
	.new.has_messages .display .sidebar .logo{ bottom:45%;}
	
.livePlayerHome
{
	position: absolute;
	top: 0px;
	left: 0px;
}
</style>
</head>
<body class=" new total_0">
	<div class="display">
		<div class="main">
			<div id="messages"></div>
			<iframe id="livePlayer" width="100%" height="100%" scrolling="no" src="<?php echo$projecturl?>camBack.html?<?php echo$cam_ips?>" allowtransparency="true" seamless></iframe>

		</div>
		<div class="sidebar">
			<div id="clock"></div>
			<img src="<?php print $projecturl; ?>images/logo.png" class="logo"  alt="" />
		</div>
		
	</div>
</body>
</html>
