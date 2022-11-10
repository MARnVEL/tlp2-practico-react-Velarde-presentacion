import { type } from "../types/types"


const initialState = {
    isLogged: false,
}

// El use reducer sirve para centralizar los estados de forma global y porder compartir esto con todos los componentes. 
//De acuerdo al tipo de acción que recibe el reducer se decide que se va hacer.
//Si tengo que hacer alguna acción al backend es aquí donde tengo que definir esta acción.

export const authReducer = (initialState, action) => {
    //La accion es el tipo. Va action, porque no sólo recibe el tipo, sino que a veces recibe otra info adicional como ser el token.
    //El action se dispara justo en el momento en que obtengo los datos, esto se produce luego de que mi backend me haya respondido a una request hecha con el fetch o lo que sea.

    switch (action.type) {
        case type.login:
            return {
                ... action.payload,
                //*Lo que hace el operador spread es que oda la info que viene en el action.payload se queda como está, sólo modifico lo que yo especifico. En  este caso combio el isLogged a true.
                isLogged: true,
                //
                //En payload van los datos del usuarios
            }

        case type.logout:
            return {
                isLogged: false
            }

        // case GET_TASKS: (id_user) => {
        //     fetch()
        //         .then()
        // }

        default:
            initialState;

    }

};