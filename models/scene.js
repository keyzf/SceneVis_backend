const mongoose = require('mongoose');


const sceneSchema = new mongoose.Schema({
    SceneName:{
        type:String,
        required:true,
        trim:true        
    },
    Description:{
        type:String,
        required:true,
        trim:true,
    },
    CreateTime:{
        type:Date,
        required:false        
    },
    UpdateTime:{
        type:Date,
        required:false
    },
    BeginAudio:{
        type:String
    },
    Preparation:{
        TimeLimit:{
            type:Number,
            default:300,
            required:true
        },
        ScoreWeight:{
            type:Number,
            default:0,
            required:false
        },
        ActionsInvolved:[String],
        Tools:[String]
    },
    TaskFlow:[
        {
            ScoreWeight:Number,
            Order:String,
            OrderAudio:String,
            Report:String,
            WrongReport1:String,
            WrongReport2:String,
            TimeLimit:Number,
            Conditions:[
                {
                    Type:String,
                    ItemNo:String
                }
            ]
        }
    ]
});

const SceneModel = mongoose.model('scenes',sceneSchema);

module.exports=SceneModel;