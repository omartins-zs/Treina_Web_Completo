import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
    return <FooterStyled>
        <FooterContainer>
            <Box sx={{ maxWidth: '400px' }}>
                <FooterTitle>Quem somos nos </FooterTitle>
                <Typography variant={'body2'} sx={{mt: 2 }}>
                E-diaristas te ajuda a encontar um profissional perfeito para realizar a limpeza da sua casa. Garantimos a melhor profissional com total seguranca e praticidade! Sao milhares de clientes satisfeitos por todo o pais.
            </Typography>
            </Box>

        <div>
            <FooterTitle>Baixe nossos aplicativos </FooterTitle>
            <AppList>
                <li>
                    <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                        <img src={'/img/logos/app-store.png'} alt={'App Store'} />
                    </a>
                </li>
                <li>
                    <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                        <img src={'/img/logos/google-play.png'} alt={'Play Store'} />
                    </a>
                </li>
            </AppList>

        </div>
        </FooterContainer>
    </FooterStyled >
};

export default Footer;