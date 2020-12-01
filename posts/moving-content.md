---
id: moving-content
title: Content that starts moving, blinking or scrolling automatically and lasts longer than 5 seconds must be possible be paused, stopped or hidden by the user
tags:
  - Content
reqs:
  - 2.2.2 A
roles:
  - Design
  - Tech
sidebar_label: Moving content
---

## Description

Content that starts moving or blinking automatically in parallell with other content can be a severe distraction for some users, particularly for those with attention deficit orders where the content that's moving or blinking will make it difficult for them to concentrate on other parts of the page. It will also cause problems for users that has trouble reading text quickly or trouble tracking moving objects.

The recommendation is to avoid moving, blinking, scrolling content if possible, but if used and if it lasts for more than five seconds, then there must be a mechanism for users to stop it. It could be an interactive control like a pause/restart button or by using keyboard shortcuts like the Escape key.

Example of moving, blinking or scrolling content are carousels, video, background video, synchronised media presentations, real-time games, scrolling stock tickers or news banner, animated “On sale" image.

## Exceptions

1. If the content that is moving/blinking/scrolling is the only thing shown on the page, then it doesn't need any mechanism for pause/stop/hide - it’s only needed when the moving/blinking/scrolling content is shown in parallell with other content. For instance, a full-page ad.
2. If the movement, blinking, scrolling is part of an activity that is essential. For instance, an animation that is there to inform users that something is loading and that's why no interaction can take place (if there was no animation the users might think that the content was frozen or broken).

## Additional information

Make sure that any blinking content isn’t actually flashing. See guideline about flashing content.

If you pause content, consider what kind of content that is displayed to set an appropriate behavior for what should happen when the user unpauses.

- Pausing and resuming where the user left off is the best option for content that is not real-time events or a status.
- Pausing and jumping forward to current status/event is better for information that is real-time, like weather radar, stock tickers, traffic camera, auction timer. The information that’s shown been the pause and restart does need to be preserved and presented.
