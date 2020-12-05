---
id: content-time-limit
title: Content that has a time limit needs to be possible to turn off, adjust or extend
tags:
  - Content
reqs:
  - 2.2.1 A
roles:
  - Design
  - Tech
---

## Description

Not everyone has the ability to complete a task or read content under a certain time limit. People with different types of disabilities, such as blindness, low vision, cognitive limitations, physical disabilities, usually need more time to complete the task.

To make it possible for everyone to comprehend and use the service, any time limit that exists must be possible to either be:

- Turned off - make it possible to disable the time limit before it begins (best option).
- Adjusted - make it possible to customise the length of the time limit before it beings, over a range of at least ten times the default setting (next best option).
- Extended - make it possible for the user to reqsuest more time before the time limit occurs (least best option). The user must be given at least 20 seconds to extend it and it should be done with a simple action, such as pressing the space bar. It must be possible to do this at least ten times.

This applies to full or partial updates of content, like a page which gets refreshed/timed out after a certain time limit or a certain part of the page has content that is animated, moving or scrolling like rotating headlines, text that's scrolling across the screen, an animation showing the users how to tie a shoe, etc.

## Suggested solutions

- The user gets the possibility to extend the session time before getting automatically logged out due to inactivity. If user does not respond s/he gets logged out.
- There’s a preference where users can change the default session time before getting logged out automatically due to inactivity.
- There’s an interactive control that allows you to adjust the time (up to ten times the default) of a rotating lastest news headline.
- There’s a pause button for news headlines that update every minute.
- There’s a pause functionality (like pressing space or escape key) for an animation that shows how to perform a certain task, like building a chair.

## Exceptions

1. The time limit is longer than 20 hours
2. The time limit is due to real-time events, like bidding in an online auction where additional time would be unfair.
3. The time limit is essential for business, such as an online ticket-purchasing site for high-demand events where allowing users to extend the time-out period would invalidate the business process.
4. The time limit is set externally (not under the authors’ control) such as by the user agent or factors intrinsic to the Internet. Note that time limits set by Web servers that are under the authors control are shall be covered.
