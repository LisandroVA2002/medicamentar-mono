import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Typography, Tabs, Tab } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTheme } from "../constants/theme/useTheme";

interface ExamModalProps {
  onClose: () => void;
  fetchExams: () => void;
}

const ExamModal: React.FC<ExamModalProps> = ({ onClose, fetchExams }) => {
  const { darkMode } = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [examName, setExamName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleSubmit = () => {
    fetchExams();
    onClose(); 
  };

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: darkMode ? 'grey.900' : 'white',
          color: darkMode ? 'white' : 'black',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">{activeTab === 0 ? 'EXAME' : 'CONSULTA'}</Typography>
          <IconButton onClick={onClose} />
        </Box>

        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Exame" />
          <Tab label="Consulta" />
        </Tabs>

        {activeTab === 0 && (
          <Box mb={2}>
            <Box mb={2}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                className="input"
                style={{ width: '100%' }}
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
          </Box>
        )}

        <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
          Adicionar
        </Button>
      </Box>
    </Box>
  );
};

export default ExamModal;
