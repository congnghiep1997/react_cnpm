<?php
include "../lib/room.php";
$arr=array();
$result=ROOM::Instance()->selectData();
while($room=mysqli_fetch_array($result)){
  $arr[]=$room;
}
echo json_encode($arr);
 ?>
