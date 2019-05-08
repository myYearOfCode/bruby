require 'rails_helper'

RSpec.describe BrewLog, type: :model do
  # pending("I don't know why these tests fail.") do
    it { should have_valid(:uid).when(1, "hello")}
    it { should_not have_valid(:uid).when(nil)}
    it { should have_valid(:sesId).when(1, "hello")}
    it { should_not have_valid(:sesId).when(nil, "")}
    it { should have_valid(:wort).when(1)}
    it { should_not have_valid(:wort).when("hello")}
    it { should have_valid(:therm).when(1)}
    it { should_not have_valid(:therm).when(nil, "")}
    it { should have_valid(:step).when(1, "hello")}
    it { should_not have_valid(:step).when(nil, "")}
    it { should have_valid(:error).when(1)}
    it { should_not have_valid(:error).when(nil, "")}
    it { should have_valid(:sesType).when(1)}
    it { should_not have_valid(:sesType).when(nil, "")}
    it { should have_valid(:timeLeft).when(1)}
    it { should_not have_valid(:timeLeft).when(nil, "")}
    it { should have_valid(:shutScale).when(1)}
    it { should_not have_valid(:shutScale).when(nil, "")}

    it { should belong_to(:brew) }
  # end
end
