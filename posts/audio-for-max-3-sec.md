---
id: audio-for-max-3-sec
title: If audio or video (with audio) plays automatically, it should last less than three seconds or there must be a way to pause, stop or mute it
tags:
  - Audio
  - Video
reqs:
  - 1.4.2 A
roles:
  - Design
  - Tech
prio: 105
---

## Description

Audio interfers with screen readers and unexpected audio can be distracting and distruptive for people with cognitive disabilities.

If the audio doesn't automatically turn off then include a control for turning it off which is easy to access with assistive technologies (i.e. early in the page/reading order/tab order) and which is keyboard operable.

It's important that the mechanism for controlling the audio volume is independent from the overall system volume level, since the user still needs to be able to hear the screen reader.

The recommendation is to not play sounds automatically, but only when user requests it.
