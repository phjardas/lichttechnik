<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

  <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat" omit-xml-declaration="yes" />

  <xsl:param name="chapter" select="'startseite'" />

  <xsl:template match="/">
    <xsl:variable name="pageNotFound">
      <xsl:choose>
        <xsl:when test="/book/chapters/chapter[@name=$chapter]">
          false
        </xsl:when>
        <xsl:otherwise>true</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <html lang="de">
      <head>
	<meta content="text/html;charset=UTF-8" http-equiv="Content-Type"/>
	<meta charset="UTF-8"/>
	<meta content="de" http-equiv="Content-Language"/>
	<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <title>
          <xsl:value-of select="/book/title" />
          <xsl:if test="$pageNotFound != 'true'">
            <xsl:text> - </xsl:text>
            <xsl:value-of select="/book/chapters/chapter[@name=$chapter]/@title" />
          </xsl:if>
        </title>
	<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet" />
	<!-- <style>@media (min-width: 980px) { body { padding-top: 40px; } }</style> -->
	<link href="styles.css" rel="stylesheet" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"><![CDATA[]]></script>
      </head>

      <body>
	<header id="site-header">
		<h1>
			<a href="." class="brand">
				<span><xsl:value-of select="/book/title" /></span>
			</a>
		</h1>
	</header>
          <nav class="navbar navbar-fixed-top--">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"><![CDATA[]]></span>
					<span class="icon-bar"><![CDATA[]]></span>
					<span class="icon-bar"><![CDATA[]]></span>
				</button>
				<div class="nav-collapse collapse">
					<ul class="nav">
						<xsl:apply-templates select="/book/chapters/chapter" mode="toc" />
					</ul>
				</div>
			</div>
		</div>
          </nav>

          <section id="content" class="container">
            <xsl:choose>
              <xsl:when test="$pageNotFound != 'true'">
                <xsl:apply-templates select="/book/chapters/chapter[@name=$chapter]" mode="content" />
              </xsl:when>
              <xsl:otherwise>
                <xsl:call-template name="pageNotFound" />
              </xsl:otherwise>
            </xsl:choose>
          </section>

        <footer class="footer">
	  <div class="container">
	  <p>Dieses Tutorial wurde geschrieben von <a href="mailto:philipp@jardas.de"><i class="icon-envelope"><![CDATA[]]></i> Philipp Jardas</a></p>
	  <p lang="en">Built with <a href="http://getbootstrap.com/">Bootstrap</a> and <a href="http://glyphicons.com/">Glyphicons Free</a>.</p>
          <xsl:apply-templates select="/book/creative-commons-license" />
          </div>
        </footer>

	<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"><![CDATA[]]></script>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-3900768-2");
pageTracker._trackPageview();
} catch(err) {}</script>
      </body>
    </html>
  </xsl:template>

  <xsl:template name="pageNotFound">
	<div class="hero-unit">
    <h1>
      <xsl:text>Seite nicht gefunden</xsl:text>
    </h1>
    <p class="lead">
      <xsl:text>Die von dir aufgerufene Seite existiert leider nicht.</xsl:text>
    </p>
	</div>
  </xsl:template>

  <xsl:template match="chapter" mode="toc">
    <xsl:if test="@toc != 'false'">
    <li>
        <xsl:if test="@name = $chapter">
          <xsl:attribute name="class">
            <xsl:text>active</xsl:text>
          </xsl:attribute>
        </xsl:if>
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="@name" />
          <xsl:text>.html</xsl:text>
        </xsl:attribute>
        <xsl:value-of select="@title" />
      </a>
    </li>
    </xsl:if>
  </xsl:template>

  <xsl:template match="chapter" mode="content">
    <div class="page-header">
    <h1>
      <xsl:value-of select="@title" />
    </h1>
    </div>

    <xsl:apply-templates select="*" />
  </xsl:template>

  <xsl:template match="footnote">
  </xsl:template>

  <xsl:template match="footnote" mode="footnotes">
    <li>
      <a>
        <xsl:attribute name="name">
          <xsl:text>footnote</xsl:text>
          <xsl:number level="any" />
        </xsl:attribute>
        <sup>
          <xsl:number level="any" />
        </sup>
      </a>
      <xsl:text> </xsl:text>
      <xsl:apply-templates />
    </li>
  </xsl:template>

  <xsl:template name="footnotes">
    <ul id="footnotes">
      <xsl:apply-templates
        select="/book/chapters/chapter[@name = $chapter]//footnote"
        mode="footnotes" />
    </ul>
  </xsl:template>

  <xsl:template match="image">
	<figure>
        <xsl:if test="@align">
      <xsl:attribute name="class">
          <xsl:text>pull-</xsl:text>
          <xsl:value-of select="@align" />
      </xsl:attribute>
        </xsl:if>
      <img>
        <xsl:attribute name="src">
          <xsl:text>images/</xsl:text>
          <xsl:value-of select="@src" />
        </xsl:attribute>
        <xsl:attribute name="alt">
          <xsl:apply-templates />
        </xsl:attribute>
      </img>
	<figcaption>
      <xsl:apply-templates />
	</figcaption>
	</figure>
  </xsl:template>

  <xsl:template match="creative-commons-license">
	<p class="en">
      <img alt="Creative Commons License">
        <xsl:attribute name="src">
          <xsl:value-of select="@image" />
        </xsl:attribute>
      </img>

    <xsl:text> This work is licensed under a</xsl:text>
    <a rel="license">
      <xsl:attribute name="href">
        <xsl:value-of select="@url" />
      </xsl:attribute>
      <xsl:text> Creative Commons </xsl:text>
      <xsl:value-of select="@title" />
    </a>
	</p>
  </xsl:template>

  <xsl:template match="a">
    <a>
      <xsl:attribute name="href">
        <xsl:value-of select="@href" />
      </xsl:attribute>
      <xsl:apply-templates />
    </a>
  </xsl:template>

  <xsl:template match="img">
    <a>
      <img>
        <xsl:attribute name="src">
          <xsl:value-of select="@src" />
        </xsl:attribute>
      </img>
    </a>
  </xsl:template>

  <xsl:template match="*">
    <xsl:element name="{local-name(.)}">
      <xsl:apply-templates select="@*|node()" />
    </xsl:element>
  </xsl:template>

</xsl:stylesheet>
