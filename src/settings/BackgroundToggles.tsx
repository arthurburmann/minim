import { mdiBlur, mdiSquareOpacity } from "@mdi/js";
import { IconButton } from "../components/IconButton";
import {
  useWallpaper,
  useWallpaperDispatch,
} from "../wallpaper/WallpaperContext";

export function BackgroundToggles() {
  const wallpaperDispatch = useWallpaperDispatch();
  const wallpaper = useWallpaper();

  return (
    <div className="background-toggles">
      <IconButton
        icon={mdiSquareOpacity}
        tooltip="Grayscale"
        on={wallpaper.grayScale}
        onClick={() => {
          wallpaperDispatch({
            type: "UPDATE_WALLPAPER",
            payload: {
              ...wallpaper,
              grayScale: !wallpaper.grayScale,
            },
          });
        }}
      />
      <IconButton
        icon={mdiBlur}
        tooltip="Blur"
        on={wallpaper.blur}
        onClick={() => {
          wallpaperDispatch({
            type: "UPDATE_WALLPAPER",
            payload: {
              ...wallpaper,
              blur: !wallpaper.blur,
            },
          });
        }}
      />
    </div>
  );
}
