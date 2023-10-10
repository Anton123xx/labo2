import Repository from '../models/repository.js';
import Controller from './Controller.js';
import path from 'path';
import fs from 'fs';
import HttpContext from "../httpContext.js";
import calculator from '../models/calculator.js';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }

    help() {
        let helpPagePath = path.join(process.cwd(), wwwroot, 'API-Help-Pages/API-Maths-Help.html');
        this.HttpContext.response.HTML(fs.readFileSync(helpPagePath));
    }
    get() {
        let http = this.HttpContext;
        if (this.HttpContext.path.queryString == '?') {
            this.help();
            return;
        }

        let params = http.path.params;
        let newT = {};
        let calc = new calculator(params);
        calc.compute();
        newT.op = calc.op;
        newT.x = calc.x;
        newT.y = calc.y;
        newT.n = calc.n;
      
        if (calc.value != undefined) {
            newT.value = calc.value;
        } else { newT.error = calc.messageErreur; }
        http.response.JSON(newT);
    }
}






