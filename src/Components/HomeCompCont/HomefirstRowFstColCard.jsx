import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { SaaSButton } from '../ThemeCust'
import imgObjHom from '../Images/ImageHomePage/ImgArryHom'
import { imgCard1 } from '../Images/ImageHomePage/ImgArryHom'
import { EmptySapce } from '../ThemeCust'
import styled from 'styled-components'

const CustomProgrssBar = styled(LinearProgress)`
  .MuiLinearProgress-barColorPrimary {
    background-color: #ffd400;
  }
`

export function CardArry({
  badge,
  headerText,
  backgrndImg,
  gridVal,
  index,
  handleHover,
}) {
  return (
    <Grid item xs={gridVal}>
      <Card
        className="custom-card"
        onMouseEnter={() => handleHover(index)}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <CardContent
          sx={{
            backgroundImage: `url(${backgrndImg})`,
            color: 'white',
          }}
        >
          <SaaSButton>{badge}</SaaSButton>
          <CardMedia image={backgrndImg} />
          <Link
            underline="none"
            component="button"
            sx={{
              color: 'white',
              transition: 'color 0.2s ease-out',
              '&:hover': { color: '#dde03d' },
            }}
          >
            {headerText}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}

function HomefirstRowFstColCard() {
  const [activeCard, setActiveCard] = useState(null)
  const theme = useTheme()
  const isScreenMd = useMediaQuery(theme.breakpoints.down('md'))
  const isScreenSm = useMediaQuery(theme.breakpoints.down('sm'))

  const handleHover = (index) => {
    setActiveCard(index)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card
          className="card-for-backgroundImg"
          sx={{
            backgroundImage: `url(${
              activeCard === null
                ? imgObjHom['card1'].imglink
                : imgObjHom[activeCard].imglink
            })`,
            transition: 'background-image 0.8s ease-In-Out',
            backgroundSize: 'cover',
            color: '#dde03d',
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '9px',
            height: '90vh',
            position: 'relative',
          }}
        >
          <CardContent>
            <card>
              <CardContent
                sx={{
                  transition: 'all 0.8s ease-In-Out',
                }}
              >
                <SaaSButton>
                  {activeCard === null
                    ? imgObjHom['card1'].badge
                    : imgObjHom[activeCard].badge}
                </SaaSButton>

                <Typography
                  variant="h4"
                  sx={{
                    marginTop: '10px',
                    fontSize: '30px',
                    fontWeight: '600',
                    letterSpacing: '-0.06em',
                    transition: 'color 0.8s ease-In-Out',
                  }}
                >
                  {activeCard === null
                    ? imgObjHom['card1'].headertext
                    : imgObjHom[activeCard]?.headertext}
                </Typography>
              </CardContent>
            </card>
          </CardContent>
          {!isScreenSm && (
            <Grid container sx={{ position: 'absolute', bottom: '0' }}>
              <Grid item xs={12}>
                <CustomProgrssBar variant="determinate" />
                <Grid container spacing={1}>
                  {Object.keys(imgObjHom).map((key) => (
                    <CardArry
                      key={key}
                      badge={imgObjHom[key].badge}
                      headerText={imgObjHom[key].headertext}
                      gridVal={4}
                      index={key}
                      handleHover={handleHover}
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomefirstRowFstColCard
