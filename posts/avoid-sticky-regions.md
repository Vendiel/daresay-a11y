---
id: avoid-sticky-regions
title: Try to avoid using sticky regions (recommendation)
tags:
  - Navigation
  - Layout
reqs:
  - 1.4.10 AA
roles:
  - Design
---

## Description

This is a recommendation.

Sticky regions always stay visible even when the user scrolls. This is often not a problem but in mobile (landscape mode) and when zooming in on the desktop, these sticky regions may take up a big portion of the screen and blocking access to the content. They can also become problematic for users navigating the UI with a keyboard where the sticky region may block so the user can't see what control that has focus.

If it is used - make the regions not sticky in context where there is limited space.

This is so that user will have enough time to take in/read the pop-up content.
