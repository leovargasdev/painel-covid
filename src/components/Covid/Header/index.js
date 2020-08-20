import React from 'react';
import { FaClock, FaFacebookSquare, FaLinkedin, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { Container, Title, ContainerShare, ButtonShare } from './styles';

const Header = ({ name, image, date, subtitle }) => {
  const urlShare = `https://painelcoronavirus.com/${name}`;
  return (
    <Container>
      <header>
        {image && <Img fluid={image} alt="Bandeira do município" title="Bandeira do município" />}
        <Title>
          <p>Painel do</p>
          <strong>Coronavírus</strong>
          {subtitle && <span>{subtitle}</span>}
        </Title>
      </header>
      <span>
        <FaClock size={14} /> Atualizado as: {date}
      </span>
      <ContainerShare>
        <span>Compartilhe o projeto</span>
        <div>
          <ButtonShare color="#3b5998">
            <FaFacebookSquare />
            <FacebookShareButton title="Acesse:" url={urlShare}>
              Facebook
            </FacebookShareButton>
          </ButtonShare>

          <ButtonShare color="#25d366">
            <FaWhatsapp />
            <WhatsappShareButton title="Acesse:" url={urlShare}>
              WhatsApp
            </WhatsappShareButton>
          </ButtonShare>

          <ButtonShare color="#1DA1F2">
            <FaTwitter />
            <TwitterShareButton title="Acesse:" url={urlShare} hashtags={['covid', name, 'painel', 'coronavirus']}>
              Twitter
            </TwitterShareButton>
          </ButtonShare>

          <ButtonShare color="#0e76a8">
            <FaLinkedin />
            <LinkedinShareButton title="Acesse:" url={urlShare}>
              Linkedin
            </LinkedinShareButton>
          </ButtonShare>

          <ButtonShare color="#FF5700">
            <FaReddit />
            <RedditShareButton title="Acesse:" url={urlShare}>
              Reddit
            </RedditShareButton>
          </ButtonShare>

          <ButtonShare color="#0088cc">
            <FaTelegram />
            <TelegramShareButton title="Acesse:" url={urlShare}>
              Telegram
            </TelegramShareButton>
          </ButtonShare>
        </div>
      </ContainerShare>
    </Container>
  );
};

export default Header;

Header.defaultProps = {
  subtitle: '',
  image: ''
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string.isRequired,
  image: PropTypes.string
};
