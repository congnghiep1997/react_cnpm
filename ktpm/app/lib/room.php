<?php
    class ROOM{
      private $connect;
      private $sql;
      private static $instance=null;
      public static function Instance(){
        if(self::$instance==null){
          self::$instance = new ROOM();
          return self::$instance;
        }else return self::$instance;
      }
      function __construct(){
        $this->connect = mysqli_connect("localhost","root","","cnpm");
      }
      function __destruct(){
        mysqli_close($this->connect);
      }
      public function insertData($MaP,$GiaTien,$ThongTin,$TrangThai){
        $this->sql ="
          INSERT INTO room(MaP,GiaTien,ThongTin,TrangThai)
          VALUES('$MaP',$GiaTien,'$ThongTin',$TrangThai)
        ";
        mysqli_query($this->connect,$this->sql);
      }
      public function selectData(){
        $this->sql="
          SELECT * FROM room;
        ";
        return mysqli_query($this->connect,$this->sql);
      }
    }
 ?>
