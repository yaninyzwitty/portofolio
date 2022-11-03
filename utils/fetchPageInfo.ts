import { PageInfo } from "../typings";
export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.json();
    // type checking
    const pageInfo: PageInfo = data.pageInfo;
    // console.log("fetching", skills)
    return pageInfo;
}