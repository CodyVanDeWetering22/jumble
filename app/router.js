import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { Jumble } from "./models/Jumble.js";
import { JumbleController } from "./controllers/JumbleController.js";

export const router = [
  {
    path: '',
    controller: JumbleController,
    view: /*html*/` <h1 class="p-4 m-3">Jumble</h1>

    <div class="row  p-3">
    <div class="col-7 ">
        <div class="row">
        <div class="col-12 border border-2 color">
            <h1>Jumble holder</h1>
            <p>{this.body}</p>


        </div>

        <div class="col-12 border border-2 mt-3 color ">
            <p>text area</p>

            </div>

        </div>
    </div>
    <div class="col-4 border border-2 m-2 color" id="jumbleTemp">
        <button>Start</button>
        <p>{this.name}</p>`


  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: null
  }
]

