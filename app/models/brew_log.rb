class BrewLog < ApplicationRecord
  def index
    belongs_to :brew

    validates :uid, presence: true
    validates :sesId, presence: true
    validates :wort, presence: true, numericality: true
    validates :therm, presence: true, numericality: true
    validates :step, presence: true
    validates :error, presence: true, numericality: true
    validates :sesType, presence: true, numericality: true
    validates :timeLeft, presence: true, numericality: true
    validates :shutScale, presence: true, numericality: true
  end
end
