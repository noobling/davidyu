---
title: "Look into database providers"
excerpt: "Excel powers businesses, databases power software, technically everything is just a giant table. Arguably the most important part of your service is the data, it is what makes it unique. The code can easily be copied, replaced, deleted but you can't do that with data. The greatest disaster for any company's IT team would be data loss not when their services go down"
coverImage: "/assets/databases.webp"
date: "2024-10-23T05:35:07.322Z"
author:
  name: David Yu
  bio: Software Engineer, wannabe Entrepreneur
  picture: /assets/blog/authors/davidthrone.jpg
ogImage:
  url: "/assets/databases.webp"
tags:
  - databases
  - software
  - BaaS
  - SaaS
---

## Database background

Excel powers businesses, databases power software, technically everything is just a giant table. Arguably the most important part of your service is the data, it is what makes it unique. The code can easily be copied, replaced, deleted but you can't do that with data. The greatest disaster for any company's IT team would be data loss not when their services go down. I spent some time searching the web for the current offerings, the reason I don't want to host my own database is because it takes time and I can't memorise SQL its one of those skills that you use in bursts. There will be long periods where you don't write any and so you forget it. Therefore I love database providers that have a simple UI for me to view, edit, delete my data and tables. I briefly looked at the offerings of table storage available are my key findings are:

- The leading providers all over similar free tier and pricing of 500MB storage
- Smaller providers can offer more generous storage but they like refinement of the major providers
- Serverless and branching are common features now

## Options

| Provider    | Storage (GB) | Pros                                           | Cons                               |
| ----------- | ------------ | ---------------------------------------------- | ---------------------------------- |
| Supbabase   | 500MB        | No need for SQL queries, Builtin auth, popular |                                    |
| PlanetScale |              | Branching                                      | No free tier                       |
| Railway     |              |                                                | Focused on hosting entire app      |
| TiDB        | 25GB         | Most storage                                   |
| Neon DB     | 500MB        | Serverless, branching, Point in time recovery  | Less popular, no UI to edit tables |
| MongoDB     | 500MB        | NoSQL, Flexible - no schema                    | Paid tiers get expensive           |
