import morgan from 'morgan';
import axios from 'axios';
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/airkorea', async (req, res)=>{
  const serviceKey = "seviceKey";
  const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

  let parmas = encodeURI('serviceKey') + '=' + serviceKey;
  parmas += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
  parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
  parmas += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
  parmas += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
  parmas += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
  parmas += '&' + encodeURI('returnType') + '=' + encodeURI('json');

  const url = airUrl + parmas;

  try {
    const result = await axios.get(url);
    res.json(result.data) // .data
  } catch(error){
    console.log(error);
  }
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 서버 실행 중 .. ');
})