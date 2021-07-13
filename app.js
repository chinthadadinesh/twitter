import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import {LikedTweets} from './models/LikedTweets'

require('dotenv').config();

const app = express();

const { PORT } = process.env;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.get('/api/likedtweets/:id', async (req,res)=> {
 const tweets =  await LikedTweets.findAll({where: {userId: req.params.id}});
 res.send({
   code:200,
   tweets
 })
});

app.post('/api/likedtweets', async (req,res)=> {
  try{
  const tweet =  await LikedTweets.create({tweetId: req.body.tweetId, userId: req.body.useId});
  res.send({
    code:200,
    tweet,
    message:'tweet added to liked list'
  })
}
catch(e){
  res.send({
    code:400,
    message:'error while adding tweet to liked list'
  })
}
});

app.listen(8081, () => {
  console.log(`listening to  ${8081}`);
});
