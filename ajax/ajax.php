<?
if (!mysql_connect(localhost, ajax, ajax))
{
  exit;
}
mysql_select_db("ajax");
$q = mysql_query("SELECT * FROM test_table");
$res = mysql_fetch_assoc($q);

echo json_encode($res);
