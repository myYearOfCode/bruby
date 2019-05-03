require 'rails_helper'

RSpec.describe Recipe, type: :model do
  it { should have_valid(:name).when("Hello World")}
  it { should have_valid(:s1Temp).when(1)}
  it { should_not have_valid(:s1Temp).when(nil, "beer")}
  it { should have_valid(:s1Time).when(1)}
  it { should_not have_valid(:s1Time).when(nil, "beer")}
  it { should have_valid(:s2Temp).when(1)}
  it { should_not have_valid(:s2Temp).when(nil, "beer")}
  it { should have_valid(:s2Time).when(1)}
  it { should_not have_valid(:s2Time).when(nil, "beer")}
  it { should have_valid(:s3Temp).when(1)}
  it { should_not have_valid(:s3Temp).when(nil, "beer")}
  it { should have_valid(:s3Time).when(1)}
  it { should_not have_valid(:s3Time).when(nil, "beer")}
  it { should have_valid(:s4Temp).when(1)}
  it { should_not have_valid(:s4Temp).when(nil, "beer")}
  it { should have_valid(:s4Time).when(1)}
  it { should_not have_valid(:s4Time).when(nil, "beer")}
  it { should have_valid(:s5Temp).when(1)}
  it { should_not have_valid(:s5Temp).when(nil, "beer")}
  it { should have_valid(:s5Time).when(1)}
  it { should_not have_valid(:s5Time).when(nil, "beer")}
  it { should have_valid(:s6Temp).when(1)}
  it { should_not have_valid(:s6Temp).when(nil, "beer")}
  it { should have_valid(:s6Time).when(1)}
  it { should_not have_valid(:s6Time).when(nil, "beer")}
  it { should have_valid(:s7Temp).when(1)}
  it { should_not have_valid(:s7Temp).when(nil, "beer")}
  it { should have_valid(:s7Time).when(1)}
  it { should_not have_valid(:s7Time).when(nil, "beer")}
  it { should have_valid(:s8Temp).when(1)}
  it { should_not have_valid(:s8Temp).when(nil, "beer")}
  it { should have_valid(:s8Time).when(1)}
  it { should_not have_valid(:s8Time).when(nil, "beer")}
  it { should have_valid(:s9Temp).when(1)}
  it { should_not have_valid(:s9Temp).when(nil, "beer")}
  it { should have_valid(:s9Time).when(1)}
  it { should_not have_valid(:s9Time).when(nil, "beer")}
  it { should have_valid(:s10Temp).when(1)}
  it { should_not have_valid(:s10Temp).when(nil, "beer")}
  it { should have_valid(:s10Time).when(1)}
  it { should_not have_valid(:s10Time).when(nil, "beer")}
  it { should have_many(:brews) }
  it { should have_many(:users) }
end
