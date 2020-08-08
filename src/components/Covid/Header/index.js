import React from 'react';
import { FaClock, FaFacebookSquare, FaLinkedin, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { Container, ContainerShare, ButtonShare } from './styles';

const Header = ({ name, img, date, subtitle }) => {
  const urlShare = `https://painelcoronavirus.com/${name}`;
  return (
    <Container>
      <header>
        <Img fixed={img.childImageSharp.fixed} alt="Bandeira do município" />
        <div>
          <p>Painel do</p>
          <strong>Coronavírus</strong>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </header>
      <span>
        <FaClock size={14} /> Atualizado as: {date}
      </span>
      <ContainerShare>
        <span>Compartilhe o projeto</span>
        <div>
          <ButtonShare color="#3b5998">
            <FacebookShareButton title="Acesse:" url={urlShare}>
              <FaFacebookSquare />
              Facebook
            </FacebookShareButton>
          </ButtonShare>

          <ButtonShare color="#25d366">
            <WhatsappShareButton title="Acesse:" url={urlShare}>
              <FaWhatsapp />
              WhatsApp
            </WhatsappShareButton>
          </ButtonShare>

          <ButtonShare color="#1DA1F2">
            <TwitterShareButton title="Acesse:" url={urlShare} hashtags={['covid', name, 'painel', 'coronavirus']}>
              <FaTwitter />
              Twitter
            </TwitterShareButton>
          </ButtonShare>

          <ButtonShare color="#0e76a8">
            <LinkedinShareButton title="Acesse:" url={urlShare}>
              <FaLinkedin />
              Linkedin
            </LinkedinShareButton>
          </ButtonShare>

          <ButtonShare color="#FF5700">
            <RedditShareButton title="Acesse:" url={urlShare}>
              <FaReddit />
              Reddit
            </RedditShareButton>
          </ButtonShare>

          <ButtonShare color="#0088cc">
            <TelegramShareButton title="Acesse:" url={urlShare}>
              <FaTelegram />
              Telegram
            </TelegramShareButton>
          </ButtonShare>
        </div>

      </ContainerShare>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([PropTypes.object]).isRequired
};
