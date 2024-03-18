import {
  Grid,
  List,
  ListItemText,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import imgObjHom from '../Images/ImageHomePage/ImgArryHom'
import { fetchImgObjHom } from '../../Data'
import { useEffect, useState } from 'react'
import cardArray from '../../Data'
import { useData } from '../DataContext/DataContext'

function HomeFrstRowScndCol() {
  const [imgObjHom, setImgObjHom] = useState([])
  const theme = useTheme()
  const { cards, enquiry } = useData()

  const isScreenMd = useMediaQuery(theme.breakpoints.down('md'))
  const isScreenSM = useMediaQuery(theme.breakpoints.down('sm'))

  console.log('In Home2ndRow2ndCol Cards[0] value', cards[0], typeof cards[0])
  console.log('In Home2ndRow2ndCol Cards value', cards, typeof cards)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchImgObjHom()
  //       const cards = response && response.cards.slice(0, 6)
  //       console.log('Fetched data from card in component 2nd', response)
  //       setImgObjHom(cards)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        display: 'inline',
      }}
    >
      <Tabs>
        <Tab
          sx={{
            color: '#050505',
            backgroundColor: '#ffd400',
            cursor: 'default',
            width: '100%',
          }}
          label="Recent Post"
        />

        {/* {!isScreenMd && (
          <Tab
            sx={{
              backgroundColor: '#242424',
              backgroundImage:
                'linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,.01) 100%)',
              color: 'white',
              width: '50%',
              borderColor: '#222',
            }}
            label="Most Popular"
          />
        )} */}
      </Tabs>

      <List
        sx={{
          padding: '14px 20px',
          borderTop: 'none',
          borderLeft: '1px solid #ffd400',
          borderRight: '1px solid #ffd400',
          borderBottom: '1px solid #ffd400',
        }}
      >
        {/* {cards !== 'undefined'
          ? cards.map((item, index) => (
              <ListItemText
                key={index}
                sx={{
                  alignContent: 'center',
                  margin: '0 0 14px',
                  padding: '10px 0 0',
                  textShadow: '0 1 2px rgba(0,0,0,0.5)',
                  fontSize: '14px',
                  color: '#474444',

                  letterSpacing: '0.8',
                  transition: 'color 0.3s ease-out',
                  '&:hover': {
                    color: '#ffd400',
                    textDecoration: 'underline',
                  },
                }}
              >
                {console.log('Item index', item[index])}
                {item[index].headertext}
                <ListItemText // for the undeline
                  style={{
                    height: '1px',
                    backgroundColor: '#242424',
                    border: 'none',
                    margin: '20px 0 10px',
                    textDecorationStyle: 'solid',
                  }}
                />
              </ListItemText>
            ))
          : null} */}
      </List>
      {/* <Tabs>
        {isScreenMd && (
          <Tab
            sx={{
              backgroundColor: '#242424',
              backgroundImage:
                'linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,.01) 100%)',
              color: 'white',
              width: isScreenMd ? '100%' : '50%',
              borderColor: '#222',
            }}
            label="Most Popular"
          />
        )}
      </Tabs> */}
    </Grid>
  )
}

export default HomeFrstRowScndCol
