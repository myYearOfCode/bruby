require 'rails_helper'

RSpec.describe GetRecipeController, type: :controller do


  describe "GET response" do
    before(:each) do
      DatabaseCleaner.clean_with(:deletion)
      User.create!(
        username: "rossd",
        password: "homebrewing",
        email: "me@there.com",
        machine: "3",
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

      User.create!(
        username: "rossd",
        password: "homebrewing",
        email: "me@there2.com",
        machine: "f91dc3e8cfa484a6d37911d951ac0a72",
        brewNext: @recipe.id
      )
      User.create!(
        username: "invalidRecipeName",
        password: "homebrewing",
        email: "me@weather.com",
        machine: "111111111111",
        brewNext: 100000
      )
    end

    it "returns a valid recipe" do
      get :index
      expect(response.content_type).to eq("text/plain")
      expect(response.status).to eq(200)
      expect(response.body.split(',').length).to eq(55)
    end

    it "returns the machine id as recipe name if not registered" do
      get :index, params: {uid: "5555555555555555"}
      expect(response.body).to match(/5555555555555555/)
    end

    it "does not return the machine id as recipe name if machine is registered and brewNext is set" do
      get :index, params: {uid: "f91dc3e8cfa484a6d37911d951ac0a72"}
      expect(response.body).to_not match(/f91dc3e8cfa484a6d37911d951ac0a72/)
    end

    it "returns the recipe name if machine is registered and brewNext is set" do
      get :index, params: {uid: "f91dc3e8cfa484a6d37911d951ac0a72"}
      expect(response.body).to match(/Pitch-Black Stout/)
    end

    it "returns 'No Recipe Selected' if machine is registered but brewNext is not set" do
      get :index, params: {uid: "3"}
      expect(response.body).to match(/No Recipe Selected/)
    end

    # it "returns 'Recipe Not Found' if machine is registered but brewNext is invalid" do
    #   get :index, params: {uid: "111111111111"}
    #   expect(response.body).to match(/Recipe Not Found/)
    # end
  end
end
