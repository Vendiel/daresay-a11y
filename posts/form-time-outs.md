---
id: form-time-outs
title: If the form has a time-out, then it must be possible to turn it off, adjust or extend it
tags:
  - Forms
reqs:
  - 2.2.1 A
roles:
  - Tech
  - Design
prio: 36
---

## Description

Not everyone has the ability to complete a task under a certain time limit. People with different types of disabilities, such as blindness, low vision, cognitive limitations, physical disabilities, usually need more time to complete the task.

To make it possible for everyone to use the service, any time limit for forms must be possible to either be:

- Turned off - make it possible to disable the time limit before it begins (best option).
- Adjusted - make it possible to customise the length of the time limit before it beings, over a range of at least ten times the default setting (next best option).
- Extended - make it possible for the user to reqsuest more time before the time limit occurs (least best option). The user must be given at least 20 seconds to extend it and it should be done with a simple action, such as pressing the space bar. It must be possible to do this at least ten times.

## Examples

- The user gets warned that the time limit for a purchase flow is ending soon and gets the possibility to extend it by clicking an “Extend time limit” button.
- There’s a checkbox before the form that will give the user 15 minutes extra to complete the form.
- It’s possible to remove the time limit for completing complex forms by checking a checkbox.

## Exceptions

1. The time limit is longer than 20 hours
2. The time limit is due to real-time events, like bidding in an online auction where additional time would be unfair.
3. The time limit is essential for business, such as an online ticket-purchasing site for high-demand events where allowing users to extend the time-out period would invalidate the business process.
4. The time limit is set externally (not under the authors’ control) such as by the user agent or factors intrinsic to the Internet. Note that time limits set by Web servers that are under theauthors control are shall be covered.
