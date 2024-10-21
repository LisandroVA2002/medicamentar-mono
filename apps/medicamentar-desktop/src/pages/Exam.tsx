import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Tabs, Tab, Container } from '@mui/material';
import CardHome from '../components/CardHome.tsx';
import SideBar from '../components/SideBar.tsx';
import Header from '../components/Header.tsx';
import ExamModal from '../components/Modals/ExamModal';
import { useTheme } from '../constants/theme/useTheme';

const Exam = () => {
    const { darkMode } = useTheme();
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Container
            sx={{
                ml: 0,
                mr: 'auto',
                height: '100vh',
                display: 'flex',
                minWidth: '100%',
                overflow: 'hidden',
                backgroundColor: darkMode ? 'primary.main' : 'common.white',
            }}
        >
            <Header />
            <SideBar />
            <Box
                sx={{
                    margin: '2%',
                    flex: 1,
                    marginTop: '170px',
                    padding: 1,
                    height: '80%',
                    maxWidth: '100%',
                    overflowY: 'auto',
                    paddingBottom: '100px',
                }}
            >
                <Typography
                    sx={{
                        color: darkMode ? 'common.white' : 'primary.main',
                        marginBottom: '4%',
                        marginLeft: '2%',
                    }}
                >
                    <Box component="h1">CONSULTAS E EXAMES</Box>
                </Typography>

                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Exames" />
                    <Tab label="Consultas" />
                </Tabs>

                <Button
                    onClick={handleOpenModal}
                    sx={{
                        backgroundColor: '#91C7EF',
                        fontWeight: 'bold',
                        padding: '14px',
                        boxShadow: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '80%',
                        color: 'white',
                        fontSize: '14px',
                    }}
                >
                    + Adicionar Exame ou Consulta
                </Button>

                <Grid container spacing={2} sx={{ flex: 1, margin: 'auto' }}>
                    {activeTab === 0 ? (
                        <>
                            <CardHome
                                titulo="EXAME"
                                descricao="EXAME DE VISTA - HPMA DR. LULINHA"
                                dataHora="12/04 ÀS 11H"
                            />
                            <CardHome
                                titulo="EXAME"
                                descricao="ULTRASSOM PELVICA"
                                dataHora="12/04 ÀS 10H"
                            />
                        </>
                    ) : (
                        <>
                            <CardHome
                                titulo="CONSULTA"
                                descricao="CONSULTA MÉDICA - HMPA DR. LULINHA"
                                dataHora="12/04 ÀS 14H"
                            />
                            <CardHome
                                titulo="CONSULTA"
                                descricao="CONSULTA MÉDICA - DR. SILVA"
                                dataHora="13/04 ÀS 9H"
                            />
                        </>
                    )}
                </Grid>
            </Box>

            {isModalOpen && <ExamModal />}
        </Container>
    );
};

export default Exam;
