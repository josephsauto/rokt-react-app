import { GalleryProps, PexelPhoto } from "../interfaces";
import "../styles.css";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

//A single galleryItem with an item bar on top to indicate the
//photographer's name and info.
const GalleryItem = (pexelPhoto: PexelPhoto) => {
  return (
    <ImageListItem key={pexelPhoto.id} className="gallery-container">
      <img
        loading="lazy"
        srcSet={pexelPhoto.src.large}
        src={pexelPhoto.src.large}
        alt={pexelPhoto.alt}
      />
      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
        }}
        actionIcon={
          pexelPhoto.photographer && (
            <Tooltip title={pexelPhoto.photographer_url}>
              <a
                rel="noreferrer"
                href={pexelPhoto.photographer_url}
                target="_blank"
              >
                <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                  <InfoIcon />
                </IconButton>
              </a>
            </Tooltip>
          )
        }
        position="top"
        title={pexelPhoto.photographer}
      />
    </ImageListItem>
  );
};

//The Gallery container display the left and right navigation arrows, along
//along with the main picture gallery
//When the arrows are selected they either increment or decrement the page counter.

export default function Gallery(galleryProps: GalleryProps) {
  const leftArrow = galleryProps.pexelResponse?.prev_page;
  const rightArrow = galleryProps.pexelResponse?.next_page;

  //Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
  const loadingSkeletons = Array(10).fill(
    <Skeleton variant="rectangular" className="skeleton" height={200} />
  );

  //Displays the gallery if the content is loaded, otherwishe displays the
  //placeholders
  const imageList = (
    <ImageList
      gap={16}
      sx={{
        width: "90%",
        height: "100%",
        boxShadow: "0 0 0 1px rgb(23 23 23 / 10%)",
        padding: "20px"
      }}
      variant="quilted"
      cols={3}
      className="inner-gallery-container"
    >
      {!galleryProps.loading && galleryProps.pexelResponse
        ? galleryProps.pexelResponse.photos.map((photo) => {
            return <GalleryItem key={photo.id} {...photo} />;
          })
        : loadingSkeletons.map((skeleton, count) => {
            return (
              <ImageListItem key={count} className="gallery-container">
                {skeleton}
              </ImageListItem>
            );
          })}
    </ImageList>
  );

  return (
    <div className="gallery-container">
      {leftArrow ? (
        <div className="left-arrow-container">
          <ArrowBackIosNewIcon
            className="arrow-svg"
            onClick={() => galleryProps.paginate(-1)}
          />
        </div>
      ) : (
        <div className="left-arrow-container"></div>
      )}

      {imageList}

      {rightArrow && (
        <div className="right-arrow-container">
          <ArrowForwardIosIcon
            className="arrow-svg"
            onClick={() => galleryProps.paginate(1)}
          />
        </div>
      )}
    </div>
  );
}
