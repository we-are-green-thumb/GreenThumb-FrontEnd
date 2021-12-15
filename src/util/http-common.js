import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:80/'   //백엔드 연결시 사용
  // 업로드 시 아래 주소 사용
  // baseURL:'https://i3a307.p.ssafy.io:8080/' //<<참고용
})