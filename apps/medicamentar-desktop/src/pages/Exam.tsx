import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Tabs, Tab, Container } from '@mui/material';
import CardHome from '../components/CardHome.tsx';
import SideBar from '../components/SideBar.tsx';
import Header from '../components/Header.tsx';
import ExamModal from '../components/ExamModal';
import { useTheme } from '../constants/theme/useTheme';

const Exam = () => {
    const { darkMode } = useTheme();
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [exams, setExams] = useState<any[]>([]); 
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const fetchExams = async () => {
       
        const response = await fetch('/api/exams'); 
        const data = await response.json();
        setExams(data);
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
                    {exams.map((exam, index) => (
                        <CardHome
                            key={index}
                            titulo={exam.titulo}
                            descricao={exam.descricao}
                            dataHora={exam.dataHora}
                        />
                    ))}
                </Grid>
            </Box>

            {isModalOpen && <ExamModal onClose={handleCloseModal} fetchExams={fetchExams} />}
        </Container>
    );
};

export default Exam;
