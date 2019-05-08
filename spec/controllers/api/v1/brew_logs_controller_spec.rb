require 'rails_helper'

RSpec.describe Api::V1::BrewLogsController, type: :controller do
  describe "GET #show" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @user = FactoryBot.create(:user)
      @user2 = FactoryBot.create(:user)
      @brew = FactoryBot.create(:brew, user: @user)
      10.times do
        FactoryBot.create(:brew_log, brew: @brew)
      end
    end

    it "returns a valid response with a signed in user" do
      sign_in @user
      get :show, params: { id: @user.brew_logs.first.sesId}
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json[0]).to be_kind_of(Hash)
      expect(returned_json[0]).to_not be_kind_of(Array)
    end

    it "returns the correct brew_logs with a signed in user" do
      sign_in @user
      get :show, params: { id: @user.brew_logs.first.sesId}
      returned_json = JSON.parse(response.body)
      expect(returned_json.first["brew_id"]).to eq(@user.brew_logs.first.brew_id)
    end
  #
    it "returns an error message with an unauthenticated user" do
      get :show, params: { id: @user.brew_logs.first.sesId}
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["error"]).to eq("you are not signed in")
    end

    it "returns no error message when trying to access an unowned recipe" do
      sign_in @user2
      get :show, params: { id: @user.brew_logs.first.sesId}
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      binding.pry
      expect(returned_json["brew_logs"].length).to eq(0)
    end
  end
end
