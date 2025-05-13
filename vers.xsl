<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml">

  <xsl:output method="xml" indent="yes" encoding="UTF-8" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
              doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
      <head>
        <title>Collection Versailles</title>
        <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="E:/code30/webtest/SITE_TOTSKYI_HLIB/Styles/style.css" title="normal" />
    <link rel="alternate stylesheet" type="text/css" href="E:/code30/webtest/SITE_TOTSKYI_HLIB/Styles/style2.css" title="accessible" disabled="disabled" />
      </head>
      <body>
        <header>
          <h1>Collection Versailles</h1>
        </header>
        <main>
          <xsl:for-each select="collection/fiche">
            <section>
              <h2><xsl:value-of select="titre"/></h2>
              <img>
                <xsl:attribute name="src"><xsl:value-of select="image/@src"/></xsl:attribute>
                <xsl:attribute name="alt"><xsl:value-of select="image/@title"/></xsl:attribute>
              </img>
              <p><strong>Résumé :</strong> <xsl:value-of select="resume"/></p>
              <xsl:for-each select="contenu/paragraphe">
                <p><xsl:value-of select="."/></p>
              </xsl:for-each>
            </section>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
