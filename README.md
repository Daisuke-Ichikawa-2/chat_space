# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:


## users

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|name         |String   |null: false                                  |
|password     |Stroing  |null: false                                  |

### Association
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## groups

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|name         |String   |null: false,                                 |

### Association
- has_many :members
- has_many :users, through: :members
- has_many :messages

## messages

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|message      |String   |                                             |
|image        |text     |                                             |
|group_id     |integer  |null: false, foreign_key: true               |
|user_id      |integer  |null: false, foreign_key: true               |

### Association
- belongs_to :user
- belongs_to :group

## members

|Column       |Type     |Options                                      |
|------       |----     |-------                                      |
|user_id      |integer  |null: false, foreign_key: true               |
|group_id     |integer  |null: false, foreign_key: true               |

### Association
- belongs_to :group
- belongs_to :user
