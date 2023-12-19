import { Card, CardContent, Typography } from "@mui/material"
import { getMdiIcon } from '../icons/getMdiIcon';
    
    interface CardDataProps {
        nome: string
        grau: string
        mdiIcon: string 
    }
    
 const CardsSuspeitos = (props: CardDataProps) => { 
        const { nome, grau, mdiIcon } = props
        const Icon = getMdiIcon(mdiIcon)
    
      return (
    
        <Card
          sx={{
            backgroundColor: "#d9dddc",
            minWidth: 80,
            width: 300,
            height: 60,
            textAlign: "right",
            alignItems: "center",
            display: "flex",
            position: "relative",
            marginLeft: 1,
            marginRight: 1,
            marginBottom: 1,
          }}
        >
            <Icon
            sx={{
              color: "white",
              width: "40px",
              height: "40px",
              alignItems: "flex-start",
              justifyItems: "start",
              position: "absolute",
              left: 0,
              marginRight: 3,
            }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", right: 0}}>
          
            <Typography
              sx={{
                fontSize: { xs: '9px', sm:'16px', md: '20px' },
                fontWeight: "bold",
                right: 0,
                alignItems: "flex-end",
                marginLeft: 3,
              }}
              gutterBottom
            >
              {nome}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '5px', sm:'9px', md: '11px' },
                fontWeight: "bold",
                color: "black",
                alignItems: "flex-end",
              }}
              gutterBottom
            >
              {grau}
            </Typography>
          </CardContent>
        </Card>
      )
    }
    
export default CardsSuspeitos