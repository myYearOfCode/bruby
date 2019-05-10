class Recipe < ApplicationRecord
  has_many :brews
  has_many :users, through: :brews

  validates :name, presence: true
  validates :s1Temp, presence: true, numericality: true
  validates :s1Time, presence: true, numericality: true
  validates :s2Temp, presence: true, numericality: true
  validates :s2Time, presence: true, numericality: true
  validates :s3Temp, presence: true, numericality: true
  validates :s3Time, presence: true, numericality: true
  validates :s4Temp, presence: true, numericality: true
  validates :s4Time, presence: true, numericality: true
  validates :s5Temp, presence: true, numericality: true
  validates :s5Time, presence: true, numericality: true
  validates :s6Temp, presence: true, numericality: true
  validates :s6Time, presence: true, numericality: true
  validates :s7Temp, presence: true, numericality: true
  validates :s7Time, presence: true, numericality: true
  validates :s8Temp, presence: true, numericality: true
  validates :s8Time, presence: true, numericality: true
  validates :s9Temp, presence: true, numericality: true
  validates :s9Time, presence: true, numericality: true
  validates :s10Temp, presence: true, numericality: true
  validates :s10Time, presence: true, numericality: true

  mount_uploader :profile_photo, ProfilePhotoUploader
end
