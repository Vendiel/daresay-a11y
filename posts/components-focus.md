---
id: components-focus
title: Make sure that components receives focus in a way that makes sense
tags:
  - Structure
  - Navigation
reqs:
  - 2.4.3 A
roles:
  - Design
  - Tech
---

## Description

It’s important that the tab (keyboard focus) order is set so it matches the expected reading order so that keyboard users don’t get disoriented when tabbing through the UI.

The default tab (focus) order in HTML follows the order in which the elements appear in the source code.

If the source and visual order isn’t the same (isn’t matching), then it’s important that the tab order maps in a way that makes sense to what is displayed visually. This can be done with using tabindex.
