import { generateId } from "../utils/GenerateId.js";

export class Jumble {
    constructor(data) {
        this.id = generateId
        this.name = data.name
        this.body = data.body
    }

    get JumbleTemplate() {
        return `
            
        
            <button>Start</button>
            <p>${this.name}</p>`
    }


    get ActiveJumbleTemplate() {
        return `< h1 class="p-4 m-3 color" > Jumble</h1 >

            <div class="row  p-3">
                <div class="col-7">
                    <div class="row">
                        <div class="col-12 border border-2">
                            <h1>${this.name}</h1>
                            <p>${this.body}</p>


                        </div>

                        <div class="col-12 border border-2 mt-3">
                            <p>text area</p>

                        </div>

                    </div>
                </div>
                `
    }
} 