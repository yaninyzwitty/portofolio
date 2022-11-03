import { Project } from "../typings";
export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.json();
    // type checking
    const projects: Project[] = data.projects;
    // console.log("fetching", skills)
    return projects;
}