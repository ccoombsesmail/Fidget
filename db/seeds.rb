# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

categories = [
        ['League Of Legends', "https://i.ibb.co/sQN82r1/League-of-Legends-188x250.jpg", "League of Legends is a free-to-play competitive MOBA game with a large following in Esports"],
        ['Valorant', "https://i.ibb.co/X7332MS/VALORANT.jpg", "Valorant is an upcoming free-to-play multiplayer first-person shooter developed and published by Riot Games"],
        ['Just Chatting', "https://i.ibb.co/3YCt6C2/Just-Chatting-188x250.jpg", "A place to chill and chat"],
        ['Teamfight Tactics', "https://i.ibb.co/Zg0H6mH/Teamfight-Tactics-188x250.jpg", "Teamfight Tactics is an auto battler game developed and published by Riot Games"],
        ["Counter-Strike", "https://i.ibb.co/28vTh3v/csgosmaller.jpg", "Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Valve and Hidden Path Entertainment"],
        ["Hearthstone", "https://i.ibb.co/3vq5916/Hearthstone-188x250.jpg", "Hearthstone is a free-to-play collectible card game by Blizzard Entertainment set in the Warcraft universe"],
        ["Music", "https://i.ibb.co/nPNwM3g/twitchmusic.jpg", "A place for music creators and listeners"]
    ]


categories.each do |category|

    newCategory = Category.create!({:name => category[0], :description => category[2]})
    imgFile = open(category[1])
    newCategory.imgUrl.attach(io: imgFile, filename: category[0])

end




#######1########



user = User.create!({:username => 'FidgetDemoUser', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel = Channel.create!({:owner_id => user.id, :channel_name => user.username })

file = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/logo.png')
channel.logoUrl.attach(io: file, filename: 'logo.png')


vod = Vod.create({:channel_id => channel.id, :title => "First Valorant Headshot", :category => "Valorant"})
vodFile = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/mythvalorant.mp4")
vod.videoUrl.attach(io: vodFile, filename: "mythvalorant.mp4")

vod11 = Vod.create({:channel_id => channel.id, :title => "Hacking against devs", :category => "Valorant"})
vodFile11 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/hackingwithdevs.mp4")
vod11.videoUrl.attach(io: vodFile11, filename: "hackingwithdevs.mp4")

vod12 = Vod.create({:channel_id => channel.id, :title => "Get rekt", :category => "Valorant"})
vodFile12 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/qtpie.mp4")
vod12.videoUrl.attach(io: vodFile12, filename: "qtpie.mp4")

#######2########

user2 = User.create!({:username => 'Trick3g', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel2 = Channel.create!({:owner_id => user2.id, :channel_name => user2.username  })
file2 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/trick3g.png')
channel2.logoUrl.attach(io: file2, filename: 'trick3g.png')


vod2 = Vod.create!({:channel_id => channel2.id, :title => "Trick2g zzrot backdoor", :category => "League Of Legends"})
vodFile2 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/trick2gzzrot.mp4")
vod2.videoUrl.attach(io: vodFile2, filename: "trick2gzzrot.mp4")

vod22 = Vod.create!({:channel_id => channel2.id, :title => "D Cane!", :category => "League Of Legends"})
vodFile22 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/dcane.mp4")
vod22.videoUrl.attach(io: vodFile22, filename: "dcane.mp4")

vod23 = Vod.create!({:channel_id => channel2.id, :title => "EZ Gates", :category => "League Of Legends"})
vodFile23 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/opendgates.mp4")
vod23.videoUrl.attach(io: vodFile23, filename: "opendgates.mp4")


#######3########

user3 = User.create!({:username => 'ESCS_GO', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel3 = Channel.create!({:owner_id => user3.id, :channel_name => user3.username  })
file3 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/csgoesl.png')
channel3.logoUrl.attach(io: file3, filename: 'csgoesl.png')


vod3 = Vod.create!({:channel_id => channel3.id, :title => "Kenny EZ clap", :category => "Counter-Strike"})
vodFile3 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/kennyescsgo.mp4")
vod3.videoUrl.attach(io: vodFile3, filename: "kennyescsgo.mp4")



#######4########

user4 = User.create!({:username => 'Ded', :password => '12345678', :email => 'ded.demouser@gmail.com', :dob => 19931119})
channel4 = Channel.create!({:owner_id => user4.id, :channel_name => user4.username })
file4 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/ded.png')
channel4.logoUrl.attach(io: file4, filename: 'ded.png')


vod4 = Vod.create!({:channel_id => channel4.id, :title => "Nice one idiot", :category => "Just Chatting"})
vodFile4 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/fedbreak.mp4")
vod4.videoUrl.attach(io: vodFile4, filename: "fedbreak.mp4")

#######5########

user5 = User.create!({:username => 'Xdeke', :password => '12345678', :email => 'xdeke.demouser@gmail.com', :dob => 19931119})
channel5 = Channel.create!({:owner_id => user5.id, :channel_name => user5.username  })
file5 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/xdeke.png')
channel5.logoUrl.attach(io: file5, filename: 'xdeke.png')


vod5 = Vod.create!({:channel_id => channel5.id, :title => "Playing TFT with Coscu", :category => "Teamfight Tactics"})
vodFile5 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/xpeke.mp4")
vod5.videoUrl.attach(io: vodFile5, filename: "xpeke.mp4")


#######6########

user6 = User.create!({:username => 'HearthKing', :password => '12345678', :email => 'tftking.demouser@gmail.com', :dob => 19931119})
channel6 = Channel.create!({:owner_id => user6.id, :channel_name => user6.username  })
file6 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/tftking.png')
channel6.logoUrl.attach(io: file6, filename: 'tftking.png')


vod6 = Vod.create!({:channel_id => channel6.id, :title => "Jebaited by viewer", :category => "Hearthstone"})
vodFile6 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/jebaitedSmall.mp4")
vod6.videoUrl.attach(io: vodFile6, filename: "jebaitedSmall.mp4")


#######7########

user7 = User.create!({:username => 'HMack', :password => '12345678', :email => 'hm.demouser@gmail.com', :dob => 19931119})
channel7 = Channel.create!({:owner_id => user7.id, :channel_name => user7.username  })
file7 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/harrymack.png')
channel7.logoUrl.attach(io: file7, filename: 'harrymack.png')


vod7 = Vod.create!({:channel_id => channel7.id, :title => "Depression Freestyle", :category => "Music"})
vodFile7 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/harrymack.mp4")
vod7.videoUrl.attach(io: vodFile7, filename: "harrymack.mp4")


#######8########

user8 = User.create!({:username => 'Hasagi', :password => '12345678', :email => 'hasagi.demouser@gmail.com', :dob => 19931119})
channel8 = Channel.create!({:owner_id => user8.id, :channel_name => user8.username  })
file8 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/hasagi.png')
channel8.logoUrl.attach(io: file8, filename: 'harrymack.png')


vod8 = Vod.create!({:channel_id => channel8.id, :title => "Nice outplay", :category => "League Of Legends"})
vodFile8 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/yassuoBotPlay.mp4")
vod8.videoUrl.attach(io: vodFile8, filename: "yassuoBotPlay.mp4")


