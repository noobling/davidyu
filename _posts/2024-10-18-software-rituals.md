---
title: "Software rituals"
excerpt: "Rituals are regular meetings held by the team, usually run by engineers but most of them can be run by anyone. They are best kept short and focused with a small group of people no greater than 5 because we want maximum participation. There is a fine balance between being professional and spending too much time in meetings. I find most participants dread meetings and find it a chore because it requires effort."
coverImage: "/assets/rituals.webp"
date: "2024-10-12T05:35:07.322Z"
author:
  name: David Yu
  bio: Software Engineer, wannabe Entrepreneur
  picture: /assets/blog/authors/davidthrone.jpg
ogImage:
  url: "/assets/rituals.webp"
tags:
  - career
  - software
  - rituals
---

## What are they

Rituals are regular meetings held by the team, usually run by engineers but most of them can be run by anyone. They are best kept short and focused with a small group of people no greater than 5 because we want maximum participation. There is a fine balance between being professional and spending too much time in meetings. I find most participants dread meetings and find it a chore because it requires effort. Most engineers would prefer to code because that is what they are use to. However eagerness for rituals indicates that an individual is highly engaged. In summary rituals work best when you have motivated and engaged team but become a chore if your team is the opposite and you should be addressing the root cause of why people are not interested rather then adding in more meetings they don't want to be in. For example people could feel like they lack control or don't have any interesting work, then that should be changed.

## Agile practices

These are the collection of meetings most teams would run when they try to follow agile practices. This used to be a buzz word and we would hire scrum masters to help with implementing them, the industry has since calmed down and most teams just run it by themselves on a volunteer basis rather then employing a specific person to do them.

### Daily standup

This is ubiquitous amongst every software team is daily standup. Some run various flavours of this where they do an async update on their company chat like Slack. Most common however is a regular short meeting at the same time everyday. This meeting is very broad and could cover anything, people usually discuss about what they did the past 24 hours but can turn into making technical decisions, knowledge sharing sessions, voicing concerns or asking for help. For me the main benefit of this meeting is to help with collaboration and engagement particularly in remote settings where it is easy to to lose these.

### Sprint planning

A meeting usually every 2 weeks depending on your sprint cadence. Can be shorter or longer, but the goal is the same to establish the list of tasks you would like completed. To determine this list can be tricky because of the endless requirements coming from all directions, keep the lights on (KTLO) work, other team requirements, customer requirements, previous sprint work. This is where some understanding of the business and technical knowledge is required and is a balancing act. In poor performing teams I have seen the classic clash between engineers and managers where engineers are always demanding technical improvements be prioritised and managers demanding more features. In high performing teams there is no conflict, managers trust their engineers are professionals and will make the right decisions and engineers will always place the customers first and balance long term and short term solutions. Critically they understand the business by using the product and can empathize with the customer.

### Retrospectives (retros)

At the end of the sprint teams like to look back on how they did. If they failed to meet the goals they unpack the reason. Usually they highlight the good things and bad things that happened. The focus is on the bad things so that they team can continuously improve by creating action items assigned to individuals to address that issue. For example if everyone complains about developer productivity then an action item could be created to write a tool to automate manual testing to address this problem. This task could be assigned to an individual or prioritised in the next sprint. The focus doesn't have to be on the bad, people can also talk about what went well to reinforce that. For example pair coding worked well to solve a hard problem so by talking about it the team is encouraged to do more of that.

### Backlog refinement

To create a well defined task is a skill and it can take some time to do it. If it takes too long it is usually best to create a separate investigation task to help clarify it. For example you are introducing rate limits but you don't know what they rate limits should be so it is worthwhile to investigate that. The goal of backlog refinement is to come together as a team to ensure all tasks that will be completed in the upcoming sprints are clear to the engineers that will work on them. This involves engaging with subject matter experts to add additional information such as the technical details and the definition of done or to add context. It is common to see engineers work on tasks that have barely any information but this is poor practice similar to not including enough information in your commits, PR description or comments in your code. Software is complicated and this is demonstrated by the difficulty it is for engineers to write code that is bug free, performant and readable. I believe we can improve enormously in this space, think about the number of incidents, regressions and complaints about code quality you have heard. Software engineering is a discipline and refining your tasks is a step towards that.

### Demos

One meeting that management is especially interested in is demo meetings. They will be curious what the engineers have built and so this is a chance for them to present it. It is one thing to write it down or say what they did but it makes it much more tangible if you show it. This isn't constrained to features it can be technical or just anything interesting that was done recently. This meeting is the most free flow where people either record or demo what they did live and take any questions afterwards.

### Bugbash

Related to demos is bugbash where people test out recent features that were built. This may sound primitive to manually test features but it still remains the most effective way to uncover bugs and regressions. A comprehensive end-to-end testing suite could arguably replace this meeting but I believe every company before a major feature launch will want to manually test that feature. It can sometimes just be too difficult to describe the exact requirements in an end-to-end test and they themselves could be flawed. For example perhaps the design was wrong and this was coded into the end-to-end test and it passes but functionally it is still wrong because the original design was not followed. Human testing can uncover these sort of discrepancies. Most importantly though I think people should just use the software that their customers use to understand what their customers experience.

## Technical meetings

These are meetings where we dive deep into the problems.

### Post incident review

After an incident the team responsible for the incident and anyone involved come together to analyze the root cause and decide on action items to improve the system so that it does not occur. The root cause can be determined by using the five whys framework where you pull back the onion layers to expose the root cause, this is done in a blameless way by not noting down people's names but the code responsible. Action items will usually come out of this meeting and they can be grouped in either high priority, medium priority, low priority or improvement suggestion. Determining which category the action falls into is subjective but usually simple and high impact actions will be high priority and difficult low impact actions are low priority. High priority to low priority action items have a due date for example high priority is 30 days, this can be seen as an SLO on your team and if you violate it then leadership can tasks questions.

The difficulty of this meeting is usually not finding the root cause unless it was a very technical issue but in creating the right actions with the right priority. Given the SLO for each priority teams maybe encouraged to not add too many actions especially in high priority because it will burden them with too much technical work the next few sprints which could impact existing projects. This is where experience and leadership is required to make the best decision for the customer and business.

### Techops

A periodic review, say weekly, of what happened in the service that they own. This is done by the developer on support whose job was to monitor their team's services. They will pay attention to key metrics like cost, performance, SLOs, vulnerabilities, customer support requests and error logs. Before the meeting they will prepare a summary and note down anything worth discussing and when they run the meeting they will present this back to the team. For example if there was a spike in costs then they would explain this to the team and suggest a remediation strategy or if there was a spike in errors they would investigate the root cause and suggest a patch. During the meeting action items will be created based on the issues identified by the person running the meeting and assigned to the appropriate individual or team.

This meeting can be useful in being proactive with issues and improvements, like your regular dental checkup it is best to uncover problems in a regular checkup then to discover them only after major symptoms are present. This ensures your team is constantly monitoring the vital signs of your services to ensure there are no irregularities. It takes a lot of effort to facilitate this meeting and to properly run it, you have to create a lot of indicators and it is time consuming to go over them so you have to constantly look at ways to make the process more efficient. This can be difficult in a startup when you don't have the resources to invest in this sort of tooling.

### Walkthroughs

Sometimes we have to write complicated PRs and technical documents, and they require a lot of context to even review them. This is when an engineer creates an adhoc meeting to discuss that. This isn't a periodic meeting but I thought I would include it because it does happen frequently and I think it is a good idea to have. As mentioned before the process of writing software is difficult and we want to ensure that reviews are thorough but the challenge is that most of the time people reviewing it haven't spent a lot of time in the problem area that is being solved. This means effort needs to be put into educating people to the point they can perform an meaningful review. This is the goal of a walkthrough. The contents of the meeting varies but the goal is the same.

## Bonus leadership meetings

I find it fascinating how the top growth companies tend to be run by founders. To me this shows just how important the leaders of your company are. Without good leaders no matter how good your engineering is the talent would be wasted on the wrong problems. Good leaders inspire bad leaders cause talent to leave. Here are some ways leaders can keep in touch with their people.

### Ask me anythings (AMAs)

People usually have a thousand of the same questions so holding a regular meeting where the questions can be grouped together an answered can be an efficient way to address this rather then holding individual meetings answering the same questions. This also facilitates open discussion where people can voice their concerns and can feel like they are being heard. Questions are usually voted on so the most popular questions are prioritised.

### Townhalls

This is a regular meeting to go over the business and what are the key things happening. It can be very broad but usually it goes over the financials, key product launches and key changes. This keeps everyone informed and a chance to inspire everyone to do the right thing. They can set the high level goals and values that individuals can bring into their work. For example they see AI as a key part of the business and encourages everyone to investigate how they can incorporate AI into their work or what AI products can be built.
