import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function MainPage(){
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-16 mb-16 md:mt-56 md:mb-56 ">
                <SearchBar />
            </div>
        </>
    )
}