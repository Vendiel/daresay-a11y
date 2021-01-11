---
id: decorative-images-empty-alt
title: Decorative images shall have an empty alt text
tags:
  - Images
  - Icons
  - Gifs
reqs:
  - 1.1.1 A
roles:
  - Tech
prio: 57
---

## Description

Decorative images are images that doesn't communicate meaningful information which is required to understand the website's content, like an image that is added to make the site more visually attractive. Images can also be deemed decorative if the information is already described in adjacent text.

Set the alt attribute to empty (alt="") for decorative images, otherwise screen readers may announce the image's file namn and path as a fallback.

## Additional information

This also applies to decorative images that are part of a text link.

Decorative images implemented as CSS backgrounds will not be visible to screen readers.
