import { Job } from "./job.model";

export class User {
    id?: any;
    username?: string;
    email?: string;
    password?: string;
    jobs?: Job[];
    role?: [];
}
