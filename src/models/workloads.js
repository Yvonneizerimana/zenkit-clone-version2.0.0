import {model,Schema} from 'mongoose'

const workloadSchema = new Schema({
    name: {
        type: String,
        required:true,
        enum:{
            values:[1,2,3,4,5],
            message:"{VALUE} is not a valid workload"
        },
        min:1,
        max:5
    }
});

export default model("workloads",workloadSchema)
