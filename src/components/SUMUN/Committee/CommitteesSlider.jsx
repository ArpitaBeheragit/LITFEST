import React, { useRef, useState } from "react";
import styles from "../../../styles/SUMUN/CommitteesSlider.module.css";
import { committees } from "../../../data/committee";
import CommitteeModal from "./CommitteeModal";

const CommitteesSlider = () => {
  const [smlBlock1Style, setSmlBlock1Style] = useState("bigBlock");
  const [smlBlock2Style, setSmlBlock2Style] = useState("smlBlock");
  const [smlBlock3Style, setSmlBlock3Style] = useState("smlBlock");
  const [smlBlock4Style, setSmlBlock4Style] = useState("smlBlock");
  const [open, setOpen] = useState(false);
  const [activeRecord,setActiveRecord] = useState(committees[0]);

  const isSmallDevice = window.innerWidth <= 886;

  const elementRef = useRef(null);
  const handleMouseEnter = (id) => {
    if(!isSmallDevice){

      if (id === 2) {
        setSmlBlock2Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
      if (id === 3) {
        setSmlBlock3Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
      if (id === 4) {
        setSmlBlock4Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
    }
  };
  const handleMouseLeave = (id) => {
    if(!isSmallDevice){

      if (id === 2) {
        setSmlBlock2Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
      if (id === 3) {
        setSmlBlock3Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
      if (id === 4) {
        setSmlBlock4Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
    }
  };
  const allClosed = !smlBlock1Style && !smlBlock2Style && !smlBlock3Style && !smlBlock4Style;
  if(allClosed==true){
    setSmlBlock1Style("bigBlock");
  }
  const handleClick = (id) => {
    setSmlBlock1Style("smlBlock");
    setSmlBlock2Style("smlBlock");
    setSmlBlock3Style("smlBlock");
    setSmlBlock4Style("smlBlock");
    if (id === 2) {
      setSmlBlock2Style("bigBlock");
    }
    else if(id === 1){
      setSmlBlock1Style("bigBlock");
    }
    else if (id === 3) {
      setSmlBlock3Style("bigBlock");
    }
    else if (id === 4) {
      setSmlBlock4Style("bigBlock");
    }
  };

  const handleOpen = (id) =>{
    setActiveRecord(committees[id]);
    setOpen(true);
  }

  return (
    <div className={styles.slider}>
        <CommitteeModal open={open} setOpen={setOpen} committee={activeRecord} />
      <div className={styles.blocks}>
        {/* big block */}
        <div
          className={
            smlBlock1Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          onClick={() => handleClick(1)}
        >
          <div
            className={
              smlBlock1Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          >
          </div>
          <div
            className={
              smlBlock1Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock1Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              {/* <Image
                src={smlBlock1Style == "smlBlock" ? div1Logo : blockLogo}
                fill
                alt="P"
              /> */}
              <img src="https://ik.imagekit.io/v9pfmptul/SITMUN/UNHRC.png?updatedAt=1707763073735" alt="unhrc" srcset="" style={{width:"74px"}}/>
            </div>
            <div
              className={
                smlBlock1Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock1Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
                UNHRC
              </div>
              <div
                className={
                  smlBlock1Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock1Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                 <p>"A right delayed is a right denied." </p>
                 <p>- Martin Luther King Jr.</p>
                </div>
                <div
                  className={
                    smlBlock1Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock1Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                    onClick={()=>handleOpen(0)}
                  >
                    <p>Know More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* small block */}
        <div
          onClick={() => handleClick(2)}
          className={
            smlBlock2Style == "smlBlock"
              ? `${styles.smlBlock} ${styles.smlBlock2}`
              : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={{
            background: smlBlock2Style === "smlBlock" ? "#313131" : "#313131",
          }}
        >
          <div
            className={
              smlBlock2Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock2Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock2Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              <img src="https://ik.imagekit.io/v9pfmptul/SITMUN/DISEC.png?updatedAt=1707763073712" alt="disec" srcset="" style={{width:"74px"}}/>
            </div>
            <div
              className={
                smlBlock2Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock2Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
                DISEC
              </div>
              <div
                className={
                  smlBlock2Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock2Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  <p>“Nuclear disarmament and non-proliferation are not utopian ideals. They are critical to global peace and security."</p>
                  <p>- Ban Ki-moon</p>  
                </div>
                <div
                  className={
                    smlBlock2Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock2Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                    onClick={()=>handleOpen(1)}
                  >
                    <p>Know More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleClick(3)}
          className={
            smlBlock3Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          style={{
            background: smlBlock3Style === "smlBlock" ? "#313131" : "#313131",
          }}
        >
          <div

            className={
              smlBlock3Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock3Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock3Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              <img src="https://ik.imagekit.io/v9pfmptul/SITMUN/SDG.png?updatedAt=1707763073701" alt="sdg" style={{width:"74px"}}/>
            </div>
            <div
              className={
                smlBlock3Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock3Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
                {smlBlock3Style == "smlBlock"?'SDG': 'SDG Summit'}
              </div>
              <div
                className={
                  smlBlock3Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock3Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  <p>“The future is not something we enter. The future is something we create.”</p>
                  <p>- Leonard I. Sweet</p> 
                </div>
                
                <div
                  className={
                    smlBlock3Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock3Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                    onClick={()=>handleOpen(2)}
                  >
                    <p>Know More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleClick(4)}
          className={
            smlBlock4Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
          style={{
            background: smlBlock4Style === "smlBlock" ? "#313131" : "#313131",
          }}
        >
          <div
            className={
              smlBlock4Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock4Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock4Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
             <img src="https://ik.imagekit.io/v9pfmptul/SITMUN/IP.png?updatedAt=1707763073636" alt="ip" style={{width:"74px"}}/>
              
            </div>
            <div
              className={
                smlBlock4Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock4Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
                IP
              </div>
              <div
                className={
                  smlBlock4Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock4Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  <p>"Our liberty depends on the freedom of the press, and that cannot be limited without being lost"</p>
                  <p> ~ Thomas Jefferson</p>
                </div>
                <div
                  className={
                    smlBlock4Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock4Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                    onClick={()=>handleOpen(3)}
                  >
                    <p>Know More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteesSlider;