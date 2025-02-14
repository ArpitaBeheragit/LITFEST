import React from "react";
import Fullpage,{FullPageSections,FullpageSection,FullpageNavigation } from "@ap.cx/react-fullpage";

const FullPageScroll = () => {
   return(
    <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection>

            <Hero/>

            </FullpageSection>

            <FullpageSection>

            <CalcTimeDelta />

            </FullpageSection>

            <FullpageSection>
                          <About />
            </FullpageSection>
            <FullpageSection>
            <TeamCarousel />

            </FullpageSection>
            <FullpageSection>
            <Footer />
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
   );
}

export default FullPageScroll;