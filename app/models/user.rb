class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :brews
  has_many :recipes, through: :brews
  has_many :brew_logs, through: :brews

  geocoded_by :ip_address, :latitude => :lat, :longitude => :lon
  after_validation :geocode
end
