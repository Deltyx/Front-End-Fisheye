import Video from "../models/Video.js";
import Image from "../models/Image.js";

export default class MediaFactory 
{
    build(data, photographer) {
        if(data.video) {
            return new Video(data, photographer);
        } else {
            return new Image(data, photographer);
        }
    }
}