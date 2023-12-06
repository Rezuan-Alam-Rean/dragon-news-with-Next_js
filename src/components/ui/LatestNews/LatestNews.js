import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  
  import topNews from "@/assets/Rectangle 8 (1).png";
  import topNews2 from "@/assets/Rectangle 9.png";
  import topNews3 from "@/assets/Rectangle 12.png";
  import topNews4 from "@/assets/Rectangle 13.png";
  import Image from "next/image";

  
  const LatestNews = async () => {
   
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                src={topNews}
                width={800}
                height={500}
                alt="top news"
              />
            </CardMedia>
            <CardContent>
              <p
                className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
              >
                
              </p>
              <Typography gutterBottom variant="h5" component="div">
               
              </Typography>
              <Typography gutterBottom className="my-3">
                By rean
              </Typography>
  
              <Typography variant="body2" color="text.secondary">
                rrrrrr
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  
        
          
          <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
            <Grid  item xs={6}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={topNews2}
                      width={800}
                      height={300}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <p
                      className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                    >
                      
                    </p>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom className="my-3">
                      By Tanmoy Parvez - Mar 18 2023
                    </Typography>
  
                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout........
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid  item xs={6}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={topNews2}
                      width={800}
                      height={300}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <p
                      className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                    >
                      
                    </p>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom className="my-3">
                      By Tanmoy Parvez - Mar 18 2023
                    </Typography>
  
                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout........
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid  item xs={6}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={topNews3}
                      width={800}
                      height={300}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <p
                      className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                    >
                      
                    </p>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom className="my-3">
                      By Tanmoy Parvez - Mar 18 2023
                    </Typography>
  
                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout........
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid  item xs={6}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      src={topNews4}
                      width={800}
                      height={300}
                      alt="top news"
                    />
                  </CardMedia>
                  <CardContent>
                    <p
                      className="
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        "
                    >
                      
                    </p>
                    <Typography gutterBottom></Typography>
                    <Typography gutterBottom className="my-3">
                      By Tanmoy Parvez - Mar 18 2023
                    </Typography>
  
                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout........
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          
        </Grid>
       
        
       
      </Box>
    );
  };
  
  export default LatestNews;