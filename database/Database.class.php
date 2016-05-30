<?php
/**
* Database connectivity class.
* @version	2006/12/04
* @author	Geert Barentsen
*/
class Database { 

	/**
	* Private attributes
	*/
	private $fQueryResult; 
	private $fDatabaseLink;
	
	
	/**
	* Constructor
	* @param host Database hostname
	* @param name Database name
	* @param username Database user name
	* @param password Database password
	*/
	function __construct() {
		// Open the database connection
        // Obtain $dbhost, $dbname, $dbusername, $dbpassword
		require("account_info.inc.php");
		$this->fDatabaseLink = pg_connect("host=".$dbhost." dbname=".$dbname." user=".$dbusername." password=".$dbpassword." port=5432");
		if ( ! (pg_connection_status($this->fDatabaseLink) == 0) ) {
			throw new DatabaseException("Cannot connect to the database.");
		}
	} 
             

	/**
	* Destructor
	*/
	function __destruct() {
		// This gave some errors?
		// pg_close($this->fDatabaseLink);
	} 


	/**
	* Perform an SQL query
	* @param sql Query (type: string)
	*/
	public function query($sql) { 
		$this->fQueryResult = @pg_query($this->fDatabaseLink, $sql); 
		// Handle error
		if (!$this->fQueryResult) { 
		    //throw new DatabaseException("Error in SQL query: $sql");
			 throw new DatabaseException( pg_last_error($this->fDatabaseLink) );
		}
	} 
	
	
	/**
	* Get the error message associated with a query result
	* @return Error message
	*/
	public function getResultError() {
		return pg_result_error($this->fQueryResult);
	}
	
	/**
	* Get the query result resource
	* @return Query result resource
	*/
	public function getResult() {
		$resultCopy = $this->fQueryResult;
		return $resultCopy;
	}
	
	/**
	* Get the number of rows returned by the most recent query
	* @return Number of rows (type: integer)
	*/
	public function getNumberOfRows() { 
		return pg_num_rows($this->fQueryResult); 
	} 

	/**
	* Get the number of fields returned by the most recent query
	* @return Number of fields (type: integer)
	*/
	public function getNumberOfFields() { 
		return pg_num_fields($this->fQueryResult); 
	} 
	
	/**
	* Get the most recent autoincrement id value
	* @param tablename Table name
	* @param fieldname Sequence field name
	*/
	public function getInsertID($tablename, $fieldname) {
		$result=pg_query($this->fDatabaseLink, "SELECT last_value FROM ${tablename}_${fieldname}_seq"); 
		$seq_array=pg_fetch_row($result, 0); 
 		return $seq_array[0]; 
	}
	
	
	/**
	* Get all results in a multidimensional array
	* @return Result array
	*/
	public function getAllResults() {
		return pg_fetch_all($this->getResult());
	}
	
	/**
	* Get a result array
	* @return Result array
	*/
	public function getResultArray() {
		return pg_fetch_array($this->getResult());
	}
	
	/**
	* Get a result object
	* @return Result object
	*/
	public function getResultObject() {
		return pg_fetch_object($this->getResult());
	}
	
	/**
	* Get a xhtml result table
	*/
	public function getTable() {
		// Return if no results were found
		if ( $this->getNumberOfRows() == 0 ) {
			return "<p>No results founds.</p>";
		}
		// Return table if we have results
		$table = "<table cellpadding=\"3\" cellspacing=\"3\">\n<tr>\n";
		// Field names
		for ($i = 0; $i < $this->getNumberOfFields(); $i++) {
			$table .= "<th align=\"left\">".pg_field_name($this->getResult(), $i)."</th>";
		}
		$table .= "</tr>\n";
		// Result rows
		foreach ($this->getAllResults() as $allResults) {
			$table .= "<tr>";
			foreach ($allResults as $field) {
				$table .= "<td>".$field."</td>";
			}
			$table .= "</tr>\n";
		}
		$table .= "</table>\n";
		// Return result
		return $table;
	}
	
	/**
	* Get CSV-formatted results
	* @param (optional) field delimiter string
	*/
	public function getCsv($delimiter = ";") {
		// Return if no results were found
		if ( $this->getNumberOfRows() == 0 ) {
			return "No results founds!";
		}
		$result = "";
		// Field names
		for ($i = 0; $i < $this->getNumberOfFields(); $i++) {
			if ($i == 0) $result .= pg_field_name($this->getResult(), $i);
			else $result .= $delimiter.pg_field_name($this->getResult(), $i);
		}
		$result .= "\n";
		// Result rows
		foreach ($this->getAllResults() as $allResults) {
			$newRow = "";
			foreach ($allResults as $field) {
				if ($newRow == "") $newRow = $field;
				else $newRow .= $delimiter.$field;	
			}
			$result .= $newRow."\n";
		}
		// Return result
		return $result;
	}
	
	/**
	* Get a xhtml select box
	*/
	public function getSelectBox($query, $name, $selected=null) {
		$this->query($query);
		$box = "<select name=\"$name\">\n";
		// If selected value is specified
		if ( is_null($selected) ) {
			$box .= "<option value=\"\" selected=\"selected\"> </option>\n";
			while ( $result = $this->getResultArray() ) {
				$box .= "<option value=\"".$result["value"]."\">".$result["name"]."</option>\n";
			}
		// Selected value not specified
		} else {
			while ( $result = $this->getResultArray() ) {
				if ( $result["value"] == $selected ) {
					$box .= "<option value=\"".$result["value"]."\" selected=\"selected\">".$result["name"]."</option>\n";				
				} else {
					$box .= "<option value=\"".$result["value"]."\">".$result["name"]."</option>\n";
				}
			}			
		}
		$box .= "</select>\n";	
		return $box;
	}

} 


/**
* DatabaseException
*/
class DatabaseException extends Exception {
	public function __construct($message, $code = 0) {
		parent::__construct($message, $code);
	}
}

?>
