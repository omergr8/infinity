import classes from "./IntroVideo.module.css";
import infinityVideo from "../../../../assets/common/infinityVideo.mp4";
const IntroVideo = () => {
  return (
    <div>
      <div className={classes.introMain}>
        <div className={classes.introContainer}>
          <video className={classes.videoPlayer} controls>
            <source src={infinityVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
export default IntroVideo;
