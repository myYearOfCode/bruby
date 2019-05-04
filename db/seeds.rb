# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# User.create!(
#   name: "rossd",
#   password: "homebrewing",
#   hardware_id: "f91dc3e8cfa484a6d37911d951ac0a72"
# )

Recipe.create!(
  name: "fondant recipe :) 💩",
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
  user: User.first,
  recipe: Recipe.last
)
