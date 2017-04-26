<?php
  include "../lib/room.php";
  $MaP=$_POST['MaP'];
  $GiaTien=$_POST['GiaTien'];
  $ThongTin=$_POST['ThongTin'];
  ROOM::Instance()->insertData($MaP,$GiaTien,$ThongTin,1);
 ?>
