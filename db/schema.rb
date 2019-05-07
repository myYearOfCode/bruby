# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_07_014407) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brew_logs", force: :cascade do |t|
    t.string "uid", null: false
    t.string "sesId", null: false
    t.integer "wort", null: false
    t.integer "therm", null: false
    t.string "step", null: false
    t.integer "error", null: false
    t.integer "sesType", null: false
    t.integer "timeLeft", null: false
    t.decimal "shutScale", null: false
    t.bigint "brew_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brew_id"], name: "index_brew_logs_on_brew_id"
  end

  create_table "brews", force: :cascade do |t|
    t.string "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.index ["recipe_id"], name: "index_brews_on_recipe_id"
    t.index ["user_id"], name: "index_brews_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name", null: false
    t.integer "s1Temp", null: false
    t.integer "s1Time", null: false
    t.integer "s2Temp", null: false
    t.integer "s2Time", null: false
    t.integer "s3Temp", null: false
    t.integer "s3Time", null: false
    t.integer "s4Temp", null: false
    t.integer "s4Time", null: false
    t.integer "s5Temp", null: false
    t.integer "s5Time", null: false
    t.integer "s6Temp", null: false
    t.integer "s6Time", null: false
    t.integer "s7Temp", null: false
    t.integer "s7Time", null: false
    t.integer "s8Temp", null: false
    t.integer "s8Time", null: false
    t.integer "s9Temp", null: false
    t.integer "s9Time", null: false
    t.integer "s10Temp", null: false
    t.integer "s10Time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", default: "anonymous", null: false
    t.string "machine"
    t.integer "brewNext"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
