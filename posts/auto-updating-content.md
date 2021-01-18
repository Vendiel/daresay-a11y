---
id: auto-updating-content
title: Content that starts auto-updating automatically must be possible to be paused, stopped, or hidden by the user or that the user can manually control the frequency of the updates
tags:
  - Content
reqs:
  - 2.2.2 A
roles:
  - Design
  - Tech
prio: 70
---

## Description

Content that start auto-updating automatically in parallel with other content can be a barrier for anyone who has trouble reading text quickly as well as anyone who has trouble tracking moving objects. It can also cause problems for screen readers.

If content starts auto-updating automatically there must be a mechanism to pause, stop, hide or change frequency. It could be an interactive control like a pause/restart button or by using keyboard shortcuts like the Escape key. It could also be solved with a checkbox where the users choose if they want the information to be updated automatically or manually (where the manual alternative reveals a Refresh button).

Examples of auto-updating content are automatically updated weather information, stock price updates, auto-advancing presentations, chat messages and twitter feeds, displaying new participants to an online call.

## Exceptions

1. If the auto-updating content is the only thing shown on the page, then it doesn’t need any mechanism to pause, stop, hide or control the freqsuency - it’s only needed when it’s shown in parallell with other content.
2. If the auto-updating is part of an activity that’s essential.

## Additional information

Auto-updating content is content that updates or disappears based on a preset time interval.

If you pause content, consider what kind of content that is displayed to set an appropriate behavior for what should happen when the user unpauses.

- Pausing and resuming where the user left off is the best option for content that is not real-time events or a status.
- Pausing and jumping forward to current status/event is better for information that is real-time, like weather radar, stock tickers, traffic camera, auction timer. The information that’s shown been the pause and restart does need to be preserved and presented.

If you fulfill this guideline by changing the freqsuency of the auto-updating content, then make sure you also fulfill the specific reqsuirements for how much users need to be able to adjust or extend the time limit, see related guideline.
