---
layout: markdown
title: Kế hoạch du lịch Kamikochi
---

Mình xin chia sẻ schedule nhóm mình đã đi chơi Kamikochi như sau.<br>
Hi vọng mọi người có thể tham khảo khi đến Kamikochi.

# 1.Schedule 
## 1.1.Ngày 1

<div id="kamikochi">
  <table class="table">
    {% for row in site.data.kamikochi_trip_plan_vi %}
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

## 1.2.Ngày 2

<div id="kamikochi">
  <table class="table">
    {% for row in site.data.kamikochi_trip_plan_2_vi %}
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

# 2.Khác
Trên trang chủ Kamikochi cũng đã có ghi rất đầy đủ về các course cũng như chuẩn bị, chú ý khi đến Kamikochi. Các bạn có thể tham khảo chi tiết trên đó :<br>

https://www.kamikochi.or.jp/