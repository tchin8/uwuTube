require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
View.destroy_all
Like.destroy_all

color = [
  '#c2185b', 
  '#02589c', 
  '#aa47bc',
  '#f6501e',
  '#0398a6',
  '#33691d',
  '#465965',
  '#ed417b',
  '#be350d',
  '#512ea7',
  '#0087d1',
  '#f06c00',
  '#00897a',
  '#679f39',
  '#7d58c2',
  '#798f9c',
  '#5d4037',
  ]

user1 = User.create!(
  fname: 'Tiffany',
  lname: 'Chin',
  email: 'ctiff@uwutube.com',
  password: 'password',
  color: color.sample,
)

user2 = User.create!(
  fname: 'Jesse',
  lname: 'Lin',
  email: 'jlin@uwutube.com',
  password: 'password',
  color: color.sample,
)

user3 = User.create!(
  fname: 'Fish',
  lname: 'Fish',
  email: 'fish@fish.com',
  password: 'password',
  color: color.sample,
)

vid1 = Video.create(
  user_id: user1.id,
  title: 'Weird Cat',
  description: 'Check out this weird cat in a bag.'
)

vid2 = Video.create(
  user_id: user1.id,
  title: 'Kaskade @ UMF 2018',
  description: 'If anyone can ID this song, please drop it in the comments down below!'
)

vid3 = Video.create(
  user_id: user2.id,
  title: 'Above & Beyond @ UMF 2018',
  description: 'If anyone can ID this song, please drop it in the comments down below!'
)

vid4 = Video.create(
  user_id: user1.id,
  title: 'Beat Saber EXPERT+ Gameplay',
  description: 'Clip of me playing a custom song (Seven Lions - Island) on EXPERT+ mode'
)

v1 = open('https://uwutube-seeds.s3.amazonaws.com/lexus.mov')
v2 = open('https://uwutube-seeds.s3.amazonaws.com/kaskade.mov')
v3 = open('https://uwutube-seeds.s3.amazonaws.com/above_and_beyond.mov')
v4 = open('https://uwutube-seeds.s3.amazonaws.com/island_copy.mov')
vid1.vid.attach(io: v1, filename: 'lexus.mov')
vid2.vid.attach(io: v2, filename: 'kaskade.mov')
vid3.vid.attach(io: v3, filename: 'above_and_beyond.mov')
vid4.vid.attach(io: v4, filename: 'island_copy.mov')

c1 = Comment.create!(
  user_id: user1.id, 
  video_id: vid3.id, 
  body: 'They were awesome!!'
)
c2 = Comment.create!(
  user_id: user2.id, 
  video_id: vid1.id, 
  body: 'weird cat...'
)
c3 = Comment.create!(
  user_id: user2.id, 
  video_id: vid3.id, 
  parent_comment_id: c1.id, 
  body: 'Ultra was amazing'
)