'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const QuestionnairePage: React.FC = () => {
  const [score, setScore] = React.useState<string>('');
  const [questionnaireType, setQuestionnaireType] = React.useState<string>('E-NPS');

  const handleScoreChange = (event: SelectChangeEvent<string>) => {
    setScore(event.target.value as string);
  };

  const handleQuestionnaireChange = (type: string) => {
    setQuestionnaireType(type);
  };

  const renderQuestions = () => {
    switch (questionnaireType) {
      case 'E-NPS':
        return (
          <>
            <Typography variant="h6">On a scale of 0 to 10, how likely are you to recommend Precedence BV as a place to work?</Typography>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="score-select-label">Score</InputLabel>
              <Select
                labelId="score-select-label"
                id="score-select"
                value={score}
                onChange={handleScoreChange}
                label="Score"
              >
                {Array.from({ length: 11 }, (_, index) => (
                  <MenuItem key={index} value={index.toString()}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="What is the primary reason for your score?"
              variant="outlined"
              fullWidth
            />
          </>
        );
      case 'E-SAT':
        return (
          <>
            <Typography variant="h6">On a scale of 1 to 5, how satisfied are you with your job at Precedence BV?</Typography>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="satisfaction-select-label">Satisfaction</InputLabel>
              <Select
                labelId="satisfaction-select-label"
                id="satisfaction-select"
                value={score}
                onChange={handleScoreChange}
                label="Satisfaction"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <MenuItem key={index + 1} value={(index + 1).toString()}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="What is the primary reason for your satisfaction level?"
              variant="outlined"
              fullWidth
            />
          </>
        );
      case 'E-ES':
        return (
          <>
            <Typography variant="h6">On a scale of 1 to 5, how engaged do you feel at Precedence BV?</Typography>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="engagement-select-label">Engagement</InputLabel>
              <Select
                labelId="engagement-select-label"
                id="engagement-select"
                value={score}
                onChange={handleScoreChange}
                label="Engagement"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <MenuItem key={index + 1} value={(index + 1).toString()}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="What is the primary reason for your engagement level?"
              variant="outlined"
              fullWidth
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Stack spacing={3} sx={{ padding: 3 }}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Questionnaire</Typography>
        </Stack>
      </Stack>
      <Stack spacing={3} sx={{ backgroundColor: '#E0E6E9', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5">{questionnaireType} Questionnaire</Typography>
        {renderQuestions()}
        <TextField
          label={`Do you feel valued and heard at Precedence BV?`}
          variant="outlined"
          fullWidth
        />
        <TextField
          label={`What is missing in your work experience with Precedence BV?`}
          variant="outlined"
          fullWidth
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={() => handleQuestionnaireChange('E-NPS')}
            sx={{
              backgroundColor: questionnaireType === 'E-NPS' ? 'primary.main' : 'default',
              color: questionnaireType === 'E-NPS' ? 'white' : 'inherit',
            }}
          >
            E-NPS
          </Button>
          <Button
            variant="contained"
            onClick={() => handleQuestionnaireChange('E-SAT')}
            sx={{
              backgroundColor: questionnaireType === 'E-SAT' ? 'primary.main' : 'default',
              color: questionnaireType === 'E-SAT' ? 'white' : 'inherit',
            }}
          >
            E-SAT
          </Button>
          <Button
            variant="contained"
            onClick={() => handleQuestionnaireChange('E-ES')}
            sx={{
              backgroundColor: questionnaireType === 'E-ES' ? 'primary.main' : 'default',
              color: questionnaireType === 'E-ES' ? 'white' : 'inherit',
            }}
          >
            E-ES
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default QuestionnairePage;
