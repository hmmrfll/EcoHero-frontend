import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #041523;
  border-radius: 20px;
  padding: 2vh;
  margin-bottom: 2vh;
  width: 90%;
  color: #fff;
  font-family: "Inter";
  font-weight: Regular;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const DonateContainer = styled.div`
  padding: 0vh;
  width: 90%;
  background-color: rgba(4, 21, 35, 0.01);
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: left;
  margin: auto;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 2vh 0 2vh 0;
  font-family: "Inter";
  font-weight: Semi Bold;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  margin: 0 0 2vh 0;
  font-family: "Inter";
  font-weight: Regular;
`;

const DonateButtonAdRevenue = styled.button`
  width: 100%;
  background-color: rgba(111, 46, 24, 0.41); 
  border: 1px solid #EF8332;
  color: #EF8332;
  border-radius: 10px;
  padding: 3.5vh;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Inter";
  font-weight: Semi Bold;
  margin-top: 2vh;
`;

const DonateButtonAdditional = styled.button`
  width: 100%;
  background-color: #ef8332;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 3.5vh;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Inter";
  font-weight: Semi Bold;
  margin-top: 2vh;
`;

const DonationPage = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { balance, chatId } = location.state || { balance: '0.00', chatId: null };

  const handleDonateClick = () => {
    const originalAmount = parseFloat(balance);
    const doubledAmount = originalAmount * 2;
    navigate('/confirmation-page', { state: { originalAmount, doubledAmount, chatId } });
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      window.history.back();
    }
  };

  return (
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContainer>
        <DonateContainer>
          <SectionTitle>
            {language === 'ru' ? 'Пожертвования из дохода от рекламы' : 'Donations from Ad Revenue'}
          </SectionTitle>
          <SectionDescription>
            {language === 'ru' 
              ? 'Пожертвуйте средства из дохода от рекламы в поддержку животных. EcoHero удвоит ваш взнос.'
              : 'Donate funds from ad revenue to support animals. EcoHero will double your contribution.'}
          </SectionDescription>
          <DonateButtonAdRevenue onClick={handleDonateClick}>
            {language === 'ru' ? `Пожертвовать ${balance} ₽` : `Donate ${balance} $`}
          </DonateButtonAdRevenue>

          <SectionTitle>
            {language === 'ru' ? 'Дополнительные пожертвования' : 'Additional Donations'}
          </SectionTitle>
          <SectionDescription>
            {language === 'ru' 
              ? 'Пожертвуйте собственные средства в поддержку животных.'
              : 'Donate your own funds to support animals.'}
          </SectionDescription>
          <DonateButtonAdditional>
            {language === 'ru' ? 'Пожертвовать 1 TON' : 'Donate 1 TON'}
          </DonateButtonAdditional>
        </DonateContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DonationPage;
