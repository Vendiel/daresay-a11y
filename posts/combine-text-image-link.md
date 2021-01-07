---
id: combine-text-image-link
title: When using both image and text for linking to a destination,  they should be combined into a single link
tags:
  - Images
  - Links
reqs:
  - 1.1.1 A
  - 2.4.4 A
roles:
  - Tech
prio: 65
---

## Description

Having everything clickable is good for touch areas but don't repeat the link for every element since screen readers will read them one by one.

If the text is sufficient to describe the purpose of the link, the image/icon can be seen as decorative and should have an empty alt attribute (text alternative).

If the image convey information beyond the purpose of the link, then it shall have an alt attribute (text alternative). For instance, a double windows icon at the end of a link should state "New window", or a pdf icon should state "PDF format".
