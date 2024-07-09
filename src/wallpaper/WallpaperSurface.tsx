import { useEffect } from "react";
import { intervalToMicroseconds } from "../data/intervals";
import { CategoryTypes, SourceTypes } from "../gql/graphql";
import { pick } from "../utils";
import {
  refreshWallpaperfromStore,
  useWallpaper,
  useWallpaperDispatch,
  useWallpaperFetcher,
} from "./WallpaperContext";

export const WallpaperSurface = ({ tick }: {}) => {
  const trigger = useWallpaperFetcher();
  const triggerNoRefresh = useWallpaperFetcher(true);
  const wallpaper = useWallpaper();

  const wallpaperDispatch = useWallpaperDispatch();

  useEffect(() => {
    if (wallpaper.changeEvery === "new_tab") {
      refreshWallpaperfromStore(wallpaper, wallpaperDispatch);
      triggerNoRefresh({
        source: SourceTypes.Unsplash,
        query: wallpaper.wallpaperCategory,
        category: CategoryTypes.Collection,
      });
    }
  }, []);

  useEffect(() => {
    if (
      wallpaper.changeEvery === "never" ||
      wallpaper.wallpaperType !== "photography"
    )
      return;

    const nextWallpaperChangeAt = parseInt(
      localStorage.getItem("nextWallpaperChangeAt") || "0"
    );

    if (tick > nextWallpaperChangeAt) {
      localStorage.setItem(
        "nextWallpaperChangeAt",
        (tick + intervalToMicroseconds[wallpaper.changeEvery]).toString()
      );
      trigger({
        source: SourceTypes.Unsplash,
        query: wallpaper.wallpaperCategory,
        category: CategoryTypes.Collection,
      });
    }
  }, [tick]);

  const wallpaperStyle = pick(wallpaper, [
    "background",
    "backgroundImage",
    "blendMode",
    "color",
  ]);

  document.body.style.backgroundImage = `${wallpaper.backgroundImage} !important`;
  document.body.style.background = `${wallpaper.background} !important`;

  return (
    <div>
      {/* <div
        className="shade"
        style={{
          opacity: wallpaper.shade / 100,
        }}
      ></div>
      <div
        style={{
          opacity: wallpaper.tint / 100,
        }}
        className="tint"
      ></div> */}
      <div
        className="wallpaper-container"
        style={{
          filter: wallpaper.grayScale ? `grayscale(1)` : ``,
        }}
      >
        <div
          className="wallpaper-blur"
          style={{
            filter: wallpaper.blur ? `blur(0.25rem)` : ``,
          }}
        >
          <div className="wallpaper" style={wallpaperStyle}></div>
        </div>
      </div>
    </div>
  );
};
