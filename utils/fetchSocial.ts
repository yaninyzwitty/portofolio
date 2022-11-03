import { Social } from "../typings";
export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();
    // type checking
    const socials: Social[] = data.socials;
    // console.log("fetching", skills)
    return socials;
}