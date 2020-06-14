---
layout: markdown
title: 日本-ベトナムの歴史年表
---
<h1 class="text-center">日本-ベトナムの歴史年表</h1>

* Do not remove this line (it will not be displayed)
{:toc}

<div>
  <table class="table">
    {% for row in site.data.history_jp_vi_ja %}
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
    <h3>参考</h3>
    <h4>1.日本歴史</h4>
    <ol>
      <li>https://rekishi-memo.net/nihonshi_nenpyou.html</li>
      <li>https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E6%AD%B4%E5%8F%B2
      </li>
    </ol>
    <h4>2.ベトナム歴史</h4>
    <ol>
      <li>https://vi.wikipedia.org/wiki/Ni%C3%AAn_bi%E1%BB%83u_l%E1%BB%8Bch_s%E1%BB%AD_Vi%E1%BB%87t_Nam</li>
    </ol>
  </div>

  <div>
    <h3>サポート</h3>
    <ol>
      <li>https://www.facebook.com/antoine.kenshiro</li>
    </ol>
  </div>
</div>
