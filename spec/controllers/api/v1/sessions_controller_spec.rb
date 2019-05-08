require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  describe "GET #index" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @valid_user = FactoryBot.create(:user)
      recipe = FactoryBot.create(:recipe)
      @brew = FactoryBot.create(:brew, user_id: @valid_user.id)
      @brew_log = FactoryBot.create(:brew_log, brew_id: @brew.id )
      @brew_log2 = FactoryBot.create(:brew_log, brew_id: @brew.id )
    end

    it "returns a valid response with a signed in user" do
      sign_in @valid_user
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json.length).to eq(2)
      expect(returned_json[@brew_log[:sesId]][0]["sesId"]).to eq(@brew_log[:sesId])
    end

    it "returns an error message with an unauthenticated user" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["error"]).to eq("you are not signed in")
    end
  end

  describe "GET #show" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @valid_user = FactoryBot.create(:user)
      @brew = FactoryBot.create(:brew, user_id: @valid_user.id)
      @brew_log = FactoryBot.create(:brew_log, brew_id: @brew.id )
      @brew_log2 = FactoryBot.create(:brew_log, brew_id: @brew.id )
    end

    it "returns a valid show response with a signed in user" do
      sign_in @valid_user
      get :show, params: {id: @brew_log[:sesId]}
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json[@brew_log[:sesId]]).to be_truthy
      expect(returned_json[@brew_log2[:sesId]]).to_not be_truthy
    end

    it "returns an error message with an unauthenticated user" do
      get :show, params: {id: @brew_log[:sesId]}
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["error"]).to eq("you are not signed in")
    end
  end
end
