
export class Todo {


    static fromJson({tarea, id, completado, creado}){

        const tempObj = new Todo(tarea);

        tempObj.id = id;
        tempObj.completado = completado;
        tempObj.creado = creado;

        return tempObj;
    }

    constructor(tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }

}