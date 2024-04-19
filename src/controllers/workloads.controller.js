
import workloads from '../models/workloads.js';


export const addWorkload = async (req, res, next) => {
   
    try {
    
        const workload = await workloads.create(req.body);
        return res.status(201).json(workload);
    } catch (error) {
        next(error);
    }
};

export const getWorkload = async (req, res, next) => {
    try {
        const workload = await workloads.find({});
        if (tags) {
            return res.status(200).json({ 
                workload
            });
        }
    } catch (error) {
        next(error);
    }
}


