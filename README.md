# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

'---- 1:chatspace 機能
'機能については、以下に記す。
<dl>
  <dt>a.グループ管理機能</dt>
    <dd>(1)新規追加</dd>
    <dd>(2)データ管理</dd>>
</dl>






b.メッセージ送受信機能
  (1)メッセージ管理
  (2)送信・受信
  (3)グルーピング
  (4)画像添付

c.ユーザ管理機能
  (1)新規追加
  (2)管理
  (3)編集

---- 2:エンティティ、およびテーブルの関連付け
上記、日本語エンティティとアルファベット紐つけ
  a.groups
  b.messages
  c.users

☆）関連づけテーブル：
  d.members

---- 3:リレーション：
  groups.user_id = users.id
  members.group_id = groups.id
  members.user_id = users.id
  messages.user_id = users.id
  messages.group_id = groups.id

---- 4:アソシエーション：
※１  ユーザとグループを管理するため、メンバーエンティティを設定する。

  ユーザ【多】：グループ【多】
  グループ【１】：メッセージ／イメージファイル【多】
  メンバー【多】：ユーザ【１】
  メンバー【多】：グループ【１】

---- 5:マークダウン＆定義セクション：

## users

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|name         |Stroing  |null: false, foreign_key: true               |


## groups

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|name         |Stroing  |null: false, foreign_key: true               |

## membersテーブル

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|user_id      |integer  |null: false, foreign_key: true               |
|group_id     |integer  |null: false, foreign_key: true               |




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user






groups
  group_id
  group_name
  timestamp...

messages
  body(message)
  image
  user_id
  timestamp...
  group_id

users
  id
  name

members
  group_id
  user_id
  timestamp

relation
 users:n --- group:n
 group:1 --- massges:n








