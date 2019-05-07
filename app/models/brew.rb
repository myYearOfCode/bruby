class Brew < ApplicationRecord
  belongs_to :user
  belongs_to :recipe
  has_many :brew_logs

  validates :user_id, presence: true
  validates :recipe_id, presence: true
end
