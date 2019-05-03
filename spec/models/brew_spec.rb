require 'rails_helper'

RSpec.describe Brew, type: :model do
  it { should have_valid(:recipe_id).when(1)}
  it { should_not have_valid(:recipe_id).when(nil, "")}
  it { should have_valid(:user_id).when(1)}
  it { should_not have_valid(:user_id).when(nil, "")}
  it { should belong_to(:user) }
  it { should belong_to(:recipe) }
end
