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
