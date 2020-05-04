# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'



user = User.create!({:username => 'FidgetDemoUser', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel = Channel.create!({:owner_id => user.id })

file = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/UIHere.png')
channel.logoUrl.attach(io: file, filename: 'UIHere.png')



vod = Vod.create!({:channel_id => channel.id, :title => "R2D2's Secret Message", :category => "Random Clips"})
vodFile = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/y2mate.com+-+R2D2's+secret+mesage_6-HUgzYPm9g_144p.mp4")
vod.videoUrl.attach(io: vodFile, filename: "y2mate.com - R2D2's secret mesage_6-HUgzYPm9g_144p.mp4")



vod2 = Vod.create!({:channel_id => channel.id, :title => "Trick2gzzrot", :category => "League Of Legends"})
vodFile2 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/trick2gzzrot.mp4")
vod2.videoUrl.attach(io: vodFile2, filename: "trick2gzzrot.mp4")