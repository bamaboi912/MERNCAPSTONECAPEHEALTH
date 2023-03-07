import { Box, Typography } from "@mui/material";
import React from "react";
import troopers from "./images/pat.jpg"

const About = () => {
  return (
    <div>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h5">
          Cape HealthCare
        </Typography>
        
   <> <img src={troopers} alt="troopers"></img>
   <p>Cape Cod Healthcare is the leading provider of healthcare services for residents and visitors of Cape Cod. With nearly 500 physicians, 5,400 employees and 790 volunteers, Cape Cod Healthcare is comprised of two acute care hospitals, the Cape’s leading provider of homecare and hospice services (VNA), a skilled nursing and rehabilitation facility, an assisted living facility, six urgent care centers and numerous health programs. For more information, visit the Cape Cod Healthcare website at www.capecodhealth.org. For the latest in relevant and credible healthcare news, visit www.capecodhealthnews.com.</p>
   </>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h6">
          Established  &copy;2023
        </Typography>
      </Box>
    </div>
  );
};
export default About;