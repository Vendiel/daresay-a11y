---
id: text-styles
title: Make sure that users can change text styles without loss of content or functionality
tags:
  - Text
  - Layout
reqs:
  - 1.4.12 AA
roles:
  - Tech
  - Design
---

## Description

It's important that people can override different text styles to improve their reading experience, without getting problems like overlap with other elements, text going outside of viewport or getting cut off (i.e. the container of the text must adapt in height/width with the text).

- Line height to at least 1.5 times the font size;
- Spacing following paragraphs to at least 2 times the font size;
- Letter spacing to at least 0.12 times the font size;
- Word spacing to at least 0.16 times the font size.

## Exceptions

1. Video captions that are embedded in the video
2. Images of text

Note. This does not mean that all texts must be set to these specific metrics in the design - but it must have the ability to work with these metrics without loss of content or functionality.
