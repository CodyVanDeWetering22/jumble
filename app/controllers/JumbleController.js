import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";








function _drawJumbles() {
    const jumbles = AppState.jumbles
    let content = ''
    jumbles.forEach(jumble => content += jumble.JumbleTemplate)
    setHTML('jumbleTemp', content)
}

export class JumbleController {
    constructor() {
        _drawJumbles()
    }
}