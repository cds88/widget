import { BASE_SCREENSHOT_DIR } from "../../const"

export const getScreenshotPath =(screenshotName: string):string=>{
    return `${BASE_SCREENSHOT_DIR}/${screenshotName}`
}