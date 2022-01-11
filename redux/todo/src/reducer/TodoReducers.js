const initialData = {
    list: []
};

export const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const { id, title, description, status } = action.payload;
            // console.log(id,title,description,status)

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        title: title,
                        description:description,
                        status:status
                    }
                ]
            }

        case "DELETE-TODO":

            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state, list: newList
            }
        
        case "TOGGLE-STATUS":
            const newListt=state.list.map((el)=>{
                if(el.id==action.id){
                    {
                        return {id:el.id,title:el.title,description:el.description,status:"Completed"}
                    }
                }else{
                    return el
                }
            });
            console.log(newListt)
            return {
                ...state,list:newListt
            }

        default:
            return state
    }

}