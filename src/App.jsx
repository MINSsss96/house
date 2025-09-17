import { useState } from 'react'
import './App.css'
import AppNavBar from './AppNavBar';
import { Routes, Route } from "react-router-dom";
import MainPage from './Mainpage';
import oneroomData from './data/oneroom'; // 데이터 import
import MainList from './MainList'; // 새로 만들 리스트 컴포넌트

function App() {

  // 상태 관리 필요 없으면 그냥 data를 직접 전달해도 됨
  const [oneroom, setOneroom] = useState(oneroomData);


  return (

    <>
      {/* 네비게이션 바 영역 시작 */}
      <AppNavBar />

      {/* Routing 정보를 한꺼번에 모아놓는 장소 */}
      <Routes>
        {/* House 클릭 → 정렬 없는 리스트 */}
        <Route path="/" element={<MainList oneroom={oneroom} />} />

        {/* Main 클릭 → 정렬 가능한 리스트 */}
        <Route path="/main" element={<MainPage oneroom={oneroom} />} />

        <Route path="/login" element={<h1>로그인 페이지</h1>} />
        <Route path="/logout" element={<h1>회원가입 페이지</h1>} />
      </Routes>
      {/* 스프링에서 사용하는 컨트롤러 클래스 */}

    </>
  );
}

export default App
