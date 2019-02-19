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

* ---- 1:chatspace 機能
* 機能については、以下に記す。

<dl>
  <dt>a.グループ管理機能</dt>
    <dd>(1)新規追加</dd>
    <dd>(2)データ管理</dd>
</dl>

<dl>
  <dt>b.メッセージ送受信機能</dt>
    <dd>(1)メッセージ管理</dd>
    <dd>(2)送信・受信</dd>
    <dd>(3)グルーピング</dd>
    <dd>(4)画像添付</dd>
</dl>

<dl>
  <dt>c.ユーザ管理機能</dt>
    <dd>(1)新規追加</dd>
    <dd>(2)管理</dd>
    <dd>(3)編集</dd>
</dl>


* ---- 2:エンティティ、およびテーブルの関連付け
<dl>
  <dt>上記、日本語エンティティとアルファベット紐つけ</dt>
    <dd>a.groups</dd>
    <dd>b.messages</dd>
    <dd>c.users</dd>
    <dd>d.members</dd>
</dl>

* ---- 3:リレーション：
  + groups.user_id = users.id
  + members.group_id = groups.id
  + members.user_id = users.id
  + messages.user_id = users.id
  + messages.group_id = groups.id

* ---- 4:アソシエーション：
* ※１  ユーザとグループを管理するため、メンバーエンティティを設定する。

  + ユーザ【多】：グループ【多】
  + グループ【１】：メッセージ／イメージファイル【多】
  + メンバー【多】：ユーザ【１】
  + メンバー【多】：グループ【１】

* ---- 5:マークダウン＆定義セクション：

## users

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|name         |String   |null: false                                  |
|password     |Stroing  |null: false                                  |

### Association
- has_many :groups
- has_many :messages

## groups

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|name         |Stroing  |null: false,                                 |

### Association
- has_many :messages
- has_many :users

## messagesテーブル

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|message      |String   |                                             |
|image        |binary   |                                             |
|group_id     |integer  |null: false, foreign_key: true               |
|user_id      |integer  |null: false, foreign_key: true               |

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|id           |integer  |null: false, unique: true                    |
|user_id      |integer  |null: false, foreign_key: true               |
|group_id     |integer  |null: false, foreign_key: true               |

### Association
- belongs_to :group
- belongs_to :user


