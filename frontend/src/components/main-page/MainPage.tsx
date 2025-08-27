import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function MainPage(){
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-84">
                <SearchBar />
            </div>
        </>
    )
}