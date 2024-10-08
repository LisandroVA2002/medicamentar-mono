import { Box, Card, Grid, Typography } from "@mui/material";

interface HomeCardProps{
    titulo:string;
    descricao:string;
    dataHora:string;
}
const CardHome:React.FC<HomeCardProps> = ({titulo, descricao, dataHora}) =>{
    
    return( 
        <Grid item xs={12} sm={6} md={4}>
            <Card  
            sx = {{
                width: { xs: '100%', sm: '95%', md: '90%', lg: '90%' },
                height:175, 
                backgroundColor:"grey.200" , 
                margin: "auto",
                display:"flex",
                flexDirection:"column",
            }}>
                <Box 
                sx= {{
                    backgroundColor:"primary.light", 
                    padding:"12px",
                }}>
                    <Typography 
                    sx={{
                        color :"#F4FAFE", 
                        fontSize:12, 
                        textAlign:"center", 
                        fontWeight:"bold", 
                                                
                    }} >
                        {titulo}
                    </Typography>
                </Box>
            <Box 
            sx ={{
                width:"100%",
                height:"100%",
                justifyContent:"center",
                display:"flex",
                alignItems:"center",                           
            }}>
                <Box 
                sx ={{
                    height:"70%",
                    alignItems:"center",
                    display:"flex",
                    flexDirection:"column",                   
                }}>
                    <Typography 
                    sx ={{ 
                        textAlign:"center", 
                        fontSize:12, 
                        color:"#62636C",
                        maxWidth:"150px",
                        width:"auto",       
                        
                    }}>
                        {descricao}
                    </Typography>

                    <Typography 
                    sx ={{ 
                        textAlign:"center", 
                        fontSize:15, 
                        color:"common.black",
                        m:1, 
                        fontWeight:"bold"}}> 
                        {dataHora}
                    </Typography>
                </Box>
            </Box>

        </Card>
    </Grid>
    );
}
export default CardHome;