---
title: "CamundaCon 2018"
date: 2017-10-25T10:39:22+02:00
draft: false
showSubNavCustom: true
---


{{<camundacon-talk title="Using Zeebe with Spring Boot and Apache Camel" date="Friday, September 21, 2:20 pm" speakers="Jan Galinski" headshot="jan.jpg" about="I am passionate about BPM, JEE and Open Source ... so naturally, I fell in love with Camunda BPM right away. Working as a senior consultant at Holisticon AG, I set up several business process- and service-oriented enterprise applications over the last years.">}}
<p>
Zeebe is the new microservice orchestration engine by camunda. It allows clients to subscribe to tasks and track the completion and overall end-to-end progress of your business processes. It basically consists of a network of brokers and clients, which can be written in multiple languages.
</p>
<p>
Spring Boot is a platform to create self-contained microservice on the JVM and supports integration in „cloud“ environments.
</p>
<p>
Bringing those two ideas together seems like a natural fit. To simplify writing jvm-based zeebe-clients with spring boot, I set up the spring-zeebe extension, which brings the „everything just works“ feeling you expect from a spring boot starter to the zeebee world.
</p>
<p>
But what if you run these spring boot clients in a cloud environment? The current broker-client architecture relies on host/port binding, a luxuary you might not have when your components are highly distributed and cannot see each other in the network.
</p>
<p>
That’s where apache camel comes to the rescue. Camel is an enterprise integration solution that supports many messaging middlewares and  frees your code from actually knowing if the communication will be tcp, jms, kafka or even file-based. With the camel-zeebe extension you can leverage these benefits and subscribe to arbitrary message channels to connect to the broker instead of relying on a tcp host/port connection.
</p>
<p>
What happens in this talk:
–
short introduction to zeebe, spring boot, camel
–
life demo setting up broker/client with spring boot
–
life demo enhancing this approach with camel and rabbitMq
</p>
{{</camundacon-talk>}}
