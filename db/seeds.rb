# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
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
  description: "A deep, dark stout with a lot of alcohol. This will surprise you when you drink two or three. This makes a great beer to give as gifts.",
  yeast: "us-05",
  style: "Stout"
)

recipe2 = Recipe.create!(
  name: "American Pale Ale",
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
  description: "This is a light tasty brew that goes well with sunshine and sand. Brew it twice - or you'll be sad that you ran out.",
  yeast: "safale 132",
  style: "American Pale Ale"
)

recipe3 = Recipe.create!(
  name: "Brown Ale",
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
  description: "A traditional english brew. Look for hints of chestnut in both the color and aroma.",
  yeast: "us-05",
  style: "Brown Ale"
)

recipe4 = Recipe.create!(
  name: "Porter Square Porter",
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
  description: "A cousin to the stout, this beer is lighter but no less tasty. It pairs well with creamy desserts and charred meat.",
  yeast: "us-05",
  style: "Porter"
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
  recipe: recipe,
  rating: 5,
  review: "This came out perfectly. Make more, and save some for Wally next time."
)

Brew.create!(
  user: user,
  recipe: recipe2,
  rating: 3,
  review: "This tasted weak and watery. Maybe up the grains or add some extract to goose the sugars up."
)

Brew.create!(
  user: user,
  recipe: recipe3,
  rating: 3,
  review: "This beer my mom LOVED! I'm going to brew some wuickly so she can have a 6 pack  for her birthday."
)

Brew.create!(
  user: user,
  recipe: recipe4,
  rating: 3,
  review: "This is going into my basement for 6 mos. I'll report back."
)

BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "276", step: "Preparing to Brew", event:"Preparing to Brew", error: "0", sesType: "0", timeLeft: "0", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "277", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5578", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "108", therm: "258", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5553", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "108", therm: "239", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5528", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "111", therm: "202", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5503", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "163", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5478", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "108", therm: "134", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5453", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "108", therm: "114", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5428", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "100", step: "Preparing to Brew", error:"0", sesType:"0", timeLeft:"5402", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "98", step: "Heating", event: "Heating", error: "0", sesType: "0", timeLeft: "5397", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "143", step: "Heating", error: "0", sesType: "0", timeLeft: "5382", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "246", step: "Heating", error: "0", sesType: "0", timeLeft: "5333", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "330", step: "Heating", error: "0", sesType: "0", timeLeft: "5308", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "321", step: "Dough In", event:"Dough In", error: "0", sesType: "0", timeLeft: "5282", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "107", therm: "313", step: "Dough In", error:"0", sesType: "0", timeLeft: "4912", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "298", step: "Dough In", error:"0", sesType: "0", timeLeft: "4887", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "108", therm: "299", step: "Dough In", error:"0", sesType: "0", timeLeft: "4862", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "300", step: "Dough In", error:"0", sesType: "0", timeLeft: "4837", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "295", step: "Dough In", error:"0", sesType: "0", timeLeft: "4812", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "295", step: "Dough In", error:"0", sesType: "0", timeLeft: "4787", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "299", step: "Dough In", error:"0", sesType: "0", timeLeft: "4762", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "301", step: "Dough In", error:"0", sesType: "0", timeLeft: "4737", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "303", step: "Dough In", error:"0", sesType: "0", timeLeft: "4712", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "298", step: "Dough In", error:"0", sesType: "0", timeLeft: "4687", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "301", step: "Dough In", error:"0", sesType: "0", timeLeft: "4662", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "299", step: "Dough In", error:"0", sesType: "0", timeLeft: "4637", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "300", step: "Dough In", error:"0", sesType: "0", timeLeft: "4611", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "111", therm: "302", step: "Dough In", error:"0", sesType: "0", timeLeft: "4586", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "110", therm: "302", step: "Mash 1", event: "Mash 1", error: "0", sesType: "0", timeLeft: "4563", shutScale: "0.28", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "109", therm: "297", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4193", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "117", therm: "289", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4168", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "119", therm: "301", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4143", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "117", therm: "298", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4118", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "125", therm: "334", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4093", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "128", therm: "328", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4068", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "129", therm: "326", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4043", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "131", therm: "323", step: "Mash 1", error:"0", sesType: "0", timeLeft: "4017", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "132", therm: "325", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3992", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "135", therm: "332", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3967", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "136", therm: "335", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3942", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "136", therm: "329", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3917", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "138", therm: "327", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3892", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "141", therm: "325", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3867", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "143", therm: "332", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3842", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "144", therm: "335", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3817", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "145", therm: "331", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3792", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "146", therm: "327", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3767", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "148", therm: "324", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3742", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "148", therm: "335", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3716", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "149", therm: "338", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3691", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "148", therm: "335", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3666", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "147", therm: "331", step: "Mash 1", error:"0", sesType: "0", timeLeft: "3641", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "151", therm: "338", step: "Mash 2", event:"Mash 2", error: "0", sesType: "0", timeLeft: "3621", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "140", therm: "317", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3472", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "154", therm: "325", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3447", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "155", therm: "324", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3422", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "156", therm: "323", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3397", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "157", therm: "327", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3372", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "157", therm: "337", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3347", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "157", therm: "336", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3322", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "210", therm: "288", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3267", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "156", therm: "342", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3242", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "154", therm: "338", step: "Mash 2", error:"0", sesType: "0", timeLeft: "3217", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "157", therm: "327", step: "Mash Out", event:"Mash Out", error: "0", sesType: "0", timeLeft: "3209", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "149", therm: "330", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2753", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "164", therm: "324", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2727", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "165", therm: "328", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2702", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "166", therm: "330", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2677", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "167", therm: "335", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2652", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "167", therm: "329", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2627", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "169", therm: "327", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2602", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "172", therm: "329", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2577", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "172", therm: "332", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2552", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "174", therm: "327", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2527", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "174", therm: "333", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2501", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "173", therm: "332", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2476", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "174", therm: "324", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2451", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "176", therm: "324", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2426", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "177", therm: "329", step: "Mash Out", error:"0", sesType: "0", timeLeft: "2401", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "177", therm: "328", step: "Hops 1", event:"Hops 1", error: "0", sesType: "0", timeLeft: "2378", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "166", therm: "333", step: "Hops 1", error:"0", sesType: "0", timeLeft: "1912",shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "210", therm: "298", step: "Hops 2", event:"Hops 2", error: "0", sesType: "0", timeLeft: "1871", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "165", therm: "289", step: "Hops 2", error:"0", sesType: "0", timeLeft: "1188",shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "175", therm: "292", step: "Hops 3", event:"Hops 3", error: "0", sesType: "0", timeLeft: "1181", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "165", therm: "302", step: "Hops 3", error:"0", sesType: "0", timeLeft: "888",shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "178", therm: "306", step: "Hops 4", event:"Hops 4", error: "0", sesType: "0", timeLeft: "879", shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "165", therm: "312", step: "Hops 4", error:"0", sesType: "0", timeLeft: "587",shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "180", therm: "344", step: "Hops 4", error:"0", sesType: "0", timeLeft: "555",shutScale: "0.24", brew: Brew.last)
BrewLog.create!(uid: "f91dc3e8cfa484a6d37911d951ac0a72", sesId: "0454356aec4a80", wort: "181", therm: "340", step: "Brew Complete", event:"Brew Complete", error: "0", sesType: "0", timeLeft: "549", shutScale: "0.24", brew: Brew.last)
