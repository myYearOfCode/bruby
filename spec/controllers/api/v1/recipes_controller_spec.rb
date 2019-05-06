require 'rails_helper'

RSpec.describe Api::V1::RecipesController, type: :controller do
  describe "GET #index" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @valid_user = User.create!(
        email: "happy@path.com",
        password: "password",
      )
      @recipe = Recipe.create!(
        name: "Pitch-Black Stout",
        s1Temp: 90,
        s1Time: 1,
        s2Temp: 90,
        s2Time: 1,
        s3Temp: 90,
        s3Time: 1,
        s4Temp: 90,
        s4Time: 1,
        s5Temp: 90,
        s5Time: 1,
        s6Temp: 90,
        s6Time: 1,
        s7Temp: 90,
        s7Time: 1,
        s8Temp: 90,
        s8Time: 1,
        s9Temp: 90,
        s9Time: 1,
        s10Temp: 90,
        s10Time: 1,
      )

      Brew.create!(
        user: @valid_user,
        recipe: @recipe
      )
    end

    it "returns a valid recipe successfully with a signed in user" do
      sign_in @valid_user
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["recipes"].first["name"]).to eq("Pitch-Black Stout")
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

  describe "POST #create" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      @valid_user = User.create!(
        email: "happy@path.com",
        password: "password",
      )
    end

    it "returns successfully with valid input" do
      sign_in @valid_user
      post :create, params: { recipe:{
        name: "build a beer",
        s1Temp: 0,
        s1Time: 0,
        s2Temp: 0,
        s2Time: 0,
        s3Temp: 0,
        s3Time: 0,
        s4Temp: 0,
        s4Time: 0,
        s5Temp: 0,
        s5Time: 0,
        s6Temp: 0,
        s6Time: 0,
        s7Temp: 0,
        s7Time: 0,
        s8Temp: 0,
        s8Time: 0,
        s9Temp: 0,
        s9Time: 0,
        s10Temp: 0,
        s10Time: 0
        }
      }
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["recipes"][0]["name"]).to match(/build a beer/)
    end

    it "returns unsuccessful with invalid input" do
      sign_in @valid_user
      post :create, params: {recipe:{
        name: "build a beer",
        s9Time: 0,
        s10Temp: 0,
        s10Time: 0
        }
      }
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["error"]).to match(/❌S1temp can't be blank/)
    end

    it "returns unsuccessful with non-signed-in user" do
      post :create, params: {recipe:{
        name:   "build a beer",
        s9Time: 0,
        s10Temp: 0,
        s10Time: 0
        }
      }
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["error"]).to match(/you must be signed in to create a recipe./)
    end

    it "doesn't fail on extra data submitted" do
      sign_in @valid_user
      post :create, params: { recipe:{
        name: "build a beer",
        s1Temp: 0,
        s1Time: 0,
        s2Temp: 0,
        s2Time: 0,
        s3Temp: 0,
        s3Time: 0,
        s4Temp: 0,
        s4Time: 0,
        s5Temp: 0,
        s5Time: 0,
        s6Temp: 0,
        s6Time: 0,
        s7Temp: 0,
        s7Time: 0,
        s8Temp: 0,
        s8Time: 0,
        s9Temp: 0,
        s9Time: 0,
        s10Temp: 0,
        s10Time: 0,
        favoriteBeer: "stout",
        lastMeal: "sushi"
        }
      }
      returned_json = JSON.parse(response.body)
      expect(response.content_type).to eq("application/json")
      expect(response.status).to eq(200)
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["recipes"][0]["name"]).to match(/build a beer/)
      expect(returned_json["recipes"][0]["favoriteBeer"]).to be(nil)
    end
  end
end
