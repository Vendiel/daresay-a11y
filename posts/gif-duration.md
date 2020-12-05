---
id: gif-duration
title: Make sure that gifs are not played for longer than 5 seconds
tags:
  - Gifs
reqs:
  - 2.2.2 A
roles:
  - Design
  - Tech
---

## Description

Content that moves or blinks can cause problems for people with low vision and be distracting for people with attention deficit disorders.

If the gif is not stopping after 5 seconds then it must be possible for the user to pause, stop or hide it. For instance by a pause button or by pressing the Escape key.

Note. Make sure that the blinking content isn’t actually flashing! Flashing is content that can trigger a seizure and is not allowed, not even for a second. For a blinking to be considered a flash it must be large and bright enough, plus occur at speeds of 3 per second or more.

## Exceptions

If the gif is the only thing shown on the page, then it does not need any mechanism for pause/stop/hide. It’s only needed when the gif is shown in parallell with other content.
