require 'rails_helper'

RSpec.describe DashboardController, type: :controller do
  before(:each) do
    DatabaseCleaner.clean_with(:deletion)
    @valid_user = User.create!(
      username: "Sam Adams",
      email: "happy@path.com",
      password: "password",
    )
  end

  describe "GET response" do
    it "redirects non unauthenticated users to sign up" do
      get :index
      expect(response.content_type).to eq("text/html")
      expect(response.status).to eq(302)
      expect(response).to redirect_to(new_user_session_path)
    end

    it "responds with a 200 when logged in" do
      sign_in @valid_user
      get :index
      expect(response.content_type).to eq("text/html")
      expect(response.status).to eq(200)
    end
  end
end
