---
title: "The Camunda BPM Workflow Engine | Camunda BPM"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---

{{<highlight-visual title="DMN Decision Engine" svg="/products/decision-engine.svg" svg_width="20%">}}
DMN-Entscheidungstabellen ausführen<br> und fachliche Flexibilität ermöglichen.
{{</highlight-visual>}}

{{%list-item title="DMN 1.1 Support" img="/svg/decision-table.svg" img_width="100%" %}}
Die Decision Engine führt DMN 1.1 Entscheidungstabellen und Decision Requirements Diagrams aus. Mehr Details finden Sie unter [Docs: DMN 1.1 Reference](https://docs.camunda.org/manual/reference/dmn11/).

Mit DMN können fachliche Stakeholders selbstständig automatisierbare Geschäftsregeln definieren und pflegen, was die Flexibilität auf Fachseite deutlich erhöht.

Sie können die bereits vorhandene Integration mit der Workflow Engine nutzen, um Entscheidungstabellen in Ihren automatisierten Prozessen auszuführen. Sie können alternativ dazu die Decision Engine aber auch komplett eigenständig benutzen.
{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">REST API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>Sie können die Decision Engine via REST aufrufen, um Entscheidungstabellen auszuführen. Konkrete Beispiele hierzu finden Sie unter  <a href="https://docs.camunda.org/manual/reference/rest/decision-definition/post-evaluate/">Docs: DMN REST API</a>.</p>
          <p>Sie können außerdem via REST die Camunda History aufrufen um abzufragen welche Entscheidungen getroffen wurden, inklusive ihrer Input-Parameter, der Geschäftsregeln die in diesem Fall angewandt wurden, und der entsprechenden Output-Parameter.</p>
        </div>
        <div class="col-md-6" style="background-color: #333333; color:lightgrey; padding:10px">
        	<code>POST /decision-definition/key/<span style="color:yellow">dress-decision</span>/evaluate<br>
				Request Body:<br>
				{"variables":<br>&nbsp; &nbsp; &nbsp;"Weather" : { "value" : "Sunny", "type" : "String" }<br>
     			}<br>
        Response:<br>
[{"result":{<br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value":"T-Shirt",<br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type":"String"}<br>
   }]
			</code>
        </div>
    </div>
</section>

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Java API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>Fügen Sie die Decision Engine als simple <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/embed/">Maven dependency</a> ihrem Java-Projekt hinzu, und nutzen Sie die <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/evaluate-decisions/">Java API</a> in Ihrer Anwendung.</p>
          <p>Dieser Ansatz erlaubt Ihnen u.a. die Entwicklung von <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/testing/">JUnit tests für Ihre Entscheidungstabellen</a>.</p>
          <p>Die Decision Engine ist weniger als 1MB groß und läuft in jeder JVM.</p>
        </div>
        <div class="col-md-6" style="background-color: #333333; color:lightgrey; padding:10px">
        	<code>
        		Map<String, Object> variables = new HashMap<String,Object>();<br>
				variables.put("Weather", "Sunny");<br>
        DmnDecisionResult result = dmnEngine.evaluateDecisionTable("<span style="color:yellow">dress-decision</span>", variables);<br>
        System.out.println (result.getSingleEntry());
			</code>
        </div>
    </div>
</section>

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">Performance</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>
            Wir haben die erste Version der Camunda Decision Engine im November 2015 veröffentlicht. Mittlerweile wird sie von zahlreichen Organisationen produktiv eingesetzt, um Hochvolumina-Szenarien Entscheidungen zu automatisieren.</p>
          <p>Auf Basis des Feedbacks dieser Nutzer haben wir die Performance der Decision Engine kontinuierlich weiter entwickelt.</p>
          <p>Blog Post: <a href="https://blog.camunda.com/post/2016/08/dmn-performance-improvements/">DMN Performance Improvements</a></p>
        </div>
        <div class="col-md-6" style="height:400px; overflow:hidden">
        	<img src="https://blog.camunda.com/post/2016/08/dmn-performance-improvements/benchmark-result-diagram.png" style="max-height:100%">
        </div>
    </div>
</section>
