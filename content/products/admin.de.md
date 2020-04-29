---
title: "Camunda Admin"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---
{{<highlight-visual title="Admin" svg="/products/admin.svg" svg_width="20%">}}
Verwalten Sie die Benutzer, die via API oder in den Web-Anwendungen auf die Camunda Engines zugreifen.
{{</highlight-visual>}}

{{%list-item title="Benutzerverwaltung" img="https://docs.camunda.org/manual/webapps/admin/img/admin-initial-user-setup.png" img_width="100%" %}}
Mit Camunda Admin können Sie Benutzer verwalten, in Gruppen organisieren und Zugriffsrechte vergeben. Camunda trennt hierbei zwischen der Authentifizierung eines Benutzers, und der Autorisierung zur Ausführung bestimmter Aktionen.

Zur Authentifizierung can Sie entweder das User Management verwenden, das mit Camunda ausgeliefert wird, oder Ihr internes User Management via LDAP anbinden. Sobald sich ein User identifiziert hat (z.B. in dem er sich in eine Camunda Web-Anwendung einloggt), wird Camunda ihm Zugriffsrechte auf Basis der Konfiguration in Camunda Admin erteilen.

Die in Camunda Admin vergebenen Zugriffsrechte wirken sich auf allen Ebenen aus, egal ob Sie die Engines via Java API, oder via REST API, oder über die Camunda-Anwendungen aufrufen.
{{%/list-item%}}
