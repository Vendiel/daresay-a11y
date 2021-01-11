---
id: identify-font-icons
title: Mark up font icons so all users can perceive them
tags:
  - Markup
  - Icons
reqs:
  - 1.3.1 A
roles:
  - Tech
prio: 69
---

## Description

Some low vision users override fonts to better perceive content, which can turn font icons into things that convey no meaning, for instance a star icon for favorite gets replaced by a square. By setting role="img" the font icon will not be replaced. Also add an aria-label for the font icon to be read correctly.
