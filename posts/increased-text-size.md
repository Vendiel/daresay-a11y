---
id: increased-text-size
title: It must be possible to increase text size 200% without loss of content or functionality
tags:
  - Text
  - Layout
reqs:
  - 1.4.4 AA
roles:
  - Tech
  - Design
prio: 21
---

## Description

Make sure that when the text size is increased, that no cropping of text occur, no overlay of text with surrouding elements, no falling outside of container boundaries, etc (make sure the container also grows).

Note. Make sure the viewport zoom is not disabled.

## Exceptions

1. Images of text
2. Captions (video)

## Additional information

This requirement is connected to 1.4.10 (make the design responsive). If the text zooms with the UI you will fulfill the 1.4.4 requirement as well. If adjustments is made to the text size per media query, make sure you don't make the text too small - make sure it still becomes 200% from default (otherwise it must still be possible to also increase text size up to 200% of default).
