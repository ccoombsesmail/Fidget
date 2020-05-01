# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user = User.create!({:username => 'FidgetDemoUser', :password => '12345678', :email => 'demo.demouser@gmail.com', :dob => 19931119})
channel = Channel.create!({:owner_id => user.id })
channel.logoUrl.attach(io: File.open("/mnt/c/Users/coomb/Desktop/Fidget/Fidget/UIHere.png"), filename: 'UIHere.png')