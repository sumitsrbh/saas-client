import { Typography, TextField, Grid, Paper, Box } from '@mui/material'
import { useState } from 'react'
import { SaaSButton } from '../ThemeCust'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
}

const inputPropStyle = {
  style: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
}

function SubscribeForm() {
  const [input, setInputs] = useState(initialValues)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log(input)
  }
  const buttonClickHandler = (e) => {
    setInputs(initialValues)
  }

  return (
    <Box>
      <form onSubmit={formSubmitHandler}>
        <Grid container paddingBottom={10}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name="name"
                  value={input.name}
                  placeholder="Your Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={inputStyle}
                  InputProps={inputPropStyle}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  value={input.email}
                  placeholder="Your email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={inputStyle}
                  InputProps={inputPropStyle}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={10} marginTop={5}>
            <TextField
              name="subject"
              value={input.subject}
              placeholder="Subject for message"
              type="text"
              variant="outlined"
              fullWidth
              sx={inputStyle}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={10} marginTop={5}>
            <TextField
              name="message"
              value={input.message}
              placeholder="Type in your message "
              type="text"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              sx={{
                ...inputStyle,
                '& textarea': {
                  height: 'auto',
                  minHeight: '30px',
                },
              }}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={3} marginTop={5}>
            <SaaSButton
              type="submit"
              onSubmit={formSubmitHandler}
              onClick={buttonClickHandler}
              sx={{
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 700,
                padding: '12px 24px',
              }}
            >
              Submit
            </SaaSButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

function SubscribeCard({ header }) {
  return (
    <Paper
      sx={{
        backgroundColor: '#262320',
      }}
    >
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography
            sx={{
              color: '#ffd400',
              textAlign: 'center',
              fontSize: '24px',
              lineHeight: '26px',
              marginBottom: '23px',
              padding: '17px 0 0',
              letterSpacing: '-0.06em',
              fontWeight: '700',
            }}
            variant="h3"
          >
            {header}
          </Typography>

          <SubscribeForm />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Paper>
  )
}

export default SubscribeCard
