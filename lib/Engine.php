<?
  class Engine {
    private $xml;
    private $stylesheet;
    private $chapter;

    public function __construct($data, $stylesheet) {
      $this->xml = new DOMDocument();
      $this->xml->load($data);

      $this->xsl = new DOMDocument();
      $this->xsl->load($stylesheet);

      $basedir = preg_replace('#^(.*/)[^/]+$#', '$1', $_SERVER['PHP_SELF']);
      $this->setChapter(preg_replace('#^' . $basedir . '(.*?)/?(\.html)?$#', '$1', $_SERVER['REQUEST_URI']));
    }

    public function setChapter($chapter) {
      $this->chapter = $chapter;
    }

    public function render() {
      $proc = new XSLTProcessor();
      $proc->importStyleSheet($this->xsl);

      if (strlen($this->chapter)) {
        $proc->setParameter('', 'chapter', $this->chapter);
      }

      return $proc->transformToXML($this->xml);
    }
  }
?>
