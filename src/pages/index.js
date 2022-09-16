import { Unity, useUnityContext } from "react-unity-webgl"
import css from '../styles/GamePage.module.scss'

export default function GamePage() {

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "unity-build/Build/google-chrome-dinosaur-webgl.loader.js",
    dataUrl: "unity-build/Build/google-chrome-dinosaur-webgl.data",
    frameworkUrl: "unity-build/Build/google-chrome-dinosaur-webgl.framework.js",
    codeUrl: "unity-build/Build/google-chrome-dinosaur-webgl.wasm",
    streamingAssetsUrl: "unity-build/StreamingAssets/UnityServicesProjectConfiguration.json",
  });

  return (
    <div className={css.GamePage}>
        {!isLoaded && (
          <div className={css.loading}>
            Loading Application... {Math.round(loadingProgression * 100)}%
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          // style={{ visibility: isLoaded ? "visible" : "hidden" }}
          style={{ width: 800, height: 600 }}
        />
    </div>
  )
}
