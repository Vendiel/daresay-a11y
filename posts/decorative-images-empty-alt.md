---
id: decorative-images-empty-alt
title: Make sure that decorative images have empty alt attribute value
tags:
  - Images
reqs:
  - 1.1.1 A
roles:
  - Tech
---

## Description

Decorative images do not communicate information that is reqsuired to understand the website's content. Images can be deemed decorative if the information is already described in adjacent text or the images is added to make the site more visually attractive. Also valid for decorative images that are part of a text link.

Must include an empty alt attribute (alt=""), otherwise a screen reader may announce the image's file namn and path instead.

Note: Decorative images implemented as CSS backgrounds will not be visible to screen readers.
