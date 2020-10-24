---
id: identify-font-icons
title: Semantically identify a font icon
tags:
  - Markup
  - Icons
reqs:
  - 1.3.1 A
roles:
  - Tech
sidebar_label: Identify Font Icons
---

### Description

Some low vision users override fonts (to better perceive content) and then font icons can turn into things that convey no meaning (star icon for favorite gets replaced by a square). By setting role="img" the font icon is not replaced. Also add an aria-label for the font icon to be read correctly.
