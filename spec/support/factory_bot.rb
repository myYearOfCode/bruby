require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    machine { 1 }
    sequence(:username) { |n| "USER_#{n}#{n}#{n}#{n}#{n}#{n}#{n}"}
    # brew
  end

  factory :brew_log do
    sequence(:sesId) {|n| n }
    uid {'uid'}
    wort {100}
    therm {300}
    step {'step'}
    error {5}
    sesType {5}
    timeLeft {5656}
    shutScale {12}
    brew_id {1}
  end

  factory :brew do
    # recipe_id {1}
    # user_id {1}

    recipe
    user
  end

  factory :recipe do
    sequence(:name) { |n| "Recipe##{n}" }
    sequence(:s1Temp) { |n| "#{n}" }
    sequence(:s1Time) { |n| "#{n}" }
    sequence(:s2Temp) { |n| "#{n}" }
    sequence(:s2Time) { |n| "#{n}" }
    sequence(:s3Temp) { |n| "#{n}" }
    sequence(:s3Time) { |n| "#{n}" }
    sequence(:s4Temp) { |n| "#{n}" }
    sequence(:s4Time) { |n| "#{n}" }
    sequence(:s5Temp) { |n| "#{n}" }
    sequence(:s5Time) { |n| "#{n}" }
    sequence(:s6Temp) { |n| "#{n}" }
    sequence(:s6Time) { |n| "#{n}" }
    sequence(:s7Temp) { |n| "#{n}" }
    sequence(:s7Time) { |n| "#{n}" }
    sequence(:s8Temp) { |n| "#{n}" }
    sequence(:s8Time) { |n| "#{n}" }
    sequence(:s9Temp) { |n| "#{n}" }
    sequence(:s9Time) { |n| "#{n}" }
    sequence(:s10Temp) { |n| "#{n}" }
    sequence(:s10Time) { |n| "#{n}" }
  end
end
