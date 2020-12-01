---
id: link-text
title: Provide a link text so that the purpose of the link can be determined by the text alone or by the link text and its context
tags:
  - Links
reqs:
  - 2.4.4 A
roles:
  - Tech
  - Design
  - Copy
sidebar_label: Link Text
---

## Description

Some assistive technology can list all links on a page. Giving all links clear and meaningful texts will help these users to choose and interact with your content more easily.

## Best practice

- Links with the same destination have consistent text.
- Links with different destinations should have different link text.
- Don’t use “click here”, users know links are clickable.
- Don’t start link texts with “Read more about…” or “Go to…”.
- Write the most important part in the beginning of the text.
- Use the destination page title or main headline as the link text (when possible).
- If linking to a document, make sure to include the format and size of the file.
- If the link is an e-mail, then the link should include the email-adress.

For those situations where you can’t provide a clear and meaningful link on its own, make sure that the context will give the additional information that is needed to understand it. Examples: The link is part of a sentence, make sure the additional information that’s needed to understand the link comes before the link. Use list items or tables cells and headers to provide context.

If it’s not possible to provide the meaning with the link text or it’s context, you can use ARIA technique (label or labelledby) to add additional information, or you can use CSS to hide a part of the link text.

## Exceptions

1. The purpose of the link cannot be determined from the information on the page.
