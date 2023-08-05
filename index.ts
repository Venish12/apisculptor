#! /usr/bin/env node
import { init } from "./project-init";
import { bootstrap } from "./rest-api-generate";

const args = process.argv;
console.log(args)

if (args.length == 3) {
    args[2] = args[2].toLowerCase();
}

if (args.length == 3 && (args[2] == '--generate:api' || args[2] == '-g:api' || args[2] == 'generate:api')) {
    bootstrap()
}
else if (args.length == 3 && (args[2] == '--new' || args[2] == '-n' || args[2] == 'new')) {
    init()
}
else if (args[2] == '-help' || args[2] == '-h') {
    console.log(
        `apisculptor [spec..]

Create your crud api with apisculptor

Commands
  apisculptor --new | -n |new                                  To initialize your crud api stucture                   
  apisculptor --generate:api | -g:api | generate:api           To create Controllers and Service[make sure to privide models in your dictory /src/model folder ]
  apisculptor -help | -h                                       To identify commands and rules

Rules & Behavior
    - model names shold be in lowerCase
    - append .model.ts after your model name (e.x. [model-name].model.ts)
    -separate your word in your model name with only "-"(desh)
     `)
}
else {
    console.log(
        `apisculptor [spec..]

Create your crud api with apisculptor

Commands
  apisculptor --new | -n |new                                  To initialize your crud api stucture                   
  apisculptor --generate:api | -g:api | generate:api           To create Controllers and Service[make sure to privide models in your dictory /src/model folder ]
  apisculptor -help | -h                                       To identify commands and rules

Rules & Behavior
    - model names shold be in lowerCase
    - append .model.ts after your model name (e.x. [model-name].model.ts)
    -separate your word in your model name with only "-"(desh)
     `)

}





