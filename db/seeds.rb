# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

recipe = Recipe.create!(
  name: "Chocolate Stout",
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

user = User.create!(
  username: "rossd",
  password: "homebrewing",
  email: "me@here.com",
  machine: "f91dc3e8cfa484a6d37911d951ac0a72",
  brewNext: recipe.id
)

Brew.create!(
  user: user,
  recipe: recipe
)
