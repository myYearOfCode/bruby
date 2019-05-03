require 'rails_helper'

RSpec.describe User, type: :model do
  # it { should have_valid(:hardware_id).when("thisismystring")}

  it { should have_many(:brews) }
  it { should have_many(:recipes) }
end
