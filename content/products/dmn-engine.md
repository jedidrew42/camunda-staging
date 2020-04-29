---
title: "The Camunda BPM Workflow Engine | Camunda BPM"
date: 2017-10-25T10:39:22+02:00
draft: false
showProductSubnav: true
---

{{<highlight-visual title="DMN Decision Engine" svg="/products/decision-engine.svg" svg_width="20%">}}
Execute DMN 1.1 Decision Tables<br> and provide more flexibility to the business.
{{</highlight-visual>}}

{{%list-item title="DMN 1.1 Support" img="/svg/decision-table.svg" img_width="100%" %}}
The Decision Engine executes DMN Decision Tables as well as Decision Requirements Diagrams. View the [Docs: DMN 1.1 Reference](https://docs.camunda.org/manual/reference/dmn11/) for more details.

With DMN, business stakeholders can define and maintain executable business rules themselves thereby providing great flexibility and convenience.

You can use the pre-built integration with the workflow engine in order to execute decision tables as part of an automated workflow or you can use the decision engine completely standalone, as described below.

{{%/list-item%}}

<section class="page-section list-item-bullets">
      <header>
        <h2 class="light lead">REST API</h2>
      </header>
      <div class="row">
        <div class="col-md-6">
          <p>You can access the Decision Engine via REST in order to execute decision tables and decision graphs. Check the <a href="https://docs.camunda.org/manual/reference/rest/decision-definition/post-evaluate/">REST API Reference</a> for usage examples.</p>
          <p>You can also call the Camunda History Service via REST to determine which decisions have been made, including the input parameters, rules that fired and resulting output parameters.</p>
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
          <p>Add the Decision Engine as a simple <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/embed/">Maven dependency</a> and use the <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/evaluate-decisions/">Java API</a> in your own application.</p>
          <p> This will also allow you to create <a href="https://docs.camunda.org/manual/user-guide/dmn-engine/testing/">JUnit tests for your DMN decisions</a>.</p>
          <p>The Decision Engine requires less than 1MB and can run in any JVM.</p>
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
            We released the first version of the Camunda Decision Engine in November 2015. Since then it has been adopted by many organizations who use it in production for high volume decision procedures.
          </p>
          <p>Based on their feedback and experiences we have continuously improved the Decision Engine's performance. </p>
          <p>Blog Post: <a href="https://blog.camunda.com/post/2016/08/dmn-performance-improvements/">DMN Performance Improvements</a></p>
        </div>
        <div class="col-md-6" style="height:400px; overflow:hidden">
        	<img src="https://blog.camunda.com/post/2016/08/dmn-performance-improvements/benchmark-result-diagram.png" style="max-height:100%">
        </div>
    </div>
</section>
