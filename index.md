---
layout: default
---

{% assign readme = site.pages | where: "name", "README.md" | first %}

<div class="module-header">
  <h1>{{ readme.title }}</h1>
  <p class="module-level">Level: {{ readme.level }}</p>
  <p class="module-description">{{ readme.description }}</p>
</div>

<ul class="content-list">
{% assign content_pages = site.pages | where_exp: "page", "page.path contains 'content/'" | where_exp: "page", "page.name != 'media.txt'" | sort: "path" %}
{% for page in content_pages %}
  {% if page.title %}
  <li class="content-item">
    <h3><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h3>
    <p class="content-duration">Duration: {{ page.duration }} minutes</p>
    <p class="content-description">{{ page.description }}</p>
  </li>
  {% endif %}
{% endfor %}
</ul>
