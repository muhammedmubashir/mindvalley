<?php
class db_manager
{
	public static $db;
	private function __construct() {
		
	}
	
	function connect()
	{
		//echo "i m here";
		if(isset($this->db))
		{
			//echo "return object";
			return $this->db;
		}
			
		require_once("db_config.php");
		$this->db = mysql_connect(HOST,USER,PASSWORD);
		mysql_select_db(DBNAME,$this->db);
	}

	function query($sql) {
		$r = mysql_query($sql,$this->db);
		if(!$r) {
			return mysql_error();
		}
		return $r;
	}

	function get($table, $col="*", $where=array())
	{
		$sql = "SELECT ";
		$sql .= $col;
		$sql .= " FROM ";
		$sql .= $table;

		$sql .= " WHERE 1=1";
		if(is_array($where) && count($where) > 0)
		{
			$condition = "";
			foreach ($where as $col => $value) 
			{
				$condition .= "$col = '$value'";
			}
			$sql .= " AND $condition";
		}

		//echo $sql;

		$res = $this->query($sql);
		$result = array();
		if(mysql_num_rows($res))
		{
			return mysql_fetch_assoc($res);
		}
		
		return $result;
	}

	function insert($table, $data)
	{
		$keys = array_keys( $data );
		$values = "'".implode( "','", $data )."'";
		$sql  = 'INSERT INTO ' . $table . ' (' . implode( ', ', $keys ) . ') VALUES (' .$values. ')';
		//die;
		return $this->query( $sql, $data ); 
	}

	function delete($table,$where="")
	{

	}

	function update($table,$data=array(),$where="")
	{

	}
}
?>