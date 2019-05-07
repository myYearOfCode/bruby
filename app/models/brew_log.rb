class BrewLog < ApplicationRecord
  def index
    belongs_to :brew
    
  end
end
