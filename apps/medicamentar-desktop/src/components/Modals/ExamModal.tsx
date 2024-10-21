import React, { useState } from 'react';
import { Box, TextField, IconButton,  Tabs, Tab } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTheme } from "../../constants/theme/useTheme";

const ExamModal = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(true); // Mantém o modal aberto para a primeira vez
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [examName, setExamName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (!isOpen) return null; 

  return (
    <Box
      onClick={handleClose} 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()} 
        sx={{
          backgroundColor: darkMode ? 'grey.900' : 'white',
          color: darkMode ? 'white' : 'black',
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} width="100%">
          
          <IconButton onClick={handleClose} />
        </Box>

        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Exame" />
          <Tab label="Consulta" />
        </Tabs>

        <Box
          sx={{
            marginTop: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {activeTab === 0 && (
            <>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                  className="input"
                  customInput={
                    <TextField
                      fullWidth
                      label="Data do Exame"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  }
                />
              </Box>

              <TextField
                fullWidth
                label="Nome do Exame"
                variant="outlined"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Local"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Descrição"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                multiline
                rows={3}
              />
            </>
          )}

          {activeTab === 1 && (
            <>
              <Box mb={2} width="100%" display="flex" justifyContent="center">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                  className="input"
                  customInput={
                    <TextField
                      fullWidth
                      label="Data da Consulta"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  }
                />
              </Box>

              <TextField
                fullWidth
                label="Nome do Médico"
                variant="outlined"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Local"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Descrição"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
                multiline
                rows={3}
              />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ExamModal;
