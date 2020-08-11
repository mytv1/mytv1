---
layout: markdown
title: 上高地へ旅行プラン
---

2020/08/09〜2020/08/10に上高地へ旅行しました。素晴らしかったです〜<br>
今後上高地へ旅行する方に役に立つかと思って、自分のスケジュールを共有させていただきます。

# 1.スケージュール
## 1.1.一日目

<div id="kamikochi">
  <table class="table">
    {% for row in site.data.kamikochi_trip_plan_ja %}
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

## 1.2.二日目

<div id="kamikochi">
  <table class="table">
    {% for row in site.data.kamikochi_trip_plan_2_ja %}
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

# 2.その他
上高地を楽しむことについてはホームページでも記載が充実ですので、そちらでご参考までと思います。

https://www.kamikochi.or.jp/