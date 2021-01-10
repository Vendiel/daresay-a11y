---
id: orientation
title: Don’t restrict the UI to a specific orientation
tags:
  - Layout
reqs:
  - 1.3.4 AA
roles:
  - Design
  - Tech
prio: 6
---

## Description

All users don’t have the possibility to turn their device. Some users have to choose a mode (either portrait or landscape) and always have it in that mode, for example a wheelchair user that mount their mobile devices in a specific orientation.

This requirement also implies that all content and functionality shall be available in all orientations.

### What to do

Make sure all content is presented regardless of screen orientation.

### Example

#### Design

![A vertical and a horizontal screen](https://github.com/daresaydigital/a11ychecklist/blob/master/static/img/orientation.png?raw=true)

## Exceptions

When the orientation of the device is absolutely necessary. For example a music app using an on-screen piano that needs landscape orientation to provide large enough tap areas for the piano keys.
