class GetRecipeController < ApplicationController
  #add strong params
  def index
    user = User.where(machine: params[:uid])[0]
    if !user.nil?
      if !user[:brewNext].nil?
        recipe = Recipe.find(user[:brewNext])
        if !recipe.nil?
          recipe_body="##{recipe.name}/5,7,6.0,40,#{recipe.s1Temp},#{recipe.s1Time},0,0,Preparing to Brew,#{recipe.s2Temp},#{recipe.s2Time},0,2,Heating,#{recipe.s3Temp},#{recipe.s3Time},0,1,Dough In,#{recipe.s4Temp},#{recipe.s4Time},0,1,Mash 1,#{recipe.s5Temp},#{recipe.s5Time},0,1,Mash 2,#{recipe.s6Temp},#{recipe.s6Time},2,1,Mash Out,#{recipe.s7Temp},#{recipe.s7Time},0,3,Hops 1,#{recipe.s8Temp},#{recipe.s8Time},0,4,Hops 2,#{recipe.s9Temp},#{recipe.s9Time},0,6,Hops 3,#{recipe.s10Temp},#{recipe.s10Time},5,5,Hops 4,||#"
        else
          recipe_body="#Recipe Not Found/5,7,6.0,40,0,0,0,0,Preparing to Brew,0,0,0,2,Heating,0,0,0,1,Dough In,0,0,0,1,Mash 1,0,0,0,1,Mash 2,0,0,2,1,Mash Out,0,0,0,3,Hops 1,0,0,0,4,Hops 2,0,0,0,6,Hops 3,0,0,5,5,Hops 4,||#"
        end
      else
        recipe_body="#No Recipe Selected/5,7,6.0,40,0,0,0,0,Preparing to Brew,0,0,0,2,Heating,0,0,0,1,Dough In,0,0,0,1,Mash 1,0,0,0,1,Mash 2,0,0,2,1,Mash Out,0,0,0,3,Hops 1,0,0,0,4,Hops 2,0,0,0,6,Hops 3,0,0,5,5,Hops 4,||#"
      end
    else
      recipe_body="##{params[:uid]}/5,7,6.0,40,0,0,0,0,Preparing to Brew,0,0,0,2,Heating,0,0,0,1,Dough In,0,0,0,1,Mash 1,0,0,0,1,Mash 2,0,0,2,1,Mash Out,0,0,0,3,Hops 1,0,0,0,4,Hops 2,0,0,0,6,Hops 3,0,0,5,5,Hops 4,||#"
    end
    render plain: recipe_body
  end
end
