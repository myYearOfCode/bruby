require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET #index" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @valid_user = User.create!(
        username: "Sam Adams",
        email: "happy@path.com",
        password: "password",
      )
    end

    it "returns a valid response with a signed in user" do
      sign_in @valid_user
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["user"]["username"]).to eq("Sam Adams")
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
end
