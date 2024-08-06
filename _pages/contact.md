---
title: Submit research, questions, and more
layout: page
permalink: /contact/
---

Come across any cool research you want to submit? Send a link to the work along with the tldr on the key results to
Bike SOMa NJ at either of the following.

<div style="display: flex; justify-content: center;">
    <div class="social-icons">
      {%- for footer_link in site.footer_links -%}
        {%- if footer_link.url contains "://" -%}
          {%- assign url = footer_link.url -%}
        {%- else -%}
          {%- assign url = footer_link.url | relative_url -%}
        {%- endif -%}
        <a class="social-icon" href="{{ url }}" style="padding: 4px;">
            <i class="{{ footer_link.icon }} fa-4x" title="{{ footer_link.title }}"></i>
        </a>
      {%- endfor -%}
    </div>
</div>

<p></p>

If you're on a social media hiatus, no worries, you can use

> bike dot soma dot nj at gmail dot com

Whichever method you choose, you can be attributed in the subsequents post(s) if desired. All good work deserves a
shoutout.

Thanks!
