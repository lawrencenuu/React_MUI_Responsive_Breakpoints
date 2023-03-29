import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Card } from "@mui/material";



const Content = () => {
  return (  
<Grid 
container
direction= "column"
justifyContent= "center"
alignItems= "center"
pt = {2}
>
    <Grid sx={{mb:2}}>
        <Box>
             <Typography variant="h4"  sx={{ mb: 2 }}>
                Welcom to My Website
            </Typography>

            <Typography variant="body1"  sx={{ mb: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. 
            </Typography>

            <Typography variant="body1"  sx={{ mb: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.        
                </Typography>
        </Box>
    </Grid>

    <Grid sx={{mb:2}}  >  
        <Grid container spacing={2}>
            <Grid item  sm={12} md={6} >
                <Card>
                     <CardMedia
                     sx={{ height: 140 }}
                     image="https://media.istockphoto.com/id/1263636227/vector/palm-tree-vector-island-coconut-cartoon-icon-palmtree-island-desert-isolated-tropical-icon.jpg?s=612x612&w=0&k=20&c=lR-E-pC6Tzw560uyr7pNZ5YVHVl_9HajPZja6QWfqks="
                     title="Palm Tree"
                    />

                        <CardContent>
                            <Typography  variant="h5" >
                            Palm Tree
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                         </CardContent>
                </Card>            
            </Grid>

            <Grid item  sm={6} md={6} sx={{mb:2}}>
                <Card>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/1263636227/vector/palm-tree-vector-island-coconut-cartoon-icon-palmtree-island-desert-isolated-tropical-icon.jpg?s=612x612&w=0&k=20&c=lR-E-pC6Tzw560uyr7pNZ5YVHVl_9HajPZja6QWfqks="
                    alt="Palm Tree"
                    />
                        <CardContent>
                            <Typography  variant="h5" >
                            Palm Tree
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </CardContent>
                </Card>
            </Grid> 

            <Grid  item  sm={6} md={6}>
                <Card >
                    <CardMedia
                    sx={{ height: 140 }}
                    image="https://media.istockphoto.com/id/1263636227/vector/palm-tree-vector-island-coconut-cartoon-icon-palmtree-island-desert-isolated-tropical-icon.jpg?s=612x612&w=0&k=20&c=lR-E-pC6Tzw560uyr7pNZ5YVHVl_9HajPZja6QWfqks="
                    title="Palm Tree"
                    />
                        <CardContent>
                            <Typography  variant="h5" >
                            Palm Tree
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
        </Grid>       
    </Grid>
</Grid>
   
  );
}
export default Content;