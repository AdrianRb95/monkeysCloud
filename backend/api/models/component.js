module.exports ={
    datastore: 'default',
    attributes:{
        //agregar atributo id
        // id:{
        //     type:'number',
        //     columnName:' idcomponent',
        //     columnType:'int',
        //     unique: true,
        //     autoIncrement: true,
        //     required: false
        // },
        name:{
            type:'string',
            columnName:'name',
            columnType:'varchar(25)',
            required:true,
        },
        description:{
            type:'string',
            columnName:'description',
            columnType:'varchar(50)',
            required:false
        },
        taskComponent:{
            model: 'tasks',
            unique:true
        }
    },
}