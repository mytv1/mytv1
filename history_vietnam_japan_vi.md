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

<div class="mt-5">
  <div>
    <h3>Tham khảo</h3>
    <h4>1.Lịch sử Nhật Bản</h4>
    <ol>
      <li>https://rekishi-memo.net/nihonshi_nenpyou.html</li>
      <li>https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E6%AD%B4%E5%8F%B2
      </li>
    </ol>
    <h4>2.Lịch sử Việt Nam</h4>
    <ol>
      <li>https://vi.wikipedia.org/wiki/Ni%C3%AAn_bi%E1%BB%83u_l%E1%BB%8Bch_s%E1%BB%AD_Vi%E1%BB%87t_Nam</li>
    </ol>
  </div>

  <div>
    <h3>Support</h3>
    <ol>
      <li>https://www.facebook.com/antoine.kenshiro</li>
    </ol>
  </div>
</div>