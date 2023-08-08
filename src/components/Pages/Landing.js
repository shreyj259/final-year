import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: "url(src/bg.png)",
          height: "100vh",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="landingBg"
      >
        <Grid item>
          <Typography
            sx={{
              color: "#ffffff",
              fontFamily: "Montserrat",
              fontSize: "48px",
            }}
          >
            Hello Students <br />
            Need an earning source? Join Us
          </Typography>
        </Grid>
        <Grid item margin={"20px"}>
          <Grid container>
            <Grid item>
              <Link to="/signup">
              <Button
                variant="outlined"
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  fontFamily: "Thasadith",
                  textTransform: "none",
                  fontSize: "26px",
                  marginX: "20px",
                  borderRadius: "12px",
                  padding: "5px 25px",
                }}
              >
                {" "}
                Sign Up
              </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/">
              <Button
                variant="outlined"
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  fontFamily: "Thasadith",
                  textTransform: "none",
                  fontSize: "26px",
                  borderRadius: "12px",
                  padding: "5px 25px",
                }}
              >
                {" "}
                Sign in
              </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Grid container flexDirection={"row"} sx={{ width: "100%" }}>
          <Grid
            item
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginRight: 8,
              paddingTop: 10,
            }}
          >
            <Box sx={{ width: "300px" }}>
              <img style={{ width: "100%" }} alt="" src="./src/col-img.png" />
            </Box>
          </Grid>
          <Grid
            item
            flex={1}
            sx={{ display: "flex", alignItems: "center", paddingTop: 8 }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#1650D9",
                  fontSize: "32px",
                  fontWeight: 500,
                }}
              >
                What is Stulancer ?
              </Typography>
              <Typography sx={{ fontFamily: "Montserrat", fontSize: "22px" }}>
                Stulancer is a freelancing application that provides students
                with a platform to offer their services and connect with clients
                who require their skills. Stulancer is an excellent opportunity
                for students who want to develop their professional skills, gain
                practical work experience, and earn an income.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#1650D9",
            textAlign: "center",
            fontSize: "32px",
            fontWeight: 500,
            margin: "100px 0 60px",
          }}
        >
          Why Stulancer ?
        </Typography>
        <Grid container justifyContent={"space-evenly"} sx={{marginBottom:"120px"}} >
          <Grid item flex={1} >
            <Paper sx={{ width: "300px",padding:"30px 15px",textAlign:"center",borderRadius:"15px",marginX:"auto",height:"380px"}} elevation={2}>
              <Grid container flexDirection={"column"}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "200px" }}>
                    <img src="./src/card-1.png" />
                  </Box>
                </Grid>
                <Grid item>
                  <Typography sx={{fontFamily: "Montserrat",fontSize:"22px",margin:"20px 0 10px",fontWeight:500,color:"#3F3D56"}}>Less Competition</Typography>
                  <Typography sx={{fontFamily: "Montserrat",fontWeight:500,color:"#3F3D56"}}>
                    There is less competition on our platform which makes it
                    easier to get projects and earn.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item flex={1} >
          <Paper sx={{ width: "300px",padding:"30px 15px",textAlign:"center",borderRadius:"15px",marginX:"auto",height:"380px"}} elevation={2}>
              <Grid container flexDirection={"column"}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "190px" }}>
                    <img src="./src/card-2.png" />
                  </Box>
                </Grid>
                <Grid item>
                  <Typography sx={{fontFamily: "Montserrat",fontSize:"22px",margin:"20px 0 10px",fontWeight:500,color:"#3F3D56"}}>Free Bids</Typography>
                  <Typography sx={{fontFamily: "Montserrat",fontWeight:500,color:"#3F3D56"}}>
                  Unlike other platforms
We don’t charge to Bid.
Giving the students equal opportunity.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item flex={1} >
          <Paper sx={{ width: "300px",padding:"30px 15px",textAlign:"center",borderRadius:"15px",marginX:"auto",height:"380px"}} elevation={2}>
              <Grid container flexDirection={"column"}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "155px" }}>
                    <img src="./src/card-3.png" />
                  </Box>
                </Grid>
                <Grid item>
                  <Typography sx={{fontFamily: "Montserrat",fontSize:"22px",margin:"20px 0 10px",fontWeight:500,color:"#3F3D56"}}>Student Exclusive</Typography>
                  <Typography sx={{fontFamily: "Montserrat",fontWeight:500,color:"#3F3D56"}}>
                  Our platform is student
Exclusive, We need college
ID for verification to ensure
Student exclusivity
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{backgroundColor:"#3F3D56",justifyContent:"center",alignItems:"center",padding:"10px 0"}}>
        <Grid item>
            <Typography sx={{color:"#ffffff",fontFamily: "Montserrat",fontWeight:500,fontSize:"24px"}}>
            Made with ❤️ In India
            </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
