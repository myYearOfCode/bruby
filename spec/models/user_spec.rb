require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:brews) }
  it { should have_many(:recipes) }
  it { should have_valid(:hardware_id).when("thisismystring")}
  it { should_not have_valid(:hardware_id).when(nil, 1)}
end
