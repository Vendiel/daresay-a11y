---
id: regions
title: Use regions/landmarks to identify sections of a page
tags:
  - Layout
  - Markup
reqs:
  - 2.4.1 A
roles:
  - Tech
---

## Description

Help users with assistive technology (such as a screen reader) to orient and navigate more easily to different sections of a page.

Landmarks should supplement native semantic markup such as headings, lists etc. Make sure all content on the page is included in landmarks. Region is a segment of the page that contains content of significance so that it becomes more readily discoverable and navigable.

## What to do

- Make sure all content on the page is included in landmarks

## Tips

- If you use HTML5, use structural elements such as main, aside, header, footer and hub to define what role each part of the page has.
- Use WAI-ARIA landmark roles, such as main, search, navigation, banner, content info and so on. This allows users with, for example, screen readers to navigate between different parts of the page in a standardized way.

## Additional information

- [ARIA Landmarks example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html "Example on how to use ARIA Landmarks")
- [Using WAI-ARIA Landmarks](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/ "HInstructions on how to use WAI-ARIA Landmarks")
