import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from './BackButton';
import FriendsModal from './FriendsModal';
import { getUserByChatId } from '../services/userService';

const MainScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  width: 100%;
  font-family: 'Jost', sans-serif;
  overflow: hidden;
  touch-action: none;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: Inter;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0.5rem 0;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${props => (props.primary ? '#ff851b' : props.black ? '#000' : '#2d606c')};
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Inter";
  font-weight: Semi Bold;
  position: relative;
  z-index: 1;
`;

const ButtonTon = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #EF8332;
  color: black;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-family: "Inter";
  font-weight: Regular;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 1;
`;

const ButtonStrip = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #43717c;
  border-radius: 0 0 15px 15px;
  position: absolute;
  bottom: -0.7vh;
  left: 0;
  z-index: 0;
`;

const MainScreen = ({ chatId, language }) => {
  const navigate = useNavigate();
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    const fetchReferralCode = async () => {
      try {
        const data = await getUserByChatId(chatId);
        setReferralCode(data.referralCode);
      } catch (error) {
        console.error('Error fetching referral code:', error);
      }
    };

    fetchReferralCode();
  }, [chatId]);

  const handleLeaderboardClick = () => {
    navigate('/leaderboard');
  };

  const handleAboutGameClick = () => {
    navigate('/about-game');
  };

  return (
    <MainScreenContainer>
      <BackButton />
      <Logo>
        <LogoImage src="/menu-page/logo.png" alt="EcoHero Logo" />
        <Title>EcoHero</Title>
      </Logo>
      <ButtonContainer>
        <Button onClick={handleLeaderboardClick}>
          {language === 'ru' ? 'Таблица лидеров' : 'Leaderboard'}
        </Button>
        <ButtonStrip />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={() => setIsFriendsModalOpen(true)}>
          {language === 'ru' ? 'Друзья' : 'Friends'}
        </Button>
        <ButtonStrip />
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={handleAboutGameClick}>
          {language === 'ru' ? 'Об игре' : 'About the Game'}
        </Button>
        <ButtonStrip />
      </ButtonContainer>
      <ButtonContainer>
        <ButtonTon>{language === 'ru' ? 'Донат 1 TON' : 'Donate 1 TON'}</ButtonTon>
      </ButtonContainer>
      <FriendsModal
        isOpen={isFriendsModalOpen}
        onClose={() => setIsFriendsModalOpen(false)}
        chatId={chatId}
        referralCode={referralCode}
        language={language}
      />
    </MainScreenContainer>
  );
};

export default MainScreen;
