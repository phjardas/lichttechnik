<?
  function __autoload($class_name) {
    require_once 'lib/' . $class_name . '.php';
  }

  $engine = new Engine('data/lichttechnik.xml', 'data/website.xsl');

  //header('Content-type: application/xhtml+xml; charset=utf-8');
  header('Content-type: text/html; charset=utf-8');
  echo $engine->render();
?>
