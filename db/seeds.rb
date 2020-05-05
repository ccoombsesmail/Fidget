# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

#######1########


user = User.create!({:username => 'FidgetDemoUser', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel = Channel.create!({:owner_id => user.id })

file = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/logo.png')
channel.logoUrl.attach(io: file, filename: 'logo.png')


vod = Vod.create({:channel_id => channel.id, :title => "First Valorant Headshot", :category => "Valorant"})
vodFile = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/mythvalorant.mp4")
vod.videoUrl.attach(io: vodFile, filename: "mythvalorant.mp4")

#######2########

user2 = User.create!({:username => 'Trick3g', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel2 = Channel.create!({:owner_id => user2.id })
file2 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/trick3g.png')
channel2.logoUrl.attach(io: file2, filename: 'trick3g.png')


vod2 = Vod.create!({:channel_id => channel2.id, :title => "Trick2g zzrot backdoor", :category => "League Of Legends"})
vodFile2 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/trick2gzzrot.mp4")
vod2.videoUrl.attach(io: vodFile2, filename: "trick2gzzrot.mp4")

#######3########

user3 = User.create!({:username => 'ESCS_GO', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel3 = Channel.create!({:owner_id => user3.id })
file3 = open('https://fidget-seeds.s3-us-west-1.amazonaws.com/csgoesl.png')
channel3.logoUrl.attach(io: file3, filename: 'csgoesl.png')


vod3 = Vod.create!({:channel_id => channel3.id, :title => "Kenny EZ clap", :category => "Counter-Strike"})
vodFile3 = open("https://fidget-seeds.s3-us-west-1.amazonaws.com/kennyescsgo.mp4")
vod3.videoUrl.attach(io: vodFile3, filename: "kennyescsgo.mp4")
