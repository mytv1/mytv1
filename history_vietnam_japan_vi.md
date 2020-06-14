---
layout: markdown
title: Niên biểu lịch sử Việt Nam - Nhật Bản
---
<h1 class="text-center">Niên biểu lịch sử Việt Nam - Nhật Bản</h1>

* Do not remove this line (it will not be displayed)
{:toc}

<div>
  <table class="table">
    {% for row in site.data.history_jp_vi_vi %}
      {% if forloop.first %}
      <tr>
        {% for pair in row %}
          <th scope="col">{{ pair[0] }}</th>
        {% endfor %}
      </tr>
      {% endif %}

      {% tablerow pair in row %}
        {{ pair[1] }}
      {% endtablerow %}
    {% endfor %}
  </table>
</div>


