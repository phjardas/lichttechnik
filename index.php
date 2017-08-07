<?
  header('Strict-Transport-Security: max-age=10886400');
  header('Content-Security-Policy: upgrade-insecure-requests');

  if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off") {
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
    exit();
  }

  function __autoload($class_name) {
    require_once 'lib/' . $class_name . '.php';
  }

  $engine = new Engine('data/lichttechnik.xml', 'data/website.xsl');

  //header('Content-type: application/xhtml+xml; charset=utf-8');
  header('Content-type: text/html; charset=utf-8');
  echo $engine->render();
?>
